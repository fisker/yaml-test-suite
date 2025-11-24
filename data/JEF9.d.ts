// Generated file, do NOT edit

declare const Test_JEF9: {
  "id": "JEF9",
  "filename": "JEF9.yaml",
  "name": "Trailing whitespace in streams",
  "from": "@ingydotnet",
  "tags": [
    "literal"
  ],
  "cases": [
    {
      "name": "Trailing whitespace in streams",
      "from": "@ingydotnet",
      "tags": [
        "literal"
      ],
      "yaml": "- |+\n\n\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   =VAL |\\n\\n\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"\\n\\n\"\n]\n",
      "dump": "- |+\n\n\n...\n"
    },
    {
      "yaml": "- |+\n   \n",
      "tree": "+STR\n +DOC\n  +SEQ\n   =VAL |\\n\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"\\n\"\n]\n",
      "dump": "- |+\n\n...\n"
    },
    {
      "yaml": "- |+\n   ",
      "dump": "- |+\n\n...\n"
    }
  ]
}

export default Test_JEF9
