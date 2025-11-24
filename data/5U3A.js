// Generated file, do NOT edit

export default {
  "id": "5U3A",
  "filename": "5U3A.yaml",
  "name": "Sequence on same Line as Mapping Key",
  "from": "@perlpunk",
  "tags": [
    "error",
    "sequence",
    "mapping"
  ],
  "cases": [
    {
      "name": "Sequence on same Line as Mapping Key",
      "from": "@perlpunk",
      "tags": [
        "error",
        "sequence",
        "mapping"
      ],
      "fail": true,
      "yaml": "key: - a\n     - b\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key\n"
    }
  ]
}
