// Generated file, do NOT edit

declare const Test_Z9M4: {
  "filename": "Z9M4.yaml",
  "name": "Spec Example 6.22. Global Tag Prefix",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2783726",
  "tags": [
    "spec",
    "header",
    "tag",
    "unknown-tag"
  ],
  "cases": [
    {
      "name": "Spec Example 6.22. Global Tag Prefix",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2783726",
      "tags": [
        "spec",
        "header",
        "tag",
        "unknown-tag"
      ],
      "yaml": "%TAG !e! tag:example.com,2000:app/\n---\n- !e!foo \"bar\"\n",
      "tree": "+STR\n +DOC ---\n  +SEQ\n   =VAL <tag:example.com,2000:app/foo> \"bar\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"bar\"\n]\n",
      "dump": "---\n- !<tag:example.com,2000:app/foo> \"bar\"\n"
    }
  ]
}

export default Test_Z9M4
