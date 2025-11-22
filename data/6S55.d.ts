// Generated file, do NOT edit

declare const Test_6S55: {
  "filename": "6S55.yaml",
  "name": "Invalid scalar at the end of sequence",
  "from": "@perlpunk",
  "tags": [
    "error",
    "mapping",
    "sequence"
  ],
  "cases": [
    {
      "name": "Invalid scalar at the end of sequence",
      "from": "@perlpunk",
      "tags": [
        "error",
        "mapping",
        "sequence"
      ],
      "fail": true,
      "yaml": "key:\n - bar\n - baz\n invalid\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key\n   +SEQ\n    =VAL :bar\n    =VAL :baz\n"
    }
  ]
}

export default Test_6S55
