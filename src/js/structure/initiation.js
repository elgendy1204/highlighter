import draw from './draw.js';
import functions from './functions.js';
import canvasstyledimension from './canvasstyledimension.js';
import scrollattach from './scrollattach.js';
import highlighterActivation from './highlighteractivation.js';

// initiate canvas on initiating highlighter object
function initCanvas(highlighter) {
	let wholeContainer = highlighter.getWholeContainer(),
		element = highlighter.getElement(),
		// build canvas
		canvasElement = document.createElement('canvas'),
		// build canvas container
		canvasContainer = buildCanvasContainer(highlighter);


	// append elements
	canvasContainer.appendChild(canvasElement);
	wholeContainer.appendChild(canvasContainer);

	// add to highlighter
	functions.addToHighlighterOptions(highlighter, 'canvasContainer', canvasContainer);
	functions.addToHighlighterOptions(highlighter, 'canvasElement', canvasElement);

	// init canvas styles and dimensions
	canvasstyledimension.init(highlighter, wholeContainer, canvasContainer, element, canvasElement);

	// bind canvas to element on scroll
	scrollAttachement(highlighter);

	// start draw on canvas
	drawCode(highlighter, canvasElement);

	// make canvas active class
	highlighterActivation.initActiveCanvasStyle();
}

function scrollAttachement(highlighter) {
	scrollattach.initVariables(highlighter);
	scrollattach.hookCanvasToElement(highlighter);
}

function drawCode(highlighter, canvasElement) {
	if(highlighter.getDrawType() == 'touch'){
		canvasElement.addEventListener('touchstart', draw.startDrawing.bind(highlighter), false);
		canvasElement.addEventListener('touchmove', draw.drawLine.bind(highlighter), false);
	} else {
		canvasElement.addEventListener('mousedown', draw.startDrawing.bind(highlighter), false);
		canvasElement.addEventListener('mousemove', draw.drawLine.bind(highlighter), false);
		canvasElement.addEventListener('mouseup', draw.endDrawing.bind(highlighter), false);
	}
}

function buildCanvasContainer(highlighter) {
	let canvasContainer,
		canvasContainerId = `#${makeCanvasContainerId(highlighter)}`;
	if (!document.querySelector(canvasContainerId)) {
		canvasContainer = document.createElement('div');
		canvasContainer.setAttribute('id', makeCanvasContainerId(highlighter));
	} else {
		canvasContainer = document.querySelector(canvasContainerId);
	}
	return canvasContainer;
}

function makeCanvasContainerId(highlighter) {
	let elementId = highlighter.options.element,
		canvasContainerId = `${elementId}-canvasContainer`;
	return canvasContainerId;
}

export default {
	initCanvas: initCanvas
};