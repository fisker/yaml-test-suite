// Generated file, do NOT edit

declare const Test_6BFJ: {
  "filename": "6BFJ.yaml",
  "name": "Mapping, key and flow sequence item anchors",
  "from": "@perlpunk",
  "tags": [
    "anchor",
    "complex-key",
    "flow",
    "mapping",
    "sequence"
  ],
  "cases": [
    {
      "name": "Mapping, key and flow sequence item anchors",
      "from": "@perlpunk",
      "tags": [
        "anchor",
        "complex-key",
        "flow",
        "mapping",
        "sequence"
      ],
      "yaml": "---\n&mapping\n&key [ &item a, b, c ]: value\n",
      "tree": "+STR\n +DOC ---\n  +MAP &mapping\n   +SEQ [] &key\n    =VAL &item :a\n    =VAL :b\n    =VAL :c\n   -SEQ\n   =VAL :value\n  -MAP\n -DOC\n-STR\n",
      "dump": "--- &mapping\n? &key\n- &item a\n- b\n- c\n: value\n"
    }
  ]
}

export default Test_6BFJ
