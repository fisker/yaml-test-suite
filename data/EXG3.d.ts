// Generated file, do NOT edit

declare const Test_EXG3: {
  "id": "EXG3",
  "filename": "EXG3.yaml",
  "name": "Three dashes and content without space [1.3]",
  "from": "82AN, modified for YAML 1.3",
  "tags": [
    "scalar",
    "1.3-mod"
  ],
  "cases": [
    {
      "name": "Three dashes and content without space [1.3]",
      "from": "82AN, modified for YAML 1.3",
      "tags": [
        "scalar",
        "1.3-mod"
      ],
      "yaml": "---\n---word1\nword2\n",
      "tree": "+STR\n +DOC ---\n  =VAL :---word1 word2\n -DOC\n-STR\n",
      "json": "\"---word1 word2\"\n",
      "dump": "'---word1 word2'\n",
      "emit": "--- '---word1 word2'\n"
    }
  ]
}

export default Test_EXG3
