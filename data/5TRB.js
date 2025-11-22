// Generated file, do NOT edit

export default {
  "filename": "5TRB.yaml",
  "name": "Invalid document-start marker in doublequoted tring",
  "from": "@perlpunk",
  "tags": [
    "header",
    "double",
    "error"
  ],
  "cases": [
    {
      "name": "Invalid document-start marker in doublequoted tring",
      "from": "@perlpunk",
      "tags": [
        "header",
        "double",
        "error"
      ],
      "fail": true,
      "yaml": "---\n\"\n---\n\"\n",
      "tree": "+STR\n +DOC ---\n"
    }
  ]
}
