function returnPresetTemplate(name){
    image_data = {data: -1, x: -1, y: -1}
    switch (name) {
        case 'preset_medium':
            return{
    "0": [
        {
            "id": 0,
            "coords": {
                "x": 174,
                "y": 331
            },
            "radius": "37",
            "r_colour": "#00bfff",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Starting Node",
            "text": "Start",
            "heuristic_value": 0
        },
        [
            [
                1,
                "link_nondirectional",
                "2"
            ],
            [
                2,
                "link_nondirectional",
                "8"
            ]
        ]
    ],
    "1": [
        {
            "id": 1,
            "coords": {
                "x": 367,
                "y": 208
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "B",
            "heuristic_value": 0
        },
        [
            [
                0,
                "link_nondirectional",
                "2"
            ],
            [
                3,
                "link_nondirectional",
                "6"
            ],
            [
                2,
                "link_nondirectional",
                "5"
            ]
        ]
    ],
    "2": [
        {
            "id": 2,
            "coords": {
                "x": 364,
                "y": 432
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "D",
            "heuristic_value": 0
        },
        [
            [
                4,
                "link_nondirectional",
                "2"
            ],
            [
                0,
                "link_nondirectional",
                "8"
            ],
            [
                1,
                "link_nondirectional",
                "5"
            ],
            [
                3,
                "link_nondirectional",
                "3"
            ]
        ]
    ],
    "3": [
        {
            "id": 3,
            "coords": {
                "x": 667,
                "y": 211
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "E",
            "heuristic_value": 0
        },
        [
            [
                1,
                "link_nondirectional",
                "6"
            ],
            [
                5,
                "link_nondirectional",
                "9"
            ],
            [
                4,
                "link_nondirectional",
                "1"
            ],
            [
                2,
                "link_nondirectional",
                "3"
            ]
        ]
    ],
    "4": [
        {
            "id": 4,
            "coords": {
                "x": 675,
                "y": 435
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "F",
            "heuristic_value": 0
        },
        [
            [
                5,
                "link_nondirectional",
                "3"
            ],
            [
                2,
                "link_nondirectional",
                "2"
            ],
            [
                3,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "5": [
        {
            "id": 5,
            "coords": {
                "x": 847,
                "y": 323
            },
            "radius": 30,
            "r_colour": "#f50000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Destination Node",
            "text": "End",
            "heuristic_value": 0
        },
        [
            [
                3,
                "link_nondirectional",
                "9"
            ],
            [
                4,
                "link_nondirectional",
                "3"
            ]
        ]
    ]
}
            break;
        case 'preset_large':
            return{
    "0": [
        {
            "id": 0,
            "coords": {
                "x": 734,
                "y": 280
            },
            "radius": "38",
            "r_colour": "#00bfff",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Starting Node",
            "text": "Start",
            "heuristic_value": "0"
        },
        [
            [
                11,
                "link_nondirectional",
                "7"
            ],
            [
                5,
                "link_nondirectional",
                "16"
            ],
            [
                14,
                "link_nondirectional",
                "23"
            ]
        ]
    ],
    "1": [
        {
            "id": 1,
            "coords": {
                "x": 64,
                "y": 383
            },
            "radius": 30,
            "r_colour": "#ff0000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Destination Node",
            "text": "End",
            "heuristic_value": "0"
        },
        [
            [
                3,
                "link_nondirectional",
                "44"
            ],
            [
                9,
                "link_nondirectional",
                "76"
            ]
        ]
    ],
    "2": [
        {
            "id": 2,
            "coords": {
                "x": 943,
                "y": 312
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "G",
            "heuristic_value": "0"
        },
        [
            [
                11,
                "link_nondirectional",
                "30"
            ],
            [
                13,
                "link_nondirectional",
                "24"
            ],
            [
                4,
                "link_nondirectional",
                "4"
            ]
        ]
    ],
    "3": [
        {
            "id": 3,
            "coords": {
                "x": 81,
                "y": 167
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "M",
            "heuristic_value": "0"
        },
        [
            [
                7,
                "link_nondirectional",
                "35"
            ],
            [
                1,
                "link_nondirectional",
                "44"
            ],
            [
                8,
                "link_nondirectional",
                75
            ],
            [
                10,
                "link_nondirectional",
                "16"
            ]
        ]
    ],
    "4": [
        {
            "id": 4,
            "coords": {
                "x": 724,
                "y": 142
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "B",
            "heuristic_value": "0"
        },
        [
            [
                4,
                "link_nondirectional",
                0
            ],
            [
                4,
                "link_nondirectional",
                0
            ],
            [
                13,
                "link_nondirectional",
                "45"
            ],
            [
                2,
                "link_nondirectional",
                "4"
            ],
            [
                5,
                "link_nondirectional",
                "35"
            ],
            [
                7,
                "link_directional",
                "32"
            ]
        ]
    ],
    "5": [
        {
            "id": 5,
            "coords": {
                "x": 511,
                "y": 259
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "A",
            "heuristic_value": "0"
        },
        [
            [
                4,
                "link_nondirectional",
                "35"
            ],
            [
                0,
                "link_nondirectional",
                "16"
            ]
        ]
    ],
    "6": [
        {
            "id": 6,
            "coords": {
                "x": 372,
                "y": 420
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "K",
            "heuristic_value": "0"
        },
        [
            [
                8,
                "link_nondirectional",
                "14"
            ],
            [
                10,
                "link_nondirectional",
                "46"
            ],
            [
                14,
                "link_nondirectional",
                23
            ]
        ]
    ],
    "7": [
        {
            "id": 7,
            "coords": {
                "x": 304,
                "y": 133
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "H",
            "heuristic_value": "0"
        },
        [
            [
                3,
                "link_nondirectional",
                "35"
            ]
        ]
    ],
    "8": [
        {
            "id": 8,
            "coords": {
                "x": 239,
                "y": 333
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "L",
            "heuristic_value": "0"
        },
        [
            [
                3,
                "link_nondirectional",
                75
            ],
            [
                6,
                "link_nondirectional",
                "14"
            ]
        ]
    ],
    "9": [
        {
            "id": 9,
            "coords": {
                "x": 207,
                "y": 507
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "J",
            "heuristic_value": "0"
        },
        [
            [
                1,
                "link_nondirectional",
                "76"
            ],
            [
                11,
                "link_directional",
                "15"
            ]
        ]
    ],
    "10": [
        {
            "id": 10,
            "coords": {
                "x": 403,
                "y": 254
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "F",
            "heuristic_value": "0"
        },
        [
            [
                6,
                "link_nondirectional",
                "46"
            ],
            [
                3,
                "link_nondirectional",
                "16"
            ]
        ]
    ],
    "11": [
        {
            "id": 11,
            "coords": {
                "x": 923,
                "y": 518
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "I",
            "heuristic_value": "0"
        },
        [
            [
                0,
                "link_nondirectional",
                "7"
            ],
            [
                2,
                "link_nondirectional",
                "30"
            ],
            [
                12,
                "link_nondirectional",
                "20"
            ]
        ]
    ],
    "12": [
        {
            "id": 12,
            "coords": {
                "x": 695,
                "y": 422
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "O",
            "heuristic_value": "0"
        },
        [
            [
                14,
                "link_nondirectional",
                "72"
            ],
            [
                11,
                "link_nondirectional",
                "20"
            ]
        ]
    ],
    "13": [
        {
            "id": 13,
            "coords": {
                "x": 930,
                "y": 149
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "E",
            "heuristic_value": "0"
        },
        [
            [
                2,
                "link_nondirectional",
                "24"
            ],
            [
                4,
                "link_nondirectional",
                "45"
            ]
        ]
    ],
    "14": [
        {
            "id": 14,
            "coords": {
                "x": 537,
                "y": 378
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "C",
            "heuristic_value": "0"
        },
        [
            [
                6,
                "link_nondirectional",
                23
            ],
            [
                0,
                "link_nondirectional",
                "23"
            ],
            [
                12,
                "link_nondirectional",
                "72"
            ]
        ]
    ]
}
            break;
        case 'preset_small':
            return{
    "0": [
        {
            "id": 0,
            "coords": {
                "x": 787,
                "y": 474
            },
            "radius": 30,
            "r_colour": "#eb0000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Destination Node",
            "text": "End",
            "heuristic_value": 0
        },
        [
            [
                2,
                "link_nondirectional",
                "5"
            ]
        ]
    ],
    "1": [
        {
            "id": 1,
            "coords": {
                "x": 233,
                "y": 227
            },
            "radius": "37",
            "r_colour": "#00bfff",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Starting Node",
            "text": "Start",
            "heuristic_value": 0
        },
        [
            [
                3,
                "link_directional",
                "6"
            ],
            [
                2,
                "link_nondirectional",
                "10"
            ]
        ]
    ],
    "2": [
        {
            "id": 2,
            "coords": {
                "x": 657,
                "y": 179
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "B",
            "heuristic_value": 0
        },
        [
            [
                3,
                "link_nondirectional",
                "2"
            ],
            [
                0,
                "link_nondirectional",
                "5"
            ],
            [
                1,
                "link_nondirectional",
                "10"
            ]
        ]
    ],
    "3": [
        {
            "id": 3,
            "coords": {
                "x": 453,
                "y": 383
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "C",
            "heuristic_value": 0
        },
        [
            [
                2,
                "link_nondirectional",
                "2"
            ],
            [
                0,
                "link_directional",
                "8"
            ]
        ]
    ]
}
            break;
        case 'star_demo':
            return{
    "0": [
        {
            "id": 0,
            "coords": {
                "x": 315,
                "y": 491
            },
            "radius": "37",
            "r_colour": "#00bfff",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Starting Node",
            "text": "Start",
            "heuristic_value": 0
        },
        [
            [
                3,
                "link_directional",
                "5"
            ],
            [
                2,
                "link_directional",
                "50"
            ]
        ]
    ],
    "1": [
        {
            "id": 1,
            "coords": {
                "x": 639.0000000000001,
                "y": 479.00000000000006
            },
            "radius": 30,
            "r_colour": "#e00000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Destination Node",
            "text": "End",
            "heuristic_value": 0
        },
        []
    ],
    "2": [
        {
            "id": 2,
            "coords": {
                "x": 477.00000000000006,
                "y": 490.00000000000006
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "G",
            "heuristic_value": 0
        },
        [
            [
                1,
                "link_directional",
                "50"
            ]
        ]
    ],
    "3": [
        {
            "id": 3,
            "coords": {
                "x": 49.00000000000001,
                "y": 510.00000000000006
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "B",
            "heuristic_value": 0
        },
        [
            [
                4,
                "link_directional",
                "5"
            ]
        ]
    ],
    "4": [
        {
            "id": 4,
            "coords": {
                "x": 48.00000000000001,
                "y": 112.00000000000001
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "C",
            "heuristic_value": 0
        },
        [
            [
                5,
                "link_directional",
                "5"
            ]
        ]
    ],
    "5": [
        {
            "id": 5,
            "coords": {
                "x": 975.0000000000001,
                "y": 116.00000000000001
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "D",
            "heuristic_value": 0
        },
        [
            [
                6,
                "link_directional",
                "5"
            ]
        ]
    ],
    "6": [
        {
            "id": 6,
            "coords": {
                "x": 979.0000000000001,
                "y": 510.00000000000006
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "E",
            "heuristic_value": 0
        },
        [
            [
                1,
                "link_directional",
                "2"
            ]
        ]
    ]
}
        break;
        case 'preset_massive':
            return {
    "0": [
        {
            "id": 0,
            "coords": {
                "x": 173.2125825172416,
                "y": 497.22490988822443
            },
            "radius": "65",
            "r_colour": "#a0a0a0",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "zoom out",
            "heuristic_value": 0
        },
        []
    ],
    "1": [
        {
            "id": 1,
            "coords": {
                "x": 11.235351562500005,
                "y": -173.41210937499991
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "b",
            "heuristic_value": 0
        },
        [
            [
                5,
                "link_nondirectional",
                20
            ],
            [
                25,
                "link_nondirectional",
                172
            ],
            [
                28,
                "link_nondirectional",
                176
            ]
        ]
    ],
    "2": [
        {
            "id": 2,
            "coords": {
                "x": -153.55957031249991,
                "y": 293.5068359374999
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "c",
            "heuristic_value": 0
        },
        [
            [
                25,
                "link_nondirectional",
                181
            ],
            [
                23,
                "link_nondirectional",
                198
            ],
            [
                33,
                "link_nondirectional",
                55
            ],
            [
                4,
                "link_nondirectional",
                122
            ],
            [
                35,
                "link_directional",
                54
            ]
        ]
    ],
    "3": [
        {
            "id": 3,
            "coords": {
                "x": 154.78778867368356,
                "y": 148.17733199508115
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "d",
            "heuristic_value": 0
        },
        [
            [
                8,
                "link_directional",
                119
            ],
            [
                25,
                "link_nondirectional",
                77
            ]
        ]
    ],
    "4": [
        {
            "id": 4,
            "coords": {
                "x": 99.73632812499997,
                "y": 391.16308593749983
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "e",
            "heuristic_value": 0
        },
        [
            [
                17,
                "link_nondirectional",
                87
            ],
            [
                24,
                "link_nondirectional",
                52
            ],
            [
                23,
                "link_nondirectional",
                174
            ],
            [
                2,
                "link_nondirectional",
                122
            ]
        ]
    ],
    "5": [
        {
            "id": 5,
            "coords": {
                "x": -0.9716796874999901,
                "y": -377.87988281249983
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "f",
            "heuristic_value": 0
        },
        [
            [
                28,
                "link_nondirectional",
                3
            ],
            [
                14,
                "link_nondirectional",
                77
            ],
            [
                7,
                "link_nondirectional",
                94
            ],
            [
                1,
                "link_nondirectional",
                20
            ],
            [
                32,
                "link_nondirectional",
                46
            ]
        ]
    ],
    "6": [
        {
            "id": 6,
            "coords": {
                "x": 609.3798828124998,
                "y": 623.0966796874998
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "g",
            "heuristic_value": 0
        },
        [
            [
                10,
                "link_nondirectional",
                147
            ],
            [
                17,
                "link_nondirectional",
                118
            ],
            [
                15,
                "link_directional",
                34
            ]
        ]
    ],
    "7": [
        {
            "id": 7,
            "coords": {
                "x": 490.36132812499983,
                "y": -359.56933593749983
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "h",
            "heuristic_value": 0
        },
        [
            [
                21,
                "link_nondirectional",
                24
            ],
            [
                5,
                "link_nondirectional",
                94
            ]
        ]
    ],
    "8": [
        {
            "id": 8,
            "coords": {
                "x": 331.3941435637298,
                "y": 57.66657511393244
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "i",
            "heuristic_value": 0
        },
        [
            [
                14,
                "link_nondirectional",
                12
            ],
            [
                13,
                "link_nondirectional",
                149
            ],
            [
                8,
                "link_directional",
                0
            ]
        ]
    ],
    "9": [
        {
            "id": 9,
            "coords": {
                "x": 972.5390624999995,
                "y": 3.5898437500000107
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "j",
            "heuristic_value": 0
        },
        [
            [
                19,
                "link_nondirectional",
                81
            ],
            [
                18,
                "link_nondirectional",
                "111"
            ],
            [
                9,
                "link_nondirectional",
                0
            ],
            [
                9,
                "link_nondirectional",
                0
            ],
            [
                12,
                "link_directional",
                199
            ]
        ]
    ],
    "10": [
        {
            "id": 10,
            "coords": {
                "x": 804.6923828124997,
                "y": 497.97460937499983
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "k",
            "heuristic_value": 0
        },
        [
            [
                18,
                "link_directional",
                8
            ],
            [
                20,
                "link_nondirectional",
                43
            ],
            [
                6,
                "link_nondirectional",
                147
            ],
            [
                22,
                "link_nondirectional",
                36
            ]
        ]
    ],
    "11": [
        {
            "id": 11,
            "coords": {
                "x": 1311.2841796874995,
                "y": 598.6826171874998
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "l",
            "heuristic_value": 0
        },
        [
            [
                18,
                "link_nondirectional",
                151
            ],
            [
                29,
                "link_nondirectional",
                23
            ]
        ]
    ],
    "12": [
        {
            "id": 12,
            "coords": {
                "x": 804.6923828124997,
                "y": -182.56738281249991
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "m",
            "heuristic_value": 0
        },
        [
            [
                21,
                "link_nondirectional",
                21
            ]
        ]
    ],
    "13": [
        {
            "id": 13,
            "coords": {
                "x": 560.5517578124998,
                "y": 168.38476562499994
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "n",
            "heuristic_value": 0
        },
        [
            [
                8,
                "link_nondirectional",
                149
            ],
            [
                19,
                "link_nondirectional",
                70
            ],
            [
                13,
                "link_nondirectional",
                0
            ],
            [
                13,
                "link_nondirectional",
                0
            ]
        ]
    ],
    "14": [
        {
            "id": 14,
            "coords": {
                "x": 316.4111328124999,
                "y": -167.30859374999991
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "o",
            "heuristic_value": 0
        },
        [
            [
                5,
                "link_nondirectional",
                77
            ],
            [
                8,
                "link_nondirectional",
                12
            ],
            [
                7,
                "link_directional",
                170
            ],
            [
                25,
                "link_directional",
                23
            ]
        ]
    ],
    "15": [
        {
            "id": 15,
            "coords": {
                "x": 382.72265625,
                "y": 784.2695312499998
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "p",
            "heuristic_value": 0
        },
        [
            [
                20,
                "link_directional",
                53
            ]
        ]
    ],
    "16": [
        {
            "id": 16,
            "coords": {
                "x": 324.12890625,
                "y": 606.0468749999999
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "q",
            "heuristic_value": 0
        },
        [
            [
                17,
                "link_nondirectional",
                93
            ],
            [
                24,
                "link_nondirectional",
                180
            ],
            [
                15,
                "link_directional",
                54
            ]
        ]
    ],
    "17": [
        {
            "id": 17,
            "coords": {
                "x": 400,
                "y": 473
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "r",
            "heuristic_value": 0
        },
        [
            [
                6,
                "link_nondirectional",
                118
            ],
            [
                4,
                "link_nondirectional",
                87
            ],
            [
                16,
                "link_nondirectional",
                93
            ]
        ]
    ],
    "18": [
        {
            "id": 18,
            "coords": {
                "x": 1104.0469462076821,
                "y": 179.08344410083924
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "s",
            "heuristic_value": 0
        },
        [
            [
                11,
                "link_nondirectional",
                151
            ],
            [
                22,
                "link_nondirectional",
                33
            ],
            [
                9,
                "link_nondirectional",
                "111"
            ],
            [
                23,
                "link_nondirectional",
                197
            ],
            [
                29,
                "link_directional",
                "192"
            ]
        ]
    ],
    "19": [
        {
            "id": 19,
            "coords": {
                "x": 783.3300781249997,
                "y": 85.98730468749997
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "t",
            "heuristic_value": 0
        },
        [
            [
                13,
                "link_nondirectional",
                70
            ],
            [
                9,
                "link_nondirectional",
                81
            ],
            [
                21,
                "link_nondirectional",
                30
            ]
        ]
    ],
    "20": [
        {
            "id": 20,
            "coords": {
                "x": 829.1064453124997,
                "y": 757.3740234374997
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "u",
            "heuristic_value": 0
        },
        [
            [
                29,
                "link_nondirectional",
                57
            ],
            [
                10,
                "link_nondirectional",
                43
            ]
        ]
    ],
    "21": [
        {
            "id": 21,
            "coords": {
                "x": 560.5517578124998,
                "y": -87.96289062499996
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "v",
            "heuristic_value": 0
        },
        [
            [
                12,
                "link_nondirectional",
                21
            ],
            [
                7,
                "link_nondirectional",
                24
            ],
            [
                19,
                "link_nondirectional",
                30
            ]
        ]
    ],
    "22": [
        {
            "id": 22,
            "coords": {
                "x": 740.6054687499997,
                "y": 345.3867187499999
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "w",
            "heuristic_value": 0
        },
        [
            [
                18,
                "link_nondirectional",
                33
            ],
            [
                17,
                "link_directional",
                7
            ],
            [
                23,
                "link_nondirectional",
                192
            ],
            [
                10,
                "link_nondirectional",
                36
            ]
        ]
    ],
    "23": [
        {
            "id": 23,
            "coords": {
                "x": 340.8251953124999,
                "y": 296.5585937499999
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "x",
            "heuristic_value": 0
        },
        [
            [
                2,
                "link_nondirectional",
                198
            ],
            [
                4,
                "link_nondirectional",
                174
            ],
            [
                23,
                "link_nondirectional",
                0
            ],
            [
                23,
                "link_nondirectional",
                0
            ],
            [
                18,
                "link_nondirectional",
                197
            ],
            [
                13,
                "link_directional",
                54
            ],
            [
                22,
                "link_nondirectional",
                192
            ],
            [
                8,
                "link_directional",
                18
            ]
        ]
    ],
    "24": [
        {
            "id": 24,
            "coords": {
                "x": 4.220488730070077,
                "y": 696.6660295829944
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "y",
            "heuristic_value": 0
        },
        [
            [
                4,
                "link_nondirectional",
                52
            ],
            [
                16,
                "link_nondirectional",
                180
            ]
        ]
    ],
    "25": [
        {
            "id": 25,
            "coords": {
                "x": -88.04594930013002,
                "y": 28.968042444299922
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "z",
            "heuristic_value": 0
        },
        [
            [
                1,
                "link_nondirectional",
                172
            ],
            [
                3,
                "link_nondirectional",
                77
            ],
            [
                2,
                "link_nondirectional",
                181
            ]
        ]
    ],
    "28": [
        {
            "id": 28,
            "coords": {
                "x": -160.71579480620906,
                "y": -244.720414597046
            },
            "radius": "38",
            "r_colour": "#00bfff",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Starting Node",
            "text": "Start",
            "heuristic_value": 0
        },
        [
            [
                5,
                "link_nondirectional",
                3
            ],
            [
                1,
                "link_nondirectional",
                176
            ],
            [
                32,
                "link_directional",
                15
            ],
            [
                33,
                "link_nondirectional",
                6
            ]
        ]
    ],
    "29": [
        {
            "id": 29,
            "coords": {
                "x": 1114.8379848063921,
                "y": 688.3402833463297
            },
            "radius": "80",
            "r_colour": "#ff0000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Destination Node",
            "text": "Destination",
            "heuristic_value": 0
        },
        [
            [
                11,
                "link_nondirectional",
                23
            ],
            [
                20,
                "link_nondirectional",
                57
            ]
        ]
    ],
    "32": [
        {
            "id": 32,
            "coords": {
                "x": -381.6540143048319,
                "y": -246.97938707139735
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "a",
            "heuristic_value": 0
        },
        [
            [
                5,
                "link_nondirectional",
                46
            ],
            [
                34,
                "link_nondirectional",
                161
            ]
        ]
    ],
    "33": [
        {
            "id": 33,
            "coords": {
                "x": -258.85988362630184,
                "y": -95.48672372323476
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "H",
            "heuristic_value": 0
        },
        [
            [
                28,
                "link_nondirectional",
                6
            ],
            [
                2,
                "link_nondirectional",
                55
            ]
        ]
    ],
    "34": [
        {
            "id": 34,
            "coords": {
                "x": -369.23885543258075,
                "y": 118.64848158094631
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "I",
            "heuristic_value": 0
        },
        [
            [
                33,
                "link_directional",
                0
            ],
            [
                32,
                "link_nondirectional",
                161
            ],
            [
                35,
                "link_nondirectional",
                170
            ]
        ]
    ],
    "35": [
        {
            "id": 35,
            "coords": {
                "x": -150.68849125614852,
                "y": 573.4098454228155
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "J",
            "heuristic_value": 0
        },
        [
            [
                34,
                "link_nondirectional",
                170
            ],
            [
                4,
                "link_directional",
                73
            ]
        ]
    ]
}
            break
        case 'world':
            getImageDataFromURL("https://ollietucker.com/worldmap.png", "canvas_id")
                .then(image_dat => {
                    console.log(image_dat); // The actual object
                    image_dat.x = -128
                    image_dat.y = -35.5
                    image_data = image_dat
                });
            return {
    "1": [
        {
            "id": 1,
            "coords": {
                "x": 180.0061821888481,
                "y": 133.0830087900494
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "US",
            "heuristic_value": 0
        },
        [
            [
                2,
                "link_nondirectional",
                "7"
            ],
            [
                3,
                "link_nondirectional",
                "2"
            ],
            [
                14,
                "link_nondirectional",
                "6"
            ],
            [
                13,
                "link_nondirectional",
                "3"
            ],
            [
                8,
                "link_nondirectional",
                "10"
            ]
        ]
    ],
    "2": [
        {
            "id": 2,
            "coords": {
                "x": 521.3573237569334,
                "y": 76.62878153071223
            },
            "radius": "24",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "EU",
            "heuristic_value": 0
        },
        [
            [
                11,
                "link_nondirectional",
                "6"
            ],
            [
                8,
                "link_nondirectional",
                "3"
            ],
            [
                1,
                "link_nondirectional",
                "7"
            ],
            [
                4,
                "link_nondirectional",
                "5"
            ],
            [
                12,
                "link_nondirectional",
                "11"
            ],
            [
                14,
                "link_nondirectional",
                "6"
            ]
        ]
    ],
    "3": [
        {
            "id": 3,
            "coords": {
                "x": 128.8035109536353,
                "y": 54.30966842818358
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "CAN",
            "heuristic_value": 0
        },
        [
            [
                14,
                "link_nondirectional",
                "5"
            ],
            [
                1,
                "link_nondirectional",
                "2"
            ],
            [
                13,
                "link_nondirectional",
                "5"
            ]
        ]
    ],
    "4": [
        {
            "id": 4,
            "coords": {
                "x": 742.0453427339712,
                "y": 39.990555325654924
            },
            "radius": "26",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "RU",
            "heuristic_value": 0
        },
        [
            [
                9,
                "link_nondirectional",
                "6"
            ],
            [
                5,
                "link_nondirectional",
                "5"
            ],
            [
                11,
                "link_nondirectional",
                "6"
            ],
            [
                2,
                "link_nondirectional",
                "5"
            ],
            [
                4,
                "link_nondirectional",
                0
            ],
            [
                4,
                "link_nondirectional",
                0
            ],
            [
                14,
                "link_nondirectional",
                "8"
            ]
        ]
    ],
    "5": [
        {
            "id": 5,
            "coords": {
                "x": 744.6711207460334,
                "y": 200.1630140614488
            },
            "radius": "28",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "INDI",
            "heuristic_value": 0
        },
        [
            [
                9,
                "link_nondirectional",
                "4"
            ],
            [
                4,
                "link_nondirectional",
                "5"
            ],
            [
                11,
                "link_nondirectional",
                "3"
            ],
            [
                18,
                "link_nondirectional",
                "7"
            ],
            [
                6,
                "link_nondirectional",
                "13"
            ]
        ]
    ],
    "6": [
        {
            "id": 6,
            "coords": {
                "x": 928.4755815903869,
                "y": 381.3416968937402
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "AUS",
            "heuristic_value": 0
        },
        [
            [
                7,
                "link_nondirectional",
                "3"
            ],
            [
                16,
                "link_nondirectional",
                "14"
            ],
            [
                11,
                "link_nondirectional",
                "16"
            ],
            [
                5,
                "link_nondirectional",
                "13"
            ],
            [
                18,
                "link_nondirectional",
                "4"
            ]
        ]
    ],
    "7": [
        {
            "id": 7,
            "coords": {
                "x": 1044.0098141211236,
                "y": 450.9248142133884
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "NZ",
            "heuristic_value": 0
        },
        [
            [
                6,
                "link_nondirectional",
                "3"
            ],
            [
                18,
                "link_nondirectional",
                "5"
            ]
        ]
    ],
    "8": [
        {
            "id": 8,
            "coords": {
                "x": 500.35109966043586,
                "y": 179.03412400113783
            },
            "radius": "26",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "MOR",
            "heuristic_value": 0
        },
        [
            [
                12,
                "link_nondirectional",
                "10"
            ],
            [
                15,
                "link_nondirectional",
                "5"
            ],
            [
                11,
                "link_nondirectional",
                "9"
            ],
            [
                2,
                "link_nondirectional",
                "3"
            ],
            [
                1,
                "link_nondirectional",
                "10"
            ]
        ]
    ],
    "9": [
        {
            "id": 9,
            "coords": {
                "x": 840.3893522224901,
                "y": 148.8376768624226
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "CH",
            "heuristic_value": 0
        },
        [
            [
                4,
                "link_nondirectional",
                "6"
            ],
            [
                5,
                "link_nondirectional",
                "4"
            ],
            [
                18,
                "link_nondirectional",
                "7"
            ]
        ]
    ],
    "10": [
        {
            "id": 10,
            "coords": {
                "x": 558.1182159258042,
                "y": 406.1639220445177
            },
            "radius": "23",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Starting Node",
            "text": "SA",
            "heuristic_value": 0
        },
        [
            [
                15,
                "link_nondirectional",
                "7"
            ],
            [
                16,
                "link_nondirectional",
                "5"
            ],
            [
                12,
                "link_nondirectional",
                "9"
            ],
            [
                17,
                "link_nondirectional",
                "10"
            ]
        ]
    ],
    "11": [
        {
            "id": 11,
            "coords": {
                "x": 631.6400002635455,
                "y": 193.4759030674799
            },
            "radius": "24",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "UAE",
            "heuristic_value": 0
        },
        [
            [
                4,
                "link_nondirectional",
                "6"
            ],
            [
                5,
                "link_nondirectional",
                "3"
            ],
            [
                15,
                "link_nondirectional",
                "9"
            ],
            [
                16,
                "link_nondirectional",
                "10"
            ],
            [
                8,
                "link_nondirectional",
                "9"
            ],
            [
                2,
                "link_nondirectional",
                "6"
            ],
            [
                6,
                "link_nondirectional",
                "16"
            ]
        ]
    ],
    "12": [
        {
            "id": 12,
            "coords": {
                "x": 287.7857466472115,
                "y": 319.63591361027864
            },
            "radius": "24",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "BR",
            "heuristic_value": 0
        },
        [
            [
                15,
                "link_nondirectional",
                "9"
            ],
            [
                10,
                "link_nondirectional",
                "9"
            ],
            [
                8,
                "link_nondirectional",
                "10"
            ],
            [
                13,
                "link_nondirectional",
                "9"
            ],
            [
                2,
                "link_nondirectional",
                "11"
            ],
            [
                17,
                "link_nondirectional",
                "3"
            ]
        ]
    ],
    "13": [
        {
            "id": 13,
            "coords": {
                "x": 115.67462089332433,
                "y": 215.79501617000855
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "MEX",
            "heuristic_value": 0
        },
        [
            [
                1,
                "link_nondirectional",
                "3"
            ],
            [
                12,
                "link_nondirectional",
                "9"
            ],
            [
                3,
                "link_nondirectional",
                "5"
            ]
        ]
    ],
    "14": [
        {
            "id": 14,
            "coords": {
                "x": 382.1910891176371,
                "y": 1.7941081869396867
            },
            "radius": "25",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Destination Node",
            "text": "GR",
            "heuristic_value": 0
        },
        [
            [
                3,
                "link_nondirectional",
                "5"
            ],
            [
                1,
                "link_nondirectional",
                "6"
            ],
            [
                4,
                "link_nondirectional",
                "8"
            ],
            [
                2,
                "link_nondirectional",
                "6"
            ]
        ]
    ],
    "15": [
        {
            "id": 15,
            "coords": {
                "x": 509.54132270265353,
                "y": 264.37190939315917
            },
            "radius": "23",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "NIG",
            "heuristic_value": 0
        },
        [
            [
                16,
                "link_nondirectional",
                "5"
            ],
            [
                10,
                "link_nondirectional",
                "7"
            ],
            [
                12,
                "link_nondirectional",
                "9"
            ],
            [
                8,
                "link_nondirectional",
                "5"
            ],
            [
                11,
                "link_nondirectional",
                "9"
            ]
        ]
    ],
    "16": [
        {
            "id": 16,
            "coords": {
                "x": 608.0079981549858,
                "y": 318.20035864043416
            },
            "radius": "21",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "ZA",
            "heuristic_value": 0
        },
        [
            [
                6,
                "link_nondirectional",
                "14"
            ],
            [
                15,
                "link_nondirectional",
                "5"
            ],
            [
                10,
                "link_nondirectional",
                "5"
            ],
            [
                11,
                "link_nondirectional",
                "10"
            ]
        ]
    ],
    "17": [
        {
            "id": 17,
            "coords": {
                "x": 249.71196547230969,
                "y": 429.9185901168908
            },
            "radius": "23",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "ARG",
            "heuristic_value": 0
        },
        [
            [
                12,
                "link_nondirectional",
                "3"
            ],
            [
                10,
                "link_nondirectional",
                "10"
            ]
        ]
    ],
    "18": [
        {
            "id": 18,
            "coords": {
                "x": 908.6595805361071,
                "y": 270.93635442331464
            },
            "radius": 30,
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "INDO",
            "heuristic_value": 0
        },
        [
            [
                5,
                "link_nondirectional",
                "7"
            ],
            [
                9,
                "link_nondirectional",
                "7"
            ],
            [
                7,
                "link_nondirectional",
                "5"
            ],
            [
                6,
                "link_nondirectional",
                "4"
            ]
        ]
    ]
}
        case 'uk':
            getImageDataFromURL("https://ollietucker.com/ukmap.jpg", "canvas_id")
                .then(image_dat => {
                    console.log(image_dat); // The actual object
                    image_dat.x = 132
                    image_dat.y = 17
                    image_data = image_dat
                });
            return {
    "1": [
        {
            "id": 1,
            "coords": {
                "x": 592,
                "y": 419
            },
            "radius": "18",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "LDN",
            "heuristic_value": 0
        },
        [
            [
                10,
                "link_nondirectional",
                "2"
            ],
            [
                11,
                "link_nondirectional",
                "2"
            ],
            [
                3,
                "link_nondirectional",
                "1"
            ],
            [
                4,
                "link_nondirectional",
                "1"
            ],
            [
                21,
                "link_nondirectional",
                "1"
            ],
            [
                18,
                "link_nondirectional",
                "1"
            ],
            [
                19,
                "link_nondirectional",
                "1"
            ],
            [
                23,
                "link_nondirectional",
                "1"
            ],
            [
                20,
                "link_nondirectional",
                "2"
            ],
            [
                16,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "3": [
        {
            "id": 3,
            "coords": {
                "x": 515,
                "y": 475
            },
            "radius": "18",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "PORT",
            "heuristic_value": 0
        },
        [
            [
                1,
                "link_nondirectional",
                "1"
            ],
            [
                4,
                "link_nondirectional",
                "1"
            ],
            [
                6,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "4": [
        {
            "id": 4,
            "coords": {
                "x": 573,
                "y": 477
            },
            "radius": "19",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "BRIG",
            "heuristic_value": 0
        },
        [
            [
                19,
                "link_nondirectional",
                "1"
            ],
            [
                1,
                "link_nondirectional",
                "1"
            ],
            [
                3,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "5": [
        {
            "id": 5,
            "coords": {
                "x": 416,
                "y": 459
            },
            "radius": "18",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "PLY",
            "heuristic_value": 0
        },
        [
            [
                24,
                "link_nondirectional",
                "1"
            ],
            [
                6,
                "link_nondirectional",
                0
            ]
        ]
    ],
    "6": [
        {
            "id": 6,
            "coords": {
                "x": 475,
                "y": 443
            },
            "radius": "17",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "BRIS",
            "heuristic_value": 0
        },
        [
            [
                3,
                "link_nondirectional",
                "1"
            ],
            [
                5,
                "link_nondirectional",
                0
            ],
            [
                12,
                "link_nondirectional",
                "1"
            ],
            [
                11,
                "link_nondirectional",
                "3"
            ]
        ]
    ],
    "8": [
        {
            "id": 8,
            "coords": {
                "x": 494,
                "y": 319
            },
            "radius": "21",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "MANC",
            "heuristic_value": 0
        },
        [
            [
                9,
                "link_nondirectional",
                "2"
            ],
            [
                11,
                "link_nondirectional",
                "1"
            ],
            [
                12,
                "link_nondirectional",
                "3"
            ],
            [
                16,
                "link_nondirectional",
                "3"
            ]
        ]
    ],
    "9": [
        {
            "id": 9,
            "coords": {
                "x": 580,
                "y": 274
            },
            "radius": "19",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "NC",
            "heuristic_value": 0
        },
        [
            [
                10,
                "link_nondirectional",
                "1"
            ],
            [
                16,
                "link_nondirectional",
                "1"
            ],
            [
                8,
                "link_nondirectional",
                "2"
            ]
        ]
    ],
    "10": [
        {
            "id": 10,
            "coords": {
                "x": 596,
                "y": 327
            },
            "radius": "18",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "YO",
            "heuristic_value": 0
        },
        [
            [
                9,
                "link_nondirectional",
                "1"
            ],
            [
                11,
                "link_nondirectional",
                "2"
            ],
            [
                1,
                "link_nondirectional",
                "2"
            ]
        ]
    ],
    "11": [
        {
            "id": 11,
            "coords": {
                "x": 527,
                "y": 381
            },
            "radius": "19",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "BIR",
            "heuristic_value": 0
        },
        [
            [
                10,
                "link_nondirectional",
                "2"
            ],
            [
                8,
                "link_nondirectional",
                "1"
            ],
            [
                1,
                "link_nondirectional",
                "2"
            ],
            [
                6,
                "link_nondirectional",
                "3"
            ],
            [
                12,
                "link_nondirectional",
                "2"
            ]
        ]
    ],
    "12": [
        {
            "id": 12,
            "coords": {
                "x": 461,
                "y": 390
            },
            "radius": "20",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "CARD",
            "heuristic_value": 0
        },
        [
            [
                24,
                "link_nondirectional",
                "1"
            ],
            [
                6,
                "link_nondirectional",
                "1"
            ],
            [
                8,
                "link_nondirectional",
                "3"
            ],
            [
                11,
                "link_nondirectional",
                "2"
            ]
        ]
    ],
    "13": [
        {
            "id": 13,
            "coords": {
                "x": 515,
                "y": 174
            },
            "radius": "22",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "DUND",
            "heuristic_value": 0
        },
        [
            [
                15,
                "link_nondirectional",
                "1"
            ],
            [
                14,
                "link_nondirectional",
                "3"
            ],
            [
                16,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "14": [
        {
            "id": 14,
            "coords": {
                "x": 569,
                "y": 114
            },
            "radius": "23",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "ABER",
            "heuristic_value": 0
        },
        [
            [
                20,
                "link_nondirectional",
                "2"
            ],
            [
                13,
                "link_nondirectional",
                "3"
            ]
        ]
    ],
    "15": [
        {
            "id": 15,
            "coords": {
                "x": 460,
                "y": 229
            },
            "radius": "21",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "GLA",
            "heuristic_value": 0
        },
        [
            [
                17,
                "link_nondirectional",
                "1"
            ],
            [
                16,
                "link_nondirectional",
                "1"
            ],
            [
                13,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "16": [
        {
            "id": 16,
            "coords": {
                "x": 528,
                "y": 237
            },
            "radius": "18",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "ED",
            "heuristic_value": 0
        },
        [
            [
                15,
                "link_nondirectional",
                "1"
            ],
            [
                9,
                "link_nondirectional",
                "1"
            ],
            [
                13,
                "link_nondirectional",
                "1"
            ],
            [
                8,
                "link_nondirectional",
                "3"
            ],
            [
                23,
                "link_nondirectional",
                "2"
            ],
            [
                20,
                "link_nondirectional",
                "3"
            ],
            [
                1,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "17": [
        {
            "id": 17,
            "coords": {
                "x": 396,
                "y": 236
            },
            "radius": "21",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "BELF",
            "heuristic_value": 0
        },
        [
            [
                24,
                "link_nondirectional",
                "1"
            ],
            [
                15,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "18": [
        {
            "id": 18,
            "coords": {
                "x": 708,
                "y": 487
            },
            "radius": "25",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "BELG",
            "heuristic_value": 0
        },
        [
            [
                21,
                "link_nondirectional",
                "1"
            ],
            [
                22,
                "link_nondirectional",
                "1"
            ],
            [
                19,
                "link_nondirectional",
                "1"
            ],
            [
                1,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "19": [
        {
            "id": 19,
            "coords": {
                "x": 626,
                "y": 503
            },
            "radius": "16",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "FR",
            "heuristic_value": 0
        },
        [
            [
                18,
                "link_nondirectional",
                "1"
            ],
            [
                21,
                "link_nondirectional",
                0
            ],
            [
                4,
                "link_nondirectional",
                "1"
            ],
            [
                1,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "20": [
        {
            "id": 20,
            "coords": {
                "x": 791,
                "y": 78
            },
            "radius": "21",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "NOR",
            "heuristic_value": 0
        },
        [
            [
                14,
                "link_nondirectional",
                "2"
            ],
            [
                23,
                "link_nondirectional",
                "1"
            ],
            [
                1,
                "link_nondirectional",
                "2"
            ],
            [
                16,
                "link_nondirectional",
                "3"
            ]
        ]
    ],
    "21": [
        {
            "id": 21,
            "coords": {
                "x": 730,
                "y": 411
            },
            "radius": "21",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "NETH",
            "heuristic_value": 0
        },
        [
            [
                22,
                "link_nondirectional",
                "1"
            ],
            [
                18,
                "link_nondirectional",
                "1"
            ],
            [
                23,
                "link_nondirectional",
                "2"
            ],
            [
                19,
                "link_nondirectional",
                0
            ],
            [
                1,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "22": [
        {
            "id": 22,
            "coords": {
                "x": 813,
                "y": 447
            },
            "radius": "24",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Normal Node",
            "text": "GER",
            "heuristic_value": 0
        },
        [
            [
                21,
                "link_nondirectional",
                "1"
            ],
            [
                23,
                "link_nondirectional",
                "1"
            ],
            [
                18,
                "link_nondirectional",
                "1"
            ]
        ]
    ],
    "23": [
        {
            "id": 23,
            "coords": {
                "x": 844,
                "y": 215
            },
            "radius": "23",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Destination Node",
            "text": "DEN",
            "heuristic_value": 0
        },
        [
            [
                20,
                "link_nondirectional",
                "1"
            ],
            [
                22,
                "link_nondirectional",
                "1"
            ],
            [
                21,
                "link_nondirectional",
                "2"
            ],
            [
                1,
                "link_nondirectional",
                "1"
            ],
            [
                16,
                "link_nondirectional",
                "2"
            ]
        ]
    ],
    "24": [
        {
            "id": 24,
            "coords": {
                "x": 343,
                "y": 310
            },
            "radius": "23",
            "r_colour": "#000000",
            "f_colour": "#ffffff",
            "edge_width": 3,
            "node_type": "Starting Node",
            "text": "IREL",
            "heuristic_value": 0
        },
        [
            [
                17,
                "link_nondirectional",
                "1"
            ],
            [
                12,
                "link_nondirectional",
                "1"
            ],
            [
                5,
                "link_nondirectional",
                "1"
            ]
        ]
    ]
}
}

}
