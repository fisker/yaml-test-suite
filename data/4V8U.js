// Generated file, do NOT edit

export default {
  "filename": "4V8U.yaml",
  "name": "Plain scalar with backslashes",
  "from": "@perlpunk",
  "tags": [
    "scalar"
  ],
  "cases": [
    {
      "name": "Plain scalar with backslashes",
      "from": "@perlpunk",
      "tags": [
        "scalar"
      ],
      "yaml": "---\nplain\\value\\with\\backslashes\n",
      "tree": "+STR\n +DOC ---\n  =VAL :plain\\\\value\\\\with\\\\backslashes\n -DOC\n-STR\n",
      "json": "\"plain\\\\value\\\\with\\\\backslashes\"\n",
      "dump": "--- plain\\value\\with\\backslashes\n"
    }
  ]
}
