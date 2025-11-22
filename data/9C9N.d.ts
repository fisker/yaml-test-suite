// Generated file, do NOT edit

declare const Test_9C9N: {
  "filename": "9C9N.yaml",
  "name": "Wrong indented flow sequence",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "indent",
    "sequence"
  ],
  "cases": [
    {
      "name": "Wrong indented flow sequence",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "indent",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\nflow: [a,\nb,\nc]\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :flow\n   +SEQ []\n    =VAL :a\n"
    }
  ]
}

export default Test_9C9N
