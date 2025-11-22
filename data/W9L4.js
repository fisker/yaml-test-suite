// Generated file, do NOT edit

export default {
  "filename": "W9L4.yaml",
  "name": "Literal block scalar with more spaces in first line",
  "from": "@perlpunk",
  "tags": [
    "error",
    "literal",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Literal block scalar with more spaces in first line",
      "from": "@perlpunk",
      "tags": [
        "error",
        "literal",
        "whitespace"
      ],
      "fail": true,
      "yaml": "---\nblock scalar: |\n     \n  more spaces at the beginning\n  are invalid\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :block scalar\n"
    }
  ]
}
