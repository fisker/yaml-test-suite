// Generated file, do NOT edit

export default {
  "filename": "M2N8.yaml",
  "name": "Question mark edge cases",
  "from": "@ingydotnet",
  "tags": [
    "edge",
    "empty-key"
  ],
  "cases": [
    {
      "name": "Question mark edge cases",
      "from": "@ingydotnet",
      "tags": [
        "edge",
        "empty-key"
      ],
      "yaml": "- ? : x\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   +MAP\n    +MAP\n     =VAL :\n     =VAL :x\n    -MAP\n    =VAL :\n   -MAP\n  -SEQ\n -DOC\n-STR\n",
      "dump": "- ? : x\n  :\n"
    },
    {
      "yaml": "? []: x\n",
      "tree": "+STR\n +DOC\n  +MAP\n   +MAP\n    +SEQ []\n    -SEQ\n    =VAL :x\n   -MAP\n   =VAL :\n  -MAP\n -DOC\n-STR\n",
      "dump": "? []: x\n:\n"
    }
  ]
}
