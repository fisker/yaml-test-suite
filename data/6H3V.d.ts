// Generated file, do NOT edit

declare const Test_6H3V: {
  "id": "6H3V",
  "filename": "6H3V.yaml",
  "name": "Backslashes in singlequotes",
  "from": "@perlpunk",
  "tags": [
    "scalar",
    "single"
  ],
  "cases": [
    {
      "name": "Backslashes in singlequotes",
      "from": "@perlpunk",
      "tags": [
        "scalar",
        "single"
      ],
      "yaml": "'foo: bar\\': baz'\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL 'foo: bar\\\\\n   =VAL :baz'\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo: bar\\\\\": \"baz'\"\n}\n",
      "dump": "'foo: bar\\': baz'\n"
    }
  ]
}

export default Test_6H3V
