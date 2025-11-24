// Generated file, do NOT edit

export default {
  "id": "KH5V",
  "filename": "KH5V.yaml",
  "name": "Inline tabs in double quoted",
  "from": "@ingydotnet",
  "tags": [
    "double",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Inline tabs in double quoted",
      "from": "@ingydotnet",
      "tags": [
        "double",
        "whitespace"
      ],
      "yaml": "\"1 inline\\ttab\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"1 inline\\ttab\n -DOC\n-STR\n",
      "json": "\"1 inline\\ttab\"\n"
    },
    {
      "yaml": "\"2 inline\\\ttab\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"2 inline\\ttab\n -DOC\n-STR\n",
      "json": "\"2 inline\\ttab\"\n",
      "dump": "\"2 inline\\ttab\"\n"
    },
    {
      "yaml": "\"3 inline\ttab\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"3 inline\\ttab\n -DOC\n-STR\n",
      "json": "\"3 inline\\ttab\"\n",
      "dump": "\"3 inline\\ttab\"\n"
    }
  ]
}
