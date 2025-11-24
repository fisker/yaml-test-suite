// Generated file, do NOT edit

export default {
  "id": "6M2F",
  "filename": "6M2F.yaml",
  "name": "Aliases in Explicit Block Mapping",
  "from": "NimYAML tests",
  "tags": [
    "alias",
    "explicit-key",
    "empty-key"
  ],
  "cases": [
    {
      "name": "Aliases in Explicit Block Mapping",
      "from": "NimYAML tests",
      "tags": [
        "alias",
        "explicit-key",
        "empty-key"
      ],
      "yaml": "? &a a\n: &b b\n: *a\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL &a :a\n   =VAL &b :b\n   =VAL :\n   =ALI *a\n  -MAP\n -DOC\n-STR\n",
      "dump": "&a a: &b b\n: *a\n"
    }
  ]
}
