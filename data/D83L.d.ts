// Generated file, do NOT edit

declare const Test_D83L: {
  "filename": "D83L.yaml",
  "name": "Block scalar indicator order",
  "from": "@perlpunk",
  "tags": [
    "indent",
    "literal"
  ],
  "cases": [
    {
      "name": "Block scalar indicator order",
      "from": "@perlpunk",
      "tags": [
        "indent",
        "literal"
      ],
      "yaml": "- |2-\n  explicit indent and chomp\n- |-2\n  chomp and explicit indent\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   =VAL |explicit indent and chomp\n   =VAL |chomp and explicit indent\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"explicit indent and chomp\",\n  \"chomp and explicit indent\"\n]\n",
      "dump": "- |-\n  explicit indent and chomp\n- |-\n  chomp and explicit indent\n"
    }
  ]
}

export default Test_D83L
