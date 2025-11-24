// Generated file, do NOT edit

export default {
  "id": "NB6Z",
  "filename": "NB6Z.yaml",
  "name": "Multiline plain value with tabs on empty lines",
  "from": "@perlpunk",
  "tags": [
    "scalar",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Multiline plain value with tabs on empty lines",
      "from": "@perlpunk",
      "tags": [
        "scalar",
        "whitespace"
      ],
      "yaml": "key:\n  value\n  with\n  \t\n  tabs\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key\n   =VAL :value with\\ntabs\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"key\": \"value with\\ntabs\"\n}\n",
      "dump": "key: 'value with\n\n  tabs'\n"
    }
  ]
}
