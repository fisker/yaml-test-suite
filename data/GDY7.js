// Generated file, do NOT edit

export default {
  "id": "GDY7",
  "filename": "GDY7.yaml",
  "name": "Comment that looks like a mapping key",
  "from": "@perlpunk",
  "tags": [
    "comment",
    "error",
    "mapping"
  ],
  "cases": [
    {
      "name": "Comment that looks like a mapping key",
      "from": "@perlpunk",
      "tags": [
        "comment",
        "error",
        "mapping"
      ],
      "fail": true,
      "yaml": "key: value\nthis is #not a: key\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key\n   =VAL :value\n"
    }
  ]
}
