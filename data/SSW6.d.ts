// Generated file, do NOT edit

declare const Test_SSW6: {
  "id": "SSW6",
  "filename": "SSW6.yaml",
  "name": "Spec Example 7.7. Single Quoted Characters [1.3]",
  "from": "4GC6, modified for YAML 1.3",
  "tags": [
    "spec",
    "scalar",
    "single",
    "1.3-mod"
  ],
  "cases": [
    {
      "name": "Spec Example 7.7. Single Quoted Characters [1.3]",
      "from": "4GC6, modified for YAML 1.3",
      "tags": [
        "spec",
        "scalar",
        "single",
        "1.3-mod"
      ],
      "yaml": "---\n'here''s to \"quotes\"'\n",
      "tree": "+STR\n +DOC ---\n  =VAL 'here's to \"quotes\"\n -DOC\n-STR\n",
      "json": "\"here's to \\\"quotes\\\"\"\n",
      "dump": "--- 'here''s to \"quotes\"'\n"
    }
  ]
}

export default Test_SSW6
