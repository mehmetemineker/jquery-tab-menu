function TabMenu(id, active){
	$("#" + id + " .ekr-tabmenu-tabs ul li:nth-child(" + active + ")").addClass("active");
	$("#" + id + " .ekr-tabmenu-content div.ekr-tabmenu-page:nth-child(" + active + ")").addClass("active");
	$("#" + id + " .ekr-tabmenu-tabs ul li").click(function(e) {
		if (!$(this).hasClass('active')) {
			var liIndex = $(this).index() + 1;
			$("#" + id + " .ekr-tabmenu-content div.ekr-tabmenu-page").hide();
			$("#" + id + " .ekr-tabmenu-content div.ekr-tabmenu-page" + ":nth-child(" + liIndex + ")").fadeIn('slow');
			$("#" + id + " .ekr-tabmenu-tabs ul li").removeClass("active");
			$(this).addClass("active");
		}
	});
}