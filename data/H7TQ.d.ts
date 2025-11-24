// Generated file, do NOT edit

declare const Test_H7TQ: {
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

export default Test_H7TQ
