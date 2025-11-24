// Generated file, do NOT edit

export default {
  "id": "TD5N",
  "filename": "TD5N.yaml",
  "name": "Invalid scalar after sequence",
  "from": "@perlpunk",
  "tags": [
    "error",
    "sequence",
    "scalar"
  ],
  "cases": [
    {
      "name": "Invalid scalar after sequence",
      "from": "@perlpunk",
      "tags": [
        "error",
        "sequence",
        "scalar"
      ],
      "fail": true,
      "yaml": "- item1\n- item2\ninvalid\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   =VAL :item1\n   =VAL :item2\n"
    }
  ]
}
