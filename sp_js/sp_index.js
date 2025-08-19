const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
c.fillRect(0, 0, canvas.width, canvas.height)
canvas.width = window.innerWidth/1.3
var screen_max = 1600
var screen_min = 700
if (canvas.width > screen_max){
    canvas.width = screen_max + 1
}
if (canvas.width < screen_min){
    canvas.width = screen_min + 1
}
const canvas_element = document.getElementById("canvas_id");
var canvas_coords = getCanvasTopLeft("canvas_id");
canvas.height = (canvas.width/16)*9
var default_colour = '#000000'
var default_fill_colour = '#ffffff'
var background_colour = '#A0A0A0'
var lght_background_colour = '#D3D3D3'
var default_edge_width = 2
var mouseposc
var screencoords
var screen_offsetx = canvas_coords.x - 8
var screen_offsety = (canvas_coords.y - 8)
const graph = new Graph({})
let scale_value = 1
let scale_factor = 1
let transform_value = 0
var x_difference = 0
var y_difference = 0
var screen_coordsx = 1
var screen_coordsy = 1
var controlPressed = false
var leftClickPressed = false
let isPanning = false;
let dragStart = { x: 0, y: 0 }
let panStart = { x: 0, y: 0 }
let mouseoffset = {x: 8, y: 8}
let first_link_node = -1
let second_link_node = -1
let ready_for_second = false
let hovering_node = -1
let draw_potential_line = false
let draw_potential_line_coords = {x: 0, y:0}
let moving_node = -1
let tolerance = 15 //tolerance for distance in deleting edges
var editing_node = -1
var editing_edge = -1
var shortest_path = []
var using_algorithm = "Dijkstra's Algorithm"
var run_pathfinding = false
var showHeuristic = false
var heuristicMode = "Based on distance to destination";
var enumerationType
var node_preset = {}
var loading_file 
var loadedImage = null;
var image_data = {data: -1, x: -1, y: -1}
var nodes_to_generate = 1

// window resizing

window.addEventListener("resize", () => {
    canvas_coords = getCanvasTopLeft("canvas_id");
    screen_offsetx = (canvas_coords.x - 8)
    screen_offsety = (canvas_coords.y - 8)
    canvas.width = window.innerWidth/1.3
    if (canvas.width > screen_max){
        canvas.width = screen_max
    }
    if (canvas.width < screen_min){
    canvas.width = screen_min
}
    canvas.height = (canvas.width/16)*9
});


//scrolling
canvas.addEventListener("wheel", (event) => {
  if (isMouseOverCanvas(event, canvas_element)) {
    event.preventDefault(); // stop page scroll ONLY when over canvas
    // zoom logic here
  }
}, { passive: false });

window.addEventListener("scroll", () => {
        screen_offsety = (canvas_coords.y - 8) - window.scrollY
});

//settings values

//shortest paht colour
document.getElementById("sp_colour_disp").textContent = graph.shortest_path_colour
document.querySelector('#sp_set input[type="color"]').value = graph.shortest_path_colour.slice(0, 7);
//colour
document.getElementById("default_border_colour_disp").textContent = graph.default_colour
document.querySelector('#db_set input[type="color"]').value = graph.default_colour.slice(0, 7);
// fill colour
document.getElementById("default_fill_colour_disp").textContent = graph.default_fill_colour
document.querySelector('#fc_set input[type="color"]').value = graph.default_fill_colour.slice(0, 7);
// edge colour
document.getElementById("default_edge_colour_disp").textContent = graph.default_edge_colour
document.querySelector('#ec_set input[type="color"]').value = graph.default_edge_colour.slice(0, 7);
// fg colour
document.getElementById("fgc_colour_disp").textContent = background_colour
document.querySelector('#fgc input[type="color"]').value = background_colour.slice(0, 7);
// bg colour
document.getElementById("bgc_colour_disp").textContent = lght_background_colour
document.querySelector('#bgc input[type="color"]').value = lght_background_colour.slice(0, 7);
//node size reset
document.getElementById("dradius").value = graph.default_radius
document.getElementById("dradiusValue").textContent = 30;


  document.getElementById("w_reset").addEventListener("click", (e) => {
    image_data = {data: -1, x: -1, y: -1}
    background_colour = '#A0A0A0'
    lght_background_colour = '#D3D3D3'
  })

  // Apply button: draw the image centered at natural size
  document.getElementById("image_submit-file").addEventListener("click", (e) => {
    e.preventDefault();
    if (!loadedImage) {
      alert("No image loaded yet!");
      return;
    }
    // Compute position for centering
    const image_x = (canvas.width - loadedImage.width) / 2;
    const image_y = (canvas.height - loadedImage.height) / 2;

    // Draw at natural size, centered
    image_data.data = loadedImage
    image_data.x = image_x
    image_data.y = image_y
  });

document.getElementById("myImgFile").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const img = new Image();
      img.onload = () => {
        loadedImage = img;
        document.getElementById("fileOutputImg").textContent =
          `Loaded image: ${file.name} (${file.size} bytes)`;
      };
      img.src = evt.target.result; // base64 data URL
    };
    reader.readAsDataURL(file);
  });


document.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const canvasX = event.clientX - rect.left;
    const canvasY = event.clientY - rect.top;

    const worldX = (canvasX - x_difference) / scale_factor;
    const worldY = (canvasY - y_difference) / scale_factor;

    mouseposc = { x: worldX, y: worldY };

    if (isPanning) {
        const dx = event.clientX - dragStart.x;
        const dy = event.clientY - dragStart.y;
        x_difference = panStart.x + dx;
        y_difference = panStart.y + dy;
    }

    const hover_coords = { x: worldX, y: worldY };
    hovering_node = returnNodeAtCoords(graph.seeGraphContents(), hover_coords);

    if (ready_for_second) {
        draw_potential_line = true;
        draw_potential_line_coords = { x: worldX, y: worldY };
    } else {
        draw_potential_line = false;
    }

    if (moving_node !== -1) {
        graph.moveNode(moving_node, { x: worldX+screen_offsetx, y: worldY +screen_offsety});
    }
});

document.addEventListener("click", (event) => {
    highlightProgramState();

    const s_el = document.getElementById("settings_div");
    const s_el_width = window.getComputedStyle(s_el).width;

    const rect = canvas.getBoundingClientRect();
    const canvasX = event.clientX - rect.left;
    const canvasY = event.clientY - rect.top;

    const worldX = (canvasX - x_difference) / scale_factor;
    const worldY = (canvasY - y_difference) / scale_factor;

    if (not_hovering_over_div()) {
        if (s_el_width === "280px") {
            closeSettings();
        }
    }

    if (canvasX >= 0 && canvasX <= canvas.width && canvasY >= 0 && canvasY <= canvas.height) {
        // ADD NODE
        if (not_hovering_over_div() && programState === "add" && s_el_width === "0px") {
            graph.addNode({ coords: { x: worldX, y: worldY } });
        }

        const clicked_node = returnNodeAtCoords(graph.seeGraphContents(), { x: worldX, y: worldY });

        // LINK NODES
        if (programState === "link_directional" || programState === "link_nondirectional") {
            if (clicked_node !== -1) {
                if (!ready_for_second) {
                    first_link_node = clicked_node;
                    ready_for_second = true;
                } else {
                    second_link_node = clicked_node;
                    ready_for_second = false;
                    graph.connectNodes(first_link_node, second_link_node, programState);
                    first_link_node = -1;
                    second_link_node = -1;
                }
            }
        }

        // EDIT NODE/EDGE
        if (programState === "edit" && not_hovering_over_div()) {
            if (clicked_node !== -1) {
                editing_node = clicked_node;
                openEditMenu(graph.nodeInfo(editing_node));
            } else {
                const edge = detectEdge(graph.seeGraphContents(), { x: worldX, y: worldY }, tolerance);
                if (edge !== -1) {
                    editing_edge = edge;
                    openEdgeEditMenu(edge.id1, edge.id2, graph.getEdgeWeight(edge.id1, edge.id2));
                }else{
                                    hideEdgeEditMenu()
                hideEditMenu()
                }
            }
        }

        // DELETE NODE/EDGE
        if (programState === "delete" && s_el_width === "0px") {
            if (clicked_node !== -1) {
                if (!(graph.seeGraphContents()[clicked_node][0].node_type === "Destination Node") || !run_pathfinding) {
                    graph.deleteNode(clicked_node);
                }
            } else {
                const edge = detectEdge(graph.seeGraphContents(), { x: worldX, y: worldY }, tolerance);
                if (edge !== -1) {
                    graph.deleteEdge(edge.id1, edge.id2);
                }
            }
        }
    }
});


document.addEventListener("mousedown", (event) => {
    const rect = canvas.getBoundingClientRect();
    const canvasX = event.clientX - rect.left;
    const canvasY = event.clientY - rect.top;

    const worldX = (canvasX - x_difference) / scale_factor;
    const worldY = (canvasY - y_difference) / scale_factor;

    if (event.button === 0 && programState === "traverse" && not_hovering_over_div() && isMouseOverCanvas(event, canvas)) {
        leftClickPressed = true;
        isPanning = true;
        dragStart.x = event.clientX;
        dragStart.y = event.clientY;
        panStart.x = x_difference;
        panStart.y = y_difference;
    }

    if (event.button === 0 && programState === "move") {
        moving_node = returnNodeAtCoords(graph.seeGraphContents(), { x: worldX, y: worldY });
    }
});

window.addEventListener('mouseup', (event) => {
    if (event.button === 0) {
        leftClickPressed = false;
        isPanning = false;
        if (programState === "move") {
            moving_node = -1;
        }
    }
});


function animate() {
    if (document.getElementById('bottom_box').style.display === "flex"){
        if (programState !== "edit"){
hideEdgeEditMenu()
                hideEditMenu()
        }
    }
    requestAnimationFrame(animate);
    if (run_pathfinding){
        let g_info = run_chosen_algorithm(using_algorithm)
        show_bottom_message(g_info)
    }else{
        graph.set_shortest_path()
    }

    // Reset transform and clear screen
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.clearRect(0, 0, canvas.width, canvas.height);

    // Apply pan and zoom
    c.setTransform(scale_factor, 0, 0, scale_factor, x_difference, y_difference);

    // Draw background (now under transform)
    c.fillStyle = lght_background_colour;
    c.fillRect(-(x_difference/scale_factor),-(y_difference/scale_factor), (canvas.width / scale_factor), (canvas.height/scale_factor)); 
    c.fillStyle = background_colour;
    c.fillRect(0, 0, canvas.width, canvas.height);
    if (image_data.data !== -1 && image_data.x !== -1){
        c.drawImage(image_data.data, image_data.x, image_data.y);
    }

    //draw linking line
    if (draw_potential_line && first_link_node !== -1){
            if (programState === "link_nondirectional"){                
                draw_line({c: c,
                    start_coords: {x: graph.seeGraphContents()[first_link_node][0].coords.x,
                                y: graph.seeGraphContents()[first_link_node][0].coords.y},
                    end_coords: {x: draw_potential_line_coords.x,
                                y: draw_potential_line_coords.y},
                    colour: graph.default_edge_colour,
                    width: 3
            })
            }else{
                draw_arrow_line({c: c,
                    start_coords: {x: graph.seeGraphContents()[first_link_node][0].coords.x,
                                y: graph.seeGraphContents()[first_link_node][0].coords.y},
                    end_coords: {x: draw_potential_line_coords.x,
                                y: draw_potential_line_coords.y},
                    colour: graph.default_edge_colour,
                    width: 3
            })   
            }
    }

    // Draw the graph
    graph.drawGraph(c,first_link_node,second_link_node,hovering_node,programState)
}


animate()


window.addEventListener('keydown', (event) => {
    if (event.key === 'w'){
        console.log(graph.seeGraphContents())
    }
    if (event.key === 's'){

        //graph.setEdgeWeight(1,3,30)
        //console.log(graph.getEdgeWeight(1,3))
        console.log(isMouseOverCanvas(event,document.getElementById("canvas_id")))
    }

    if (event.key === 'Control'){
        controlPressed = true
    }
    
})

window.addEventListener('keyup', (event) => {
    //c.translate(300,300)
    if (event.key === 'Control'){
        controlPressed = false
    }
})

canvas.addEventListener("wheel", (event) => {
    if (programState === "traverse" && not_hovering_over_div() && isMouseOverCanvas(event, canvas)) {
        event.preventDefault();

        const rect = canvas.getBoundingClientRect();
        const canvasX = event.clientX - rect.left;
        const canvasY = event.clientY - rect.top;

        const worldX = (canvasX - x_difference) / scale_factor;
        const worldY = (canvasY - y_difference) / scale_factor;

        const zoomIntensity = 0.2;
        const zoom = event.deltaY < 0 ? 1 + zoomIntensity : 1 - zoomIntensity;
        scale_factor *= zoom;

        const newScreenX = worldX * scale_factor + x_difference;
        const newScreenY = worldY * scale_factor + y_difference;

        x_difference += canvasX - newScreenX;
        y_difference += canvasY - newScreenY;
    }
}, { passive: false });

document.getElementById('connect_node_button').addEventListener('click', function() {
    const menu = document.getElementById('connect_node_dropdown');
    if (menu.style.display === 'none'){
        menu.style.display = 'flex'
    }else{
       menu.style.display = 'none' 
    }
})

document.getElementById('connect_node_button').addEventListener('click', function() {
    const menu = document.getElementById('connect_node_dropdown');
    if (menu.style.display === 'none'){
        menu.style.display = 'flex'
    }else{
       menu.style.display = 'none' 
    }
})

window.addEventListener("load", function() {
    if (window.innerHeight > window.innerWidth) {
        alert("Please change orientation to landscape for the best experience");
    }
});

//enumeration

document.querySelectorAll("#enumeration-types input[name='enumeration_radio']").forEach(radio => {
    radio.addEventListener("change", function(e) {
        if (e.target.checked) {
            // get the label text (ignores input + span children)
            let labelText = e.target.parentElement.childNodes[0].textContent.trim();

            // grab first non-whitespace character
            enumerationType = labelText.charAt(0);
            graph.setDefaults({nenumeration_type: enumerationType.toString()})
        }
    });
});

// initialize with whichever is pre-checked
let checked = document.querySelector("#enumeration-types input[name='enumeration_radio']:checked");
if (checked) {
    let labelText = checked.parentElement.childNodes[0].textContent.trim();
    enumerationType = labelText.charAt(0);
    graph.setDefaults({nenumeration_type: enumerationType.toString()})
}