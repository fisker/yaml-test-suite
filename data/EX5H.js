// Generated file, do NOT edit

export default {
  "id": "EX5H",
  "filename": "EX5H.yaml",
  "name": "Multiline Scalar at Top Level [1.3]",
  "from": "9YRD, modified for YAML 1.3",
  "tags": [
    "scalar",
    "whitespace",
    "1.3-mod"
  ],
  "cases": [
    {
      "name": "Multiline Scalar at Top Level [1.3]",
      "from": "9YRD, modified for YAML 1.3",
      "tags": [
        "scalar",
        "whitespace",
        "1.3-mod"
      ],
      "yaml": "---\na\nb  \n  c\nd\n\ne\n",
      "tree": "+STR\n +DOC ---\n  =VAL :a b c d\\ne\n -DOC\n-STR\n",
      "json": "\"a b c d\\ne\"\n",
      "dump": "'a b c d\n\n  e'\n",
      "emit": "--- a b c d\n\ne\n"
    }
  ]
}
