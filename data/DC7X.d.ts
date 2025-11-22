// Generated file, do NOT edit

declare const Test_DC7X: {
  "filename": "DC7X.yaml",
  "name": "Various trailing tabs",
  "from": "@perlpunk",
  "tags": [
    "comment",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Various trailing tabs",
      "from": "@perlpunk",
      "tags": [
        "comment",
        "whitespace"
      ],
      "yaml": "a: b\t\nseq:\t\n - a\t\nc: d\t#X\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :a\n   =VAL :b\n   =VAL :seq\n   +SEQ\n    =VAL :a\n   -SEQ\n   =VAL :c\n   =VAL :d\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"a\": \"b\",\n  \"seq\": [\n    \"a\"\n  ],\n  \"c\": \"d\"\n}\n",
      "dump": "a: b\nseq:\n- a\nc: d\n"
    }
  ]
}

export default Test_DC7X
