// Generated file, do NOT edit

declare const Test_U44R: {
  "id": "U44R",
  "filename": "U44R.yaml",
  "name": "Bad indentation in mapping (2)",
  "from": "@perlpunk",
  "tags": [
    "error",
    "mapping",
    "indent",
    "double"
  ],
  "cases": [
    {
      "name": "Bad indentation in mapping (2)",
      "from": "@perlpunk",
      "tags": [
        "error",
        "mapping",
        "indent",
        "double"
      ],
      "fail": true,
      "yaml": "map:\n  key1: \"quoted1\"\n   key2: \"bad indentation\"\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :map\n   +MAP\n    =VAL :key1\n    =VAL \"quoted1\n"
    }
  ]
}

export default Test_U44R
