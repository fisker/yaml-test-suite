// Generated file, do NOT edit

declare const Test_Q8AD: {
  "filename": "Q8AD.yaml",
  "name": "Spec Example 7.5. Double Quoted Line Breaks [1.3]",
  "from": "NP9H, modified for YAML 1.3",
  "tags": [
    "double",
    "spec",
    "scalar",
    "whitespace",
    "1.3-mod"
  ],
  "cases": [
    {
      "name": "Spec Example 7.5. Double Quoted Line Breaks [1.3]",
      "from": "NP9H, modified for YAML 1.3",
      "tags": [
        "double",
        "spec",
        "scalar",
        "whitespace",
        "1.3-mod"
      ],
      "yaml": "---\n\"folded \nto a space,\n \nto a line feed, or \t\\\n \\ \tnon-content\"\n",
      "tree": "+STR\n +DOC ---\n  =VAL \"folded to a space,\\nto a line feed, or \\t \\tnon-content\n -DOC\n-STR\n",
      "json": "\"folded to a space,\\nto a line feed, or \\t \\tnon-content\"\n",
      "dump": "\"folded to a space,\\nto a line feed, or \\t \\tnon-content\"\n",
      "emit": "--- \"folded to a space,\\nto a line feed, or \\t \\tnon-content\"\n"
    }
  ]
}

export default Test_Q8AD
