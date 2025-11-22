// Generated file, do NOT edit

declare const Test_5BVJ: {
  "filename": "5BVJ.yaml",
  "name": "Spec Example 5.7. Block Scalar Indicators",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2773653",
  "tags": [
    "spec",
    "literal",
    "folded",
    "scalar"
  ],
  "cases": [
    {
      "name": "Spec Example 5.7. Block Scalar Indicators",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2773653",
      "tags": [
        "spec",
        "literal",
        "folded",
        "scalar"
      ],
      "yaml": "literal: |\n  some\n  text\nfolded: >\n  some\n  text\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :literal\n   =VAL |some\\ntext\\n\n   =VAL :folded\n   =VAL >some text\\n\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"literal\": \"some\\ntext\\n\",\n  \"folded\": \"some text\\n\"\n}\n",
      "dump": "literal: |\n  some\n  text\nfolded: >\n  some text\n"
    }
  ]
}

export default Test_5BVJ
