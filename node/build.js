var fs = require('fs');

var cfg = {
	src : '../html-dev/',
	dst : '../html/',
	exc : 'temp.html',
	content : [{
		reg : '<link rel="stylesheet/less" href="../css/style.less">',
		rep : '<link rel="stylesheet" href="../css/style.css">'
	},{
		reg : '<script src="../js/less.min.js"></script>',
		rep : '',
	}]
};
var fileArr = fs.readdirSync( cfg.src );
fileArr.forEach(function( name ){
	if( name == cfg.exc ) return;
	var file = fs.readFileSync( cfg.src + name );
	var str = file.toString();
	str = doReplace( str );
	fs.writeFileSync( cfg.dst + name, str );
});
function doReplace( str ){
	cfg.content.forEach(function( o ){
		var reg = new RegExp( o.reg );
		str = str.replace( reg, o.rep );
	});
	return str;	
}