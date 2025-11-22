// Generated file, do NOT edit

export default {
  "filename": "2JQS.yaml",
  "name": "Block Mapping with Missing Keys",
  "from": "NimYAML tests",
  "tags": [
    "duplicate-key",
    "mapping",
    "empty-key"
  ],
  "cases": [
    {
      "name": "Block Mapping with Missing Keys",
      "from": "NimYAML tests",
      "tags": [
        "duplicate-key",
        "mapping",
        "empty-key"
      ],
      "yaml": ": a\n: b\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :\n   =VAL :a\n   =VAL :\n   =VAL :b\n  -MAP\n -DOC\n-STR\n"
    }
  ]
}
