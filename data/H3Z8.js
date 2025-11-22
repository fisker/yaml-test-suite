// Generated file, do NOT edit

export default {
  "filename": "H3Z8.yaml",
  "name": "Literal unicode",
  "from": "@perlpunk",
  "tags": [
    "scalar"
  ],
  "cases": [
    {
      "name": "Literal unicode",
      "from": "@perlpunk",
      "tags": [
        "scalar"
      ],
      "yaml": "---\nwanted: love ♥ and peace ☮\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :wanted\n   =VAL :love ♥ and peace ☮\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"wanted\": \"love ♥ and peace ☮\"\n}\n",
      "dump": "---\nwanted: \"love \\u2665 and peace \\u262E\"\n"
    }
  ]
}
