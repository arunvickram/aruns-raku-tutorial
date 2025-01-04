---
title: The Topic Variable $_
description: An intro into the "topic variable"
---

The title of this page is not a generic title or placeholder. Raku has a special variable called the *topic variable*: in Raku this is represented as `$_`.

`$_` is a special variable that exists to enable a handful of useful syntactic shortcuts.

```raku
for <file1.txt file2.txt file3.txt> {
  say .&slurp;
}
```