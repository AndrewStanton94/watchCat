const bookmarkletLinkSrc = `<a
	class="button"
	data-testid="saveBookmarklet"
	href="javascript:( function(){
		const sc = document.createElement('script');
		sc.src = 'https://watchcat.andrewstanton.tech/bookmarklet.js';
		document.querySelector('head').append(sc);
	})();"
>
	YouTube Watch later bookmarklet
</a>`;
export default bookmarkletLinkSrc;
