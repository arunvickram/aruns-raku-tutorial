---
title: Control flow 
description: Control flow constructs in Raku
tableOfContents:
  maxHeadingLevel: 5
---

## Conditional flow

### Branching conditionals

In this section, we're going to cover the `if` statement, the related `with` statement, truthiness, and we're going to quickly touch upon (or revisit in case you're reading this tutorial out of order) the concept of *definedness*.

#### If

Let's start with a basic example of control flow in Raku: the humble `if`.

```raku
# assume some $gender, $user for a user profile stored in the database
my $gender = get-gender-of-current-user($user);
my %pronouns;

if $gender eq 'M' {
  my %pronouns = subject => 'He', object => 'him', possessive => 'his';
} elsif $gender eq 'F' {
  my %pronouns = subject => 'She', object => 'her', possessive => 'her';
} else {
  my %pronouns = subject => 'They', object => 'them', possessive => 'their';
}

return %pronouns;
```

This should look familiar to anyone that has programmed in Python, Ruby, PHP, or any similar or modern language. We print `foobar` if `$x` equals `'foobar'` (go [here](#) to read why we use `eq` instead of `==` here if you haven't read the section yet), `foo` if `$x` equals `'foo'`, and `Got nothing` if `$x` is neither.

In Raku, the condition in the `if` clause (and consequently `elsif` clause) is first evaluated, and then coerced to a `Bool` if necessary.

Let's see this in action:

```raku
my %user-config = try get-user-config() // %{}; # we either get the user config or we substitute with an empty Hash.

if not %user-config {
  default-user-config();
} else {
  %user-config;
}
```

Raku will coerce `%user-config`, a `Hash`, into a `Bool` for the if-statement. A `Hash` coerces to `True` if it is defined *and* it is not empty.

Container types like arrays and maps that are empty are coerced to `False`.

##### Unless

In some cases, you can write the above `if not` condition with an `unless`:

```raku
unless %user-config { # equivalent to if not %user-config

}
```

Unlike in Ruby, you cannot write an `else` statement after `unless`. So this is invalid:

```raku
unless %user-config { 

} else {  # invalid syntax

}
```

##### Truthiness

#### With

There's a near identical statement to the `if` statement in Raku: the `with` statement. The crucial difference between `if` and `with` is that `with` checks for [*definedness*](#) rather than truthiness.

```raku
with $x {

} orwith $y {

} else {

}

```

##### Definedness

Unlike its cousins Python and Ruby, no variable in Raku can ever hold a null value. Instead, what happens is that variables are considered *defined* and *undefined* in Raku, just like its sister Perl.

```raku
my Int $x; # $x is undefined
my Int $y = 2; # $y is defined

say $x.defined; # => False
say $y.defined; # => True
```

In cases where you need to specifically explicitly return an undefined value, there is `Nil`; however, `Nil` itself is not a value. `Nil` represents the default undefined value for the kind of variable it's being assigned to.

We'll touch more upon this later on.

#### Given statement

```raku
given {
  when {

  }

  when {

  }
}
```

### Looping constructs

```raku
for @values -> $x {

}
```