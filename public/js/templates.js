var Templates = {
"common/footer": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title) {
buf.push("<div id=\"footer\"><h2>" + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + "</h2></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
},
"common/header": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title) {
buf.push("<div id=\"header\"><h2>" + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + "</h2><ul><li><a href=\"/\">Home</a></li><li><a href=\"/example\">Example</a></li></ul></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
},
"components/user": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (user) {
buf.push("<div id=\"user\"><h1>" + (jade.escape((jade_interp = user.title) == null ? '' : jade_interp)) + " " + (jade.escape((jade_interp = user.name) == null ? '' : jade_interp)) + "</h1></div>");}.call(this,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
},
"views/example": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (user) {
buf.push("<div id=\"example\" class=\"page\"><h1>" + (jade.escape((jade_interp = locals.page.title) == null ? '' : jade_interp)) + "</h1><ul><li><a href=\"/example/john-smith\">John Smith</a></li><li><a href=\"/example/tom-jones\">Tom Jones</a></li></ul>");
if ( user)
{
buf.push("<div id=\"user\"><h1>" + (jade.escape((jade_interp = user.title) == null ? '' : jade_interp)) + " " + (jade.escape((jade_interp = user.name) == null ? '' : jade_interp)) + "</h1></div>");
}
buf.push("</div>");}.call(this,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
},
"views/home": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (page) {
buf.push("<div id=\"home\" class=\"page\"><h1>" + (jade.escape((jade_interp = page.title) == null ? '' : jade_interp)) + "</h1></div>");}.call(this,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined));;return buf.join("");
},
}