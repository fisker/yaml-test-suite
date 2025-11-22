// Generated file, do NOT edit

declare const Test_TL85: {
  "filename": "TL85.yaml",
  "name": "Spec Example 6.8. Flow Folding",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2779950",
  "tags": [
    "double",
    "spec",
    "whitespace",
    "scalar",
    "upto-1.2"
  ],
  "cases": [
    {
      "name": "Spec Example 6.8. Flow Folding",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2779950",
      "tags": [
        "double",
        "spec",
        "whitespace",
        "scalar",
        "upto-1.2"
      ],
      "yaml": "\"\n  foo \n \n  \t bar\n\n  baz\n\"\n",
      "tree": "+STR\n +DOC\n  =VAL \" foo\\nbar\\nbaz \n -DOC\n-STR\n",
      "json": "\" foo\\nbar\\nbaz \"\n",
      "dump": "\" foo\\nbar\\nbaz \"\n"
    }
  ]
}

export default Test_TL85
