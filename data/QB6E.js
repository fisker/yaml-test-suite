// Generated file, do NOT edit

export default {
  "filename": "QB6E.yaml",
  "name": "Wrong indented multiline quoted scalar",
  "from": "@perlpunk",
  "tags": [
    "double",
    "error",
    "indent"
  ],
  "cases": [
    {
      "name": "Wrong indented multiline quoted scalar",
      "from": "@perlpunk",
      "tags": [
        "double",
        "error",
        "indent"
      ],
      "fail": true,
      "yaml": "---\nquoted: \"a\nb\nc\"\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :quoted\n"
    }
  ]
}
