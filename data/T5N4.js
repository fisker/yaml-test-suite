// Generated file, do NOT edit

export default {
  "id": "T5N4",
  "filename": "T5N4.yaml",
  "name": "Spec Example 8.7. Literal Scalar [1.3]",
  "from": "M9B4, modified for YAML 1.3",
  "tags": [
    "spec",
    "literal",
    "scalar",
    "whitespace",
    "1.3-mod"
  ],
  "cases": [
    {
      "name": "Spec Example 8.7. Literal Scalar [1.3]",
      "from": "M9B4, modified for YAML 1.3",
      "tags": [
        "spec",
        "literal",
        "scalar",
        "whitespace",
        "1.3-mod"
      ],
      "yaml": "--- |\n literal\n \ttext\n\n\n",
      "tree": "+STR\n +DOC ---\n  =VAL |literal\\n\\ttext\\n\n -DOC\n-STR\n",
      "json": "\"literal\\n\\ttext\\n\"\n",
      "dump": "\"literal\\n\\ttext\\n\"\n",
      "emit": "--- |\n  literal\n  \ttext\n"
    }
  ]
}
