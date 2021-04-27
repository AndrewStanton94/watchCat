const bookmarkletLinkSrc = `<a
	class="button"
	data-testid="saveBookmarklet"
	href="javascript:( function(){
		const sc = document.createElement('script');
		sc.src = 'https://andrewstanton94.github.io/watchCat/bookmarklet.js';
		document.querySelector('head').append(sc);
	})();"
>
	YouTube Watch later bookmarklet
</a>`;
export default bookmarkletLinkSrc;
