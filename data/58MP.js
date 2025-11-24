// Generated file, do NOT edit

export default {
  "id": "58MP",
  "filename": "58MP.yaml",
  "name": "Flow mapping edge cases",
  "from": "@ingydotnet",
  "tags": [
    "edge",
    "flow",
    "mapping"
  ],
  "cases": [
    {
      "name": "Flow mapping edge cases",
      "from": "@ingydotnet",
      "tags": [
        "edge",
        "flow",
        "mapping"
      ],
      "yaml": "{x: :x}\n",
      "tree": "+STR\n +DOC\n  +MAP {}\n   =VAL :x\n   =VAL ::x\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"x\": \":x\"\n}\n",
      "dump": "x: :x\n"
    }
  ]
}
