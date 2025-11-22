// Generated file, do NOT edit

declare const Test_ZH7C: {
  "filename": "ZH7C.yaml",
  "name": "Anchors in Mapping",
  "from": "NimYAML tests",
  "tags": [
    "anchor",
    "mapping"
  ],
  "cases": [
    {
      "name": "Anchors in Mapping",
      "from": "NimYAML tests",
      "tags": [
        "anchor",
        "mapping"
      ],
      "yaml": "&a a: b\nc: &d d\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL &a :a\n   =VAL :b\n   =VAL :c\n   =VAL &d :d\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"a\": \"b\",\n  \"c\": \"d\"\n}\n"
    }
  ]
}

export default Test_ZH7C
