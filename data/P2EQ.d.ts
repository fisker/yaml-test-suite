// Generated file, do NOT edit

declare const Test_P2EQ: {
  "id": "P2EQ",
  "filename": "P2EQ.yaml",
  "name": "Invalid sequene item on same line as previous item",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "mapping",
    "sequence"
  ],
  "cases": [
    {
      "name": "Invalid sequene item on same line as previous item",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "mapping",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\n- { y: z }- invalid\n",
      "tree": "+STR\n +DOC ---\n  +SEQ\n   +MAP {}\n    =VAL :y\n    =VAL :z\n   -MAP\n"
    }
  ]
}

export default Test_P2EQ
