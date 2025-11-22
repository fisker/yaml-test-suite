// Generated file, do NOT edit

export default {
  "filename": "JY7Z.yaml",
  "name": "Trailing content that looks like a mapping",
  "from": "@perlpunk",
  "tags": [
    "error",
    "mapping",
    "double"
  ],
  "cases": [
    {
      "name": "Trailing content that looks like a mapping",
      "from": "@perlpunk",
      "tags": [
        "error",
        "mapping",
        "double"
      ],
      "fail": true,
      "yaml": "key1: \"quoted1\"\nkey2: \"quoted2\" no key: nor value\nkey3: \"quoted3\"\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key1\n   =VAL \"quoted1\n   =VAL :key2\n   =VAL \"quoted2\n"
    }
  ]
}
