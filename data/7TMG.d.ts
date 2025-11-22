// Generated file, do NOT edit

declare const Test_7TMG: {
  "filename": "7TMG.yaml",
  "name": "Comment in flow sequence before comma",
  "from": "@perlpunk",
  "tags": [
    "comment",
    "flow",
    "sequence"
  ],
  "cases": [
    {
      "name": "Comment in flow sequence before comma",
      "from": "@perlpunk",
      "tags": [
        "comment",
        "flow",
        "sequence"
      ],
      "yaml": "---\n[ word1\n# comment\n, word2]\n",
      "tree": "+STR\n +DOC ---\n  +SEQ []\n   =VAL :word1\n   =VAL :word2\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"word1\",\n  \"word2\"\n]\n",
      "dump": "---\n- word1\n- word2\n"
    }
  ]
}

export default Test_7TMG
