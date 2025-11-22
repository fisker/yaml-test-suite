// Generated file, do NOT edit

declare const Test_V55R: {
  "filename": "V55R.yaml",
  "name": "Aliases in Block Sequence",
  "from": "NimYAML tests",
  "tags": [
    "alias",
    "sequence"
  ],
  "cases": [
    {
      "name": "Aliases in Block Sequence",
      "from": "NimYAML tests",
      "tags": [
        "alias",
        "sequence"
      ],
      "yaml": "- &a a\n- &b b\n- *a\n- *b\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   =VAL &a :a\n   =VAL &b :b\n   =ALI *a\n   =ALI *b\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"a\",\n  \"b\",\n  \"a\",\n  \"b\"\n]\n"
    }
  ]
}

export default Test_V55R
