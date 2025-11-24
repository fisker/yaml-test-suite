// Generated file, do NOT edit

export default {
  "id": "DMG6",
  "filename": "DMG6.yaml",
  "name": "Wrong indendation in Map",
  "from": "@perlpunk",
  "tags": [
    "error",
    "mapping",
    "indent"
  ],
  "cases": [
    {
      "name": "Wrong indendation in Map",
      "from": "@perlpunk",
      "tags": [
        "error",
        "mapping",
        "indent"
      ],
      "fail": true,
      "yaml": "key:\n  ok: 1\n wrong: 2\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL :key\n   +MAP\n    =VAL :ok\n    =VAL :1\n   -MAP\n"
    }
  ]
}
