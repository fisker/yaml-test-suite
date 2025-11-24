// Generated file, do NOT edit

declare const Test_G5U8: {
  "id": "G5U8",
  "filename": "G5U8.yaml",
  "name": "Plain dashes in flow sequence",
  "from": "@ingydotnet",
  "tags": [
    "flow",
    "sequence"
  ],
  "cases": [
    {
      "name": "Plain dashes in flow sequence",
      "from": "@ingydotnet",
      "tags": [
        "flow",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\n- [-, -]\n",
      "tree": "+STR\n +DOC ---\n  +SEQ\n   +SEQ []\n"
    }
  ]
}

export default Test_G5U8
