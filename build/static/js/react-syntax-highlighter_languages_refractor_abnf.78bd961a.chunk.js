"use strict";(self.webpackChunkethereum_cryptography=self.webpackChunkethereum_cryptography||[]).push([[9073],{46887:e=>{function n(e){!function(e){var n="(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";e.languages.abnf={comment:/;.*/,string:{pattern:/(?:%[is])?"[^"\n\r]*"/,greedy:!0,inside:{punctuation:/^%[is]/}},range:{pattern:/%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,alias:"number"},terminal:{pattern:/%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,alias:"number"},repetition:{pattern:/(^|[^\w-])(?:\d*\*\d*|\d+)/,lookbehind:!0,alias:"operator"},definition:{pattern:/(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,lookbehind:!0,alias:"keyword",inside:{punctuation:/<|>/}},"core-rule":{pattern:RegExp("(?:(^|[^<\\w-])"+n+"|<"+n+">)(?![\\w-])","i"),lookbehind:!0,alias:["rule","constant"],inside:{punctuation:/<|>/}},rule:{pattern:/(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,lookbehind:!0,inside:{punctuation:/<|>/}},operator:/=\/?|\//,punctuation:/[()\[\]]/}}(e)}e.exports=n,n.displayName="abnf",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_abnf.78bd961a.chunk.js.map