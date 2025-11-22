// Generated file, do NOT edit

export default {
  "filename": "36F6.yaml",
  "name": "Multiline plain scalar with empty line",
  "from": "@perlpunk",
  "tags": [
    "mapping",
    "scalar"
  ],
  "cases": [
    {
      "name": "Multiline plain scalar with empty line",
      "from": "@perlpunk",
      "tags": [
        "mapping",
        "scalar"
      ],
      "yaml": "---\nplain: a\n b\n\n c\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :plain\n   =VAL :a b\\nc\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"plain\": \"a b\\nc\"\n}\n",
      "dump": "---\nplain: 'a b\n\n  c'\n"
    }
  ]
}
