// Generated file, do NOT edit

declare const Test_3HFZ: {
  "id": "3HFZ",
  "filename": "3HFZ.yaml",
  "name": "Invalid content after document end marker",
  "from": "@perlpunk",
  "tags": [
    "error",
    "footer"
  ],
  "cases": [
    {
      "name": "Invalid content after document end marker",
      "from": "@perlpunk",
      "tags": [
        "error",
        "footer"
      ],
      "fail": true,
      "yaml": "---\nkey: value\n... invalid\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :key\n   =VAL :value\n  -MAP\n -DOC ...\n"
    }
  ]
}

export default Test_3HFZ
