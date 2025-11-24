// Generated file, do NOT edit

declare const Test_4Q9F: {
  "id": "4Q9F",
  "filename": "4Q9F.yaml",
  "name": "Folded Block Scalar [1.3]",
  "from": "TS54, modified for YAML 1.3",
  "tags": [
    "folded",
    "scalar",
    "1.3-mod",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Folded Block Scalar [1.3]",
      "from": "TS54, modified for YAML 1.3",
      "tags": [
        "folded",
        "scalar",
        "1.3-mod",
        "whitespace"
      ],
      "yaml": "--- >\n ab\n cd\n \n ef\n\n\n gh\n",
      "tree": "+STR\n +DOC ---\n  =VAL >ab cd\\nef\\n\\ngh\\n\n -DOC\n-STR\n",
      "json": "\"ab cd\\nef\\n\\ngh\\n\"\n",
      "dump": "--- >\n  ab cd\n\n  ef\n\n\n  gh\n"
    }
  ]
}

export default Test_4Q9F
