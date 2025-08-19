const slider = document.getElementById("myRange");
const zoomValue = document.getElementById("zoomValue");

// Initialize on load
zoomValue.textContent = slider.value;
let lastSliderValue = 100;
// Update when slider changes
slider.oninput = function () {
    const currentSliderValue = parseFloat(this.value);
    zoomValue.textContent = currentSliderValue;

    const zoomAmount = (currentSliderValue - lastSliderValue) / 100; // normalized change
    lastSliderValue = currentSliderValue;

    // Middle of the screen
    const x_middle = canvas.width / 2;
    const y_middle = canvas.height / 2;

    // Convert to world coordinates (before zoom)
    const worldX = (x_middle - x_difference) / scale_factor;
    const worldY = (y_middle - y_difference) / scale_factor;

    // Apply zoom
    const zoom = 1 + zoomAmount;
    scale_factor *= zoom;

    // Recalculate screen position of world point
    const newScreenX = worldX * scale_factor + x_difference;
    const newScreenY = worldY * scale_factor + y_difference;

    // Adjust pan to keep zoom centered
    x_difference += x_middle - newScreenX;
    y_difference += y_middle - newScreenY;
}

//connect nodes
document.getElementById('connect_node_button').addEventListener('click', function() {
    const menu = document.getElementById('connect_node_dropdown');
    if (menu.style.display === 'none'){
        menu.style.display = 'flex'
        document.getElementById('connect_node_button').textContent = "Connect Nodes ▼"
    }else{
       menu.style.display = 'none' 
       document.getElementById('connect_node_button').textContent = "Connect Nodes ▽"
    }
})

document.querySelectorAll(".connect-dropdown-button").forEach(button => {
    button.addEventListener('click', function(){
        document.getElementById('connect_node_dropdown').style.display = 'none'
        document.getElementById('connect_node_button').textContent = "Connect Nodes ▽"
    })
})

//file upload
document.getElementById("myFile").addEventListener("change", function() {
    let file = this.files[0];
    if (file) {
        document.getElementById("fileOutput").textContent = file.name;
    }
});
document.getElementById("myImgFile").addEventListener("change", function() {
    let file = this.files[0];
    if (file) {
        document.getElementById("fileOutputImg").textContent = file.name;
    }
});

//view
document.getElementById('view_button').addEventListener('click', function() {
    const menu = document.getElementById('view_dropdown');
    if (menu.style.display === 'none'){
        menu.style.display = 'flex'
        document.getElementById('view_button').textContent = "View ▼"
    }else{
       menu.style.display = 'none' 
       document.getElementById('view_button').textContent = "View ▽"
    }
})


document.getElementById("reset_zoom").addEventListener('click', function(){
        document.getElementById('view_dropdown').style.display = 'none'
        slider.value = 100
        zoomValue.textContent = 100
        document.getElementById('view_button').textContent = "View ▽"
        x_difference = 0
        y_difference = 0
        if (scale_factor < 1){
            difference = 1-scale_factor
            var scaleback_num = (difference/scale_factor) + 1
            c.scale(scaleback_num,scaleback_num)
            scale_factor = scale_factor * scaleback_num
        }else if (scale_factor > 1){
            difference = scale_factor-1
            var scaleback_num = 1 - (difference/scale_factor)
            c.scale(scaleback_num,scaleback_num)
            scale_factor = scale_factor * scaleback_num
        }
    })


//detect if over button divs
//top
const topdiv = document.getElementById('top_row_container');
var topdivcollide = false
topdiv.addEventListener('mouseenter', () => {
    topdivcollide = true
});
topdiv.addEventListener('mouseleave', () => {
    topdivcollide = false
});

//drop down connect
const connectdiv = document.getElementById('connect_node_dropdown');
var connectdivcollide = false
connectdiv.addEventListener('mouseenter', () => {
    connectdivcollide = true
});
connectdiv.addEventListener('mouseleave', () => {
    connectdivcollide = false
});

//drop down view
const viewdiv = document.getElementById('view_dropdown');
var viewdivcollide = false
viewdiv.addEventListener('mouseenter', () => {
    viewdivcollide = true
});
viewdiv.addEventListener('mouseleave', () => {
    viewdivcollide = false
});
//edit box view
const editdiv = document.getElementById('bottom_box');
var editdivcollide = false
editdiv.addEventListener('mouseenter', () => {
    editdivcollide = true
});
editdiv.addEventListener('mouseleave', () => {
    editdivcollide = false
});
//settings box view
const settings_div = document.getElementById('settings_div');
var settings_divcollide = false
settings_div.addEventListener('mouseenter', () => {
    settings_divcollide = true
});
settings_div.addEventListener('mouseleave', () => {
    settings_divcollide = false
});
//edge edit div
const edge_div = document.getElementById('edge_box');
var edge_divcollide = false
edge_div.addEventListener('mouseenter', () => {
    edge_divcollide = true
});
edge_div.addEventListener('mouseleave', () => {
    edge_divcollide = false
});


    //program states
var programState = "traverse"

document.getElementById('traverse').addEventListener('click', function(){
    programState = "traverse"
})
document.getElementById('add').addEventListener('click', function(){
    programState = "add"
})
document.getElementById('edit').addEventListener('click', function(){
    edit(programState)
})
document.getElementById('delete').addEventListener('click', function(){
    programState = "delete"
})
document.getElementById('link_directional').addEventListener('click', function(){
    programState = "link_directional"
})
document.getElementById('link_nondirectional').addEventListener('click', function(){
    programState = "link_nondirectional"
})
document.getElementById('move').addEventListener('click', function(){
    programState = "move"
})
document.getElementById('play').addEventListener('click', function(){
    document.getElementById("pause").style.display = "flex"
    document.getElementById("play").style.display = "none"
    run_pathfinding = false
    hide_bottom_message()
    
})
document.getElementById('pause').addEventListener('click', function(){
    let ready = graph.ready_to_run()
    if (!ready.go){
        show_bottom_message(ready.reason,true)
    }else{
        document.getElementById("pause").style.display = "none"
        document.getElementById("play").style.display = "flex"
        run_pathfinding = true
    }
    

})

//edit menu

document.getElementById("edit_name").addEventListener("input", function(event) {
    let value = event.target.value;  
    if (value === ""){
        value = graph.seeGraphContents()[editing_node][0].id
    }
    graph.setNode(editing_node,{node_text: value})
    document.getElementById("node_name").textContent = value;
});

// Range slider for radius
document.getElementById("radius").addEventListener("input", function(event) {
    let value = event.target.value;   // get the current slider position
    graph.setNode(editing_node,{radius: value})
    document.getElementById("radiusValue").textContent = value;
});
document.getElementById('reset_button').addEventListener('click', function(){
    graph.setNode(editing_node,{radius: graph.default_radius})
    document.getElementById("radiusValue").textContent = graph.default_radius;
    document.getElementById("radius").value = graph.default_radius;
})

// Color picker for border colour
document.querySelector('#inner_colour input[type="color"]').addEventListener("input", function(event) {
    let value = event.target.value;   // get the selected color (hex)
    graph.setNode(editing_node,{r_colour: value})
    document.getElementById("colour_disp").textContent = value;
});

// Dropdown for node type
document.querySelector('.edit_element select').addEventListener("input", function(event) {
    let value = event.target.value;   // get the selected option
    if (!run_pathfinding){
        graph.setNode(editing_node,{node_type: value})
    }else{
        document.querySelector('.edit_element select').value = "Normal Node"
    }
});

document.getElementById("edit_weight").addEventListener("input", function(event) {
    let value = event.target.value;  
    if (value === "" || value < 0 || value > 99999){
        value = 0
        document.getElementById("edit_weight").value = 0;
        document.getElementById('edge_confirmation_message').style.display = "flex"
        document.getElementById('edge_confirmation_message').innerHTML = "Invalid Weight";
        graph.setEdgeWeight(editing_edge.id1,editing_edge.id2,0)
    }else{
        document.getElementById('edge_confirmation_message').style.display = "none"
        graph.setEdgeWeight(editing_edge.id1,editing_edge.id2,value)
    }
});
document.getElementById("node_heuristic").addEventListener("input", function(event) {
    let value = event.target.value;  
    if (value === "" || value < 0 || value > 99999999999){
        value = 0
        document.getElementById("node_heuristic").value = 0;
        graph.setNode(editing_node,{heuristic_value: 0})
    }else{
        graph.setNode(editing_node,{heuristic_value: value})
    }
});

document.getElementById('reset_weight').addEventListener('click', function(){
    document.getElementById("edit_weight").value = 0;
    graph.setEdgeWeight(editing_edge.id1,editing_edge.id2,0)
    document.getElementById('edge_confirmation_message').style.display = "flex"
    document.getElementById('edge_confirmation_message').innerHTML = "Weight reset to 0";
})

document.getElementById('random_weight').addEventListener('click', function(){
    let rand_value = Math.floor(Math.random() * graph.upper_rand) + graph.lower_rand;
    document.getElementById("edit_weight").value = rand_value;
    graph.setEdgeWeight(editing_edge.id1,editing_edge.id2,rand_value)
    document.getElementById('edge_confirmation_message').style.display = "flex"
    document.getElementById('edge_confirmation_message').innerHTML = "Weight reset to "+rand_value;
})

document.getElementById('ss').addEventListener('click', function() {
    node_preset = {
        te: document.getElementById("node_name").textContent,
        r: document.getElementById("radius").value,
        c: document.querySelector('#inner_colour input[type="color"]').value,
        ty: document.querySelector('.edit_element select').value,
        h: document.getElementById("node_heuristic").value
    }
})
document.getElementById('ls').addEventListener('click', function() {
    graph.setNode(editing_node,{
        heuristic_value: node_preset.h,
        node_text: node_preset.te,
        radius: node_preset.r,
        r_colour: node_preset.c,
        node_type: node_preset.ty
    })
    openEditMenu(graph.seeGraphContents()[editing_node])
})

//settings

document.getElementById('settings').addEventListener('click', function(){
    openSettings()
})

document.querySelector('.settings_dropdown').addEventListener("input", function(event) {
    using_algorithm = event.target.value;
});
  document.getElementById("heuristicToggle").addEventListener("change", function (e) {
    showHeuristic = e.target.checked;
  })

  
document.querySelectorAll("input[name='heuristic_radio']").forEach(radio => {
    radio.addEventListener("change", function(e) {
        if (e.target.checked) {
            heuristicMode = e.target.parentElement.textContent.trim();
        }
    });
});

document.getElementById('style_reset').addEventListener('click', function(){
    //sp
    graph.setDefaults({shortest_path_colour: "#00a318ff"})
    document.getElementById("sp_colour_disp").textContent = "#00a318ff";
    //border
    graph.setDefaults({default_colour: '#000000'})
    document.getElementById("default_border_colour_disp").textContent = '#000000';
    //fill
    graph.setDefaults({default_fill_colour: '#ffffff'})
    document.getElementById("default_fill_colour_disp").textContent = '#ffffff';
    //edge
    graph.setDefaults({default_edge_colour: '#000000'})
    document.getElementById("default_edge_colour_disp").textContent = '#000000';
    //radius
    graph.setDefaults({default_radius: 30})
    document.getElementById("dradiusValue").textContent = 30;
    document.getElementById("dradius").value = 30;

})
document.querySelector('#sp_set input[type="color"]').addEventListener("input", function(event) {
    let value = event.target.value;   // get the selected color (hex)
    graph.setDefaults({shortest_path_colour: value})
    document.getElementById("sp_colour_disp").textContent = value;
});
document.querySelector('#db_set input[type="color"]').addEventListener("input", function(event) {
    let value = event.target.value;   // get the selected color (hex)
    graph.setDefaults({default_colour: value})
    document.getElementById("default_border_colour_disp").textContent = value;
});
document.querySelector('#fc_set input[type="color"]').addEventListener("input", function(event) {
    let value = event.target.value;   // get the selected color (hex)
    graph.setDefaults({default_fill_colour: value})
    document.getElementById("default_fill_colour_disp").textContent = value;
});
document.querySelector('#ec_set input[type="color"]').addEventListener("input", function(event) {
    let value = event.target.value;   // get the selected color (hex)
    graph.setDefaults({default_edge_colour: value})
    document.getElementById("default_edge_colour_disp").textContent = value;
});

document.getElementById("dradius").addEventListener("input", function(event) {
    let value = event.target.value;   // get the current slider position
    graph.setDefaults({default_radius: value})
    document.getElementById("dradiusValue").textContent = value;
});
document.getElementById('dreset').addEventListener('click', function(){
    graph.setDefaults({default_radius: 30})
    document.getElementById("dradiusValue").textContent = 30;
    document.getElementById("dradius").value = 30;
})

//presets
document.getElementById('preset_small').addEventListener('click', function() {
    graph.setGraph(returnPresetTemplate('preset_small'))
})
document.getElementById('preset_medium').addEventListener('click', function() {
    graph.setGraph(returnPresetTemplate('preset_medium'))
})
document.getElementById('preset_large').addEventListener('click', function() {
    graph.setGraph(returnPresetTemplate('preset_large'))
})
document.getElementById('star_demo').addEventListener('click', function() {
    graph.setGraph(returnPresetTemplate('star_demo'))
})
document.getElementById('preset_massive').addEventListener('click', function() {
    graph.setGraph(returnPresetTemplate('preset_massive'))
})
document.getElementById('world').addEventListener('click', function() {
    graph.setGraph(returnPresetTemplate('world'))
})
document.getElementById('uk').addEventListener('click', function() {
    graph.setGraph(returnPresetTemplate('uk'))
})


//graph settings

document.getElementById('g_reset').addEventListener('click', function() {
    graph.set_shortest_path([])
    graph.setGraph({})
    image_data = {data: -1, x: -1, y: -1}
    if (run_pathfinding){
        document.getElementById("pause").style.display = "flex"
        document.getElementById("play").style.display = "none"
        run_pathfinding = false
        hide_bottom_message()
    }
})

//wallpaper
document.querySelector('#fgc input[type="color"]').addEventListener("input", function(event) {
    let value = event.target.value;   // get the selected color (hex)
    background_colour = value
    document.getElementById("fgc_colour_disp").textContent = value;
    image_data = {data: -1, x: -1, y: -1}
})
document.querySelector('#bgc input[type="color"]').addEventListener("input", function(event) {
    let value = event.target.value;   // get the selected color (hex)
    lght_background_colour = value
    document.getElementById("bgc_colour_disp").textContent = value;
    image_data = {data: -1, x: -1, y: -1}
})

document.getElementById("save_graph").addEventListener("click", () => {
      // Convert object to JSON string
      const jsonString = JSON.stringify(graph.seeGraphContents(), null, 2); // `null, 2` adds indentation

      // Create a Blob from the string
      const blob = new Blob([jsonString], { type: "application/json" });

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "graph_data.json"; // The filename

      // Append link, trigger click, and remove link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
})

  document.getElementById("myFile").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const text = await file.text(); // read file
      loading_file = JSON.parse(text); // parse JSON
      document.getElementById("fileOutput").textContent =
        "Loaded file: " + file.name + "\n"
    } catch (err) {
      alert("Invalid JSON file: " + err.message);
      loading_file = undefined;
    }
  });

  // When the user clicks "Submit"
  document.getElementById("submit-file").addEventListener("click", (e) => {
    e.preventDefault(); // stop form submission / reload
    if (!loading_file) {
      alert("No valid JSON loaded yet!");
      return;
    }

    try {
      graph.setGraph(loading_file); // pass JSON into your graph
      alert("Graph updated successfully!");
    } catch (err) {
      alert("Error applying JSON to graph: " + err.message);
    }
  });

  document.getElementById("screenshot").addEventListener("click", () => {
    const canvas = document.getElementById("canvas_id");
    
    // Convert canvas to a PNG data URL
    const dataURL = canvas.toDataURL("image/png");

    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "graph_screenshot.png";
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
  })

document.getElementById("nodes").addEventListener("input", function(event) {
    let value = event.target.value;   // get the current slider position
    nodes_to_generate = value
    document.getElementById("nodesValue").textContent = value;
});

document.getElementById("gen_graph").addEventListener("click", () => {
    graph.gen_random_graph(document.getElementById("nodes").value,canvas.width,canvas.height)
})

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}