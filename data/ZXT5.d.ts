// Generated file, do NOT edit

declare const Test_ZXT5: {
  "filename": "ZXT5.yaml",
  "name": "Implicit key followed by newline and adjacent value",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "mapping",
    "sequence"
  ],
  "cases": [
    {
      "name": "Implicit key followed by newline and adjacent value",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "mapping",
        "sequence"
      ],
      "fail": true,
      "yaml": "[ \"key\"\n  :value ]\n",
      "tree": "+STR\n +DOC\n  +SEQ []\n   =VAL \"key\n"
    }
  ]
}

export default Test_ZXT5
