// Generated file, do NOT edit

declare const Test_3UYS: {
  "id": "3UYS",
  "filename": "3UYS.yaml",
  "name": "Escaped slash in double quotes",
  "from": "@perlpunk",
  "tags": [
    "double"
  ],
  "cases": [
    {
      "name": "Escaped slash in double quotes",
      "from": "@perlpunk",
      "tags": [
        "double"
      ],
      "yaml": "escaped slash: \"a\\/b\"\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :escaped slash\n   =VAL \"a/b\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"escaped slash\": \"a/b\"\n}\n",
      "dump": "escaped slash: \"a/b\"\n"
    }
  ]
}

export default Test_3UYS
