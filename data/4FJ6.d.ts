// Generated file, do NOT edit

declare const Test_4FJ6: {
  "id": "4FJ6",
  "filename": "4FJ6.yaml",
  "name": "Nested implicit complex keys",
  "from": "@perlpunk",
  "tags": [
    "complex-key",
    "flow",
    "mapping",
    "sequence"
  ],
  "cases": [
    {
      "name": "Nested implicit complex keys",
      "from": "@perlpunk",
      "tags": [
        "complex-key",
        "flow",
        "mapping",
        "sequence"
      ],
      "yaml": "---\n[\n  [ a, [ [[b,c]]: d, e]]: 23\n]\n",
      "tree": "+STR\n +DOC ---\n  +SEQ []\n   +MAP {}\n    +SEQ []\n     =VAL :a\n     +SEQ []\n      +MAP {}\n       +SEQ []\n        +SEQ []\n         =VAL :b\n         =VAL :c\n        -SEQ\n       -SEQ\n       =VAL :d\n      -MAP\n      =VAL :e\n     -SEQ\n    -SEQ\n    =VAL :23\n   -MAP\n  -SEQ\n -DOC\n-STR\n",
      "dump": "---\n- ? - a\n    - - ? - - b\n            - c\n        : d\n      - e\n  : 23\n"
    }
  ]
}

export default Test_4FJ6
