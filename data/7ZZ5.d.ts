// Generated file, do NOT edit

declare const Test_7ZZ5: {
  "filename": "7ZZ5.yaml",
  "name": "Empty flow collections",
  "from": "@perlpunk",
  "tags": [
    "flow",
    "mapping",
    "sequence"
  ],
  "cases": [
    {
      "name": "Empty flow collections",
      "from": "@perlpunk",
      "tags": [
        "flow",
        "mapping",
        "sequence"
      ],
      "yaml": "---\nnested sequences:\n- - - []\n- - - {}\nkey1: []\nkey2: {}\n",
      "tree": "+STR\n +DOC ---\n  +MAP\n   =VAL :nested sequences\n   +SEQ\n    +SEQ\n     +SEQ\n      +SEQ []\n      -SEQ\n     -SEQ\n    -SEQ\n    +SEQ\n     +SEQ\n      +MAP {}\n      -MAP\n     -SEQ\n    -SEQ\n   -SEQ\n   =VAL :key1\n   +SEQ []\n   -SEQ\n   =VAL :key2\n   +MAP {}\n   -MAP\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"nested sequences\": [\n    [\n      [\n        []\n      ]\n    ],\n    [\n      [\n        {}\n      ]\n    ]\n  ],\n  \"key1\": [],\n  \"key2\": {}\n}\n",
      "dump": "---\nnested sequences:\n- - - []\n- - - {}\nkey1: []\nkey2: {}\n"
    }
  ]
}

export default Test_7ZZ5
