// Generated file, do NOT edit

export default {
  "filename": "X4QW.yaml",
  "name": "Comment without whitespace after block scalar indicator",
  "from": "@perlpunk",
  "tags": [
    "folded",
    "comment",
    "error",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Comment without whitespace after block scalar indicator",
      "from": "@perlpunk",
      "tags": [
        "folded",
        "comment",
        "error",
        "whitespace"
      ],
      "fail": true,
      "yaml": "block: ># comment\n  scalar\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :block\n"
    }
  ]
}
