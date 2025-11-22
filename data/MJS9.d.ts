// Generated file, do NOT edit

declare const Test_MJS9: {
  "filename": "MJS9.yaml",
  "name": "Spec Example 6.7. Block Folding",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2779603",
  "tags": [
    "folded",
    "spec",
    "scalar",
    "whitespace",
    "1.3-err"
  ],
  "cases": [
    {
      "name": "Spec Example 6.7. Block Folding",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2779603",
      "tags": [
        "folded",
        "spec",
        "scalar",
        "whitespace",
        "1.3-err"
      ],
      "yaml": ">\n  foo \n \n  \t bar\n\n  baz\n",
      "tree": "+STR\n +DOC\n  =VAL >foo \\n\\n\\t bar\\n\\nbaz\\n\n -DOC\n-STR\n",
      "json": "\"foo \\n\\n\\t bar\\n\\nbaz\\n\"\n",
      "dump": "\"foo \\n\\n\\t bar\\n\\nbaz\\n\"\n"
    }
  ]
}

export default Test_MJS9
