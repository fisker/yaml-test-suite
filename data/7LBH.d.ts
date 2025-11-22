// Generated file, do NOT edit

declare const Test_7LBH: {
  "filename": "7LBH.yaml",
  "name": "Multiline double quoted implicit keys",
  "from": "@perlpunk",
  "tags": [
    "error",
    "double"
  ],
  "cases": [
    {
      "name": "Multiline double quoted implicit keys",
      "from": "@perlpunk",
      "tags": [
        "error",
        "double"
      ],
      "fail": true,
      "yaml": "\"a\\nb\": 1\n\"c\n d\": 1\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL \"a\\nb\n   =VAL :1\n"
    }
  ]
}

export default Test_7LBH
