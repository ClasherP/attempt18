function draw_circle({text,c,x,y,radius,startAngle,endAngle,default_fill_colour='rgba(255, 255, 255, 0.32)',default_colour='#ffffff02',default_edge_width=5, edge = false, type = "Normal Node", heuristic = -1}){
    c.beginPath();
    c.arc(x, y, radius, startAngle, endAngle * Math.PI);
    c.fillStyle = default_fill_colour;
    c.fill();
    c.lineWidth = default_edge_width;
    c.strokeStyle = default_colour;
    c.stroke();
    c.fillStyle = "#000000";
    c.font = "30px Arial";
    if (text.length > 1 && edge === false){
        c.fillText(text,(x-radius)+3,y+10,radius*2-5);
    }else{
        if (edge){
            let ex = (x - (11*text.length)) +(3*text.length)
            let wi = y +10
            c.fillText(text,ex,wi,radius*2);
        }else{
            c.fillText(text,x-10,y+10,radius*2);
        }
    }
    if (type !== "Normal Node"){
            c.font = "25px Arial";
            c.fillText(type[0],x-10,y+(+radius)+22,radius*2);
        }
    c.fillStyle = "#ff0000ff"
    if (heuristic !== -1){
        if (type !== "Normal Node"){
            c.font = "25px Arial";
            c.fillText(heuristic,x-7,y+(+radius)+50,radius*2);
        }else{
            c.font = "25px Arial";
            c.fillText(heuristic,x-7,y+(+radius)+22,radius*2);
        }
    }
    
}

function draw_line({c,start_coords,end_coords,colour,width}){
    c.beginPath();
    c.moveTo(start_coords.x, start_coords.y);
    c.lineTo(end_coords.x, end_coords.y);
    c.lineWidth = width;
    c.strokeStyle = colour
    c.stroke();
}

function draw_arrow_line({c, start_coords, end_coords, colour, width, radius = 0}) {
    end_coords = pointpxUpOnLine(start_coords,end_coords,radius)
    // Draw main shaft
    draw_line({c, start_coords, end_coords, colour, width});

    // Length of arrowhead lines
    let head_len = 15;

    // Angle of the shaft
    let angle = Math.atan2(end_coords.y - start_coords.y, end_coords.x - start_coords.x);

    // First arrowhead line (angle - 30°)
    let arrow1 = {
        x: end_coords.x - head_len * Math.cos(angle - Math.PI / 6),
        y: end_coords.y - head_len * Math.sin(angle - Math.PI / 6)
    };

    // Second arrowhead line (angle + 30°)
    let arrow2 = {
        x: end_coords.x - head_len * Math.cos(angle + Math.PI / 6),
        y: end_coords.y - head_len * Math.sin(angle + Math.PI / 6)
    };

    // Draw the two arrowhead lines
    draw_line({c, start_coords: end_coords, end_coords: arrow1, colour, width});
    draw_line({c, start_coords: end_coords, end_coords: arrow2, colour, width});
}


function not_hovering_over_div(){
    if (!topdivcollide && !viewdivcollide && !connectdivcollide && !editdivcollide && !settings_divcollide && !edge_divcollide){
        return true
    }
    return false
}

function highlightProgramState() {
    // Remove highlight from all buttons
    document.querySelectorAll('button').forEach(button => {
        button.classList.remove('active');
    });

    // Highlight the button that matches the current state
    const activeButton = document.getElementById(programState);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    if(programState === "link_directional" || programState === "link_nondirectional"){
        document.getElementById("connect_node_button").classList.add('active');
    }
}

function returnNodeAtCoords(graph, coords){
    let x = coords.x
    let y = coords.y
    let current_graph = graph
    let graph_keys = Object.keys(current_graph)
    for (let i = graph_keys.length - 1; i >= 0; i--){
        let node_info = graph_keys[i]
        let nr = +current_graph[node_info][0].radius
        let nx = current_graph[node_info][0].coords.x
        let ny = current_graph[node_info][0].coords.y
        if (x > (nx - nr) && x < (nx + nr)){
            if (y > (ny - nr) && y < (ny + nr)){
                return node_info
            }
        }
    }
    return -1
}

function pointpxUpOnLine(lineStart, lineEnd, px) {
    point = lineEnd
    let dx = lineEnd.x - lineStart.x;
    let dy = lineEnd.y - lineStart.y;

    let length = Math.hypot(dx, dy);
    if (length === 0) return point;

    let ux = dx / length;
    let uy = dy / length;

    // Move backward by distance along the line (180°)
    return {
        x: point.x - ux * px,
        y: point.y - uy * px
    };
}
function delete_connections(nodeid_to_remove,graph_contents){
    for (let node_i in graph_contents){
        for (let node_j in graph_contents[node_i][1]){
            if (graph_contents[node_i][0].id == nodeid_to_remove){
                graph_contents[node_i][1][node_j][1] = "to_delete"
            }else{
                if (graph_contents[node_i][1][node_j][0] == nodeid_to_remove){
                    graph_contents[node_i][1][node_j][1] = "to_delete"
                }
            }
        }
    }
    remove_to_delete_elements(graph_contents)
}

function delete_graph_edge(node1,node2,graph_contents){
    for(let i in graph_contents[node1][1]){
        if (graph_contents[node1][1][i][0] == node2){
            graph_contents[node1][1][i][1] = "to_delete"
        }
    }
    for(let i in graph_contents[node2][1]){
        if (graph_contents[node2][1][i][0] == node1){
            graph_contents[node2][1][i][1] = "to_delete"
        }
    }
    remove_to_delete_elements(graph_contents)
}


function remove_to_delete_elements(graph_contents) {
    for (let node_i in graph_contents) {
        graph_contents[node_i][1] = graph_contents[node_i][1].filter(
            connection => connection[1] !== "to_delete"
        );
    }
}

function detectEdge(graph_stuff,coords,tolerance){
    for (let i in graph_stuff){
        thisID = graph_stuff[i][0].id
        edge_start_coords = graph_stuff[thisID][0].coords
        for (let j in graph_stuff[i][1]){
            thatID = graph_stuff[i][1][j][0]
            edge_end_coords = graph_stuff[thatID][0].coords
            if (edge_clicked(coords,edge_start_coords,edge_end_coords,tolerance)){
                return({id1: thisID, id2: thatID})
            }
        }
    }
    return -1
}

function edge_clicked(coords,edge_start_coords,edge_end_coords, tolerance){
    distance_to_e = distance_to_edge(coords,edge_start_coords,edge_end_coords)
    if (distance_to_e < tolerance){
        return true
    }else{
        return false
    }
}

function distance_to_edge(coords, edge_start_coords, edge_end_coords) {
    // Vector from start to end
    const vx = edge_end_coords.x - edge_start_coords.x;
    const vy = edge_end_coords.y - edge_start_coords.y;

    // Vector from start to click point
    const wx = coords.x - edge_start_coords.x;
    const wy = coords.y - edge_start_coords.y;

    // Length squared of the edge
    const len2 = vx * vx + vy * vy;

    if (len2 === 0) {
        // Edge start and end are the same point — return distance to that point
        return Math.hypot(wx, wy);
    }

    // Projection factor t of w onto v (dot product over magnitude squared)
    let t = (wx * vx + wy * vy) / len2;

    // Clamp t to the range [0,1] so projection stays on the segment
    t = Math.max(0, Math.min(1, t));

    // Projection point on the segment
    const projX = edge_start_coords.x + t * vx;
    const projY = edge_start_coords.y + t * vy;

    // Distance from click point to projection point
    return Math.hypot(coords.x - projX, coords.y - projY);
}

function openEditMenu(nodeInfo){
    hideEdgeEditMenu()
    const menu = document.getElementById('bottom_box');
    if (menu.style.display === 'none'){
        menu.style.display = 'flex'
        document.getElementById('style_confirmation_message').style.display = "none"
    }
    let n = nodeInfo[0]
    document.getElementById("display_name").value = n.text;
    document.getElementById("radius").value = n.radius;
    document.getElementById("node_heuristic").value = n.heuristic_value;
    document.getElementById("radiusValue").textContent = n.radius;
    document.getElementById("node_name").textContent = n.text;
    document.getElementById("colour_disp").textContent = n.r_colour;
    document.querySelector('#inner_colour input[type="color"]').value = n.r_colour;
    document.querySelector('#node_name_container input').value = n.text;
    document.querySelector('.edit_element select').value = n.node_type;

}
function hideEditMenu(){
    document.getElementById('bottom_box').style.display = 'none'
}
function hideEdgeEditMenu(){
    document.getElementById('edge_box').style.display = 'none'
    editing_edge = -1
}
function openEdgeEditMenu(id1,id2,weight){
    hideEditMenu()
    const menu = document.getElementById('edge_box');
    if (menu.style.display === 'none'){
        menu.style.display = 'flex'
        document.getElementById('edge_confirmation_message').style.display = "none"
    }
    document.getElementById("edit_weight").value = weight;
    document.getElementById("start").textContent = id1;
    document.getElementById("end").textContent = id2;
}
function edit(p){
    if (p === "edit"){
        programState = "traverse"
    }else{
        programState = "edit"
    }
}

function valueInArray(value,array){
    for (let i of array){
        if (i === value){
            return true
        } 
    }
    return false
}

function value1_nextto_value2_query(value1,value2,array){
    for (let i = 0; i < array-1; i ++){
        item1 = array[i]
        item2 = array[i+1]
        if (+item1 === +value1 && +item2 === value2){
            return true
        }  
    }
    return false
}

function hide_bottom_message(){
    document.getElementById('displayTextBottom').style.opacity = 0
}
function show_bottom_message(message, error=false){
    el = document.getElementById("displayTextBottom")
    if (error) {
        el.style.backgroundColor = "#ff0000ba"
        setTimeout(hide_bottom_message, 3000)
    }else{
        el.style.backgroundColor = "#0000005c"
    }
    el.style.opacity = 100
    el.textContent = message

}
function openSettings() {
  document.getElementById("settings_div").style.width = "280px";
}

function closeSettings() {
  document.getElementById("settings_div").style.width = "0px";
}

//settings operations

function run_chosen_algorithm(algorithm){
    if (algorithm === "Dijkstra's Algorithm"){
        const startTime = performance.now()
        graph_info = graph.run_djykstra_algorithm()
        let TimeToRun =(performance.now() - startTime)
        if (graph_info.total_cost == 999999999999){
            return "Dijkstra's Algorithm - ERROR: graph connections incomplete"
        }else{
            return "Dijkstra's Algorithm - Run Time: " + TimeToRun.toFixed(2) + "ms,  Total Cost: "+graph_info.total_cost
        }

        
    }else if (algorithm === "A* algorithm"){
        const startTime = performance.now()
        graph.calc_graph_distance()
        graph_info = graph.aStarAlgorithm(heuristicMode)
        let TimeToRun =(performance.now() - startTime)
        if (graph_info.total_cost == 999999999999){
            return "A* algorithm - ERROR: graph connections incomplete"
        }else{
            return "A* algorithm - Run Time: " + TimeToRun.toFixed(2) + "ms,  Total Cost: "+graph_info.total_cost.toFixed(2)
        } 
    }
}

function toggleHide(id,style = "flex"){
    if (document.getElementById(id).style.display === style){
        document.getElementById(id).style.display = "none"
    }else{
        document.getElementById(id).style.display = style
    }
}

function intToRoman(num) {
        num = num + 1
    if (num <= 0 || num >= 4000) {
        throw new RangeError("Value must be between 1 and 3999");
    }

    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const numerals = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            result += numerals[i];
        }
    }

    return result;
}

function intToLetter(n) {
    n = n + 1
    if (n <= 0) {
        throw new RangeError("Value must be >= 1");
    }

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = lower.toUpperCase();

    // cycle every 52 numbers
    const index = (n - 1) % 26;
    const cycle = Math.floor((n - 1) / 26);

    return cycle % 2 === 0 ? lower[index] : upper[index];
}

function getImageDataFromURL(url, canvasId) {
  return new Promise((resolve) => {
    const placeholder = { data: -1, x: -1, y: -1 };
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.getElementById(canvasId);
      if (!canvas) {
        resolve(placeholder);
        return;
      }
      const x = (canvas.width - img.width) / 2;
      const y = (canvas.height - img.height) / 2;
      resolve({ data: img, x, y });
    };

    img.onerror = () => resolve(placeholder);

    img.src = url;
  });
}

function isMouseOverCanvas(event, canvas) {
    // If canvas is an ID string, get the element
    if (typeof canvas === "string") {
        canvas = document.getElementById(canvas);
    }

    // If canvas is a 2D context, get its canvas element
    if (canvas && canvas.canvas) {
        canvas = canvas.canvas;
    }

    if (!canvas || !canvas.getBoundingClientRect) {
        console.error("Invalid canvas element passed");
        return false;
    }

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX
    const mouseY = event.clientY
    return mouseX >= rect.left &&
           mouseX <= rect.right &&
           mouseY >= rect.top &&
           mouseY <= rect.bottom;
}

function getClientMouse(e){
    
    let x = e.clientX - (screen_offsetx)
    let y = e.clientY - (screen_offsety)
    return {x: x, y: y}
}

function offsetCoords(ox,oy){
    let x = ox - screen_offsetx
    let y = oy - screen_offsety
    return {x: x, y: y}
}

function getCanvasTopLeft(canvas) {
  if (typeof canvas === "string") {
    canvas = document.getElementById(canvas);
  }
  if (!canvas || !canvas.getBoundingClientRect) {
    return null;
  }

  const rect = canvas.getBoundingClientRect();
  return { x: rect.left, y: rect.top };
}
