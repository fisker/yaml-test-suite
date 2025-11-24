// Generated file, do NOT edit

declare const Test_S98Z: {
  "id": "S98Z",
  "filename": "S98Z.yaml",
  "name": "Block scalar with more spaces than first content line",
  "from": "@perlpunk",
  "tags": [
    "error",
    "folded",
    "comment",
    "scalar",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Block scalar with more spaces than first content line",
      "from": "@perlpunk",
      "tags": [
        "error",
        "folded",
        "comment",
        "scalar",
        "whitespace"
      ],
      "fail": true,
      "yaml": "empty block scalar: >\n \n  \n   \n # comment\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :empty block scalar\n"
    }
  ]
}

export default Test_S98Z
