(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-diamond-coordinates="form"]';
    var PLUS_BUTTON_SELECTOR = '#plusButton'
    var COORDINATE_ROW_SELECTOR = '.coordinateRow'

    var App = window.App;
    var FormHandler = App.FormHandler;

    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addPlusButtonHandler(PLUS_BUTTON_SELECTOR, COORDINATE_ROW_SELECTOR);


})(window);