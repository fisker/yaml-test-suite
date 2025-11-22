// Generated file, do NOT edit

declare const Test_HU3P: {
  "filename": "HU3P.yaml",
  "name": "Invalid Mapping in plain scalar",
  "from": "https://gist.github.com/anonymous/d305fd8e54cfe7a484088c91a8a2e533 via @ingydotnet",
  "tags": [
    "error",
    "mapping",
    "scalar"
  ],
  "cases": [
    {
      "name": "Invalid Mapping in plain scalar",
      "from": "https://gist.github.com/anonymous/d305fd8e54cfe7a484088c91a8a2e533 via @ingydotnet",
      "tags": [
        "error",
        "mapping",
        "scalar"
      ],
      "fail": true,
      "yaml": "key:\n  word1 word2\n  no: key\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key\n"
    }
  ]
}

export default Test_HU3P
