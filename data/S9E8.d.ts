// Generated file, do NOT edit

declare const Test_S9E8: {
  "id": "S9E8",
  "filename": "S9E8.yaml",
  "name": "Spec Example 5.3. Block Structure Indicators",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2772312",
  "tags": [
    "explicit-key",
    "spec",
    "mapping",
    "sequence"
  ],
  "cases": [
    {
      "name": "Spec Example 5.3. Block Structure Indicators",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2772312",
      "tags": [
        "explicit-key",
        "spec",
        "mapping",
        "sequence"
      ],
      "yaml": "sequence:\n- one\n- two\nmapping:\n  ? sky\n  : blue\n  sea : green\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :sequence\n   +SEQ\n    =VAL :one\n    =VAL :two\n   -SEQ\n   =VAL :mapping\n   +MAP\n    =VAL :sky\n    =VAL :blue\n    =VAL :sea\n    =VAL :green\n   -MAP\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"sequence\": [\n    \"one\",\n    \"two\"\n  ],\n  \"mapping\": {\n    \"sky\": \"blue\",\n    \"sea\": \"green\"\n  }\n}\n",
      "dump": "sequence:\n- one\n- two\nmapping:\n  sky: blue\n  sea: green\n"
    }
  ]
}

export default Test_S9E8
