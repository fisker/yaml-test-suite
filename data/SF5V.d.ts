// Generated file, do NOT edit

declare const Test_SF5V: {
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

export default Test_SF5V
