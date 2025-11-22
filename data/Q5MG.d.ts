// Generated file, do NOT edit

declare const Test_Q5MG: {
  "filename": "Q5MG.yaml",
  "name": "Tab at beginning of line followed by a flow mapping",
  "from": "IRC",
  "tags": [
    "flow",
    "whitespace"
  ],
  "cases": [
    {
      "name": "Tab at beginning of line followed by a flow mapping",
      "from": "IRC",
      "tags": [
        "flow",
        "whitespace"
      ],
      "yaml": "\t{}\n",
      "tree": "+STR\n +DOC\n  +MAP {}\n  -MAP\n -DOC\n-STR\n",
      "json": "{}\n",
      "dump": "{}\n"
    }
  ]
}

export default Test_Q5MG
