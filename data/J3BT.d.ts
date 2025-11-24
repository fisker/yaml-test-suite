// Generated file, do NOT edit

declare const Test_J3BT: {
  "id": "J3BT",
  "filename": "J3BT.yaml",
  "name": "Spec Example 5.12. Tabs and Spaces",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2775350",
  "tags": [
    "spec",
    "whitespace",
    "upto-1.2"
  ],
  "cases": [
    {
      "name": "Spec Example 5.12. Tabs and Spaces",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2775350",
      "tags": [
        "spec",
        "whitespace",
        "upto-1.2"
      ],
      "yaml": "# Tabs and spaces\nquoted: \"Quoted \t\"\nblock:\t|\n  void main() {\n  \tprintf(\"Hello, world!\\n\");\n  }\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :quoted\n   =VAL \"Quoted \\t\n   =VAL :block\n   =VAL |void main() {\\n\\tprintf(\"Hello, world!\\\\n\");\\n}\\n\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"quoted\": \"Quoted \\t\",\n  \"block\": \"void main() {\\n\\tprintf(\\\"Hello, world!\\\\n\\\");\\n}\\n\"\n}\n",
      "dump": "quoted: \"Quoted \\t\"\nblock: |\n  void main() {\n  \tprintf(\"Hello, world!\\n\");\n  }\n"
    }
  ]
}

export default Test_J3BT
