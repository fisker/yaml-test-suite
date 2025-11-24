// Generated file, do NOT edit

export default {
  "id": "7Z25",
  "filename": "7Z25.yaml",
  "name": "Bare document after document end marker",
  "from": "@perlpunk",
  "tags": [
    "footer"
  ],
  "cases": [
    {
      "name": "Bare document after document end marker",
      "from": "@perlpunk",
      "tags": [
        "footer"
      ],
      "yaml": "---\nscalar1\n...\nkey: value\n",
      "tree": "+STR\n +DOC ---\n  =VAL :scalar1\n -DOC ...\n +DOC\n  +MAP\n   =VAL :key\n   =VAL :value\n  -MAP\n -DOC\n-STR\n",
      "json": "\"scalar1\"\n{\n  \"key\": \"value\"\n}\n",
      "dump": "--- scalar1\n...\nkey: value\n"
    }
  ]
}
