// Generated file, do NOT edit

declare const Test_UV7Q: {
  "id": "UV7Q",
  "filename": "UV7Q.yaml",
  "name": "Legal tab after indentation",
  "from": "@ingydotnet",
  "tags": [
    "indent",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Legal tab after indentation",
      "from": "@ingydotnet",
      "tags": [
        "indent",
        "whitespace"
      ],
      "yaml": "x:\n - x\n  \tx\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :x\n   +SEQ\n    =VAL :x x\n   -SEQ\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"x\": [\n    \"x x\"\n  ]\n}\n",
      "dump": "x:\n- x x\n"
    }
  ]
}

export default Test_UV7Q
