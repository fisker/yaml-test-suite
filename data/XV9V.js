// Generated file, do NOT edit

export default {
  "filename": "XV9V.yaml",
  "name": "Spec Example 6.5. Empty Lines [1.3]",
  "from": "5GBF, modified for YAML 1.3",
  "tags": [
    "literal",
    "spec",
    "scalar",
    "1.3-mod"
  ],
  "cases": [
    {
      "name": "Spec Example 6.5. Empty Lines [1.3]",
      "from": "5GBF, modified for YAML 1.3",
      "tags": [
        "literal",
        "spec",
        "scalar",
        "1.3-mod"
      ],
      "yaml": "Folding:\n  \"Empty line\n\n  as a line feed\"\nChomping: |\n  Clipped empty lines\n \n\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :Folding\n   =VAL \"Empty line\\nas a line feed\n   =VAL :Chomping\n   =VAL |Clipped empty lines\\n\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"Folding\": \"Empty line\\nas a line feed\",\n  \"Chomping\": \"Clipped empty lines\\n\"\n}\n",
      "dump": "Folding: \"Empty line\\nas a line feed\"\nChomping: |\n  Clipped empty lines\n"
    }
  ]
}
