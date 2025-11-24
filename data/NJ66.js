// Generated file, do NOT edit

export default {
  "id": "NJ66",
  "filename": "NJ66.yaml",
  "name": "Multiline plain flow mapping key",
  "from": "@perlpunk",
  "tags": [
    "flow",
    "mapping"
  ],
  "cases": [
    {
      "name": "Multiline plain flow mapping key",
      "from": "@perlpunk",
      "tags": [
        "flow",
        "mapping"
      ],
      "yaml": "---\n- { single line: value}\n- { multi\n  line: value}\n",
      "tree": "+STR\n +DOC ---\n  +SEQ\n   +MAP {}\n    =VAL :single line\n    =VAL :value\n   -MAP\n   +MAP {}\n    =VAL :multi line\n    =VAL :value\n   -MAP\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  {\n    \"single line\": \"value\"\n  },\n  {\n    \"multi line\": \"value\"\n  }\n]\n",
      "dump": "---\n- single line: value\n- multi line: value\n"
    }
  ]
}
