// Generated file, do NOT edit

declare const Test_C2DT: {
  "filename": "C2DT.yaml",
  "name": "Spec Example 7.18. Flow Mapping Adjacent Values",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2792073",
  "tags": [
    "spec",
    "flow",
    "mapping"
  ],
  "cases": [
    {
      "name": "Spec Example 7.18. Flow Mapping Adjacent Values",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2792073",
      "tags": [
        "spec",
        "flow",
        "mapping"
      ],
      "yaml": "{\n\"adjacent\":value,\n\"readable\": value,\n\"empty\":\n}\n",
      "tree": "+STR\n +DOC\n  +MAP {}\n   =VAL \"adjacent\n   =VAL :value\n   =VAL \"readable\n   =VAL :value\n   =VAL \"empty\n   =VAL :\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"adjacent\": \"value\",\n  \"readable\": \"value\",\n  \"empty\": null\n}\n",
      "dump": "\"adjacent\": value\n\"readable\": value\n\"empty\":\n"
    }
  ]
}

export default Test_C2DT
