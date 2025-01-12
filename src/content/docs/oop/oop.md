---
title: Object oriented programming
description: Object oriented programming in Raku.
---

In Raku, every type aside from [*native types*](#), types that represent low level values like bits, integers, etc., is an object. 
We'll discuss this more later when we touch upon native types.

## Classes

Defining a basic class in Raku is incredibly simple:

```raku
class Account {
  has $.id;
  has Rat $.balance; # rat means rational
  has Str @.owners; # '@.' means the field is a list type
  has %.transaction-history; # '%.' means that the field is an associative type

  has $!private-info;
}
```

This class declaration generates a constructor that takes named arguments:

```raku
my $account = Account.new(id => '0', balance => 0.00, owners => ['arun'], transaction-history => %{}); 

# alternatively using type declarations
my Account $account .= new(id => '0', balance => 0.00, owners => ['arun'], transaction-history => %{}); 
```

### Field declarations and twigils

Each field declared uses a *twigil*, a combination of two separate non-alphabetic characters that when combined pack
incredible detail into the field such as scope and container type.

In our example class `Account`, the field declaration `$.id` tells us the following:

1. The `$` in the twigil `$.` indicates a *scalar* just like the sigil `$`, meaning that the variable holds a singular value as opposed to a list or hash.
2. The `.` in the twigil `$.` tells Raku to generate accessor methods for `$.id`, meaning that `id` is accessible outside of instance methods. 

There are no public fields in Raku.

Taking the example `$account` from above, because we declared the field `id` using the twigil, `$.`, we can access the id of `$account` with a simple accessor method call:

```raku
say $account.id;
```

As illustrated above, you can also have array fields and hash fields by using the twigils `@.` and `%.` respectively, and you can access them:

```raku
say $account.owners;
say $account.transaction-history; 
```

#### Private fields

To keep a field *private* and inaccessible from outside the class, meaning that it is only accessible within instance methods, simply do the following:

```raku
class PrivateAccount {
  has $!id;
}
```

The private twigil versions of `$.`, `@.`, and `%.` are `$!`, `@!`, and `%!`.

### Methods

Let's take our `Account` example from above and add a way to determine whether the account can send transactions.

```raku
class Account {
  has Rat $.amount;

  method can-send-money { 
    $.amount > 0;
  }
}

my Account $account1 .= new(amount => 0.0);
my Account $account2 .= new(amount => 1.0);

say $account1.can-send-money(); # => false

# because .can-send-money takes no parameters
# you can drop the parenthesis for the method call
say $account2.can-send-money; # => true
```