// Generated file, do NOT edit

declare const Test_4HVU: {
  "filename": "4HVU.yaml",
  "name": "Wrong indendation in Sequence",
  "from": "@perlpunk",
  "tags": [
    "error",
    "sequence",
    "indent"
  ],
  "cases": [
    {
      "name": "Wrong indendation in Sequence",
      "from": "@perlpunk",
      "tags": [
        "error",
        "sequence",
        "indent"
      ],
      "fail": true,
      "yaml": "key:\n   - ok\n   - also ok\n  - wrong\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key\n   +SEQ\n    =VAL :ok\n    =VAL :also ok\n   -SEQ\n"
    }
  ]
}

export default Test_4HVU
