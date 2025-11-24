// Generated file, do NOT edit

export default {
  "id": "CPZ3",
  "filename": "CPZ3.yaml",
  "name": "Doublequoted scalar starting with a tab",
  "from": "@perlpunk",
  "tags": [
    "double",
    "scalar"
  ],
  "cases": [
    {
      "name": "Doublequoted scalar starting with a tab",
      "from": "@perlpunk",
      "tags": [
        "double",
        "scalar"
      ],
      "yaml": "---\ntab: \"\\tstring\"\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :tab\n   =VAL \"\\tstring\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"tab\": \"\\tstring\"\n}\n",
      "dump": "---\ntab: \"\\tstring\"\n"
    }
  ]
}
