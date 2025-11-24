// Generated file, do NOT edit

declare const Test_4GC6: {
  "id": "4GC6",
  "filename": "4GC6.yaml",
  "name": "Spec Example 7.7. Single Quoted Characters",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2788307",
  "tags": [
    "spec",
    "scalar",
    "1.3-err"
  ],
  "cases": [
    {
      "name": "Spec Example 7.7. Single Quoted Characters",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2788307",
      "tags": [
        "spec",
        "scalar",
        "1.3-err"
      ],
      "yaml": "'here''s to \"quotes\"'\n",
      "tree": "+STR\n +DOC\n  =VAL 'here's to \"quotes\"\n -DOC\n-STR\n",
      "json": "\"here's to \\\"quotes\\\"\"\n"
    }
  ]
}

export default Test_4GC6
