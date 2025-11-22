// Generated file, do NOT edit

declare const Test_B3HG: {
  "filename": "B3HG.yaml",
  "name": "Spec Example 8.9. Folded Scalar [1.3]",
  "from": "G992, modified for YAML 1.3",
  "tags": [
    "spec",
    "folded",
    "scalar",
    "1.3-mod"
  ],
  "cases": [
    {
      "name": "Spec Example 8.9. Folded Scalar [1.3]",
      "from": "G992, modified for YAML 1.3",
      "tags": [
        "spec",
        "folded",
        "scalar",
        "1.3-mod"
      ],
      "yaml": "--- >\n folded\n text\n\n\n",
      "tree": "+STR\n +DOC ---\n  =VAL >folded text\\n\n -DOC\n-STR\n",
      "json": "\"folded text\\n\"\n",
      "dump": ">\n  folded text\n",
      "emit": "--- >\n  folded text\n"
    }
  ]
}

export default Test_B3HG
