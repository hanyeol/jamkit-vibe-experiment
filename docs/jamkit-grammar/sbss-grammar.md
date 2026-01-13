# SBSS (Smart Book Style Sheet) Grammar

## Overview

SBSS is a style sheet language for defining visual properties and variables for SBML documents. This document provides a formal grammar specification in Extended Backus-Naur Form (EBNF).

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
Document        ::= {Statement}
```

### Statements

```ebnf
Statement       ::= Directive | StyleDefinition | EmptyLine

Directive       ::= VariableDirective
                  | ImportDirective
                  | ConditionalDirective
```

### Variable Directive

Variables are used for parameterization and conditional logic.

```ebnf
VariableDirective ::= "$" VariableName "=" VariableValue

VariableName    ::= Identifier

VariableValue   ::= QuotedString | UnquotedValue
```

**Examples:**
```sbss
$PRIMARY_COLOR = #ff0000
$FONT_SIZE = 14pt
$PLATFORM = "ios"
$BASE_URL = "https://example.com"
```

**Variable Resolution:**
Variables can reference other variables using `$NAME` syntax:

```sbss
$BASE_SIZE = 12pt
$TITLE_SIZE = $BASE_SIZE + 4pt
$HERO = "Alice"
$MESSAGE = "$HERO saves the day"
```

### Import Directive

```ebnf
ImportDirective ::= "import" StringLiteral
```

Imports must reference `.sbss` files only.

**Example:**
```sbss
import "common.sbss"
import "colors.sbss"
```

### Conditional Directives

```ebnf
ConditionalDirective ::= "if" Expression
                         {Statement}
                         [{ElifBlock}]
                         [ElseBlock]
                         "end"

ElifBlock       ::= "elif" Expression
                    {Statement}

ElseBlock       ::= "else"
                    {Statement}

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
```sbss
if $PLATFORM == "ios"
    @root: background-color=#ffffff
end

if $SCREEN_WIDTH > 320
    $FONT_SIZE = 16pt
elif $SCREEN_WIDTH > 240
    $FONT_SIZE = 14pt
else
    $FONT_SIZE = 12pt
end

if $DEBUG == "true" && $PLATFORM != "production"
    @root: show-debug-info=true
end
```

### Style Definitions

SBSS provides multiple ways to define styles based on different selectors.

```ebnf
StyleDefinition ::= RootDefinition
                  | TagDefinition
                  | PathDefinition
                  | PropsDefinition
                  | StyleDefinition

RootDefinition  ::= "@root" PropertySpec

TagDefinition   ::= "%" TagName PropertySpec

PathDefinition  ::= "/" SectionPath PropertySpec

PropsDefinition ::= "@" PropsName PropertySpec

StyleDefinition ::= "#" StyleName PropertySpec

PropertySpec    ::= ":" PropertyList
                  | "{" PropertyBlock "}"
```

#### Root Definition

Defines properties for the document root.

```ebnf
RootDefinition  ::= "@root" PropertySpec
```

**Examples:**
```sbss
@root: width=100%, height=100%

@root {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
}
```

#### Tag Definition

Defines properties for all sections with a specific tag.

```ebnf
TagDefinition   ::= "%" TagName PropertySpec

TagName         ::= Identifier
```

**Examples:**
```sbss
%chapter: font-size=18pt, font-weight=bold

%paragraph {
    text-align: justify;
    line-height: 1.5;
    margin: 10dp 0;
}
```

#### Path Definition

Defines properties for sections matching a specific path pattern.

```ebnf
PathDefinition  ::= "/" SectionPath PropertySpec

SectionPath     ::= PathSegment {"/" PathSegment}

PathSegment     ::= Identifier | "*"
```

The `*` wildcard matches any single section tag.

**Examples:**
```sbss
/book/chapter: padding=20dp

/book/chapter/section {
    margin-top: 15dp;
    margin-bottom: 10dp;
}

/book/*/section: font-size=14pt
```

#### Props Definition

Defines reusable property sets that can be referenced.

```ebnf
PropsDefinition ::= "@" PropsName PropertySpec

PropsName       ::= Identifier
```

Props can be referenced in SBML using `=props name: ...` or via `props=name` property.

**Examples:**
```sbss
@card-style: border-radius=8dp, padding=16dp, background=#ffffff

@button-base {
    padding: 10dp 20dp;
    border-radius: 4dp;
    text-align: center;
}
```

#### Style Definition

Defines named styles for inline text styling.

```ebnf
StyleDefinition ::= "#" StyleName PropertySpec

StyleName       ::= Identifier
```

Styles can be referenced in SBML using `=[style-name|text|]=` markup or `=style name: ...` directive.

**Examples:**
```sbss
#bold: font-weight=bold

#highlight {
    background-color: #ffff00;
    color: #000000;
}

#error: color=#ff0000, font-weight=bold
```

### Property Specifications

```ebnf
PropertySpec    ::= ListSpec | BlockSpec

ListSpec        ::= ":" PropertyList

BlockSpec       ::= "{" PropertyBlock "}"

PropertyList    ::= Property {"," Property}

PropertyBlock   ::= {PropertyLine}

PropertyLine    ::= PropertyKey ":" PropertyValue ";"

PropertyKey     ::= Identifier

PropertyValue   ::= QuotedString | UnquotedValue

QuotedString    ::= "\"" {StringChar} "\""
                  | "'" {StringChar} "'"

UnquotedValue   ::= {ValueChar}

StringChar      ::= /* Any character except quote or backslash */
                  | "\\" EscapeChar

EscapeChar      ::= "b" | "f" | "n" | "r" | "t" | "\"" | "'" | "\\"

ValueChar       ::= /* Any character except whitespace, comma, and semicolon */
```

**List Syntax Examples:**
```sbss
@root: width=100%, height=100%, background=#fff

%title: font-size=24pt, font-weight=bold, color=#333
```

**Block Syntax Examples:**
```sbss
@root {
    width: 100%;
    height: 100%;
    background: #ffffff;
}

%paragraph {
    text-align: justify;
    line-height: 1.5;
    margin: 10dp 0;
}
```

### Variable Resolution in Properties

Variables defined with `$` can be used in property values:

```sbss
$PRIMARY_COLOR = #3498db
$SECONDARY_COLOR = #2ecc71
$PADDING = 16dp

@root {
    background-color: $PRIMARY_COLOR;
    padding: $PADDING;
}

%button: background=$SECONDARY_COLOR, padding=$PADDING
```

**Arithmetic Expressions:**

When a variable value contains operators like `+`, `-`, `*`, `/`, parentheses are automatically added:

```sbss
$BASE_SIZE = 12pt
$LARGE_SIZE = $BASE_SIZE + 4pt    # Becomes: (12pt + 4pt)

%title: font-size=$LARGE_SIZE
```

### Scope and Naming

#### Global Scope

When SBSS is parsed independently (not from within an SBML file):
- Props and styles have global scope
- Names are used as-is

**Example (global.sbss):**
```sbss
@my-props: padding=10dp
#my-style: color=#ff0000
```

These become `my-props` and `my-style` globally.

#### Local Scope

When SBSS is parsed from within an SBML file (via `=import`):
- Props and styles are scoped to the SBML file
- Names are prefixed with `sbml:<filename>:`

**Example (in document.sbml):**
```sbml
=import "styles.sbss"
```

If `styles.sbss` contains:
```sbss
@my-props: padding=10dp
#my-style: color=#ff0000
```

They become `sbml:document.sbml:my-props` and `sbml:document.sbml:my-style`.

Names starting with `sbml:` are always global and not prefixed.

### Line Continuation

Lines ending with `\` are continued on the next line:

```sbss
$LONG_URL = "https://example.com/very/long/path/\
that/continues/on/next/line"

@root: width=100%, \
       height=100%, \
       background=#ffffff
```

### Comments

SBSS does not have explicit comment syntax. However, you can use conditionals that always evaluate to false:

```sbss
if 1 == 0
    This is effectively a comment
    @root: this-will-never-apply=true
end
```

Or use undefined variables (which will log warnings but not cause errors):

```sbss
$_COMMENT = "This is documentation but will show warnings"
```

### Lexical Elements

```ebnf
Identifier      ::= Letter {Letter | Digit | "-" | "_" | ":"}

Letter          ::= "a".."z" | "A".."Z"

Digit           ::= "0".."9"

LineBreak       ::= "\n" | "\r" | "\r\n"

EmptyLine       ::= {Whitespace} LineBreak

Whitespace      ::= " " | "\t"
```

### Special Considerations

#### Import Restrictions

- Only `.sbss` files can be imported (enforced by parser)
- Recursive imports are detected and cause parsing errors
- Imports are relative to the current file's directory

#### Variable Naming

- Variable names must start with `$`
- By convention, private/internal variables start with `$_`
- Variables are case-sensitive

**Examples:**
```sbss
$PUBLIC_VAR = value
$_private_var = value
$camelCase = value
$snake_case = value
```

#### Property Block Parsing

When a block is opened with `{`, the parser collects all lines until the closing `}`:

```sbss
@root {
    width: 100%;
    height: 100%;
}
```

The block content (between `{` and `}`) is then parsed as a property list with:
- `:` as key-value separator
- `;` as property separator
- Whitespace is trimmed

## Evaluation Order

1. **Variable definitions** are evaluated first
2. **Conditionals** are evaluated based on current variable state
3. **Style definitions** are collected and stored
4. When SBML is parsed, styles are applied based on:
   - Root properties (`@root`)
   - Tag-based properties (`%tag`)
   - Path-based properties (`/path/to/section`)

## UTF-8 Support

- SBSS files must be encoded in UTF-8
- Optional UTF-8 BOM (0xEF 0xBB 0xBF) at the beginning is automatically skipped
- All identifiers and string values support Unicode characters

## Error Handling

The parser handles errors gracefully:
- Undefined variables log warnings but don't stop parsing
- Syntax errors in property lists log warnings
- Unclosed conditionals at end of file log warnings
- Unclosed blocks log warnings

## Examples

### Complete Example

```sbss
# Variables
$PLATFORM = "ios"
$PRIMARY_COLOR = #3498db
$SECONDARY_COLOR = #2ecc71
$BASE_FONT_SIZE = 14pt
$TITLE_FONT_SIZE = $BASE_FONT_SIZE + 8pt

# Conditional configuration
if $PLATFORM == "ios"
    $SYSTEM_FONT = "SF Pro"
elif $PLATFORM == "android"
    $SYSTEM_FONT = "Roboto"
else
    $SYSTEM_FONT = "Arial"
end

# Root properties
@root {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    font-family: $SYSTEM_FONT;
    font-size: $BASE_FONT_SIZE;
}

# Tag-based styles
%chapter {
    font-size: $TITLE_FONT_SIZE;
    font-weight: bold;
    color: $PRIMARY_COLOR;
    margin: 20dp 0;
}

%paragraph: text-align=justify, line-height=1.5

# Path-based styles
/book/chapter/section {
    margin-top: 15dp;
    margin-bottom: 10dp;
}

/book/*/subsection: font-size=12pt

# Named props
@card-style {
    border-radius: 8dp;
    padding: 16dp;
    background: #ffffff;
    box-shadow: 0 2dp 4dp rgba(0,0,0,0.1);
}

@button-base: padding=10dp 20dp, border-radius=4dp

# Named styles
#bold: font-weight=bold

#highlight {
    background-color: #ffff00;
    color: #000000;
}

#error: color=#ff0000, font-weight=bold

#link {
    color: $PRIMARY_COLOR;
    text-decoration: underline;
}
```

## See Also

- [SBML Grammar](sbml-grammar.md) - Markup language grammar
- [BON Grammar](bon-grammar.md) - Bookjam Object Notation grammar
- [SBML Properties Reference](sbml-properties.md) - Complete property reference
