// Generated file, do NOT edit

declare const Test_JKF3: {
  "filename": "JKF3.yaml",
  "name": "Multiline unidented double quoted block key",
  "from": "@ingydotnet",
  "tags": [
    "indent"
  ],
  "cases": [
    {
      "name": "Multiline unidented double quoted block key",
      "from": "@ingydotnet",
      "tags": [
        "indent"
      ],
      "fail": true,
      "yaml": "- - \"bar\nbar\": x\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   +SEQ\n"
    }
  ]
}

export default Test_JKF3
