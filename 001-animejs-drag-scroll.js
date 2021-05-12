var oldy = 0;
var d = 0;
var el = document.querySelector('article'); // element to drag

el.style['user-select'] = 'none'; // avoid text selecting

document.addEventListener('mousedown', function() {
	d = 1; // track mouse down
} );
document.addEventListener('mouseup', function() {
	d = 0; // track mouse up
} );


document.addEventListener('mousemove', function(e) {

	if (e.pageY < oldy) {
		var val = '+=100px';
    } else if (e.pageY > oldy) {
		var val = '-=100px';
    }
        
 if( d === 1 ) {
 
	anime.remove(el);

	var m = '-=' + ((e.pageY - oldy) * 6 );

	anime( {
		targets: el,
		translateY: m,
		duration: 0,
		easing: 'linear',
		complete: function() {
			anime( {
				targets: el,
				translateY: val,
				duration: 1000,
				easing: 'linear',
			} ); 
		}
	} ); 

}

oldy = e.pageY;

} );
© 2021 GitHub, Inc.
