// Generated file, do NOT edit

declare const Test_DK3J: {
  "id": "DK3J",
  "filename": "DK3J.yaml",
  "name": "Zero indented block scalar with line that looks like a comment",
  "from": "@perlpunk",
  "tags": [
    "comment",
    "folded",
    "scalar"
  ],
  "cases": [
    {
      "name": "Zero indented block scalar with line that looks like a comment",
      "from": "@perlpunk",
      "tags": [
        "comment",
        "folded",
        "scalar"
      ],
      "yaml": "--- >\nline1\n# no comment\nline3\n",
      "tree": "+STR\n +DOC ---\n  =VAL >line1 # no comment line3\\n\n -DOC\n-STR\n",
      "json": "\"line1 # no comment line3\\n\"\n",
      "dump": "--- >\n  line1 # no comment line3\n"
    }
  ]
}

export default Test_DK3J
