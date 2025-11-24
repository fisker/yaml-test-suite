// Generated file, do NOT edit

declare const Test_SU74: {
  "id": "SU74",
  "filename": "SU74.yaml",
  "name": "Anchor and alias as mapping key",
  "from": "@perlpunk",
  "tags": [
    "error",
    "anchor",
    "alias",
    "mapping"
  ],
  "cases": [
    {
      "name": "Anchor and alias as mapping key",
      "from": "@perlpunk",
      "tags": [
        "error",
        "anchor",
        "alias",
        "mapping"
      ],
      "fail": true,
      "yaml": "key1: &alias value1\n&b *alias : value2\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key1\n   =VAL &alias :value1\n"
    }
  ]
}

export default Test_SU74
