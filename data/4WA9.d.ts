// Generated file, do NOT edit

declare const Test_4WA9: {
  "id": "4WA9",
  "filename": "4WA9.yaml",
  "name": "Literal scalars",
  "from": "@ingydotnet",
  "tags": [
    "indent",
    "literal"
  ],
  "cases": [
    {
      "name": "Literal scalars",
      "from": "@ingydotnet",
      "tags": [
        "indent",
        "literal"
      ],
      "yaml": "- aaa: |2\n    xxx\n  bbb: |\n    xxx\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   +MAP\n    =VAL :aaa\n    =VAL |xxx\\n\n    =VAL :bbb\n    =VAL |xxx\\n\n   -MAP\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  {\n    \"aaa\" : \"xxx\\n\",\n    \"bbb\" : \"xxx\\n\"\n  }\n]\n",
      "dump": "---\n- aaa: |\n    xxx\n  bbb: |\n    xxx\n",
      "emit": "- aaa: |\n    xxx\n  bbb: |\n    xxx\n"
    }
  ]
}

export default Test_4WA9
