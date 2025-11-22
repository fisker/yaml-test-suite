// Generated file, do NOT edit

export default {
  "filename": "6FWR.yaml",
  "name": "Block Scalar Keep",
  "from": "NimYAML tests",
  "tags": [
    "literal",
    "scalar",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Block Scalar Keep",
      "from": "NimYAML tests",
      "tags": [
        "literal",
        "scalar",
        "whitespace"
      ],
      "yaml": "--- |+\n ab\n \n  \n...\n",
      "tree": "+STR\n +DOC ---\n  =VAL |ab\\n\\n \\n\n -DOC ...\n-STR\n",
      "json": "\"ab\\n\\n \\n\"\n",
      "dump": "\"ab\\n\\n \\n\"\n...\n",
      "emit": "--- |\n  ab\n\n   \n...\n"
    }
  ]
}
