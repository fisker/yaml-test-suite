// Generated file, do NOT edit

export default {
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
