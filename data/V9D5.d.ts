// Generated file, do NOT edit

declare const Test_V9D5: {
  "id": "V9D5",
  "filename": "V9D5.yaml",
  "name": "Spec Example 8.19. Compact Block Mappings",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2799091",
  "tags": [
    "complex-key",
    "explicit-key",
    "spec",
    "mapping"
  ],
  "cases": [
    {
      "name": "Spec Example 8.19. Compact Block Mappings",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2799091",
      "tags": [
        "complex-key",
        "explicit-key",
        "spec",
        "mapping"
      ],
      "yaml": "- sun: yellow\n- ? earth: blue\n  : moon: white\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   +MAP\n    =VAL :sun\n    =VAL :yellow\n   -MAP\n   +MAP\n    +MAP\n     =VAL :earth\n     =VAL :blue\n    -MAP\n    +MAP\n     =VAL :moon\n     =VAL :white\n    -MAP\n   -MAP\n  -SEQ\n -DOC\n-STR\n"
    }
  ]
}

export default Test_V9D5
