// Generated file, do NOT edit

declare const Test_4MUZ: {
  "id": "4MUZ",
  "filename": "4MUZ.yaml",
  "name": "Flow mapping colon on line after key",
  "from": "@ingydotnet",
  "tags": [
    "flow",
    "mapping"
  ],
  "cases": [
    {
      "name": "Flow mapping colon on line after key",
      "from": "@ingydotnet",
      "tags": [
        "flow",
        "mapping"
      ],
      "yaml": "{\"foo\"\n: \"bar\"}\n",
      "tree": "+STR\n +DOC\n  +MAP {}\n   =VAL \"foo\n   =VAL \"bar\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\": \"bar\"\n}\n",
      "emit": "\"foo\": \"bar\"\n"
    },
    {
      "yaml": "{\"foo\"\n: bar}\n",
      "tree": "+STR\n +DOC\n  +MAP {}\n   =VAL \"foo\n   =VAL :bar\n  -MAP\n -DOC\n-STR\n",
      "emit": "\"foo\": bar\n"
    },
    {
      "yaml": "{foo\n: bar}\n",
      "tree": "+STR\n +DOC\n  +MAP {}\n   =VAL :foo\n   =VAL :bar\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"foo\": \"bar\"\n}\n",
      "emit": "foo: bar\n"
    }
  ]
}

export default Test_4MUZ
