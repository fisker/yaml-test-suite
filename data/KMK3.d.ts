// Generated file, do NOT edit

declare const Test_KMK3: {
  "id": "KMK3",
  "filename": "KMK3.yaml",
  "name": "Block Submapping",
  "from": "https://github.com/ingydotnet/yaml-pegex-pm/blob/master/test/mapping.tml",
  "tags": [
    "mapping"
  ],
  "cases": [
    {
      "name": "Block Submapping",
      "from": "https://github.com/ingydotnet/yaml-pegex-pm/blob/master/test/mapping.tml",
      "tags": [
        "mapping"
      ],
      "yaml": "foo:\n  bar: 1\nbaz: 2\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   +MAP\n    =VAL :bar\n    =VAL :1\n   -MAP\n   =VAL :baz\n   =VAL :2\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\": {\n    \"bar\": 1\n  },\n  \"baz\": 2\n}\n"
    }
  ]
}

export default Test_KMK3
