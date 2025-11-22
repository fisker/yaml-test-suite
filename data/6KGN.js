// Generated file, do NOT edit

export default {
  "filename": "6KGN.yaml",
  "name": "Anchor for empty node",
  "from": "https://github.com/nodeca/js-yaml/issues/301",
  "tags": [
    "alias",
    "anchor"
  ],
  "cases": [
    {
      "name": "Anchor for empty node",
      "from": "https://github.com/nodeca/js-yaml/issues/301",
      "tags": [
        "alias",
        "anchor"
      ],
      "yaml": "---\na: &anchor\nb: *anchor\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :a\n   =VAL &anchor :\n   =VAL :b\n   =ALI *anchor\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"a\": null,\n  \"b\": null\n}\n",
      "dump": "---\na: &anchor\nb: *anchor\n"
    }
  ]
}
