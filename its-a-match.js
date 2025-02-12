//normal: matches with the expression 'hi'.
let normal = /hi/;

//begin: matches with the expression 'hi', only when it is at the beginning.
let begin = /\bhi/;

//end: matches with the expression 'hi', only when it is at the end.
let end = /hi\b/;

//beginEnd: matches with the expression 'hi', only when it is exactly hi.
let beginEnd = /^hi$/;