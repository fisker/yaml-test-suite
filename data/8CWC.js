// Generated file, do NOT edit

export default {
  "id": "8CWC",
  "filename": "8CWC.yaml",
  "name": "Plain mapping key ending with colon",
  "from": "@perlpunk",
  "tags": [
    "mapping",
    "scalar"
  ],
  "cases": [
    {
      "name": "Plain mapping key ending with colon",
      "from": "@perlpunk",
      "tags": [
        "mapping",
        "scalar"
      ],
      "yaml": "---\nkey ends with two colons::: value\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :key ends with two colons::\n   =VAL :value\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"key ends with two colons::\": \"value\"\n}\n",
      "dump": "---\n'key ends with two colons::': value\n"
    }
  ]
}
