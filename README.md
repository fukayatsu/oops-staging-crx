oops-staging-crx
================

おっとっと、これは開発サーバだった。あぶないあぶない


options
=======

```
- name: 'dev' # required
  label: 'This is development server!' # option(use 'name' if absent)
  targets:    # required
    - http://dev.example.com
    - http://staging.example.com/bar
  ignores: # option
    - http://example.com
```