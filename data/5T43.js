// Generated file, do NOT edit

export default {
  "id": "5T43",
  "filename": "5T43.yaml",
  "name": "Colon at the beginning of adjacent flow scalar",
  "from": "@perlpunk",
  "tags": [
    "flow",
    "mapping",
    "scalar"
  ],
  "cases": [
    {
      "name": "Colon at the beginning of adjacent flow scalar",
      "from": "@perlpunk",
      "tags": [
        "flow",
        "mapping",
        "scalar"
      ],
      "yaml": "- { \"key\":value }\n- { \"key\"::value }\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   +MAP {}\n    =VAL \"key\n    =VAL :value\n   -MAP\n   +MAP {}\n    =VAL \"key\n    =VAL ::value\n   -MAP\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  {\n    \"key\": \"value\"\n  },\n  {\n    \"key\": \":value\"\n  }\n]\n",
      "dump": "- key: value\n- key: :value\n",
      "emit": "- \"key\": value\n- \"key\": :value\n"
    }
  ]
}
