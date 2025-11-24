// Generated file, do NOT edit

export default {
  "id": "SF5V",
  "filename": "SF5V.yaml",
  "name": "Duplicate YAML directive",
  "from": "@perlpunk",
  "tags": [
    "directive",
    "error"
  ],
  "cases": [
    {
      "name": "Duplicate YAML directive",
      "from": "@perlpunk",
      "tags": [
        "directive",
        "error"
      ],
      "fail": true,
      "yaml": "%YAML 1.2\n%YAML 1.2\n---\n",
      "tree": "+STR\n"
    }
  ]
}
