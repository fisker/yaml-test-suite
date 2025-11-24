// Generated file, do NOT edit

declare const Test_W4TN: {
  "id": "W4TN",
  "filename": "W4TN.yaml",
  "name": "Spec Example 9.5. Directives Documents",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2801606",
  "tags": [
    "spec",
    "header",
    "footer",
    "1.3-err"
  ],
  "cases": [
    {
      "name": "Spec Example 9.5. Directives Documents",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2801606",
      "tags": [
        "spec",
        "header",
        "footer",
        "1.3-err"
      ],
      "yaml": "%YAML 1.2\n--- |\n%!PS-Adobe-2.0\n...\n%YAML 1.2\n---\n# Empty\n...\n",
      "tree": "+STR\n +DOC ---\n  =VAL |%!PS-Adobe-2.0\\n\n -DOC ...\n +DOC ---\n  =VAL :\n -DOC ...\n-STR\n",
      "json": "\"%!PS-Adobe-2.0\\n\"\nnull\n",
      "dump": "--- |\n  %!PS-Adobe-2.0\n...\n---\n...\n"
    }
  ]
}

export default Test_W4TN
