// Generated file, do NOT edit

declare const Test_5GBF: {
  "filename": "5GBF.yaml",
  "name": "Spec Example 6.5. Empty Lines",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2778971",
  "tags": [
    "double",
    "literal",
    "spec",
    "scalar",
    "upto-1.2",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Spec Example 6.5. Empty Lines",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2778971",
      "tags": [
        "double",
        "literal",
        "spec",
        "scalar",
        "upto-1.2",
        "whitespace"
      ],
      "yaml": "Folding:\n  \"Empty line\n   \t\n  as a line feed\"\nChomping: |\n  Clipped empty lines\n \n\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :Folding\n   =VAL \"Empty line\\nas a line feed\n   =VAL :Chomping\n   =VAL |Clipped empty lines\\n\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"Folding\": \"Empty line\\nas a line feed\",\n  \"Chomping\": \"Clipped empty lines\\n\"\n}\n",
      "dump": "Folding: \"Empty line\\nas a line feed\"\nChomping: |\n  Clipped empty lines\n"
    }
  ]
}

export default Test_5GBF
