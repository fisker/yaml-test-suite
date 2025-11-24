// Generated file, do NOT edit

declare const Test_CQ3W: {
  "id": "CQ3W",
  "filename": "CQ3W.yaml",
  "name": "Double quoted string without closing quote",
  "from": "@perlpunk",
  "tags": [
    "error",
    "double"
  ],
  "cases": [
    {
      "name": "Double quoted string without closing quote",
      "from": "@perlpunk",
      "tags": [
        "error",
        "double"
      ],
      "fail": true,
      "yaml": "---\nkey: \"missing closing quote\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :key\n"
    }
  ]
}

export default Test_CQ3W
