// Generated file, do NOT edit

declare const Test_AB8U: {
  "id": "AB8U",
  "filename": "AB8U.yaml",
  "name": "Sequence entry that looks like two with wrong indentation",
  "from": "@perlpunk",
  "tags": [
    "scalar",
    "sequence"
  ],
  "cases": [
    {
      "name": "Sequence entry that looks like two with wrong indentation",
      "from": "@perlpunk",
      "tags": [
        "scalar",
        "sequence"
      ],
      "yaml": "- single multiline\n - sequence entry\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   =VAL :single multiline - sequence entry\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"single multiline - sequence entry\"\n]\n",
      "dump": "- single multiline - sequence entry\n"
    }
  ]
}

export default Test_AB8U
