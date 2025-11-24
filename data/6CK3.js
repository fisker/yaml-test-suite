// Generated file, do NOT edit

export default {
  "id": "6CK3",
  "filename": "6CK3.yaml",
  "name": "Spec Example 6.26. Tag Shorthands",
  "from": "http://www.yaml.org/spec/1.2/spec.html#id2785009",
  "tags": [
    "spec",
    "tag",
    "local-tag"
  ],
  "cases": [
    {
      "name": "Spec Example 6.26. Tag Shorthands",
      "from": "http://www.yaml.org/spec/1.2/spec.html#id2785009",
      "tags": [
        "spec",
        "tag",
        "local-tag"
      ],
      "yaml": "%TAG !e! tag:example.com,2000:app/\n---\n- !local foo\n- !!str bar\n- !e!tag%21 baz\n",
      "tree": "+STR\n +DOC ---\n  +SEQ\n   =VAL <!local> :foo\n   =VAL <tag:yaml.org,2002:str> :bar\n   =VAL <tag:example.com,2000:app/tag!> :baz\n  -SEQ\n -DOC\n-STR\n",
      "json": "[\n  \"foo\",\n  \"bar\",\n  \"baz\"\n]\n"
    }
  ]
}
