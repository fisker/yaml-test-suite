// Generated file, do NOT edit

declare const Test_MUS6: {
  "id": "MUS6",
  "filename": "MUS6.yaml",
  "name": "Directive variants",
  "from": "@ingydotnet",
  "tags": [
    "directive"
  ],
  "cases": [
    {
      "name": "Directive variants",
      "from": "@ingydotnet",
      "tags": [
        "directive"
      ],
      "also": "ZYU8",
      "fail": true,
      "yaml": "%YAML 1.1#...\n---\n",
      "tree": "+STR\n"
    },
    {
      "fail": true,
      "yaml": "%YAML 1.2\n---\n%YAML 1.2\n---\n",
      "dump": null
    },
    {
      "yaml": "%YAML  1.1\n---\n",
      "tree": "+STR\n +DOC ---\n  =VAL :\n -DOC\n-STR\n",
      "json": "null\n",
      "dump": "---\n"
    },
    {
      "yaml": "%YAML \t 1.1\n---\n"
    },
    {
      "yaml": "%YAML 1.1  # comment\n---\n"
    },
    {
      "note": "These 2 are reserved directives",
      "yaml": "%YAM 1.1\n---\n"
    },
    {
      "yaml": "%YAMLL 1.1\n---\n"
    }
  ]
}

export default Test_MUS6
