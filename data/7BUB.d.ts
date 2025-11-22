// Generated file, do NOT edit

declare const Test_7BUB: {
  "filename": "7BUB.yaml",
  "name": "Spec Example 2.10. Node for “Sammy Sosa” appears twice in this document",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2760658",
  "tags": [
    "mapping",
    "sequence",
    "spec",
    "alias"
  ],
  "cases": [
    {
      "name": "Spec Example 2.10. Node for “Sammy Sosa” appears twice in this document",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2760658",
      "tags": [
        "mapping",
        "sequence",
        "spec",
        "alias"
      ],
      "yaml": "---\nhr:\n  - Mark McGwire\n  # Following node labeled SS\n  - &SS Sammy Sosa\nrbi:\n  - *SS # Subsequent occurrence\n  - Ken Griffey\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :hr\n   +SEQ\n    =VAL :Mark McGwire\n    =VAL &SS :Sammy Sosa\n   -SEQ\n   =VAL :rbi\n   +SEQ\n    =ALI *SS\n    =VAL :Ken Griffey\n   -SEQ\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"hr\": [\n    \"Mark McGwire\",\n    \"Sammy Sosa\"\n  ],\n  \"rbi\": [\n    \"Sammy Sosa\",\n    \"Ken Griffey\"\n  ]\n}\n",
      "dump": "---\nhr:\n- Mark McGwire\n- &SS Sammy Sosa\nrbi:\n- *SS\n- Ken Griffey\n"
    }
  ]
}

export default Test_7BUB
