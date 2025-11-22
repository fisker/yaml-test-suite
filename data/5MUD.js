// Generated file, do NOT edit

export default {
  "filename": "5MUD.yaml",
  "name": "Colon and adjacent value on next line",
  "from": "@perlpunk",
  "tags": [
    "double",
    "flow",
    "mapping"
  ],
  "cases": [
    {
      "name": "Colon and adjacent value on next line",
      "from": "@perlpunk",
      "tags": [
        "double",
        "flow",
        "mapping"
      ],
      "yaml": "---\n{ \"foo\"\n  :bar }\n",
      "tree": "+STR\n +DOC ---\n  +MAP {}\n   =VAL \"foo\n   =VAL :bar\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\": \"bar\"\n}\n",
      "dump": "---\n\"foo\": bar\n"
    }
  ]
}
