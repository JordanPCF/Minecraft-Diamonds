(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function MainScatterPlot (id) {
        this.id = id;
        this.layout = {
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            },
            xaxis: {
                title: "X"
            },
            yaxis: {
                title: "Y"
            },
            zaxis: {
                title: "Z"
            }
        };
        this.trace1 = {
            x: [], y: [], z: [],
            mode: 'markers',
            marker: {
                size: 12,
                line: {
                     color: 'rgba(217, 217, 217, 0.14)',
                     width: 0.5
                },
                opacity: 0.8
            },
            type: 'scatter3d'
        };
        this.trace2 = {
            x: [], y: [], z: [],
            mode: 'markers',
            marker: {
                size: 12,
                line: {
                     color: 'rgba(217, 217, 217, 0.14)',
                     width: 0.5
                },
                opacity: 0.8
            },
            type: 'scatter3d'
        };
    }

    MainScatterPlot.prototype.showPlot = function () {
        Plotly.newPlot(this.id, [this.trace1, this.trace2], this.layout);
    };

    MainScatterPlot.prototype.addPoints = function (data) {
        Plotly.extendTraces(this.id, {x:data['x'], y: data['y'], z:data['z']}, [0]);
    }



    App.MainScatterPlot = MainScatterPlot;
    window.App = App;
})(window);