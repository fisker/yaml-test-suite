// Generated file, do NOT edit

export default {
  "filename": "S4GJ.yaml",
  "name": "Invalid text after block scalar indicator",
  "from": "@perlpunk",
  "tags": [
    "error",
    "folded"
  ],
  "cases": [
    {
      "name": "Invalid text after block scalar indicator",
      "from": "@perlpunk",
      "tags": [
        "error",
        "folded"
      ],
      "fail": true,
      "yaml": "---\nfolded: > first line\n  second line\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :folded\n"
    }
  ]
}
