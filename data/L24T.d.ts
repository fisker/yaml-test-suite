// Generated file, do NOT edit

declare const Test_L24T: {
  "filename": "L24T.yaml",
  "name": "Trailing line of spaces",
  "from": "@ingydotnet",
  "tags": [
    "whitespace"
  ],
  "cases": [
    {
      "name": "Trailing line of spaces",
      "from": "@ingydotnet",
      "tags": [
        "whitespace"
      ],
      "yaml": "foo: |\n  x\n   \n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL |x\\n \\n\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\" : \"x\\n \\n\"\n}\n",
      "emit": "---\nfoo: \"x\\n \\n\"\n"
    },
    {
      "yaml": "foo: |\n  x\n   ",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL |x\\n \\n\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\" : \"x\\n \\n\"\n}\n",
      "emit": "---\nfoo: \"x\\n \\n\"\n"
    }
  ]
}

export default Test_L24T
