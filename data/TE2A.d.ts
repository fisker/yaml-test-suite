// Generated file, do NOT edit

declare const Test_TE2A: {
  "id": "TE2A",
  "filename": "TE2A.yaml",
  "name": "Spec Example 8.16. Block Mappings",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2798147",
  "tags": [
    "spec",
    "mapping"
  ],
  "cases": [
    {
      "name": "Spec Example 8.16. Block Mappings",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2798147",
      "tags": [
        "spec",
        "mapping"
      ],
      "yaml": "block mapping:\n key: value\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :block mapping\n   +MAP\n    =VAL :key\n    =VAL :value\n   -MAP\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"block mapping\": {\n    \"key\": \"value\"\n  }\n}\n",
      "dump": "block mapping:\n  key: value\n"
    }
  ]
}

export default Test_TE2A
