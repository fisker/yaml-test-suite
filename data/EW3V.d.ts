// Generated file, do NOT edit

declare const Test_EW3V: {
  "id": "EW3V",
  "filename": "EW3V.yaml",
  "name": "Wrong indendation in mapping",
  "from": "@perlpunk",
  "tags": [
    "error",
    "mapping",
    "indent"
  ],
  "cases": [
    {
      "name": "Wrong indendation in mapping",
      "from": "@perlpunk",
      "tags": [
        "error",
        "mapping",
        "indent"
      ],
      "fail": true,
      "yaml": "k1: v1\n k2: v2\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :k1\n"
    }
  ]
}

export default Test_EW3V
