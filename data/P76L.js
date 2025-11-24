// Generated file, do NOT edit

export default {
  "id": "P76L",
  "filename": "P76L.yaml",
  "name": "Spec Example 6.19. Secondary Tag Handle",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2782940",
  "tags": [
    "spec",
    "header",
    "tag",
    "unknown-tag"
  ],
  "cases": [
    {
      "name": "Spec Example 6.19. Secondary Tag Handle",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2782940",
      "tags": [
        "spec",
        "header",
        "tag",
        "unknown-tag"
      ],
      "yaml": "%TAG !! tag:example.com,2000:app/\n---\n!!int 1 - 3 # Interval, not integer\n",
      "tree": "+STR\n +DOC ---\n  =VAL <tag:example.com,2000:app/int> :1 - 3\n -DOC\n-STR\n",
      "json": "\"1 - 3\"\n",
      "dump": "--- !<tag:example.com,2000:app/int> 1 - 3\n"
    }
  ]
}
