// Generated file, do NOT edit

declare const Test_D88J: {
  "id": "D88J",
  "filename": "D88J.yaml",
  "name": "Flow Sequence in Block Mapping",
  "from": "NimYAML tests",
  "tags": [
    "flow",
    "sequence",
    "mapping"
  ],
  "cases": [
    {
      "name": "Flow Sequence in Block Mapping",
      "from": "NimYAML tests",
      "tags": [
        "flow",
        "sequence",
        "mapping"
      ],
      "yaml": "a: [b, c]\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :a\n   +SEQ []\n    =VAL :b\n    =VAL :c\n   -SEQ\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"a\": [\n    \"b\",\n    \"c\"\n  ]\n}\n",
      "dump": "a:\n- b\n- c\n"
    }
  ]
}

export default Test_D88J
