// Generated file, do NOT edit

declare const Test_F6MC: {
  "id": "F6MC",
  "filename": "F6MC.yaml",
  "name": "More indented lines at the beginning of folded block scalars",
  "from": "@perlpunk",
  "tags": [
    "folded",
    "indent"
  ],
  "cases": [
    {
      "name": "More indented lines at the beginning of folded block scalars",
      "from": "@perlpunk",
      "tags": [
        "folded",
        "indent"
      ],
      "yaml": "---\na: >2\n   more indented\n  regular\nb: >2\n\n\n   more indented\n  regular\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :a\n   =VAL > more indented\\nregular\\n\n   =VAL :b\n   =VAL >\\n\\n more indented\\nregular\\n\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"a\": \" more indented\\nregular\\n\",\n  \"b\": \"\\n\\n more indented\\nregular\\n\"\n}\n",
      "emit": "---\na: >2\n   more indented\n  regular\nb: >2\n\n\n   more indented\n  regular\n"
    }
  ]
}

export default Test_F6MC
