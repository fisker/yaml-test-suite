// Generated file, do NOT edit

export default {
  "filename": "4ZYM.yaml",
  "name": "Spec Example 6.4. Line Prefixes",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2778720",
  "tags": [
    "spec",
    "scalar",
    "literal",
    "double",
    "upto-1.2",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Spec Example 6.4. Line Prefixes",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2778720",
      "tags": [
        "spec",
        "scalar",
        "literal",
        "double",
        "upto-1.2",
        "whitespace"
      ],
      "yaml": "plain: text\n  lines\nquoted: \"text\n  \tlines\"\nblock: |\n  text\n   \tlines\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :plain\n   =VAL :text lines\n   =VAL :quoted\n   =VAL \"text lines\n   =VAL :block\n   =VAL |text\\n \\tlines\\n\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"plain\": \"text lines\",\n  \"quoted\": \"text lines\",\n  \"block\": \"text\\n \\tlines\\n\"\n}\n",
      "dump": "plain: text lines\nquoted: \"text lines\"\nblock: \"text\\n \\tlines\\n\"\n",
      "emit": "plain: text lines\nquoted: \"text lines\"\nblock: |\n  text\n   \tlines\n"
    }
  ]
}
