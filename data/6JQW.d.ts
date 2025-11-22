// Generated file, do NOT edit

declare const Test_6JQW: {
  "filename": "6JQW.yaml",
  "name": "Spec Example 2.13. In literals, newlines are preserved",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2759963",
  "tags": [
    "spec",
    "scalar",
    "literal",
    "comment"
  ],
  "cases": [
    {
      "name": "Spec Example 2.13. In literals, newlines are preserved",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2759963",
      "tags": [
        "spec",
        "scalar",
        "literal",
        "comment"
      ],
      "yaml": "# ASCII Art\n--- |\n  \\//||\\/||\n  // ||  ||__\n",
      "tree": "+STR\n +DOC ---\n  =VAL |\\\\//||\\\\/||\\n// ||  ||__\\n\n -DOC\n-STR\n",
      "json": "\"\\\\//||\\\\/||\\n// ||  ||__\\n\"\n",
      "dump": "--- |\n  \\//||\\/||\n  // ||  ||__\n"
    }
  ]
}

export default Test_6JQW
