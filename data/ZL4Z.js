// Generated file, do NOT edit

export default {
  "id": "ZL4Z",
  "filename": "ZL4Z.yaml",
  "name": "Invalid nested mapping",
  "from": "@perlpunk",
  "tags": [
    "error",
    "mapping"
  ],
  "cases": [
    {
      "name": "Invalid nested mapping",
      "from": "@perlpunk",
      "tags": [
        "error",
        "mapping"
      ],
      "fail": true,
      "yaml": "---\na: 'b': c\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :a\n   =VAL 'b\n"
    }
  ]
}
