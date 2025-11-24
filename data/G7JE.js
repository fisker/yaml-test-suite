// Generated file, do NOT edit

export default {
  "id": "G7JE",
  "filename": "G7JE.yaml",
  "name": "Multiline implicit keys",
  "from": "@perlpunk",
  "tags": [
    "error",
    "mapping"
  ],
  "cases": [
    {
      "name": "Multiline implicit keys",
      "from": "@perlpunk",
      "tags": [
        "error",
        "mapping"
      ],
      "fail": true,
      "yaml": "a\\nb: 1\nc\n d: 1\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :a\\\\nb\n   =VAL :1\n"
    }
  ]
}
