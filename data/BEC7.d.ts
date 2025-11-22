// Generated file, do NOT edit

declare const Test_BEC7: {
  "filename": "BEC7.yaml",
  "name": "Spec Example 6.14. “YAML” directive",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2781929",
  "tags": [
    "spec",
    "directive"
  ],
  "cases": [
    {
      "name": "Spec Example 6.14. “YAML” directive",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2781929",
      "tags": [
        "spec",
        "directive"
      ],
      "yaml": "%YAML 1.3 # Attempt parsing\n          # with a warning\n---\n\"foo\"\n",
      "tree": "+STR\n +DOC ---\n  =VAL \"foo\n -DOC\n-STR\n",
      "json": "\"foo\"\n",
      "dump": "--- \"foo\"\n"
    }
  ]
}

export default Test_BEC7
