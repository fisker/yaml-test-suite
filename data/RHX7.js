// Generated file, do NOT edit

export default {
  "id": "RHX7",
  "filename": "RHX7.yaml",
  "name": "YAML directive without document end marker",
  "from": "@perlpunk",
  "tags": [
    "directive",
    "error"
  ],
  "cases": [
    {
      "name": "YAML directive without document end marker",
      "from": "@perlpunk",
      "tags": [
        "directive",
        "error"
      ],
      "fail": true,
      "yaml": "---\nkey: value\n%YAML 1.2\n---\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :key\n   =VAL :value\n"
    }
  ]
}
