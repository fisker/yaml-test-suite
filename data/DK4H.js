// Generated file, do NOT edit

export default {
  "filename": "DK4H.yaml",
  "name": "Implicit key followed by newline",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "mapping",
    "sequence"
  ],
  "cases": [
    {
      "name": "Implicit key followed by newline",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "mapping",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\n[ key\n  : value ]\n",
      "tree": "+STR\n +DOC ---\n  +SEQ []\n   =VAL :key\n"
    }
  ]
}
