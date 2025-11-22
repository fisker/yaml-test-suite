// Generated file, do NOT edit

declare const Test_7MNF: {
  "filename": "7MNF.yaml",
  "name": "Missing colon",
  "from": "@perlpunk",
  "tags": [
    "error",
    "mapping"
  ],
  "cases": [
    {
      "name": "Missing colon",
      "from": "@perlpunk",
      "tags": [
        "error",
        "mapping"
      ],
      "fail": true,
      "yaml": "top1:\n  key1: val1\ntop2\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :top1\n   +MAP\n    =VAL :key1\n    =VAL :val1\n   -MAP\n"
    }
  ]
}

export default Test_7MNF
