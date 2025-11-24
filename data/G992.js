// Generated file, do NOT edit

export default {
  "id": "G992",
  "filename": "G992.yaml",
  "name": "Spec Example 8.9. Folded Scalar",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2796371",
  "tags": [
    "spec",
    "folded",
    "scalar",
    "1.3-err"
  ],
  "cases": [
    {
      "name": "Spec Example 8.9. Folded Scalar",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2796371",
      "tags": [
        "spec",
        "folded",
        "scalar",
        "1.3-err"
      ],
      "yaml": ">\n folded\n text\n\n\n",
      "tree": "+STR\n +DOC\n  =VAL >folded text\\n\n -DOC\n-STR\n",
      "json": "\"folded text\\n\"\n",
      "dump": ">\n  folded text\n"
    }
  ]
}
