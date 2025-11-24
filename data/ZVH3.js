// Generated file, do NOT edit

export default {
  "id": "ZVH3",
  "filename": "ZVH3.yaml",
  "name": "Wrong indented sequence item",
  "from": "@perlpunk",
  "tags": [
    "error",
    "sequence",
    "indent"
  ],
  "cases": [
    {
      "name": "Wrong indented sequence item",
      "from": "@perlpunk",
      "tags": [
        "error",
        "sequence",
        "indent"
      ],
      "fail": true,
      "yaml": "- key: value\n - item1\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   +MAP\n    =VAL :key\n    =VAL :value\n   -MAP\n"
    }
  ]
}
