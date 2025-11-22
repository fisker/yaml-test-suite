// Generated file, do NOT edit

declare const Test_KS4U: {
  "filename": "KS4U.yaml",
  "name": "Invalid item after end of flow sequence",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "sequence"
  ],
  "cases": [
    {
      "name": "Invalid item after end of flow sequence",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\n[\nsequence item\n]\ninvalid item\n",
      "tree": "+STR\n +DOC ---\n  +SEQ []\n   =VAL :sequence item\n  -SEQ\n"
    }
  ]
}

export default Test_KS4U
