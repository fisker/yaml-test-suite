// Generated file, do NOT edit

declare const Test_6JTT: {
  "id": "6JTT",
  "filename": "6JTT.yaml",
  "name": "Flow sequence without closing bracket",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "sequence"
  ],
  "cases": [
    {
      "name": "Flow sequence without closing bracket",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\n[ [ a, b, c ]\n",
      "tree": "+STR\n +DOC ---\n  +SEQ []\n   +SEQ []\n    =VAL :a\n    =VAL :b\n    =VAL :c\n   -SEQ\n"
    }
  ]
}

export default Test_6JTT
