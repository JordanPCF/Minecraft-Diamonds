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

    FormHandler.prototype.addSubmitHandler = function (fn) {
        this.$formElement.on('submit', function (event) {
            event.preventDefault()

            var data = {'x': [[]], 'y': [[]], 'z': [[]]};
            $(this).serializeArray().forEach(function (item) {
                data[item.name][0].push(parseInt(item.value));
            });
            fn(data);


        });
    };

    FormHandler.prototype.addPlusButtonHandler = function (plusButtonSelector, coordinateRowSelector, fn) {
        if (!plusButtonSelector) {
            throw new Error('No button selector provided');
        }
        if (!coordinateRowSelector) {
            throw new Error('No row selector provided');
        }

        this.$formElement.on('click', plusButtonSelector, function () {
            var $plusButton = $(plusButtonSelector).last();
            var $lastRow = $(coordinateRowSelector).last();

            if ($plusButton.length === 0) {
                throw new Error('Could not find button with selector: ' + plusButtonSelector);
            }
            if ($lastRow.length === 0) {
                throw new Error('Could not find row with selector: ' + coordinateRowSelector);
            }

            var $lastRowClone = $($lastRow).clone();
            $($lastRowClone).find("input").val("");
            $($lastRowClone).insertAfter($lastRow);
            $($plusButton).remove();
            fn();
        })
    };

    FormHandler.prototype.addMinusButtonHandler = function (minusButtonSelector) {
        if (!minusButtonSelector) {
            throw new Error('No button selector provided');
        }

        this.$formElement.on('click', minusButtonSelector, function () {
            this.closest('.coordinateRow').remove(); // 'this' is the element clicked
        });
    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);