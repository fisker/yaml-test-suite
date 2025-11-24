// Generated file, do NOT edit

declare const Test_2LFX: {
  "id": "2LFX",
  "filename": "2LFX.yaml",
  "name": "Spec Example 6.13. Reserved Directives [1.3]",
  "from": "6LVF, modified for YAML 1.3",
  "tags": [
    "spec",
    "directive",
    "header",
    "double",
    "1.3-mod"
  ],
  "cases": [
    {
      "name": "Spec Example 6.13. Reserved Directives [1.3]",
      "from": "6LVF, modified for YAML 1.3",
      "tags": [
        "spec",
        "directive",
        "header",
        "double",
        "1.3-mod"
      ],
      "yaml": "%FOO  bar baz # Should be ignored\n              # with a warning.\n---\n\"foo\"\n",
      "tree": "+STR\n +DOC ---\n  =VAL \"foo\n -DOC\n-STR\n",
      "json": "\"foo\"\n",
      "dump": "---\n\"foo\"\n",
      "emit": "--- \"foo\"\n"
    }
  ]
}

export default Test_2LFX
