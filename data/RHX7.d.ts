// Generated file, do NOT edit

declare const Test_RHX7: {
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

export default Test_RHX7
