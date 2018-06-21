/*\
title: $:/core/modules/serverroute/delete-tiddlers.js
type: application/javascript
module-type: serverroute

DELETE /recipes/default/tiddlers/:title

\*/
(function() {

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.method = "DELETE";

exports.path = /^\/bags\/default\/tiddlers\/(.+)$/;

exports.handler = function(request,response,state) {
	var title = decodeURIComponent(state.params[0]);
	state.wiki.deleteTiddler(title);
	response.writeHead(204, "OK", {
		"Content-Type": "text/plain"
	});
	response.end();
};

}());
