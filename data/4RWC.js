// Generated file, do NOT edit

export default {
  "filename": "4RWC.yaml",
  "name": "Trailing spaces after flow collection",
  "from": "@ingydotnet",
  "tags": [
    "flow",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Trailing spaces after flow collection",
      "tags": [
        "flow",
        "whitespace"
      ],
      "from": "@ingydotnet",
      "yaml": "  [1, 2, 3]  \n  ",
      "tree": "+STR\n +DOC\n  +SEQ []\n   =VAL :1\n   =VAL :2\n   =VAL :3\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  1,\n  2,\n  3\n]\n",
      "dump": "- 1\n- 2\n- 3\n"
    }
  ]
}
