// Generated file, do NOT edit

export default {
  "id": "S4T7",
  "filename": "S4T7.yaml",
  "name": "Document with footer",
  "from": "https://github.com/ingydotnet/yaml-pegex-pm/blob/master/test/footer.tml",
  "tags": [
    "mapping",
    "footer"
  ],
  "cases": [
    {
      "name": "Document with footer",
      "from": "https://github.com/ingydotnet/yaml-pegex-pm/blob/master/test/footer.tml",
      "tags": [
        "mapping",
        "footer"
      ],
      "yaml": "aaa: bbb\n...\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :aaa\n   =VAL :bbb\n  -MAP\n -DOC ...\n-STR\n",
      "json": "{\n  \"aaa\": \"bbb\"\n}\n"
    }
  ]
}
