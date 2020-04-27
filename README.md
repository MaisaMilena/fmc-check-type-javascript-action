# FormalityCore type check files javascript action

This action prints a sucess ("All terms check." or "Hello") or a failure message ("There are in some file. Did you run `fmc` before pushing?")

## Inputs

### `terms`

**Required** output after running a type check with "fmc". Default "none".

## Outputs

### `checked`

The result of checking terms.

## Example usage

uses: actions/fmc-check-type-javascript-action@v1
with:
  terms: 
  ```Word.to_nat   : <size: Nat> -> Word(size) -> Nat
    Word.to_nat.go : <size: Nat> -> Word(size) -> Nat -> Nat
    Word.xor       : <size: Nat> -> Word(size) -> Word(size) -> Word(size)
    hello          : IO(Unit)
    All terms check.
  ```