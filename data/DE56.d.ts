// Generated file, do NOT edit

declare const Test_DE56: {
  "id": "DE56",
  "filename": "DE56.yaml",
  "name": "Trailing tabs in double quoted",
  "from": "@ingydotnet",
  "tags": [
    "double",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Trailing tabs in double quoted",
      "from": "@ingydotnet",
      "tags": [
        "double",
        "whitespace"
      ],
      "yaml": "\"1 trailing\\t\n    tab\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"1 trailing\\t tab\n -DOC\n-STR\n",
      "json": "\"1 trailing\\t tab\"\n",
      "dump": "\"1 trailing\\t tab\"\n"
    },
    {
      "yaml": "\"2 trailing\\t  \n    tab\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"2 trailing\\t tab\n -DOC\n-STR\n",
      "json": "\"2 trailing\\t tab\"\n",
      "dump": "\"2 trailing\\t tab\"\n"
    },
    {
      "yaml": "\"3 trailing\\\t\n    tab\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"3 trailing\\t tab\n -DOC\n-STR\n",
      "json": "\"3 trailing\\t tab\"\n",
      "dump": "\"3 trailing\\t tab\"\n"
    },
    {
      "yaml": "\"4 trailing\\\t  \n    tab\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"4 trailing\\t tab\n -DOC\n-STR\n",
      "json": "\"4 trailing\\t tab\"\n",
      "dump": "\"4 trailing\\t tab\"\n"
    },
    {
      "yaml": "\"5 trailing\t\n    tab\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"5 trailing tab\n -DOC\n-STR\n",
      "json": "\"5 trailing tab\"\n",
      "dump": "\"5 trailing tab\"\n"
    },
    {
      "yaml": "\"6 trailing\t  \n    tab\"\n",
      "tree": "+STR\n +DOC\n  =VAL \"6 trailing tab\n -DOC\n-STR\n",
      "json": "\"6 trailing tab\"\n",
      "dump": "\"6 trailing tab\"\n"
    }
  ]
}

export default Test_DE56
