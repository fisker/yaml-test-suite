// Generated file, do NOT edit

declare const Test_SY6V: {
  "id": "SY6V",
  "filename": "SY6V.yaml",
  "name": "Anchor before sequence entry on same line",
  "from": "@perlpunk",
  "tags": [
    "anchor",
    "error",
    "sequence"
  ],
  "cases": [
    {
      "name": "Anchor before sequence entry on same line",
      "from": "@perlpunk",
      "tags": [
        "anchor",
        "error",
        "sequence"
      ],
      "fail": true,
      "yaml": "&anchor - sequence entry\n",
      "tree": "+STR\n"
    }
  ]
}

export default Test_SY6V
