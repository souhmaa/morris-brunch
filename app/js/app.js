(function () {

  'use strict';

  const $ = require('jquery');
  window.jQuery = $;
  require('bootstrap');

  var morrisModule = require('morris-js-module');
  var Morris = morrisModule.call(this, window.jQuery);

  const app = {};

  function init() {
    area();
    bar();
    line();
    donut();
    nonContinuous();
  }

  function nonContinuous() {
    var dayData = [
      { 'period': '2012-10-01', 'licensed': 3407 },
      { 'period': '2012-09-30', 'sorned': 0 },
      { 'period': '2012-09-29', 'sorned': 618 },
      { 'period': '2012-09-20', 'licensed': 3246, 'sorned': 661 },
      { 'period': '2012-09-19', 'licensed': 3257, 'sorned': null },
      { 'period': '2012-09-18', 'licensed': 3248, 'other': 1000 },
      { 'period': '2012-09-17', 'sorned': 0 },
      { 'period': '2012-09-16', 'sorned': 0 },
      { 'period': '2012-09-15', 'licensed': 3201, 'sorned': 656 },
      { 'period': '2012-09-10', 'licensed': 3215 }
    ];
    Morris.Line({
      element: 'nonContinous',
      data: dayData,
      xkey: 'period',
      ykeys: ['licensed', 'sorned', 'other'],
      labels: ['Licensed', 'SORN', 'Other'],
      /* custom label formatting with `xLabelFormat` */
      xLabelFormat: function (d) {
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
      },
      /* setting `xLabels` is recommended when using xLabelFormat */
      xLabels: 'day'
    });
  }

  function line() {
    var negData = [
      { 'period': '2011-08-12', 'a': 100 },
      { 'period': '2011-03-03', 'a': 75 },
      { 'period': '2010-08-08', 'a': 50 },
      { 'period': '2010-05-10', 'a': 25 },
      { 'period': '2010-03-14', 'a': 0 },
      { 'period': '2010-01-10', 'a': -25 },
      { 'period': '2009-12-10', 'a': -50 },
      { 'period': '2009-10-07', 'a': -75 },
      { 'period': '2009-09-25', 'a': -100 }
    ];
    Morris.Line({
      element: 'line',
      data: negData,
      xkey: 'period',
      ykeys: ['a'],
      labels: ['Series A'],
      units: '%'
    });
  }

  function area() {
    var chart = new Morris.Area({
      element: 'area',
      data: [
        { x: '2010 Q4', y: 3, z: 7 },
        { x: '2011 Q1', y: 3, z: 4 },
        { x: '2011 Q2', y: null, z: 1 },
        { x: '2011 Q3', y: 2, z: 5 },
        { x: '2011 Q4', y: 8, z: 2 },
        { x: '2012 Q1', y: 4, z: 4 }
      ],
      xkey: 'x',
      ykeys: ['y', 'z'],
      labels: ['Y', 'Z']
    }).on('click', function (i, row) {
      console.log(i, row);
    });

    chart.options.labels.forEach(function (label, i) {
      var legendItem = $('<b><span></span></b><br/>')
        .text(label)
        .css('color', chart.options.lineColors[i]);
      $('#legend').append(legendItem);
    });
  }

  function donut() {
    Morris.Donut({
      element: 'donut',
      data: [
        { value: 70, label: 'foo' },
        { value: 15, label: 'bar' },
        { value: 10, label: 'baz' },
        { value: 5, label: 'A really really long label' }
      ],
      formatter: function (x) { return x + '%'; }
    }).on('click', function (i, row) {
      console.log(i, row);
    });
  }

  function bar() {
    if (true) {
      console.log('test');
    }


    Morris.Bar({
      element: 'bar',
      data: [
        { x: '2011 Q1', y: 3, z: 2, a: 3 },
        { x: '2011 Q2', y: 2, z: null, a: 1 },
        { x: '2011 Q3', y: 0, z: 2, a: 4 },
        { x: '2011 Q4', y: 2, z: 4, a: 3 }
      ],
      xkey: 'x',
      ykeys: ['y', 'z', 'a'],
      labels: ['Y', 'Z', 'A']
    }).on('click', function (i, row) {
      console.log(i, row);
    });
  }

  app.start = function () {
    init();
  };

  module.exports = app;

})();