// Generated file, do NOT edit

declare const Test_4EJS: {
  "id": "4EJS",
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

export default Test_4EJS
