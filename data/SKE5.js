// Generated file, do NOT edit

export default {
  "filename": "SKE5.yaml",
  "name": "Anchor before zero indented sequence",
  "from": "@perlpunk",
  "tags": [
    "anchor",
    "indent",
    "sequence"
  ],
  "cases": [
    {
      "name": "Anchor before zero indented sequence",
      "from": "@perlpunk",
      "tags": [
        "anchor",
        "indent",
        "sequence"
      ],
      "yaml": "---\nseq:\n &anchor\n- a\n- b\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :seq\n   +SEQ &anchor\n    =VAL :a\n    =VAL :b\n   -SEQ\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"seq\": [\n    \"a\",\n    \"b\"\n  ]\n}\n",
      "dump": "---\nseq: &anchor\n- a\n- b\n"
    }
  ]
}
