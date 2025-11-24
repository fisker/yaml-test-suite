// Generated file, do NOT edit

declare const Test_D49Q: {
  "id": "D49Q",
  "filename": "D49Q.yaml",
  "name": "Multiline single quoted implicit keys",
  "from": "@perlpunk",
  "tags": [
    "error",
    "single",
    "mapping"
  ],
  "cases": [
    {
      "name": "Multiline single quoted implicit keys",
      "from": "@perlpunk",
      "tags": [
        "error",
        "single",
        "mapping"
      ],
      "fail": true,
      "yaml": "'a\\nb': 1\n'c\n d': 1\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL 'a\\\\nb\n   =VAL :1\n"
    }
  ]
}

export default Test_D49Q
