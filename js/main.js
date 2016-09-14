;(function(){

//icheck插件初始化
$(document).ready(function(){
  $('.icheck').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%'
  });
});


//左侧菜单控制
var checked = $('.nav-sidebar').filter('.checked');
checked.css({height : 40 * checked.children('li').length});
$('.nav-sidebar').on('click', function( e ){
	if( $( e.target ).parent().hasClass('sub') ) return;
	var self = $( e.currentTarget );
	if( !self.hasClass('checked') )	toggleNav( self.siblings('.checked') );
	toggleNav( self );
	function toggleNav( el ){
		var height = 40;
		if( !el.hasClass('checked') ) height *= el.children('li').length;
		el
			.css({height : height})
			.toggleClass('checked');
	}
});

})();