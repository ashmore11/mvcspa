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
;var locals_for_with = (locals || {});(function (routes, title, undefined) {
buf.push("<div id=\"header\"><h2>" + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + "</h2><ul>");
// iterate routes
;(function(){
  var $$obj = routes;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var route = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", "" + (route.path) + "", true, false)) + ">" + (jade.escape((jade_interp = route.id) == null ? '' : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var route = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", "" + (route.path) + "", true, false)) + ">" + (jade.escape((jade_interp = route.id) == null ? '' : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div>");}.call(this,"routes" in locals_for_with?locals_for_with.routes:typeof routes!=="undefined"?routes:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
},
"views/example": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (page, user) {
buf.push("<div id=\"example\" class=\"page\"><h1>" + (jade.escape((jade_interp = page.title) == null ? '' : jade_interp)) + "</h1><ul><li><a href=\"/example/john-smith\">John Smith</a></li><li><a href=\"/example/tom-jones\">Tom Jones</a></li></ul>");
if ( user)
{
buf.push("<div id=\"user\"><h1>" + (jade.escape((jade_interp = user.title) == null ? '' : jade_interp)) + " " + (jade.escape((jade_interp = user.name) == null ? '' : jade_interp)) + "</h1></div>");
}
buf.push("</div>");}.call(this,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
},
"views/home": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (page) {
buf.push("<div id=\"home\" class=\"page\"><h1>" + (jade.escape((jade_interp = page.title) == null ? '' : jade_interp)) + "</h1></div>");}.call(this,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined));;return buf.join("");
},
"components/user": function(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (user) {
buf.push("<div id=\"user\"><h1>" + (jade.escape((jade_interp = user.title) == null ? '' : jade_interp)) + " " + (jade.escape((jade_interp = user.name) == null ? '' : jade_interp)) + "</h1></div>");}.call(this,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
},
}