// Generated file, do NOT edit

export default {
  "filename": "K54U.yaml",
  "name": "Tab after document header",
  "from": "@perlpunk",
  "tags": [
    "header",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Tab after document header",
      "from": "@perlpunk",
      "tags": [
        "header",
        "whitespace"
      ],
      "yaml": "---\tscalar\n",
      "tree": "+STR\n +DOC ---\n  =VAL :scalar\n -DOC\n-STR\n",
      "json": "\"scalar\"\n",
      "dump": "--- scalar\n...\n"
    }
  ]
}
