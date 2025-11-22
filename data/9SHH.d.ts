// Generated file, do NOT edit

declare const Test_9SHH: {
  "filename": "9SHH.yaml",
  "name": "Spec Example 5.8. Quoted Scalar Indicators",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2773890",
  "tags": [
    "spec",
    "scalar"
  ],
  "cases": [
    {
      "name": "Spec Example 5.8. Quoted Scalar Indicators",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2773890",
      "tags": [
        "spec",
        "scalar"
      ],
      "yaml": "single: 'text'\ndouble: \"text\"\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :single\n   =VAL 'text\n   =VAL :double\n   =VAL \"text\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"single\": \"text\",\n  \"double\": \"text\"\n}\n"
    }
  ]
}

export default Test_9SHH
