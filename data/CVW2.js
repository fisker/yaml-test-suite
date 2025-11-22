// Generated file, do NOT edit

export default {
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
