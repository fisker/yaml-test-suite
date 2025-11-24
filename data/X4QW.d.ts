// Generated file, do NOT edit

declare const Test_X4QW: {
  "id": "X4QW",
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

export default Test_X4QW
