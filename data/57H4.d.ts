// Generated file, do NOT edit

declare const Test_57H4: {
  "filename": "57H4.yaml",
  "name": "Spec Example 8.22. Block Collection Nodes",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2800008",
  "tags": [
    "sequence",
    "mapping",
    "tag"
  ],
  "cases": [
    {
      "name": "Spec Example 8.22. Block Collection Nodes",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2800008",
      "tags": [
        "sequence",
        "mapping",
        "tag"
      ],
      "yaml": "sequence: !!seq\n- entry\n- !!seq\n - nested\nmapping: !!map\n foo: bar\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :sequence\n   +SEQ <tag:yaml.org,2002:seq>\n    =VAL :entry\n    +SEQ <tag:yaml.org,2002:seq>\n     =VAL :nested\n    -SEQ\n   -SEQ\n   =VAL :mapping\n   +MAP <tag:yaml.org,2002:map>\n    =VAL :foo\n    =VAL :bar\n   -MAP\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"sequence\": [\n    \"entry\",\n    [\n      \"nested\"\n    ]\n  ],\n  \"mapping\": {\n    \"foo\": \"bar\"\n  }\n}\n",
      "dump": "sequence: !!seq\n- entry\n- !!seq\n  - nested\nmapping: !!map\n  foo: bar\n"
    }
  ]
}

export default Test_57H4
