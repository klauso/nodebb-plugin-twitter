(function(module) {
	"use strict";

	var Twitter = {},
		embed = '<blockquote class="content twitter-tweet" lang="en"><a href="https://twitter.com/$1/status/$2"></a></blockquote><a href="https://twitter.com/$1/status/$2" target="_blank" rel="noopener noreferrer nofollow">Link to Tweet</a>';

	Twitter.parse = function(data, callback) {
		var regularUrl = /<a href="(?:https?:\/\/)?(?:(?:(?:mobile|www)\.)?twitter\.com)\/([^\/"\s]*)\/statuse?s?\/([^\/"\s]*)(\/photo\/\d|)".*?>.+?<\/a>/g
		var postContent = data && data.postData && data.postData.content;

		if (postContent && postContent.match(regularUrl)) {
			data.postData.content = postContent.replace(regularUrl, embed);
		}
		callback(null, data);
	};

	module.exports = Twitter;
}(module));
