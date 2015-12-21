function collapse(){
	$('#accordion .content').hide();
}
function uncollapse(i){
	var elem = $('#accordion .content').eq(i);
	var hidden = elem.css('display') === 'none';
	collapse();
	if (hidden) $('#accordion .content').eq(i).show();
}
$(uncollapse(0));