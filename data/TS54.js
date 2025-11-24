// Generated file, do NOT edit

export default {
  "id": "TS54",
  "filename": "TS54.yaml",
  "name": "Folded Block Scalar",
  "from": "NimYAML tests",
  "tags": [
    "folded",
    "scalar",
    "1.3-err"
  ],
  "cases": [
    {
      "name": "Folded Block Scalar",
      "from": "NimYAML tests",
      "tags": [
        "folded",
        "scalar",
        "1.3-err"
      ],
      "yaml": ">\n ab\n cd\n \n ef\n\n\n gh\n",
      "tree": "+STR\n +DOC\n  =VAL >ab cd\\nef\\n\\ngh\\n\n -DOC\n-STR\n",
      "json": "\"ab cd\\nef\\n\\ngh\\n\"\n",
      "dump": ">\n  ab cd\n\n  ef\n\n\n  gh\n"
    }
  ]
}
