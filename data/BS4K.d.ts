// Generated file, do NOT edit

declare const Test_BS4K: {
  "id": "BS4K",
  "filename": "BS4K.yaml",
  "name": "Comment between plain scalar lines",
  "from": "https://gist.github.com/anonymous/269f16d582fdd30a7dcf8c9249c5da7f via @ingydotnet",
  "tags": [
    "error",
    "scalar"
  ],
  "cases": [
    {
      "name": "Comment between plain scalar lines",
      "from": "https://gist.github.com/anonymous/269f16d582fdd30a7dcf8c9249c5da7f via @ingydotnet",
      "tags": [
        "error",
        "scalar"
      ],
      "fail": true,
      "yaml": "word1  # comment\nword2\n",
      "tree": "+STR\n +DOC\n  =VAL :word1\n -DOC\n"
    }
  ]
}

export default Test_BS4K
