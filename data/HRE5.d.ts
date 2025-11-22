// Generated file, do NOT edit

declare const Test_HRE5: {
  "filename": "HRE5.yaml",
  "name": "Double quoted scalar with escaped single quote",
  "from": "https://github.com/yaml/libyaml/issues/68",
  "tags": [
    "double",
    "error",
    "single"
  ],
  "cases": [
    {
      "name": "Double quoted scalar with escaped single quote",
      "from": "https://github.com/yaml/libyaml/issues/68",
      "tags": [
        "double",
        "error",
        "single"
      ],
      "fail": true,
      "yaml": "---\ndouble: \"quoted \\' scalar\"\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :double\n"
    }
  ]
}

export default Test_HRE5
