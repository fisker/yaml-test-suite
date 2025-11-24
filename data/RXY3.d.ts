// Generated file, do NOT edit

declare const Test_RXY3: {
  "id": "RXY3",
  "filename": "RXY3.yaml",
  "name": "Invalid document-end marker in single quoted string",
  "from": "@perlpunk",
  "tags": [
    "footer",
    "single",
    "error"
  ],
  "cases": [
    {
      "name": "Invalid document-end marker in single quoted string",
      "from": "@perlpunk",
      "tags": [
        "footer",
        "single",
        "error"
      ],
      "fail": true,
      "yaml": "---\n'\n...\n'\n",
      "tree": "+STR\n +DOC ---\n"
    }
  ]
}

export default Test_RXY3
