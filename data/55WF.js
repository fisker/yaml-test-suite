// Generated file, do NOT edit

export default {
  "id": "55WF",
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
