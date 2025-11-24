// Generated file, do NOT edit

export default {
  "id": "NHX8",
  "filename": "NHX8.yaml",
  "name": "Empty Lines at End of Document",
  "from": "NimYAML tests",
  "tags": [
    "empty-key",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Empty Lines at End of Document",
      "from": "NimYAML tests",
      "tags": [
        "empty-key",
        "whitespace"
      ],
      "yaml": ":\n\n\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :\n   =VAL :\n  -MAP\n -DOC\n-STR\n",
      "emit": ":\n"
    }
  ]
}
