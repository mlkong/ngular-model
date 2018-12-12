angular
  .module('app')
  .constant('COLORS', {
      primary: $('<div>').appendTo('body').addClass('bg-primary').css('background-color'),
      success: $('<div>').appendTo('body').addClass('bg-success').css('background-color'),
      warning: $('<div>').appendTo('body').addClass('bg-warning').css('background-color'),
      danger: $('<div>').appendTo('body').addClass('bg-danger').css('background-color'),
      info: $('<div>').appendTo('body').addClass('bg-info').css('background-color'),
      primaryInverse: $('<div>').appendTo('body').addClass('bg-primary-inverse').css('background-color'),
      successInverse: $('<div>').appendTo('body').addClass('bg-success-inverse').css('background-color'),
      warningInverse: $('<div>').appendTo('body').addClass('bg-warning-inverse').css('background-color'),
      dangerInverse: $('<div>').appendTo('body').addClass('bg-danger-inverse').css('background-color'),
      infoInverse: $('<div>').appendTo('body').addClass('bg-info-inverse').css('background-color'),
      gray: $('<div>').appendTo('body').addClass('bg-gray').css('background-color'),
      white: $('<div>').appendTo('body').addClass('bg-white').css('background-color'),
      dark: $('<div>').appendTo('body').addClass('bg-dark').css('background-color')
});