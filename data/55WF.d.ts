// Generated file, do NOT edit

declare const Test_55WF: {
  "filename": "55WF.yaml",
  "name": "Invalid escape in double quoted string",
  "from": "@perlpunk",
  "tags": [
    "error",
    "double"
  ],
  "cases": [
    {
      "name": "Invalid escape in double quoted string",
      "from": "@perlpunk",
      "tags": [
        "error",
        "double"
      ],
      "fail": true,
      "yaml": "---\n\"\\.\"\n",
      "tree": "+STR\n +DOC ---\n"
    }
  ]
}

export default Test_55WF
