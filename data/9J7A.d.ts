// Generated file, do NOT edit

declare const Test_9J7A: {
  "filename": "9J7A.yaml",
  "name": "Simple Mapping Indent",
  "from": "https://github.com/ingydotnet/yaml-pegex-pm/blob/master/test/indent.tml",
  "tags": [
    "simple",
    "mapping",
    "indent"
  ],
  "cases": [
    {
      "name": "Simple Mapping Indent",
      "from": "https://github.com/ingydotnet/yaml-pegex-pm/blob/master/test/indent.tml",
      "tags": [
        "simple",
        "mapping",
        "indent"
      ],
      "yaml": "foo:\n  bar: baz\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   +MAP\n    =VAL :bar\n    =VAL :baz\n   -MAP\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\": {\n    \"bar\": \"baz\"\n  }\n}\n"
    }
  ]
}

export default Test_9J7A
