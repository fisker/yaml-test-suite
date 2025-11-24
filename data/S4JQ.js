// Generated file, do NOT edit

export default {
  "id": "S4JQ",
  "filename": "S4JQ.yaml",
  "name": "Spec Example 6.28. Non-Specific Tags",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2785512",
  "tags": [
    "spec",
    "tag"
  ],
  "cases": [
    {
      "name": "Spec Example 6.28. Non-Specific Tags",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2785512",
      "tags": [
        "spec",
        "tag"
      ],
      "yaml": "# Assuming conventional resolution:\n- \"12\"\n- 12\n- ! 12\n",
      "tree": "+STR\n +DOC\n  +SEQ\n   =VAL \"12\n   =VAL :12\n   =VAL <!> :12\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"12\",\n  12,\n  \"12\"\n]\n",
      "dump": "- \"12\"\n- 12\n- ! 12\n"
    }
  ]
}
