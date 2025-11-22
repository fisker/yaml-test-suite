// Generated file, do NOT edit

declare const Test_CVW2: {
  "filename": "CVW2.yaml",
  "name": "Invalid comment after comma",
  "from": "@perlpunk",
  "tags": [
    "comment",
    "error",
    "flow",
    "sequence"
  ],
  "cases": [
    {
      "name": "Invalid comment after comma",
      "from": "@perlpunk",
      "tags": [
        "comment",
        "error",
        "flow",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\n[ a, b, c,#invalid\n]\n",
      "tree": "+STR\n +DOC ---\n  +SEQ []\n   =VAL :a\n   =VAL :b\n   =VAL :c\n"
    }
  ]
}

export default Test_CVW2
