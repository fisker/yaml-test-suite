// Generated file, do NOT edit

declare const Test_6PBE: {
  "id": "6PBE",
  "filename": "6PBE.yaml",
  "name": "Zero-indented sequences in explicit mapping keys",
  "from": "@perlpunk",
  "tags": [
    "explicit-key",
    "mapping",
    "sequence"
  ],
  "cases": [
    {
      "name": "Zero-indented sequences in explicit mapping keys",
      "from": "@perlpunk",
      "tags": [
        "explicit-key",
        "mapping",
        "sequence"
      ],
      "yaml": "---\n?\n- a\n- b\n:\n- c\n- d\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   +SEQ\n    =VAL :a\n    =VAL :b\n   -SEQ\n   +SEQ\n    =VAL :c\n    =VAL :d\n   -SEQ\n  -MAP\n -DOC\n-STR\n",
      "emit": "---\n? - a\n  - b\n: - c\n  - d\n"
    }
  ]
}

export default Test_6PBE
