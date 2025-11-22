// Generated file, do NOT edit

declare const Test_GT5M: {
  "filename": "GT5M.yaml",
  "name": "Node anchor in sequence",
  "from": "@perlpunk",
  "tags": [
    "anchor",
    "error",
    "sequence"
  ],
  "cases": [
    {
      "name": "Node anchor in sequence",
      "from": "@perlpunk",
      "tags": [
        "anchor",
        "error",
        "sequence"
      ],
      "fail": true,
      "yaml": "- item1\n&node\n- item2\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   =VAL :item1\n"
    }
  ]
}

export default Test_GT5M
