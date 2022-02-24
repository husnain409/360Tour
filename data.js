var APP_DATA = {
  "scenes": [
    {
      "id": "0-room1",
      "name": "Room1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7410803465866618,
          "pitch": 0.11583211857375275,
          "rotation": 0,
          "target": "1-room2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-room2",
      "name": "Room2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.722725333207773,
        "pitch": 0.10888720717659339,
        "fov": 1.4408666390078466
      },
      "linkHotspots": [
        {
          "yaw": -0.10799450247814768,
          "pitch": 0.06495031491962777,
          "rotation": 0.7853981633974483,
          "target": "0-room1"
        },
        {
          "yaw": -0.9509669693432272,
          "pitch": 0.016316900129620393,
          "rotation": 0,
          "target": "2-room3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-room3",
      "name": "Room3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3332469160127687,
          "pitch": 0.1711911814248257,
          "rotation": 0,
          "target": "1-room2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5392916357216606,
          "pitch": -0.015493235016849738,
          "title": "<div>Kitchen</div>",
          "text": "<div>This is kitchen</div><div><br></div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
