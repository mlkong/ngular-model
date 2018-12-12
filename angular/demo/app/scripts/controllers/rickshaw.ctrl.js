
(function() {
	'use strict';
	angular.module("app").controller("rickshawCtrl", ['$scope','COLORS','$interval', '$timeout',rickshawCtrl]);
	function rickshawCtrl($scope, COLORS, $interval, $timeout) {
		
		var ctrl = this;

        $scope.realTimeOption = {
            renderer: 'area',
            height: 400,
        };
        $scope.realTimeFeatures = {
            yAxis: {
                tickFormat: 'formatKMBT'
            },
            hover: true,
        };
        $scope.series1 = [{
                name: 'DB Server',
                color: COLORS.successInverse,
                data: []
            }, {
                name: 'Web Server',
                color: COLORS.infoInverse,
                data: []
            }];
        $scope.x1 = 0;

        $scope.toggleRandomSeries = function(id) {
            $scope['random' + id] = !$scope['random' + id];
            if ($scope['random' + id]) {
                $scope['interval' + id] = $interval(function() {
                    var x = $scope['x' + id];
                    var series = $scope['series' + id];
                    for (var i = 0; i < series.length; i++) {
                        var name = series[i].name;
                        var color = series[i].color;
                        var data = series[i].data;
                        data.push({x: x, y: Math.random() * 10000});
                        series[i] = {
                            name: name,
                            color: color,
                            data: data
                        };
                    }
                    x++;
                    $scope['x' + id] = x;
                }, 1000);
            }
            else {
                $interval.cancel($scope['interval' + id]);
            }
        };


        var seriesData2 = [
            [],
            []
        ];
        var random2 = new Rickshaw.Fixtures.RandomData(40);
        for (var i = 0; i < 40; i++) {
            random2.addData(seriesData2);
        }

        $scope.rickshawStackedOptions = {
            renderer: 'bar',
            height: 400,
            padding: {
                top: 0.5
            }

        };

        $scope.rickshawStackedSeries = [{
            data: seriesData2[0],
            color: COLORS.primary, 
            name: "New users"
        }, {
            data: seriesData2[1],
            color: COLORS.gray, 
            name: "Returning users"

        }];

        $scope.rickshawStackedFeatures = {
            yAxis: {
            },
            hover: {
                formatter: function(series, x, y) {
                    var date = '<span class="date">' + new Date(x * 1000).toUTCString() + '</span>';
                    var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
                    var content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
                    return content;
                }
            }
        }

	}
})();
