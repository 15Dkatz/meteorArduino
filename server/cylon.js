'use strict';

Meteor.startup(function () {

  Cylon.robot({
    connections: {
      arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem1411' }
    },

    devices: {
      led9: { driver: 'led', pin: 9 },
      led10: { driver: 'led', pin: 10 },
      led11: { driver: 'led', pin: 11 },
      led12: { driver: 'led', pin: 12 },
      led13: { driver: 'led', pin: 13 }
    },

    work: function(my) {
      every((1).second(), my.led9.toggle);
      every((1).second(), my.led10.toggle);
      every((1).second(), my.led11.toggle);
      every((1).second(), my.led12.toggle);
      every((1).second(), my.led13.toggle);
    }
  }).start();

    // Cylon.robot({
    //     name: 'Number Eight',

    //     connections: {
    //       arduino: { adaptor: 'firmata', port: '/dev/other_arduino_port' }
    //     },

    //     devices: {
    //       led: { driver: 'led', pin: 10 }
    //     },

    //     someCommand: function () {
    //
    //     },
    //     someOtherCommand: function () {
    //
    //     },
    //
    //     commands: function () {
    //         return {
    //             'Some command': this.someCommand,
    //             'Some other command': this.someOtherCommand
    //         };
    //     }
    // }).start();

});
