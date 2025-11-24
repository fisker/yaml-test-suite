// Generated file, do NOT edit

declare const Test_CTN5: {
  "id": "CTN5",
  "filename": "CTN5.yaml",
  "name": "Flow sequence with invalid extra comma",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "sequence"
  ],
  "cases": [
    {
      "name": "Flow sequence with invalid extra comma",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\n[ a, b, c, , ]\n",
      "tree": "+STR\n +DOC ---\n  +SEQ []\n   =VAL :a\n   =VAL :b\n   =VAL :c\n"
    }
  ]
}

export default Test_CTN5
