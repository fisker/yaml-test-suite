// Generated file, do NOT edit

declare const Test_JS2J: {
  "filename": "JS2J.yaml",
  "name": "Spec Example 6.29. Node Anchors",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2785977",
  "tags": [
    "spec",
    "alias"
  ],
  "cases": [
    {
      "name": "Spec Example 6.29. Node Anchors",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2785977",
      "tags": [
        "spec",
        "alias"
      ],
      "yaml": "First occurrence: &anchor Value\nSecond occurrence: *anchor\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :First occurrence\n   =VAL &anchor :Value\n   =VAL :Second occurrence\n   =ALI *anchor\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"First occurrence\": \"Value\",\n  \"Second occurrence\": \"Value\"\n}\n"
    }
  ]
}

export default Test_JS2J
