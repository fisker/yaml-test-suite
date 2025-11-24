// Generated file, do NOT edit

export default {
  "id": "T833",
  "filename": "T833.yaml",
  "name": "Flow mapping missing a separating comma",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "mapping"
  ],
  "cases": [
    {
      "name": "Flow mapping missing a separating comma",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "mapping"
      ],
      "fail": true,
      "yaml": "---\n{\n foo: 1\n bar: 2 }\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :foo\n"
    }
  ]
}
