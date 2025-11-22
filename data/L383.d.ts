// Generated file, do NOT edit

declare const Test_L383: {
  "filename": "L383.yaml",
  "name": "Two scalar docs with trailing comments",
  "from": "@ingydotnet",
  "tags": [
    "comment"
  ],
  "cases": [
    {
      "name": "Two scalar docs with trailing comments",
      "from": "@ingydotnet",
      "tags": [
        "comment"
      ],
      "yaml": "--- foo  # comment\n--- foo  # comment\n",
      "tree": "+STR\n +DOC ---\n  =VAL :foo\n -DOC\n +DOC ---\n  =VAL :foo\n -DOC\n-STR\n",
      "json": "\"foo\"\n\"foo\"\n",
      "dump": "--- foo\n--- foo\n"
    }
  ]
}

export default Test_L383
