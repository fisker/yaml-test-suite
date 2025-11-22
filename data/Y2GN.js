// Generated file, do NOT edit

export default {
  "filename": "Y2GN.yaml",
  "name": "Anchor with colon in the middle",
  "from": "@perlpunk",
  "tags": [
    "anchor"
  ],
  "cases": [
    {
      "name": "Anchor with colon in the middle",
      "from": "@perlpunk",
      "tags": [
        "anchor"
      ],
      "yaml": "---\nkey: &an:chor value\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :key\n   =VAL &an:chor :value\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"key\": \"value\"\n}\n",
      "dump": "---\nkey: &an:chor value\n"
    }
  ]
}
