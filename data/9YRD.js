// Generated file, do NOT edit

export default {
  "id": "9YRD",
  "filename": "9YRD.yaml",
  "name": "Multiline Scalar at Top Level",
  "from": "NimYAML tests",
  "tags": [
    "scalar",
    "whitespace",
    "1.3-err"
  ],
  "cases": [
    {
      "name": "Multiline Scalar at Top Level",
      "from": "NimYAML tests",
      "tags": [
        "scalar",
        "whitespace",
        "1.3-err"
      ],
      "yaml": "a\nb  \n  c\nd\n\ne\n",
      "tree": "+STR\n +DOC\n  =VAL :a b c d\\ne\n -DOC\n-STR\n",
      "json": "\"a b c d\\ne\"\n",
      "dump": "'a b c d\n\n  e'\n"
    }
  ]
}
