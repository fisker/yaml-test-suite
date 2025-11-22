// Generated file, do NOT edit

export default {
  "filename": "SR86.yaml",
  "name": "Anchor plus Alias",
  "from": "@perlpunk",
  "tags": [
    "alias",
    "error"
  ],
  "cases": [
    {
      "name": "Anchor plus Alias",
      "from": "@perlpunk",
      "tags": [
        "alias",
        "error"
      ],
      "fail": true,
      "yaml": "key1: &a value\nkey2: &b *a\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key1\n   =VAL &a :value\n   =VAL :key2\n"
    }
  ]
}
