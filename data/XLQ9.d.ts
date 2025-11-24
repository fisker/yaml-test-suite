// Generated file, do NOT edit

declare const Test_XLQ9: {
  "id": "XLQ9",
  "filename": "XLQ9.yaml",
  "name": "Multiline scalar that looks like a YAML directive",
  "from": "@perlpunk",
  "tags": [
    "directive",
    "scalar"
  ],
  "cases": [
    {
      "name": "Multiline scalar that looks like a YAML directive",
      "from": "@perlpunk",
      "tags": [
        "directive",
        "scalar"
      ],
      "yaml": "---\nscalar\n%YAML 1.2\n",
      "tree": "+STR\n +DOC ---\n  =VAL :scalar %YAML 1.2\n -DOC\n-STR\n",
      "json": "\"scalar %YAML 1.2\"\n",
      "dump": "--- scalar %YAML 1.2\n...\n"
    }
  ]
}

export default Test_XLQ9
