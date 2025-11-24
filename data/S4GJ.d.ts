// Generated file, do NOT edit

declare const Test_S4GJ: {
  "id": "S4GJ",
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

export default Test_S4GJ
