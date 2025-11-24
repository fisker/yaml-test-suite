// Generated file, do NOT edit

declare const Test_CXX2: {
  "id": "CXX2",
  "filename": "CXX2.yaml",
  "name": "Mapping with anchor on document start line",
  "from": "@perlpunk",
  "tags": [
    "anchor",
    "error",
    "header",
    "mapping"
  ],
  "cases": [
    {
      "name": "Mapping with anchor on document start line",
      "from": "@perlpunk",
      "tags": [
        "anchor",
        "error",
        "header",
        "mapping"
      ],
      "fail": true,
      "yaml": "--- &anchor a: b\n",
      "tree": "+STR\n +DOC ---\n"
    }
  ]
}

export default Test_CXX2
