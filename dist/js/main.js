var highlighter = new Highlighter({
	// canvas and element - whole - container
	container: 'body',

	// element uniq id (required)
	element : 'text1',

	// canvas z-index , default equals 10
	zIndex : '3',

	// default equals 10
	calibarationLevel: 10,

	// default equals 'e'
	lang: 'e',

	// default equals 10
	radius: 10,

	// highlighter opacity - default equal 0.5
	opacity: 0.5,

	// highlighter color - default equal yellow
	color: 'red'
});

var highlighter2 = new Highlighter({
	// canvas and element - whole - container
	container: 'body',

	// element uniq id (required)
	element : 'text1',

	// canvas z-index , default equals 10
	zIndex : '3',

	// default equals 10
	calibarationLevel: 10,

	// default equals 'e'
	lang: 'e',

	// default equals 10
	radius: 3,

	// highlighter opacity - default equal 0.5
	opacity: 1,

	// highlighter color - default equal yellow
	color: 'blue'
});


var startBtn = $('#start');
var endBtn = $('#end');
var startMarker = $('#mark');
var startEraser = $('#eraser');
var saveBtn = $('#save');
var loadBtn = $('#load');
var clearBtn = $('#clear');

startBtn.on('click', function(){
	highlighter.activateHighlighter();
});

endBtn.on('click', function(){
	highlighter.deactivateHighlighter();
});

startMarker.on('click', function(){
	highlighter.startMarker();
});

startEraser.on('click', function(){
	highlighter.startEraser();
});

saveBtn.on('click', function(){
	highlighter.saveImage();
});

loadBtn.on('click', function(){
	highlighter.loadImage();
});

clearBtn.on('click', function(){
	highlighter.clearCanvas();
});


var startBtn2 = $('#start2');
var endBtn2 = $('#end2');
var startMarker2 = $('#mark2');
var startEraser2 = $('#eraser2');
var saveBtn2 = $('#save2');
var loadBtn2 = $('#load2');
var clearBtn2 = $('#clear2');

startBtn2.on('click', function(){
	highlighter2.activateHighlighter();
});

endBtn2.on('click', function(){
	highlighter2.deactivateHighlighter();
});

startMarker2.on('click', function(){
	highlighter2.startMarker();
});

startEraser2.on('click', function(){
	highlighter2.startEraser();
});

saveBtn2.on('click', function(){
	highlighter2.saveImage();
});

loadBtn2.on('click', function(){
	highlighter2.loadImage();
});

clearBtn2.on('click', function(){
	highlighter2.clearCanvas();
});
