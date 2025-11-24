// Generated file, do NOT edit

declare const Test_D9TU: {
  "id": "D9TU",
  "filename": "D9TU.yaml",
  "name": "Single Pair Block Mapping",
  "from": "https://github.com/ingydotnet/yaml-pegex-pm/blob/master/test/mapping.tml",
  "tags": [
    "simple",
    "mapping"
  ],
  "cases": [
    {
      "name": "Single Pair Block Mapping",
      "from": "https://github.com/ingydotnet/yaml-pegex-pm/blob/master/test/mapping.tml",
      "tags": [
        "simple",
        "mapping"
      ],
      "yaml": "foo: bar\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL :bar\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\": \"bar\"\n}\n"
    }
  ]
}

export default Test_D9TU
