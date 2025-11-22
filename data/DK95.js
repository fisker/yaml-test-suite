// Generated file, do NOT edit

export default {
  "filename": "DK95.yaml",
  "name": "Tabs that look like indentation",
  "from": "@ingydotnet",
  "tags": [
    "indent",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Tabs that look like indentation",
      "from": "@ingydotnet",
      "tags": [
        "indent",
        "whitespace"
      ],
      "yaml": "foo:\n \tbar\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL :bar\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\" : \"bar\"\n}\n",
      "emit": "---\nfoo: bar\n"
    },
    {
      "fail": true,
      "yaml": "foo: \"bar\n\tbaz\"\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n"
    },
    {
      "yaml": "foo: \"bar\n  \tbaz\"\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL \"bar baz\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\" : \"bar baz\"\n}\n",
      "emit": "---\nfoo: \"bar baz\"\n"
    },
    {
      "yaml": " \t\nfoo: 1\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL :1\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\" : 1\n}\n",
      "emit": "---\nfoo: 1\n"
    },
    {
      "yaml": "foo: 1\n\t\nbar: 2\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL :1\n   =VAL :bar\n   =VAL :2\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\" : 1,\n  \"bar\" : 2\n}\n",
      "emit": "---\nfoo: 1\nbar: 2\n"
    },
    {
      "yaml": "foo: 1\n \t\nbar: 2\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL :1\n   =VAL :bar\n   =VAL :2\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\" : 1,\n  \"bar\" : 2\n}\n",
      "emit": "---\nfoo: 1\nbar: 2\n"
    },
    {
      "fail": true,
      "yaml": "foo:\n  a: 1\n  \tb: 2\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   +MAP\n    =VAL :a\n    =VAL :1\n"
    },
    {
      "yaml": "%YAML 1.2\n\t\n---\n",
      "tree": "+STR\n +DOC ---\n  =VAL :\n -DOC\n-STR\n",
      "json": "null\n",
      "emit": "--- null\n"
    },
    {
      "yaml": "foo: \"bar\n \t \t baz \t \t \"\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :foo\n   =VAL \"bar baz \\t \\t \n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\" : \"bar baz \\t \\t \"\n}\n",
      "emit": "---\nfoo: \"bar baz \\t \\t \"\n"
    }
  ]
}
