// Generated file, do NOT edit

export default {
  "id": "H7TQ",
  "filename": "H7TQ.yaml",
  "name": "Extra words on %YAML directive",
  "from": "@ingydotnet",
  "tags": [
    "directive"
  ],
  "cases": [
    {
      "name": "Extra words on %YAML directive",
      "from": "@ingydotnet",
      "tags": [
        "directive"
      ],
      "fail": true,
      "yaml": "%YAML 1.2 foo\n---\n",
      "tree": "+STR\n"
    }
  ]
}
