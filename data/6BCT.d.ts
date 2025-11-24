// Generated file, do NOT edit

declare const Test_6BCT: {
  "id": "6BCT",
  "filename": "6BCT.yaml",
  "name": "Spec Example 6.3. Separation Spaces",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2778394",
  "tags": [
    "spec",
    "libyaml-err",
    "sequence",
    "whitespace",
    "upto-1.2"
  ],
  "cases": [
    {
      "name": "Spec Example 6.3. Separation Spaces",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2778394",
      "tags": [
        "spec",
        "libyaml-err",
        "sequence",
        "whitespace",
        "upto-1.2"
      ],
      "yaml": "- foo:\t bar\n- - baz\n  -\tbaz\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   +MAP\n    =VAL :foo\n    =VAL :bar\n   -MAP\n   +SEQ\n    =VAL :baz\n    =VAL :baz\n   -SEQ\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  {\n    \"foo\": \"bar\"\n  },\n  [\n    \"baz\",\n    \"baz\"\n  ]\n]\n",
      "dump": "- foo: bar\n- - baz\n  - baz\n"
    }
  ]
}

export default Test_6BCT
