// Generated file, do NOT edit

declare const Test_652Z: {
  "filename": "652Z.yaml",
  "name": "Question mark at start of flow key",
  "from": "@ingydotnet",
  "tags": [
    "flow"
  ],
  "cases": [
    {
      "name": "Question mark at start of flow key",
      "from": "@ingydotnet",
      "tags": [
        "flow"
      ],
      "yaml": "{ ?foo: bar,\nbar: 42\n}\n",
      "tree": "+STR\n +DOC\n  +MAP {}\n   =VAL :?foo\n   =VAL :bar\n   =VAL :bar\n   =VAL :42\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"?foo\" : \"bar\",\n  \"bar\" : 42\n}\n",
      "dump": "---\n?foo: bar\nbar: 42\n",
      "emit": "?foo: bar\nbar: 42\n"
    }
  ]
}

export default Test_652Z
