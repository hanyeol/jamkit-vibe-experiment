# SBML (Smart Book Markup Language) Grammar

## Overview

SBML is a markup language for creating structured documents with rich text content, multimedia objects, and styling. This document provides a formal grammar specification in Extended Backus-Naur Form (EBNF).

## Notation

- `::=` defines a production rule
- `|` separates alternatives
- `[...]` denotes optional elements
- `{...}` denotes zero or more repetitions
- `(...)` groups elements
- `"..."` represents literal text
- `'...'` represents literal text (alternative)
- Terminal symbols are in lowercase or quoted
- Non-terminal symbols are in PascalCase

## Grammar

### Document Structure

```ebnf
Document        ::= {Block}
Block           ::= Directive | Text | LineBreak
```

### Directives

All SBML directives start with `=` at the beginning of a line.

```ebnf
Directive       ::= BeginDirective
                  | EndDirective
                  | ImportDirective
                  | ImageDirective
                  | ObjectDirective
                  | PropsDirective
                  | StyleDirective
                  | PragmaDirective
                  | BreakDirective
                  | ConditionalDirective
                  | CommentDirective
```

#### Section Directives

```ebnf
BeginDirective  ::= "=begin" Tag [":" PropertyList]
EndDirective    ::= "=end" [Tag]

Tag             ::= Identifier
```

**Example:**
```sbml
=begin section: layout=vertical, padding=20dp
  Content goes here...
=end section
```

#### Import Directive

```ebnf
ImportDirective ::= "=import" StringLiteral
```

**Example:**
```sbml
=import "common-styles.sbss"
```

#### Image Directive

```ebnf
ImageDirective  ::= "=image" Filename [":" PropertyList]

Filename        ::= Identifier | StringLiteral
```

**Example:**
```sbml
=image photo.jpg: width=100%, height=auto
```

Note: `=image` is syntactic sugar for `=object sbml:image` with a `filename` property.

#### Object Directive

```ebnf
ObjectDirective ::= "=object" ObjectType [":" PropertyList]

ObjectType      ::= Identifier
```

**Example:**
```sbml
=object video: src=movie.mp4, controls=true
=object map: latitude=37.5, longitude=127.0
```

#### Props Directive

```ebnf
PropsDirective  ::= "=props" PropsName ":" PropertyList
```

**Example:**
```sbml
=props chapter-title: font-size=24pt, font-weight=bold
```

#### Style Directive

```ebnf
StyleDirective  ::= "=style" StyleName ":" PropertyList
```

**Example:**
```sbml
=style highlight: color=#ff0000, background-color=#ffff00
```

#### Pragma Directive

```ebnf
PragmaDirective ::= "=pragma" PragmaType [":" PropertyList]
```

**Example:**
```sbml
=pragma page-numbering: start=1, format=roman
```

#### Break Directive

```ebnf
BreakDirective  ::= "=break"
```

Note: `=break` is syntactic sugar for `=pragma sbml:page-break`.

**Example:**
```sbml
=break
```

#### Conditional Directives

```ebnf
ConditionalDirective ::= IfDirective | ElifDirective | ElseDirective

IfDirective     ::= "=if" Expression
                    {Block}
                    [{ElifBlock}]
                    [ElseBlock]
                    "=end"

ElifBlock       ::= "=elif" Expression
                    {Block}

ElseBlock       ::= "=else"
                    {Block}

Expression      ::= /* Boolean expression - see Expression Syntax section */
```

**Example:**
```sbml
=if $PLATFORM == "ios"
  iOS specific content
=elif $PLATFORM == "android"
  Android specific content
=else
  Default content
=end
```

#### Comment Directive

```ebnf
CommentDirective ::= "=comment" RestOfLine
```

**Example:**
```sbml
=comment This is a comment and will be ignored
```

### Text Content

```ebnf
Text            ::= {TextElement}
TextElement     ::= PlainText | EscapeSequence | InlineObject | StyleMarkup

PlainText       ::= /* Any character except '\' and markup delimiters */

EscapeSequence  ::= "\" EscapeChar
EscapeChar      ::= "b" | "f" | "n" | "r" | "t" | "\" | /* other chars */
```

#### Inline Objects

Inline objects are embedded within text using `=(...)=` syntax.

```ebnf
InlineObject    ::= "=(" InlineObjectSpec ")="

InlineObjectSpec ::= ImageSpec | ObjectSpec | IndexSpec | AnchorSpec

ImageSpec       ::= "image" Filename [":" PropertyList]
ObjectSpec      ::= "object" ObjectType [":" PropertyList]
IndexSpec       ::= "index" IndexId
AnchorSpec      ::= "anchor" AnchorId

IndexId         ::= Identifier
AnchorId        ::= Identifier
```

**Examples:**
```sbml
This is text with an inline =(image icon.png)= image.
This is text with an =(object button: label=Click)= button.
This is an =(index term1)= index marker.
This is an =(anchor sec1)= anchor point.
```

#### Style Markup

Style markup allows applying styles to text ranges using `=[...]|...|]=` syntax.

```ebnf
StyleMarkup     ::= "=[" StyleSpec "|" Text "|]="

StyleSpec       ::= StyleRef {"," StyleRef} [InlineProps]
                  | InlineProps

StyleRef        ::= Identifier

InlineProps     ::= ":" PropertyList
```

**Examples:**
```sbml
This is =[bold|bold text|]=.
This is =[bold, italic|bold and italic text|]=.
This is =[: color=#ff0000|red text|]=.
This is =[highlight: font-size=20pt|highlighted and larger text|]=.
```

### Property Lists

Property lists define key-value pairs for configuration.

```ebnf
PropertyList    ::= Property {"," Property}

Property        ::= PropertyKey ("=" | ":") PropertyValue

PropertyKey     ::= Identifier

PropertyValue   ::= QuotedString | UnquotedValue

QuotedString    ::= "\"" {StringChar} "\""
                  | "'" {StringChar} "'"

UnquotedValue   ::= {ValueChar}

StringChar      ::= /* Any character except quote or backslash */
                  | "\\" EscapeChar

ValueChar       ::= /* Any character except whitespace and ',' */
```

**Examples:**
```
width=100%, height=200dp
font="Helvetica Neue", size=14pt
color='#ff0000', background-color=#ffffff
margin=10 20 10 20
```

### Expression Syntax

Expressions are used in conditional directives for flow control.

```ebnf
Expression      ::= LogicalOr

LogicalOr       ::= LogicalAnd {"||" LogicalAnd}

LogicalAnd      ::= Equality {"&&" Equality}

Equality        ::= Relational [("==" | "!=") Relational]

Relational      ::= Primary [("<" | ">" | "<=" | ">=") Primary]

Primary         ::= VariableRef | StringLiteral | "(" Expression ")"

VariableRef     ::= "$" Identifier

StringLiteral   ::= "\"" {StringChar} "\""
```

**Examples:**
```
$PLATFORM == "ios"
$WIDTH > 320
$VERSION >= "2.0" && $PLATFORM != "web"
```

### Lexical Elements

```ebnf
Identifier      ::= Letter {Letter | Digit | "-" | "_" | ":"}

Letter          ::= "a".."z" | "A".."Z"

Digit           ::= "0".."9"

LineBreak       ::= "\n" | "\r" | "\r\n"

RestOfLine      ::= {Character} LineBreak
```

## Section Path Matching

Section paths are used in SBSS to apply styles to sections based on their hierarchy.

```
Pattern         ::= "/" {PathSegment "/"}
PathSegment     ::= Identifier | "*"
```

The `*` wildcard matches any single section tag.

**Examples:**
```
/book/chapter/section    # Matches exactly this path
/book/*/section          # Matches any section under book/*/*
```

## Property Resolution Order

When properties are applied to elements, they are resolved in this order (later overrides earlier):

1. Tag-level properties (from `%tag` in SBSS)
2. Path-level properties (from `/path/to/tag` in SBSS)
3. Inline properties (from directive's property list)
4. Props references (via `props=...` property)
5. Style references (via `style=...` property)

## Special Properties

### Pseudo Properties

These properties are expanded into multiple individual properties:

- `spacing` → `line-spacing`, `paragraph-spacing`
- `text-offset` → `text-offset-x`, `text-offset-y`
- `text-scale` → `text-scale-x`, `text-scale-y`
- `margin` → `margin-top`, `margin-right`, `margin-bottom`, `margin-left`
- `padding` → `padding-top`, `padding-right`, `padding-bottom`, `padding-left`
- `border-width` → `border-top-width`, `border-right-width`, etc.
- `border-color` → `border-top-color`, `border-right-color`, etc.
- `border-style` → `border-top-style`, `border-right-style`, etc.
- `border-radius` → `border-tl-radius`, `border-tr-radius`, etc.
- `background` → `background-color`, `background-image`
- `page-background` → `page-background-color`, `page-background-image`
- `font` → `font-family`, `font-size`, `font-weight`, `font-style`

### Font Shorthand

```
font: [<font-weight>] [<font-style>] <font-size> <font-family>
```

**Examples:**
```
font: bold 14pt Helvetica
font: italic 12pt "Times New Roman"
font: 16pt Arial
```

### Sided Properties

Properties like `margin`, `padding`, `border-*` follow CSS-like expansion:

- 1 value: all sides
- 2 values: top/bottom, left/right
- 3 values: top, left/right, bottom
- 4 values: top, right, bottom, left

**Examples:**
```
margin: 10dp              # All sides: 10dp
margin: 10dp 20dp         # Top/bottom: 10dp, Left/right: 20dp
margin: 10dp 20dp 30dp    # Top: 10dp, Left/right: 20dp, Bottom: 30dp
margin: 10dp 20dp 30dp 40dp  # Top: 10dp, Right: 20dp, Bottom: 30dp, Left: 40dp
```

## Line Continuation

Lines ending with `\` are continued on the next line:

```sbml
=begin section: width=100%, \
                height=200dp, \
                background=#ffffff
```

## UTF-8 Support

- SBML files must be encoded in UTF-8
- Optional UTF-8 BOM (0xEF 0xBB 0xBF) at the beginning is automatically skipped
- All text content supports Unicode characters

## Notes

1. **Directive Parsing**: All directives must start at the beginning of a line (after trimming whitespace)
2. **Case Sensitivity**: Property names and tag names are case-sensitive
3. **Whitespace**: Leading and trailing whitespace is trimmed from blocks
4. **Style Nesting**: Style markup can be nested, and unclosed markups are auto-closed at the end
5. **Variable Resolution**: Variables (starting with `$`) are resolved during parsing from SBSS definitions

## See Also

- [SBSS Grammar](sbss-grammar.md) - Style sheet grammar
- [BON Grammar](bon-grammar.md) - Bookjam Object Notation grammar
- [SBML Properties Reference](sbml-properties.md) - Complete property reference
