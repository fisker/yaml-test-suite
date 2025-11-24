// Generated file, do NOT edit

export default {
  "id": "5NYZ",
  "filename": "5NYZ.yaml",
  "name": "Spec Example 6.9. Separated Comment",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2780342",
  "tags": [
    "mapping",
    "spec",
    "comment"
  ],
  "cases": [
    {
      "name": "Spec Example 6.9. Separated Comment",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2780342",
      "tags": [
        "mapping",
        "spec",
        "comment"
      ],
      "yaml": "key:    # Comment\n  value\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key\n   =VAL :value\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"key\": \"value\"\n}\n",
      "dump": "key: value\n"
    }
  ]
}
