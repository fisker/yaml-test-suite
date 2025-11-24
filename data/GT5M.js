// Generated file, do NOT edit

export default {
  "id": "GT5M",
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
