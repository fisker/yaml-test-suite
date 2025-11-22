// Generated file, do NOT edit

declare const Test_NP9H: {
  "filename": "NP9H.yaml",
  "name": "Spec Example 7.5. Double Quoted Line Breaks",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2787745",
  "tags": [
    "double",
    "spec",
    "scalar",
    "whitespace",
    "upto-1.2"
  ],
  "cases": [
    {
      "name": "Spec Example 7.5. Double Quoted Line Breaks",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2787745",
      "tags": [
        "double",
        "spec",
        "scalar",
        "whitespace",
        "upto-1.2"
      ],
      "yaml": "\"folded \nto a space,\t\n \nto a line feed, or \t\\\n \\ \tnon-content\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"folded to a space,\\nto a line feed, or \\t \\tnon-content\n -DOC\n-STR\n",
      "json": "\"folded to a space,\\nto a line feed, or \\t \\tnon-content\"\n",
      "dump": "\"folded to a space,\\nto a line feed, or \\t \\tnon-content\"\n"
    }
  ]
}

export default Test_NP9H
