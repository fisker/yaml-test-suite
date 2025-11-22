// Generated file, do NOT edit

declare const Test_6ZKB: {
  "filename": "6ZKB.yaml",
  "name": "Spec Example 9.6. Stream",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2801896",
  "tags": [
    "spec",
    "header",
    "1.3-err"
  ],
  "cases": [
    {
      "name": "Spec Example 9.6. Stream",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2801896",
      "tags": [
        "spec",
        "header",
        "1.3-err"
      ],
      "yaml": "Document\n---\n# Empty\n...\n%YAML 1.2\n---\nmatches %: 20\n",
      "tree": "+STR\n +DOC\n  =VAL :Document\n -DOC\n +DOC ---\n  =VAL :\n -DOC ...\n +DOC ---\n  +MAP\n   =VAL :matches %\n   =VAL :20\n  -MAP\n -DOC\n-STR\n",
      "json": "\"Document\"\nnull\n{\n  \"matches %\": 20\n}\n",
      "emit": "Document\n---\n...\n%YAML 1.2\n---\nmatches %: 20\n"
    }
  ]
}

export default Test_6ZKB
