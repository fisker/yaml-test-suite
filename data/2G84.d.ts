// Generated file, do NOT edit

declare const Test_2G84: {
  "id": "2G84",
  "filename": "2G84.yaml",
  "name": "Literal modifers",
  "from": "@ingydotnet",
  "tags": [
    "literal",
    "scalar"
  ],
  "cases": [
    {
      "name": "Literal modifers",
      "from": "@ingydotnet",
      "tags": [
        "literal",
        "scalar"
      ],
      "fail": true,
      "yaml": "--- |0\n",
      "tree": "+STR\n +DOC ---\n"
    },
    {
      "fail": true,
      "yaml": "--- |10\n"
    },
    {
      "yaml": "--- |1-",
      "tree": "+STR\n +DOC ---\n  =VAL |\n -DOC\n-STR\n",
      "json": "\"\"\n",
      "emit": "--- \"\"\n"
    },
    {
      "yaml": "--- |1+",
      "tree": "+STR\n +DOC ---\n  =VAL |\n -DOC\n-STR\n",
      "emit": "--- \"\"\n"
    }
  ]
}

export default Test_2G84
