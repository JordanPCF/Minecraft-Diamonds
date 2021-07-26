(function (window) {
    'use strict';
    var App = window.App || {};
    $ = window.jQuery;

    function FormHandler (selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    } 

    FormHandler.prototype.addPlusButtonHandler = function (plusButtonSelector, coordinateRowSelector) {
        var self = this;
        if (!plusButtonSelector) {
            throw new Error('No button selector provided');
        }
        if (!coordinateRowSelector) {
            throw new Error('No row selector provided');
        }

        this.$formElement.on('click', plusButtonSelector, function () {
            console.log('Clicked');
            var $plusButton = $(plusButtonSelector).last();
            var $lastRow = $(coordinateRowSelector).last();

            if ($plusButton.length === 0) {
                throw new Error('Could not find button with selector: ' + plusButtonSelector);
            }
            if ($lastRow.length === 0) {
                throw new Error('Could not find row with selector: ' + coordinateRowSelector);
            }


            var $lastRowClone = $($lastRow).clone()
            $($lastRowClone).insertAfter($lastRow);
            $($plusButton).remove()
        })
    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);