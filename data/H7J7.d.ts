// Generated file, do NOT edit

declare const Test_H7J7: {
  "filename": "H7J7.yaml",
  "name": "Node anchor not indented",
  "from": "https://gist.github.com/anonymous/f192e7dab6da31831f264dbf1947cb83 via @ingydotnet",
  "tags": [
    "anchor",
    "error",
    "indent",
    "tag"
  ],
  "cases": [
    {
      "name": "Node anchor not indented",
      "from": "https://gist.github.com/anonymous/f192e7dab6da31831f264dbf1947cb83 via @ingydotnet",
      "tags": [
        "anchor",
        "error",
        "indent",
        "tag"
      ],
      "fail": true,
      "yaml": "key: &x\n!!map\n  a: b\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key\n   =VAL &x :\n"
    }
  ]
}

export default Test_H7J7
