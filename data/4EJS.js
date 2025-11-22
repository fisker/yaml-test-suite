// Generated file, do NOT edit

export default {
  "filename": "4EJS.yaml",
  "name": "Invalid tabs as indendation in a mapping",
  "from": "https://github.com/nodeca/js-yaml/issues/80",
  "tags": [
    "error",
    "mapping",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Invalid tabs as indendation in a mapping",
      "from": "https://github.com/nodeca/js-yaml/issues/80",
      "tags": [
        "error",
        "mapping",
        "whitespace"
      ],
      "fail": true,
      "yaml": "---\na:\n\tb:\n\t\tc: value\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :a\n"
    }
  ]
}
