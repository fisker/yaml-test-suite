// Generated file, do NOT edit

declare const Test_T26H: {
  "id": "T26H",
  "filename": "T26H.yaml",
  "name": "Spec Example 8.8. Literal Content [1.3]",
  "from": "DWX9, modified for YAML 1.3",
  "tags": [
    "spec",
    "literal",
    "scalar",
    "comment",
    "whitespace",
    "1.3-mod"
  ],
  "cases": [
    {
      "name": "Spec Example 8.8. Literal Content [1.3]",
      "from": "DWX9, modified for YAML 1.3",
      "tags": [
        "spec",
        "literal",
        "scalar",
        "comment",
        "whitespace",
        "1.3-mod"
      ],
      "yaml": "--- |\n \n  \n  literal\n   \n  \n  text\n\n # Comment\n",
      "tree": "+STR\n +DOC ---\n  =VAL |\\n\\nliteral\\n \\n\\ntext\\n\n -DOC\n-STR\n",
      "json": "\"\\n\\nliteral\\n \\n\\ntext\\n\"\n",
      "dump": "\"\\n\\nliteral\\n \\n\\ntext\\n\"\n",
      "emit": "--- |\n\n\n  literal\n   \n\n  text\n"
    }
  ]
}

export default Test_T26H
