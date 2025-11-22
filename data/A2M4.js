// Generated file, do NOT edit

export default {
  "filename": "A2M4.yaml",
  "name": "Spec Example 6.2. Indentation Indicators",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2778101",
  "tags": [
    "explicit-key",
    "spec",
    "libyaml-err",
    "indent",
    "whitespace",
    "sequence",
    "upto-1.2"
  ],
  "cases": [
    {
      "name": "Spec Example 6.2. Indentation Indicators",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2778101",
      "tags": [
        "explicit-key",
        "spec",
        "libyaml-err",
        "indent",
        "whitespace",
        "sequence",
        "upto-1.2"
      ],
      "yaml": "? a\n: -\tb\n  -  -\tc\n     - d\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :a\n   +SEQ\n    =VAL :b\n    +SEQ\n     =VAL :c\n     =VAL :d\n    -SEQ\n   -SEQ\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"a\": [\n    \"b\",\n    [\n      \"c\",\n      \"d\"\n    ]\n  ]\n}\n",
      "dump": "a:\n- b\n- - c\n  - d\n"
    }
  ]
}
