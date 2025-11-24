// Generated file, do NOT edit

declare const Test_8XYN: {
  "id": "8XYN",
  "filename": "8XYN.yaml",
  "name": "Anchor with unicode character",
  "from": "https://github.com/yaml/pyyaml/issues/94",
  "tags": [
    "anchor"
  ],
  "cases": [
    {
      "name": "Anchor with unicode character",
      "from": "https://github.com/yaml/pyyaml/issues/94",
      "tags": [
        "anchor"
      ],
      "yaml": "---\n- &😁 unicode anchor\n",
      "tree": "+STR\n +DOC ---\n  +SEQ\n   =VAL &😁 :unicode anchor\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"unicode anchor\"\n]\n",
      "dump": "---\n- &😁 unicode anchor\n"
    }
  ]
}

export default Test_8XYN
