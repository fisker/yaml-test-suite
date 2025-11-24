// Generated file, do NOT edit

declare const Test_JQ4R: {
  "id": "JQ4R",
  "filename": "JQ4R.yaml",
  "name": "Spec Example 8.14. Block Sequence",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2797596",
  "tags": [
    "mapping",
    "spec",
    "sequence"
  ],
  "cases": [
    {
      "name": "Spec Example 8.14. Block Sequence",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2797596",
      "tags": [
        "mapping",
        "spec",
        "sequence"
      ],
      "yaml": "block sequence:\n  - one\n  - two : three\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :block sequence\n   +SEQ\n    =VAL :one\n    +MAP\n     =VAL :two\n     =VAL :three\n    -MAP\n   -SEQ\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"block sequence\": [\n    \"one\",\n    {\n      \"two\": \"three\"\n    }\n  ]\n}\n",
      "dump": "block sequence:\n- one\n- two: three\n"
    }
  ]
}

export default Test_JQ4R
