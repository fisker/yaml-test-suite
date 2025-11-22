// Generated file, do NOT edit

export default {
  "filename": "M29M.yaml",
  "name": "Literal Block Scalar",
  "from": "NimYAML tests",
  "tags": [
    "literal",
    "scalar",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Literal Block Scalar",
      "from": "NimYAML tests",
      "tags": [
        "literal",
        "scalar",
        "whitespace"
      ],
      "yaml": "a: |\n ab\n \n cd\n ef\n \n\n...\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :a\n   =VAL |ab\\n\\ncd\\nef\\n\n  -MAP\n -DOC ...\n-STR\n",
      "json": "{\n  \"a\": \"ab\\n\\ncd\\nef\\n\"\n}\n",
      "dump": "a: |\n  ab\n\n  cd\n  ef\n...\n"
    }
  ]
}
