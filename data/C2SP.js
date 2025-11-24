// Generated file, do NOT edit

export default {
  "id": "C2SP",
  "filename": "C2SP.yaml",
  "name": "Flow Mapping Key on two lines",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "mapping"
  ],
  "cases": [
    {
      "name": "Flow Mapping Key on two lines",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "mapping"
      ],
      "fail": true,
      "yaml": "[23\n]: 42\n",
      "tree": "+STR\n +DOC\n  +SEQ []\n   =VAL :23\n"
    }
  ]
}
