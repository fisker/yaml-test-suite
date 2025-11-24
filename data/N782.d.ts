// Generated file, do NOT edit

declare const Test_N782: {
  "id": "N782",
  "filename": "N782.yaml",
  "name": "Invalid document markers in flow style",
  "from": "NimYAML tests",
  "tags": [
    "flow",
    "edge",
    "header",
    "footer",
    "error"
  ],
  "cases": [
    {
      "name": "Invalid document markers in flow style",
      "from": "NimYAML tests",
      "tags": [
        "flow",
        "edge",
        "header",
        "footer",
        "error"
      ],
      "fail": true,
      "yaml": "[\n--- ,\n...\n]\n",
      "tree": "+STR\n +DOC\n  +SEQ []\n"
    }
  ]
}

export default Test_N782
