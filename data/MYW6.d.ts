// Generated file, do NOT edit

declare const Test_MYW6: {
  "filename": "MYW6.yaml",
  "name": "Block Scalar Strip",
  "from": "NimYAML tests",
  "tags": [
    "literal",
    "scalar",
    "whitespace",
    "1.3-err"
  ],
  "cases": [
    {
      "name": "Block Scalar Strip",
      "from": "NimYAML tests",
      "tags": [
        "literal",
        "scalar",
        "whitespace",
        "1.3-err"
      ],
      "yaml": "|-\n ab\n \n \n...\n",
      "tree": "+STR\n +DOC\n  =VAL |ab\n -DOC ...\n-STR\n",
      "json": "\"ab\"\n",
      "dump": "|-\n  ab\n...\n"
    }
  ]
}

export default Test_MYW6
