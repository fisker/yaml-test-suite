// Generated file, do NOT edit

declare const Test_CT4Q: {
  "filename": "CT4Q.yaml",
  "name": "Spec Example 7.20. Single Pair Explicit Entry",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2792424",
  "tags": [
    "explicit-key",
    "spec",
    "flow",
    "mapping"
  ],
  "cases": [
    {
      "name": "Spec Example 7.20. Single Pair Explicit Entry",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2792424",
      "tags": [
        "explicit-key",
        "spec",
        "flow",
        "mapping"
      ],
      "yaml": "[\n? foo\n bar : baz\n]\n",
      "tree": "+STR\n +DOC\n  +SEQ []\n   +MAP {}\n    =VAL :foo bar\n    =VAL :baz\n   -MAP\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  {\n    \"foo bar\": \"baz\"\n  }\n]\n",
      "dump": "- foo bar: baz\n"
    }
  ]
}

export default Test_CT4Q
