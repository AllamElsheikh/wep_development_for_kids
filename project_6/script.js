	
	// When the user scrolls down then
	// slide down the navbar
	window.onscroll = function() {
		scroll()
	};

	function scroll() {
		if (document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20) {
			document.getElementById("navlist").style.top = "0";
		}
		else {
			document.getElementById("navlist").style.top
					= "-60px";
		}
	}
