// Generated file, do NOT edit

declare const Test_U99R: {
  "filename": "U99R.yaml",
  "name": "Invalid comma in tag",
  "from": "@perlpunk",
  "tags": [
    "error",
    "tag"
  ],
  "cases": [
    {
      "name": "Invalid comma in tag",
      "from": "@perlpunk",
      "tags": [
        "error",
        "tag"
      ],
      "fail": true,
      "yaml": "- !!str, xxx\n",
      "tree": "+STR\n +DOC\n  +SEQ\n"
    }
  ]
}

export default Test_U99R
