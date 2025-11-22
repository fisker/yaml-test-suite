// Generated file, do NOT edit

declare const Test_A984: {
  "filename": "A984.yaml",
  "name": "Multiline Scalar in Mapping",
  "from": "NimYAML tests",
  "tags": [
    "scalar"
  ],
  "cases": [
    {
      "name": "Multiline Scalar in Mapping",
      "from": "NimYAML tests",
      "tags": [
        "scalar"
      ],
      "yaml": "a: b\n c\nd:\n e\n  f\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :a\n   =VAL :b c\n   =VAL :d\n   =VAL :e f\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"a\": \"b c\",\n  \"d\": \"e f\"\n}\n",
      "dump": "a: b c\nd: e f\n"
    }
  ]
}

export default Test_A984
