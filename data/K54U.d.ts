// Generated file, do NOT edit

declare const Test_K54U: {
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

export default Test_K54U
