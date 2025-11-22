// Generated file, do NOT edit

export default {
  "filename": "3R3P.yaml",
  "name": "Single block sequence with anchor",
  "from": "@perlpunk",
  "tags": [
    "anchor",
    "sequence"
  ],
  "cases": [
    {
      "name": "Single block sequence with anchor",
      "from": "@perlpunk",
      "tags": [
        "anchor",
        "sequence"
      ],
      "yaml": "&sequence\n- a\n",
      "tree": "+STR\n +DOC\n  +SEQ &sequence\n   =VAL :a\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"a\"\n]\n",
      "dump": "&sequence\n- a\n"
    }
  ]
}
