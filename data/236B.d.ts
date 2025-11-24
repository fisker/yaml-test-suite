// Generated file, do NOT edit

declare const Test_236B: {
  "id": "236B",
  "filename": "236B.yaml",
  "name": "Invalid value after mapping",
  "from": "@perlpunk",
  "tags": [
    "error",
    "mapping"
  ],
  "cases": [
    {
      "name": "Invalid value after mapping",
      "from": "@perlpunk",
      "tags": [
        "error",
        "mapping"
      ],
      "fail": true,
      "yaml": "foo:\n  bar\ninvalid\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL :bar\n"
    }
  ]
}

export default Test_236B
