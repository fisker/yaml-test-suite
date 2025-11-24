// Generated file, do NOT edit

declare const Test_4UYU: {
  "id": "4UYU",
  "filename": "4UYU.yaml",
  "name": "Colon in Double Quoted String",
  "from": "NimYAML tests",
  "tags": [
    "mapping",
    "scalar",
    "1.3-err"
  ],
  "cases": [
    {
      "name": "Colon in Double Quoted String",
      "from": "NimYAML tests",
      "tags": [
        "mapping",
        "scalar",
        "1.3-err"
      ],
      "yaml": "\"foo: bar\\\": baz\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"foo: bar\": baz\n -DOC\n-STR\n",
      "json": "\"foo: bar\\\": baz\"\n"
    }
  ]
}

export default Test_4UYU
