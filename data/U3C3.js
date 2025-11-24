// Generated file, do NOT edit

export default {
  "id": "U3C3",
  "filename": "U3C3.yaml",
  "name": "Spec Example 6.16. “TAG” directive",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2782252",
  "tags": [
    "spec",
    "header",
    "tag"
  ],
  "cases": [
    {
      "name": "Spec Example 6.16. “TAG” directive",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2782252",
      "tags": [
        "spec",
        "header",
        "tag"
      ],
      "yaml": "%TAG !yaml! tag:yaml.org,2002:\n---\n!yaml!str \"foo\"\n",
      "tree": "+STR\n +DOC ---\n  =VAL <tag:yaml.org,2002:str> \"foo\n -DOC\n-STR\n",
      "json": "\"foo\"\n",
      "dump": "--- !!str \"foo\"\n"
    }
  ]
}
