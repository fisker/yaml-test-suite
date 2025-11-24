// Generated file, do NOT edit

export default {
  "id": "9JBA",
  "filename": "9JBA.yaml",
  "name": "Invalid comment after end of flow sequence",
  "from": "@perlpunk",
  "tags": [
    "comment",
    "error",
    "flow",
    "sequence"
  ],
  "cases": [
    {
      "name": "Invalid comment after end of flow sequence",
      "from": "@perlpunk",
      "tags": [
        "comment",
        "error",
        "flow",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\n[ a, b, c, ]#invalid\n",
      "tree": "+STR\n +DOC ---\n  +SEQ []\n   =VAL :a\n   =VAL :b\n   =VAL :c\n  -SEQ\n"
    }
  ]
}
