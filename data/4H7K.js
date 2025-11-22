// Generated file, do NOT edit

export default {
  "filename": "4H7K.yaml",
  "name": "Flow sequence with invalid extra closing bracket",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "sequence"
  ],
  "cases": [
    {
      "name": "Flow sequence with invalid extra closing bracket",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\n[ a, b, c ] ]\n",
      "tree": "+STR\n +DOC ---\n  +SEQ\n   =VAL :a\n   =VAL :b\n   =VAL :c\n  -SEQ\n -DOC\n"
    }
  ]
}
