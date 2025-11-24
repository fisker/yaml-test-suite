// Generated file, do NOT edit

declare const Test_RTP8: {
  "id": "RTP8",
  "filename": "RTP8.yaml",
  "name": "Spec Example 9.2. Document Markers",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2800866",
  "tags": [
    "spec",
    "header",
    "footer"
  ],
  "cases": [
    {
      "name": "Spec Example 9.2. Document Markers",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2800866",
      "tags": [
        "spec",
        "header",
        "footer"
      ],
      "yaml": "%YAML 1.2\n---\nDocument\n... # Suffix\n",
      "tree": "+STR\n +DOC ---\n  =VAL :Document\n -DOC ...\n-STR\n",
      "json": "\"Document\"\n",
      "dump": "--- Document\n...\n"
    }
  ]
}

export default Test_RTP8
