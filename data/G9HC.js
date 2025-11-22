// Generated file, do NOT edit

export default {
  "filename": "G9HC.yaml",
  "name": "Invalid anchor in zero indented sequence",
  "from": "@perlpunk",
  "tags": [
    "anchor",
    "error",
    "sequence"
  ],
  "cases": [
    {
      "name": "Invalid anchor in zero indented sequence",
      "from": "@perlpunk",
      "tags": [
        "anchor",
        "error",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\nseq:\n&anchor\n- a\n- b\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :seq\n"
    }
  ]
}
