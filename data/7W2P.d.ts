// Generated file, do NOT edit

declare const Test_7W2P: {
  "filename": "7W2P.yaml",
  "name": "Block Mapping with Missing Values",
  "from": "NimYAML tests",
  "tags": [
    "explicit-key",
    "mapping"
  ],
  "cases": [
    {
      "name": "Block Mapping with Missing Values",
      "from": "NimYAML tests",
      "tags": [
        "explicit-key",
        "mapping"
      ],
      "yaml": "? a\n? b\nc:\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :a\n   =VAL :\n   =VAL :b\n   =VAL :\n   =VAL :c\n   =VAL :\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"a\": null,\n  \"b\": null,\n  \"c\": null\n}\n",
      "dump": "a:\nb:\nc:\n"
    }
  ]
}

export default Test_7W2P
