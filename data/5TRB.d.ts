// Generated file, do NOT edit

declare const Test_5TRB: {
  "id": "5TRB",
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

export default Test_5TRB
