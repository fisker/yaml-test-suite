// Generated file, do NOT edit

declare const Test_2CMS: {
  "filename": "2CMS.yaml",
  "name": "Invalid mapping in plain multiline",
  "from": "@perlpunk",
  "tags": [
    "error",
    "mapping"
  ],
  "cases": [
    {
      "name": "Invalid mapping in plain multiline",
      "from": "@perlpunk",
      "tags": [
        "error",
        "mapping"
      ],
      "fail": true,
      "yaml": "this\n is\n  invalid: x\n",
      "tree": "+STR\n +DOC\n"
    }
  ]
}

export default Test_2CMS
