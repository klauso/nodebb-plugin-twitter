(function(module) {
	"use strict";

	var Twitter = {},
		embed = '<span data-url="https://twitter.com/$2/statuses/$3"></span><script type="text/javascript" src="https://api.twitter.com/1/statuses/oembed.json?id=$3&callback=twitterEmbed"></script>';

	Twitter.addScripts = function(scripts, callback) {
                return scripts.concat([
                                'plugins/nodebb-plugin-twitter/main.js'
                        ]);
        };
	Twitter.parse = function(postContent, callback) {
		var	regularUrl = /<a href="(http|https):\/\/twitter.com\/([^\/"\s]*)\/status\/([^\/"\s]*)">.+?<\/a>/g

		 if (postContent.match(regularUrl)) {
			postContent = postContent.replace(regularUrl, embed);
		}

		callback(null, postContent);
	};

	Twitter.addNavigation = function(custom_header, callback) {
            custom_header.navigation.push({
                "class": "hidden",
                "route": "",
                "text": '<script language="javascript" src="http://platform.twitter.com/widgets.js"></script>'
            });

            return custom_header;
        },

	module.exports = Twitter;
}(module));