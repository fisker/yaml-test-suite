// Generated file, do NOT edit

declare const Test_FTA2: {
  "filename": "FTA2.yaml",
  "name": "Single block sequence with anchor and explicit document start",
  "from": "@perlpunk",
  "tags": [
    "anchor",
    "header",
    "sequence"
  ],
  "cases": [
    {
      "name": "Single block sequence with anchor and explicit document start",
      "from": "@perlpunk",
      "tags": [
        "anchor",
        "header",
        "sequence"
      ],
      "yaml": "--- &sequence\n- a\n",
      "tree": "+STR\n +DOC ---\n  +SEQ &sequence\n   =VAL :a\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"a\"\n]\n",
      "dump": "--- &sequence\n- a\n"
    }
  ]
}

export default Test_FTA2
