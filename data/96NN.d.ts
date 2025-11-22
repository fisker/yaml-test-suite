// Generated file, do NOT edit

declare const Test_96NN: {
  "filename": "96NN.yaml",
  "name": "Leading tab content in literals",
  "from": "@ingydotnet",
  "tags": [
    "indent",
    "literal",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Leading tab content in literals",
      "from": "@ingydotnet",
      "tags": [
        "indent",
        "literal",
        "whitespace"
      ],
      "yaml": "foo: |-\n \tbar\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL |\\tbar\n  -MAP\n -DOC\n-STR\n",
      "json": "{\"foo\":\"\\tbar\"}\n",
      "dump": "foo: |-\n  \tbar\n"
    },
    {
      "yaml": "foo: |-\n \tbar"
    }
  ]
}

export default Test_96NN
