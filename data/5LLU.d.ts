// Generated file, do NOT edit

declare const Test_5LLU: {
  "id": "5LLU",
  "filename": "5LLU.yaml",
  "name": "Block scalar with wrong indented line after spaces only",
  "from": "@perlpunk",
  "tags": [
    "error",
    "folded",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Block scalar with wrong indented line after spaces only",
      "from": "@perlpunk",
      "tags": [
        "error",
        "folded",
        "whitespace"
      ],
      "fail": true,
      "yaml": "block scalar: >\n \n  \n   \n invalid\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :block scalar\n"
    }
  ]
}

export default Test_5LLU
