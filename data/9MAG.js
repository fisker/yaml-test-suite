// Generated file, do NOT edit

export default {
  "id": "9MAG",
  "filename": "9MAG.yaml",
  "name": "Flow sequence with invalid comma at the beginning",
  "from": "@perlpunk",
  "tags": [
    "error",
    "flow",
    "sequence"
  ],
  "cases": [
    {
      "name": "Flow sequence with invalid comma at the beginning",
      "from": "@perlpunk",
      "tags": [
        "error",
        "flow",
        "sequence"
      ],
      "fail": true,
      "yaml": "---\n[ , a, b, c ]\n",
      "tree": "+STR\n +DOC ---\n  +SEQ []\n"
    }
  ]
}
