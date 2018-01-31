/**
 * Main javaScript File
 *
 * @package Gore
 */

(function( $ ) {
	"use strict";

	var post = {

		init: function() {
			post.config();
			console.log( 'rest_url = ' + post.restUrl + ' theme_uri = ' + post.themeUri );
			post.displayNextTenPosts();
		},

		config: function() {
			post.pageNo = 1;
			post.themeUri = postdata.theme_uri;
		},

		/**
		 * Calculates and returns the count of posts
		 *
		 * @return {string} restUrl rest url.
		 */
		getRestUrl: function() {
			post.pageNo = post.pageNo + 1;


			var pageNo = post.pageNo.toString(),
				restUrl = postdata.rest_uri + 'posts/?embed=true&page=' + pageNo + '';

			return restUrl;
		},

		displayNextTenPosts: function() {
			var triggerBtn = document.querySelector( 'button' );
			 window.addEventListener( 'scroll', function() {

			 	var triggerPos = triggerBtn.getBoundingClientRect().top,
				    windowHeight = window.innerHeight;
			 	console.log( triggerPos );
			 	console.log( ' windowHeight = ' + windowHeight );

			 	if ( triggerPos > windowHeight ) {
			 		return;
			 	}
				 post.createPostContent();
			 } );
			console.log( triggerBtn );
		},

		createPostContent: function() {
			var ajaxRequest,
				restUrl = post.getRestUrl();
			
			console.log( 'restUrl = ' + restUrl );

			ajaxRequest = $.ajax({
				dataType: 'json',
				url: restUrl
			});

			ajaxRequest.done( function( object ) {
				console.log( object );
				post.buildPost( object );
			});

			ajaxRequest.fail( function() {
				console.log( 'Error' );
			});

			ajaxRequest.always( function() {
				console.log( 'Ajax Request Complete' );
			});
		},

		buildPost: function( object ) {
			var content = '',
				btn = $( 'button' ),
				postsContainer = $( 'article' );
			btn.off( 'click', post.createPostContent );
			btn.remove();
			for( var i = 0; i < object.length; i++ ) {
				var obj = object[i];
				content +=
					'<div class="gore-content">' +
					'<h1>' + obj.title.rendered + '</h1>' +
					'<p>' + obj.content.rendered + '</p>'+
					'<div>';
				postsContainer.append( content );
			}
			postsContainer.append( '<button>Load More</button>' );
			$( 'button' ).on( 'click', post.createPostContent );
		}

	};

	post.init();

})(jQuery);