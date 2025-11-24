// Generated file, do NOT edit

declare const Test_S7BG: {
  "id": "S7BG",
  "filename": "S7BG.yaml",
  "name": "Colon followed by comma",
  "from": "@perlpunk",
  "tags": [
    "scalar"
  ],
  "cases": [
    {
      "name": "Colon followed by comma",
      "from": "@perlpunk",
      "tags": [
        "scalar"
      ],
      "yaml": "---\n- :,\n",
      "tree": "+STR\n +DOC ---\n  +SEQ\n   =VAL ::,\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \":,\"\n]\n",
      "dump": "---\n- :,\n"
    }
  ]
}

export default Test_S7BG
