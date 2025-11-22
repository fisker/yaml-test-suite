// Generated file, do NOT edit

export default {
  "filename": "87E4.yaml",
  "name": "Spec Example 7.8. Single Quoted Implicit Keys",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2788496",
  "tags": [
    "spec",
    "flow",
    "sequence",
    "mapping"
  ],
  "cases": [
    {
      "name": "Spec Example 7.8. Single Quoted Implicit Keys",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2788496",
      "tags": [
        "spec",
        "flow",
        "sequence",
        "mapping"
      ],
      "yaml": "'implicit block key' : [\n  'implicit flow key' : value,\n ]\n",
      "tree": "+STR\n +DOC\n  +MAP\n   =VAL 'implicit block key\n   +SEQ []\n    +MAP {}\n     =VAL 'implicit flow key\n     =VAL :value\n    -MAP\n   -SEQ\n  -MAP\n -DOC\n-STR\n",
      "json": "{\n  \"implicit block key\": [\n    {\n      \"implicit flow key\": \"value\"\n    }\n  ]\n}\n",
      "dump": "'implicit block key':\n- 'implicit flow key': value\n"
    }
  ]
}
