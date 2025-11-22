// Generated file, do NOT edit

declare const Test_753E: {
  "filename": "753E.yaml",
  "name": "Block Scalar Strip [1.3]",
  "from": "MYW6, modified for YAML 1.3",
  "tags": [
    "literal",
    "scalar",
    "1.3-mod",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Block Scalar Strip [1.3]",
      "from": "MYW6, modified for YAML 1.3",
      "tags": [
        "literal",
        "scalar",
        "1.3-mod",
        "whitespace"
      ],
      "yaml": "--- |-\n ab\n \n \n...\n",
      "tree": "+STR\n +DOC ---\n  =VAL |ab\n -DOC ...\n-STR\n",
      "json": "\"ab\"\n",
      "dump": "--- |-\n  ab\n...\n"
    }
  ]
}

export default Test_753E
