class Graph {
    constructor({graph_contents = {}, nodeID_counter = 0}){
        this.graph_contents = graph_contents
        this.nodeID_counter = nodeID_counter 
        this.default_radius = 30
        this.default_colour = '#000000'
        this.default_fill_colour = '#ffffff'
        this.default_edge_width = 2
        this.default_coords = {x: 0, y:0}
        this.default_edge_colour = '#000000'
        this.default_edge_width = 3
        this.default_weight = 0
        this.upper_rand = 200
        this.lower_rand = 0
        this.shortest_path = []
        this.shortest_path_colour = "#00a318ff"
        this.default_heuristic_value = 0
        this.distance_object = {}
        this.enumeration_type = "1"
        this.upper_rand_graph = 99
    }

    setDefaults({
        default_radius,
        default_colour,
        default_fill_colour,
        default_edge_width,
        default_edge_colour,
        default_weight,
        upper_rand,
        lower_rand,
        shortest_path_colour,
        default_heuristic_value,
        nenumeration_type
        } = {}) {
            if (default_radius !== undefined) this.default_radius = default_radius;
            if (default_colour !== undefined) this.default_colour = default_colour;
            if (default_fill_colour !== undefined) this.default_fill_colour = default_fill_colour;
            if (default_edge_width !== undefined) this.default_edge_width = default_edge_width;
            if (default_edge_colour !== undefined) this.default_edge_colour = default_edge_colour;
            if (default_weight !== undefined) this.default_weight = default_weight;
            if (upper_rand !== undefined) this.upper_rand = upper_rand;
            if (lower_rand !== undefined) this.lower_rand = lower_rand;
            if (shortest_path_colour !== undefined) this.shortest_path_colour = shortest_path_colour;
            if (default_heuristic_value !== undefined) this.default_heuristic_value = default_heuristic_value;
            if (nenumeration_type !== undefined) this.enumeration_type = nenumeration_type;
        }
    addNode({
                nodeID = this.nodeID_counter,
                coords= this.default_coords,
                radius= this.default_radius,
                r_colour = this.default_colour,
                f_colour = this.default_fill_colour,
                edge_width = this.default_edge_width,
                node_type = 'Normal Node',
                node_text = '',
                nheuristic_value = this.default_heuristic_value
    }){
        let e = this.getenum()
        if (node_text.length === 0){
            if (e == "A"){
                node_text = intToLetter(this.nodeID_counter)
            }else if(e === "I"){
                node_text = intToRoman(this.nodeID_counter)
            }
            
        }

        this.graph_contents[this.nodeID_counter] = [{
            id: nodeID, 
            coords: coords,
            radius: radius,
            r_colour: r_colour,
            f_colour: f_colour,
            edge_width: edge_width,
            node_type: node_type,
            text: node_text,
            heuristic_value: nheuristic_value
        },[]];
        this.nodeID_counter = this.nodeID_counter + 1
    }
    getenum(){
        return this.enumeration_type
    }
    setGraph(graph){
        let graph_keys = Object.keys(graph)
        let biggest = 0
        for (let i = 0; i < graph_keys.length; i++){
            if (+graph_keys[i] > biggest){
                biggest = +graph_keys[i]
            }
        }
        this.graph_contents = graph
        this.nodeID_counter = biggest + 1
    }
    set_shortest_path(shortest_path = []){
        this.shortest_path = shortest_path
    }
    nodeInfo(nodeID){
        return this.graph_contents[nodeID]
    }
    gen_random_graph(nodes,x_up,y_up){
        if (nodes < 14){
            var radius = 30
        }else{
            var radius = 25
        }
        
        let connections = Math.round(nodes*1.4)
        this.setGraph({})
        let coords = []
        this.nodeID_counter = 0
        for (let i = 0; i < nodes; i++){
            let exit = false
            var p = 0
            while (!exit){
                p = p + 1
                if (p > nodes*4){exit=true}
                let clean = true 
                var rand_x = randInt(radius*2,x_up-(radius*2))
                var rand_y = randInt(85,y_up-(radius*2))
                for (let k = 0; k < coords.length; k++){
                    let ox = coords[k].x
                    let oy = coords[k].y
                    let dx = rand_x - ox;
                    let dy = rand_y - oy;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < radius * 4) {
                        clean = false
                        break
                    }
                    }
                if (clean){
                    exit = true
                }
                }
                coords.push({x: rand_x, y:rand_y})
                if (i === 0){
                    this.addNode({
                        coords: {x:rand_x, y:rand_y},
                        node_type: "Destination Node",
                        radius: radius
                    })
                }else if (i === 1){
                    this.addNode({
                        coords: {x:rand_x, y:rand_y},
                        node_type: "Starting Node",
                        radius: radius
                    })
                }else{
                    this.addNode({
                        coords: {x:rand_x, y:rand_y},
                        radius: radius
                    })
                }
            }

        for (let l = 0; l < connections; l++){
            let exit = false
            var p = 0
            while (!exit){
                p = p + 1
                if (p > nodes*4){exit=true}
                let clean = true
                var rand_node_1 = randInt(0,nodes-1)
                var rand_node_2 = randInt(0,nodes-1)
                if (this.connectedQuery(rand_node_1,rand_node_2)){
                    clean = false
                    break
                }
                if (clean){
                    exit = true
                }
            }
            this.connectNodes(rand_node_1,rand_node_2,"link_nondirectional",false)
            if (this.connectedQuery(rand_node_1,rand_node_2)){
                this.setEdgeWeight(rand_node_1,rand_node_2,randInt(this.lower_rand,this.upper_rand_graph))
            }
        }

        }
    setNode(nodeID, {
        coords,
        radius,
        r_colour,
        f_colour,
        edge_width,
        node_type,
        node_text,
        heuristic_value } = {}) {
        // Check if the node exists
        if (!this.graph_contents[nodeID]) {
            console.error(`Node ${nodeID} does not exist`);
            return;
        }

        let nodeData = this.graph_contents[nodeID][0];

        if (coords !== undefined) nodeData.coords = coords;
        if (radius !== undefined) nodeData.radius = radius;
        if (r_colour !== undefined) nodeData.r_colour = r_colour;
        if (f_colour !== undefined) nodeData.f_colour = f_colour;
        if (edge_width !== undefined) nodeData.edge_width = edge_width;
        if (node_type !== undefined) nodeData.node_type = node_type;
        if (node_text !== undefined) nodeData.text = node_text;
        if (heuristic_value !== undefined) nodeData.heuristic_value = heuristic_value;
    }

ready_to_run() {
    const pgraph = this.graph_contents;
    const keys = Object.keys(pgraph);
    let d = 0;
    let s = 0;

    if (keys.length <= 1) {
        return { go: false, reason: "Add more nodes to run" };
    }

    for (const key of keys) {
        const entry = pgraph[key];
        if (!entry) continue;

        const node = entry[0]; // node object
        if (!node) continue;

        if (node.node_type === "Destination Node") d++;
        if (node.node_type === "Starting Node") s++;
    }

    if (s !== 1) {
        console.log(s)
        return { go: false, reason: "You need one starting node to run" };
    }
    if (d !== 1) {
        console.log(d)
        return { go: false, reason: "You need one destination node to run" };
    }

    return { go: true, reason: "yep" };
}

    deleteNode(nodeid_to_remove){
        delete_connections(nodeid_to_remove,this.graph_contents)
        delete this.graph_contents[nodeid_to_remove]
        if (Object.keys(this.graph_contents).length === 0){
            this.nodeID_counter = 0
        }
    }

    deleteEdge(node1,node2){
        delete_graph_edge(node1,node2,this.graph_contents)
    }

    setEdgeWeight(id1,id2,weight){
        let id1_array = this.graph_contents[id1][1]
        for (let i in id1_array){
            
            if (this.graph_contents[id1][1][i][0] === id2){
                this.graph_contents[id1][1][i][2] = weight
                break
            }
        }
        let id2_array = this.graph_contents[id2][1]
        for (let i in id2_array){
            
            if (this.graph_contents[id2][1][i][0] === id1){
                this.graph_contents[id2][1][i][2] = weight
                break
            }
        }

    }
    getEdgeWeight(id1,id2){
        let id1_array = this.graph_contents[id1][1]
        for (let i in id1_array){
            
            if (this.graph_contents[id1][1][i][0] === id2){
                return this.graph_contents[id1][1][i][2]
            }
        }
        let id2_array = this.graph_contents[id2][1]
        for (let i in id2_array){
            
            if (this.graph_contents[id2][1][i][0] === id1){
                return this.graph_contents[id2][1][i][2]
            }
        }
    }

    connectedQuery(node1,node2){
        console.log(node1 + " " + node2)
        for (let i = 0; i < this.seeGraphContents()[node1][1].length; i++){
            if (+this.seeGraphContents()[node1][1][i][0] === +node2){
                return true
            }
        } 
        for (let i = 0; i < this.seeGraphContents()[node2][1].length; i++){
            if (+this.seeGraphContents()[node2][1][i][0] === +node1){
                return true
            }
        } 
        return false
    }

    connectNodes(node1,node2,direction,nottesting=true){
        if (this.connectedQuery(node1,node2)){
            if (nottesting){
                show_bottom_message("Nodes already connected",true)
            }
            return
        }
        if (node1 === node2){
            if (nottesting){
                show_bottom_message("Cannot connect node to itself",true)
            }
            return
        }
        let node1ID = this.graph_contents[node1][0].id
        let node2ID = this.graph_contents[node2][0].id
        if (direction === "link_nondirectional"){
            this.graph_contents[node1][1].push([node2ID, direction,this.default_weight])
            this.graph_contents[node2][1].push([node1ID, direction,this.default_weight])
        }else{
            this.graph_contents[node1][1].push([node2ID, direction,this.default_weight])
        }
    }

    seeGraphContents(){
        return this.graph_contents
    }

    moveNode(nodeID, newCoords) {
        if (this.graph_contents[nodeID]&&nodeID != -1) {
            let g_coords = offsetCoords(newCoords.x,newCoords.y)
            this.graph_contents[nodeID][0].coords = {
                x: g_coords.x,
                y: g_coords.y
            };
        } else {
            console.error(`Node with ID ${nodeID} does not exist.`);
        }
    }

    drawGraph(c,first = -1,second = -1,hovering_node = -1,programState = ""){
        //draw lines
        let distances = this.calc_display_distances()
        let weight_behind
        let destination = -1
        let line_colour
        for (let cnodeID in this.graph_contents){
            for (let array of this.graph_contents[cnodeID][1]){
                if (editing_edge !== -1){
                    if ((editing_edge.id1 == cnodeID && editing_edge.id2 == array[0])||(editing_edge.id1 == array[0] && editing_edge.id2 == cnodeID)){
                        line_colour = "#E4F9FF"
                    }else{
                        line_colour = this.default_edge_colour
                    }
                }else{
                    line_colour = this.default_edge_colour
                }
                if (array[1] === "link_nondirectional"){
                    draw_line({c :c,
                        start_coords: {x: this.graph_contents[cnodeID][0].coords.x, y: this.graph_contents[cnodeID][0].coords.y},
                        end_coords: {x: this.graph_contents[array[0]][0].coords.x, y: this.graph_contents[array[0]][0].coords.y},
                        colour: line_colour,
                        width: 3
                    })
                }else{
                    draw_arrow_line({c :c,
                        start_coords: {x: this.graph_contents[cnodeID][0].coords.x, y: this.graph_contents[cnodeID][0].coords.y},
                        end_coords: {x: this.graph_contents[array[0]][0].coords.x, y: this.graph_contents[array[0]][0].coords.y},
                        colour: line_colour,
                        width: 3,
                        radius: this.graph_contents[array[0]][0].radius
                    })
                }
                    if (0 <= (this.graph_contents[cnodeID][0].coords.x + (this.graph_contents[array[0]][0].coords.x - this.graph_contents[cnodeID][0].coords.x)/2) && (this.graph_contents[cnodeID][0].coords.x + (this.graph_contents[array[0]][0].coords.x - this.graph_contents[cnodeID][0].coords.x)/2) <= canvas.width && 0 <= (this.graph_contents[cnodeID][0].coords.y + (this.graph_contents[array[0]][0].coords.y - this.graph_contents[cnodeID][0].coords.y)/2) && (this.graph_contents[cnodeID][0].coords.y + (this.graph_contents[array[0]][0].coords.y - this.graph_contents[cnodeID][0].coords.y)/2) <= canvas.height){
                        weight_behind = background_colour
                    }else{
                        weight_behind = lght_background_colour
                    }
                    let weight = this.getEdgeWeight(cnodeID,array[0])
                    if (weight.toString() !== "0"){
                        draw_circle({
                            text: weight.toString(),
                            c: c,
                            x: this.graph_contents[cnodeID][0].coords.x + ((this.graph_contents[array[0]][0].coords.x - this.graph_contents[cnodeID][0].coords.x)/2),
                            y: this.graph_contents[cnodeID][0].coords.y + ((this.graph_contents[array[0]][0].coords.y - this.graph_contents[cnodeID][0].coords.y)/2),
                            radius: (weight.toString().length*11)+3,
                            startAngle: 0,
                            endAngle: 2 * Math.PI,
                            default_fill_colour: weight_behind,
                            default_edge_width: this.default_edge_width,
                            edge: true
                        })
                    }
            }

        }
        for (let cnodeID in this.graph_contents){
            if (this.graph_contents[cnodeID][0].text === ''){
                this.graph_contents[cnodeID][0].text = this.graph_contents[cnodeID][0].id
                var text = this.graph_contents[cnodeID][0].text
            }else{
                var text = this.graph_contents[cnodeID][0].text
            }
            if (this.graph_contents[cnodeID][0].node_type === "Destination Node")destination = cnodeID
            let thisHeuristic = -1
            if (showHeuristic && this.ready_to_run().go){
                if (heuristicMode === "Based on distance to destination"){
                    thisHeuristic = distances[cnodeID].toFixed(1)
                }else if (heuristicMode === "Based on nodes custom value"){
                    thisHeuristic = this.graph_contents[cnodeID][0].heuristic_value
                }
            }else if (showHeuristic && !this.ready_to_run().go){
                show_bottom_message("Make sure there is at least one destination and start node to show heuristic",true)
            }
            draw_circle({ //normal circle
                text: text,
                c: c,
                x: this.graph_contents[cnodeID][0].coords.x,
                y: this.graph_contents[cnodeID][0].coords.y,
                radius: this.graph_contents[cnodeID][0].radius,
                startAngle: 0,
                endAngle: 2 * Math.PI,
                default_fill_colour: this.graph_contents[cnodeID][0].f_colour,
                default_edge_width: this.default_edge_width,
                default_colour: this.graph_contents[cnodeID][0].r_colour,
                type: this.graph_contents[cnodeID][0].node_type,
                heuristic: thisHeuristic
            })

            if (cnodeID === hovering_node){
                if (programState === "link_directional" || programState === "link_nondirectional"){
                    draw_circle({
                        text: text,
                        c: c,
                        x: this.graph_contents[cnodeID][0].coords.x,
                        y: this.graph_contents[cnodeID][0].coords.y,
                        radius: this.graph_contents[cnodeID][0].radius,
                        startAngle: 0,
                        endAngle: 2 * Math.PI,
                        default_fill_colour: this.graph_contents[cnodeID][0].f_colour,
                        default_edge_width: this.default_edge_width,
                        default_colour: '#ff0000ff'
                    })
                }else{
                    draw_circle({
                    text: text,
                    c: c,
                    x: this.graph_contents[cnodeID][0].coords.x,
                    y: this.graph_contents[cnodeID][0].coords.y,
                    radius: this.graph_contents[cnodeID][0].radius,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    default_fill_colour: this.graph_contents[cnodeID][0].f_colour,
                    default_edge_width: this.default_edge_width,
                    default_colour: "#3d4a4fff"
                    })
                }
            }
            //first/second linking circle
            if (cnodeID === first || cnodeID === second){
                draw_circle({
                    text: text,
                    c: c,
                    x: this.graph_contents[cnodeID][0].coords.x,
                    y: this.graph_contents[cnodeID][0].coords.y,
                    radius: this.graph_contents[cnodeID][0].radius,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    default_fill_colour: this.graph_contents[cnodeID][0].f_colour,
                    default_edge_width: this.default_edge_width,
                    default_colour: '#ff0000ff'
                })
            }
        }
        //draw shortest path

        //lines
        let shortest_path = this.shortest_path
        for (let i = shortest_path.length - 1; i > 0; i--){
            let node_1 = shortest_path[i]
            let node_2 = shortest_path[i-1]
                for (let j of this.graph_contents[node_1][1]){
                    if (+j[0] === +node_2){
                        if (j[1] === "link_nondirectional"){
                            draw_line({c :c,
                                start_coords: {x: this.graph_contents[node_1][0].coords.x, y: this.graph_contents[node_1][0].coords.y},
                                end_coords: {x: this.graph_contents[node_2][0].coords.x, y: this.graph_contents[node_2][0].coords.y},
                                colour: this.shortest_path_colour,
                                width: 4
                            })
                        }else{
                            draw_arrow_line({c :c,
                                start_coords: {x: this.graph_contents[node_1][0].coords.x, y: this.graph_contents[node_1][0].coords.y},
                                end_coords: {x: this.graph_contents[node_2][0].coords.x, y: this.graph_contents[node_2][0].coords.y},
                                colour: this.shortest_path_colour,
                                width: 4,
                                radius: this.graph_contents[node_2][0].radius
                            })
                        }

                            if (this.graph_contents[node_1][0].coords.x + ((this.graph_contents[node_2][0].coords.x - this.graph_contents[node_1][0].coords.x)/2) < canvas.width && this.graph_contents[node_1][0].coords.y + ((this.graph_contents[node_2][0].coords.y - this.graph_contents[node_1][0].coords.y)/2) < canvas.height){
                                weight_behind = background_colour
                            }else{
                                weight_behind = lght_background_colour
                            }
                            let weight = this.getEdgeWeight(+node_1,+node_2)
                            if (weight.toString() !== "0"){
                                draw_circle({
                                    text: weight.toString(),
                                    c: c,
                                    x: this.graph_contents[node_1][0].coords.x + ((this.graph_contents[node_2][0].coords.x - this.graph_contents[node_1][0].coords.x)/2),
                                    y: this.graph_contents[node_1][0].coords.y + ((this.graph_contents[node_2][0].coords.y - this.graph_contents[node_1][0].coords.y)/2),
                                    radius: weight.toString().length*11,
                                    startAngle: 0,
                                    endAngle: 2 * Math.PI,
                                    default_fill_colour: weight_behind,
                                    default_edge_width: this.default_edge_width,
                                    edge: true
                                })
                            }










                        
                        
                    }                    
                }
        }

        for (let i = shortest_path.length - 1; i > 0; i--){
            let node = shortest_path[i]
                draw_circle({
                    text: this.graph_contents[node][0].text,
                    c: c,
                    x: this.graph_contents[node][0].coords.x,
                    y: this.graph_contents[node][0].coords.y,
                    radius: this.graph_contents[node][0].radius,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    default_fill_colour: this.graph_contents[node][0].f_colour,
                    default_edge_width: this.default_edge_width+1,
                    default_colour: this.shortest_path_colour
                })
        }
        if (destination !== -1 && shortest_path.length > 1){
                draw_circle({
                    text: this.graph_contents[destination][0].text,
                    c: c,
                    x: this.graph_contents[destination][0].coords.x,
                    y: this.graph_contents[destination][0].coords.y,
                    radius: this.graph_contents[destination][0].radius,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    default_fill_colour: this.graph_contents[destination][0].f_colour,
                    default_edge_width: this.default_edge_width+1,
                    default_colour: this.shortest_path_colour
                })
        }
    }
    reset_shortest_path(){
        this.shortest_path = []
    }
    run_djykstra_algorithm(){
        //below is the code that was in the dijkstra function 
        let processed_graph = this.graph_contents
        let infinity = 999999999999 //Infinity is just a really big number
        let node_estimated_cost_dict = {} //Dictionary to store estimated costs 
        let nodes_explored = [] //array to store explored nodes
        let previous_node = {} //dictionary to store previous node of each node
        let graph_keys = Object.keys(processed_graph)
        let destination
        for (let node of graph_keys){ //cycles through each node in the graph 
            if (processed_graph[node][0].node_type === "Destination Node"){ //checks if a node is the destination node 
                destination = processed_graph[node][0].id //assigns a destination node
            }if (processed_graph[node][0].node_type === "Starting Node"){
                //checks if a node is the starting node 
                node_estimated_cost_dict[processed_graph[node][0].id] = 0 
                //updates the nodes estimated cost as 0
            }else{
                //if a node is not the starting node then the estimated cost is set to infinity
                node_estimated_cost_dict[processed_graph[node][0].id] = infinity 
            }
            //fills the previous nodes with a nodeID key and a None value
            previous_node[processed_graph[node][0].id] = -1
        }  
        
        while (true){
            let lowest_cost = infinity //sets the origonal low cost to infinity, meaning any number will be higher than it
            let lowest_node = -1 //sets the lowest costing node to None
            
            //itterates through the nodes, while asigning the nodeID and the cost to the designated varible
            //at the end of this for loop, the lowest_node/cost should be equal to the lowest costs
            for (let node_id of Object.keys(node_estimated_cost_dict)){
                let cost = node_estimated_cost_dict[node_id]
                if (valueInArray(node_id,nodes_explored) === false && cost < lowest_cost){ //checks to see if the selected node has the lowest cost
                    lowest_cost = cost //assigns the lowest cost
                    lowest_node = node_id //assigns the lowest costing nodes nodeID  
                }
            }
            //this will only be True is no node cost is lower than infinity
            //since this will never be False, it means there are no nodes left
            if (lowest_node === -1){
                break  //every node has been explored
            }
            //adding the exploring node to the explored array
            nodes_explored.push(lowest_node)
            //Checks if the exploration node is the destination node
            if (lowest_node === destination){
                break
            }
            
            //looks at connection of the exploring nodes connection array
            const neighbors = processed_graph[String(lowest_node)][1];
            for (const neighbor of neighbors) {
                const neighborId = neighbor[0];   // ID of the neighboring node
                const weightStr = neighbor[2];    // weight of the edge (as string)
                const weight = Number(weightStr); // convert to number

                if (nodes_explored.includes(neighborId)) continue;

                const newCost = node_estimated_cost_dict[lowest_node] + weight;
                if (newCost < node_estimated_cost_dict[neighborId]) {
                    node_estimated_cost_dict[neighborId] = newCost;
                    previous_node[neighborId] = lowest_node;
                }
            }
        }
        //makes shortest path from the previous node dictionary
        let shortest_path = [] //sets the shorting path to an empty array
        let current_node = destination //sets the destination node to the current node
        //the currnet node will only = one when it looks at the starting nodes previous node
        while (current_node != -1){ //while the current node doesn't = nonde
            shortest_path.push(current_node) //adds the shortest node to the shortest path array
            current_node = previous_node[current_node] //sets the current_node to the current nodes prior node 
        }
        //returns the shortest path and total estimated cost in a tuple
        this.shortest_path = shortest_path
        //console.log(shortest_path)
        return {shortest_path: shortest_path, total_cost: node_estimated_cost_dict[destination]}
    }

    calc_graph_distance(){
        let distance_object = {}
        let graph = this.graph_contents
        let destinationID = -1
        for (let s in graph){
            if (graph[s][0].node_type === "Destination Node"){
                destinationID = s
                break
            }
        }
        if (destinationID === -1){
            this.distance_object = {}
        }else{
            let dc = graph[destinationID][0].coords
            for (let node in graph){
                let nc = graph[node][0].coords
                let distance = Math.sqrt((nc.x - dc.x)*(nc.x - dc.x)+(nc.y - dc.y)*(nc.y - dc.y))
                distance_object[graph[node][0].id] = distance
            }
            this.distance_object = distance_object
        }
    }

    calc_display_distances(){
        this.calc_graph_distance()
        let scale = 1
        let distances = this.distance_object
        let keys = Object.keys(distances)
        if (keys.length > 0){
            let aw = this.average_weight()
            let ad = this.average_distance()
            if (aw > 0 && ad > 0){
                scale = aw/ad
            }
        }else{
            return {}
        }
        for (let i = 0; i < keys.length; i++){
            distances[keys[i]] = distances[keys[i]]*scale
        }
        return distances
    }

    average_distance(){
        let distance = this.distance_object
        let total = 0
        let keys = Object.keys(distance)
        for (let node_id of keys){
            total = distance[node_id] + total
        }
        if (total > 0){
            return total/(keys.length-1)
        }else{
            return -1
        }
    }
    average_weight(){
        let graph = this.graph_contents
        let total = 0
        let amount = 0
        for (let i in graph){
            for (let j = 0; j < graph[i][1].length; j++){
                if (graph[i][1][j][1] === "link_directional"){
                    total = total + (+graph[i][1][j][2]*2)
                    amount = amount + 2
                }else{
                    total = total + +graph[i][1][j][2]
                    amount = amount + 1
                }
            }
        }
        if (total > 0){
            total = total/2
            amount = amount/2
            return total/amount
        }else{
            return -1
        }
    }

    aStarAlgorithm(heuristicMode){

        let a_weight = this.average_weight()
        let a_distance = this.average_distance()
        let distances = this.distance_object
        let scale = a_weight/a_distance
        let processed_graph = this.graph_contents
        let graph_keys = Object.keys(processed_graph)
        if (heuristicMode === "Based on nodes custom value"){
            distances = {}
            for (let o = 0; o < graph_keys.length; o++){
                distances[graph_keys[o]] = processed_graph[o][0].heuristic_value
            }
        }

        //below is the code that was in the dijkstra function 
        
        let infinity = 999999999999 //Infinity is just a really big number
        let node_estimated_cost_dict = {} //Dictionary to store estimated costs 
        let nodes_explored = [] //array to store explored nodes
        let previous_node = {} //dictionary to store previous node of each node
        let destination
        for (let node of graph_keys){ //cycles through each node in the graph 
            if (processed_graph[node][0].node_type === "Destination Node"){ //checks if a node is the destination node 
                destination = processed_graph[node][0].id //assigns a destination node
            }if (processed_graph[node][0].node_type === "Starting Node"){
                //checks if a node is the starting node 
                node_estimated_cost_dict[processed_graph[node][0].id] = 0 
                //updates the nodes estimated cost as 0
            }else{
                //if a node is not the starting node then the estimated cost is set to infinity
                node_estimated_cost_dict[processed_graph[node][0].id] = infinity 
            }
            //fills the previous nodes with a nodeID key and a None value
            previous_node[processed_graph[node][0].id] = -1
        }  
        
        while (true){
            let lowest_cost = infinity //sets the origonal low cost to infinity, meaning any number will be higher than it
            let lowest_node = -1 //sets the lowest costing node to None
            
            //itterates through the nodes, while asigning the nodeID and the cost to the designated varible
            //at the end of this for loop, the lowest_node/cost should be equal to the lowest costs
            for (let node_id of Object.keys(node_estimated_cost_dict)){
                let cost = node_estimated_cost_dict[node_id]
                if (valueInArray(node_id,nodes_explored) === false && cost < lowest_cost){ //checks to see if the selected node has the lowest cost
                    lowest_cost = cost //assigns the lowest cost
                    lowest_node = node_id //assigns the lowest costing nodes nodeID  
                }
            }
            //this will only be True is no node cost is lower than infinity
            //since this will never be False, it means there are no nodes left
            if (lowest_node === -1){
                break  //every node has been explored
            }
            //adding the exploring node to the explored array
            nodes_explored.push(lowest_node)
            //Checks if the exploration node is the destination node
            if (lowest_node === destination){
                break
            }
            
            //looks at connection of the exploring nodes connection array
            const neighbors = processed_graph[String(lowest_node)][1];
            for (const neighbor of neighbors) {
                const neighborId = neighbor[0];   // ID of the neighboring node
                const weightStr = neighbor[2];    // weight of the edge (as string)
                const weight = Number(weightStr); // convert to number

                if (nodes_explored.includes(neighborId)) continue;

                const newCost = node_estimated_cost_dict[lowest_node] + weight + (distances[neighborId]*scale);
                if (newCost < node_estimated_cost_dict[neighborId]) {
                    node_estimated_cost_dict[neighborId] = newCost;
                    previous_node[neighborId] = lowest_node;
                }
            }
        }
        //makes shortest path from the previous node dictionary
        let shortest_path = [] //sets the shorting path to an empty array
        let current_node = destination //sets the destination node to the current node
        //the currnet node will only = one when it looks at the starting nodes previous node
        while (current_node != -1){ //while the current node doesn't = nonde
            shortest_path.push(current_node) //adds the shortest node to the shortest path array
            current_node = previous_node[current_node] //sets the current_node to the current nodes prior node 
        }
        //returns the shortest path and total estimated cost in a tuple
        this.shortest_path = shortest_path
        //console.log(shortest_path)
        return {shortest_path: shortest_path, total_cost: node_estimated_cost_dict[destination]}
    }

}