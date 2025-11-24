// Generated file, do NOT edit

declare const Test_HM87: {
  "id": "HM87",
  "filename": "HM87.yaml",
  "name": "Scalars in flow start with syntax char",
  "from": "@ingydotnet",
  "tags": [
    "flow",
    "scalar"
  ],
  "cases": [
    {
      "name": "Scalars in flow start with syntax char",
      "from": "@ingydotnet",
      "tags": [
        "flow",
        "scalar"
      ],
      "yaml": "[:x]\n",
      "tree": "+STR\n +DOC\n  +SEQ []\n   =VAL ::x\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \":x\"\n]\n",
      "dump": "- :x\n"
    },
    {
      "yaml": "[?x]\n",
      "tree": "+STR\n +DOC\n  +SEQ []\n   =VAL :?x\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"?x\"\n]\n",
      "dump": "- ?x\n"
    }
  ]
}

export default Test_HM87
