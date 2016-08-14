import initiation from './structure/initiation.js';
import highlighterActivation from './structure/highlighterActivation.js';

var Highlighter = (function($) {

	function Highlighter(options) {
		this.options = options;
		initiation.initCanvasOnElement(this);
	}

	Highlighter.prototype.getElement = function() {
		return document.querySelector(this.options.element);
	};

	Highlighter.prototype.getCanvasElement = function() {
		return this.options.canvasElement;
	};

	Highlighter.prototype.getCanvasContainer = function() {
		return this.options.canvasContainer;
	};

	Highlighter.prototype.getWholeContainer = function() {
		return this.options.container ? document.querySelector(this.options.container) : document.querySelector('body');
	};

	Highlighter.prototype.getZIndex = function() {
		return this.options.index || '1';
	};

	Highlighter.prototype.getCalibarationLevel = function() {
		return this.options.calibarationLevel || 10;
	};

	Highlighter.prototype.getLanguage = function() {
		return this.options.lang || 'e';
	};

	Highlighter.prototype.getRadius = function() {
		return this.options.radius || 10;
	};

	Highlighter.prototype.getContext = function() {
		return this.getCanvasElement().getContext('2d');
	};

	Highlighter.prototype.getOpacity = function() {
		return this.options.opacity;
	};

	Highlighter.prototype.getColor = function() {
		return this.options.color || 'yellow';
	};

	Highlighter.prototype.activateHighlighter = function() {
		highlighterActivation.activate(this);
	};

	Highlighter.prototype.deactivateHighlighter = function() {
		highlighterActivation.deactivate(this);
	};

	window.Highlighter = Highlighter;

	return Highlighter;

})(jQuery);