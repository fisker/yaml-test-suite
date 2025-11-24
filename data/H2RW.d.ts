// Generated file, do NOT edit

declare const Test_H2RW: {
  "id": "H2RW",
  "filename": "H2RW.yaml",
  "name": "Blank lines",
  "from": "IRC discussion with leont",
  "tags": [
    "comment",
    "literal",
    "scalar",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Blank lines",
      "from": "IRC discussion with leont",
      "tags": [
        "comment",
        "literal",
        "scalar",
        "whitespace"
      ],
      "yaml": "foo: 1\n\nbar: 2\n    \ntext: |\n  a\n    \n  b\n\n  c\n \n  d\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL :1\n   =VAL :bar\n   =VAL :2\n   =VAL :text\n   =VAL |a\\n  \\nb\\n\\nc\\n\\nd\\n\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\": 1,\n  \"bar\": 2,\n  \"text\": \"a\\n  \\nb\\n\\nc\\n\\nd\\n\"\n}\n",
      "dump": "foo: 1\nbar: 2\ntext: \"a\\n  \\nb\\n\\nc\\n\\nd\\n\"\n",
      "emit": "foo: 1\nbar: 2\ntext: |\n  a\n    \n  b\n\n  c\n\n  d\n"
    }
  ]
}

export default Test_H2RW
