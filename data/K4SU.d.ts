// Generated file, do NOT edit

declare const Test_K4SU: {
  "id": "K4SU",
  "filename": "K4SU.yaml",
  "name": "Multiple Entry Block Sequence",
  "from": "https://github.com/ingydotnet/yaml-pegex-pm/blob/master/test/sequence.tml",
  "tags": [
    "sequence"
  ],
  "cases": [
    {
      "name": "Multiple Entry Block Sequence",
      "from": "https://github.com/ingydotnet/yaml-pegex-pm/blob/master/test/sequence.tml",
      "tags": [
        "sequence"
      ],
      "yaml": "- foo\n- bar\n- 42\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   =VAL :foo\n   =VAL :bar\n   =VAL :42\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"foo\",\n  \"bar\",\n  42\n]\n"
    }
  ]
}

export default Test_K4SU
