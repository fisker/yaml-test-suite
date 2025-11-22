// Generated file, do NOT edit

export default {
  "filename": "SU5Z.yaml",
  "name": "Comment without whitespace after doublequoted scalar",
  "from": "@perlpunk",
  "tags": [
    "comment",
    "error",
    "double",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Comment without whitespace after doublequoted scalar",
      "from": "@perlpunk",
      "tags": [
        "comment",
        "error",
        "double",
        "whitespace"
      ],
      "fail": true,
      "yaml": "key: \"value\"# invalid comment\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key\n   =VAL \"value\n"
    }
  ]
}
