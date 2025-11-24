// Generated file, do NOT edit

declare const Test_BF9H: {
  "id": "BF9H",
  "filename": "BF9H.yaml",
  "name": "Trailing comment in multiline plain scalar",
  "from": "@perlpunk",
  "tags": [
    "comment",
    "error",
    "scalar"
  ],
  "cases": [
    {
      "name": "Trailing comment in multiline plain scalar",
      "from": "@perlpunk",
      "tags": [
        "comment",
        "error",
        "scalar"
      ],
      "fail": true,
      "yaml": "---\nplain: a\n       b # end of scalar\n       c\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :plain\n   =VAL :a b\n"
    }
  ]
}

export default Test_BF9H
