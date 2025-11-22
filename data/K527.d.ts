// Generated file, do NOT edit

declare const Test_K527: {
  "filename": "K527.yaml",
  "name": "Spec Example 6.6. Line Folding",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2779289",
  "tags": [
    "folded",
    "spec",
    "whitespace",
    "scalar",
    "1.3-err"
  ],
  "cases": [
    {
      "name": "Spec Example 6.6. Line Folding",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2779289",
      "tags": [
        "folded",
        "spec",
        "whitespace",
        "scalar",
        "1.3-err"
      ],
      "yaml": ">-\n  trimmed\n  \n \n\n  as\n  space\n",
      "tree": "+STR\n +DOC\n  =VAL >trimmed\\n\\n\\nas space\n -DOC\n-STR\n",
      "json": "\"trimmed\\n\\n\\nas space\"\n",
      "dump": ">-\n  trimmed\n\n\n\n  as space\n"
    }
  ]
}

export default Test_K527
