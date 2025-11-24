// Generated file, do NOT edit

declare const Test_6XDY: {
  "id": "6XDY",
  "filename": "6XDY.yaml",
  "name": "Two document start markers",
  "from": "@perlpunk",
  "tags": [
    "header"
  ],
  "cases": [
    {
      "name": "Two document start markers",
      "from": "@perlpunk",
      "tags": [
        "header"
      ],
      "yaml": "---\n---\n",
      "tree": "+STR\n +DOC ---\n  =VAL :\n -DOC\n +DOC ---\n  =VAL :\n -DOC\n-STR\n",
      "json": "null\nnull\n",
      "dump": "---\n---\n"
    }
  ]
}

export default Test_6XDY
