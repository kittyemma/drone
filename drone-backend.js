var Cylon = require('cylon');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .device("nav", {
        driver: "ardrone-nav",
        connection: "ardrone"
    })
    .on("ready", fly);
    
// Fly the bot



function fly(robot) {
    bot = robot;

    bot.nav.on("navdata", function(data) {
        console.log(data);
    });

    bot.drone.disableEmergency();
    bot.drone.ftrim();

    bot.drone.takeoff();

    after(8 * 1000, function () {
        bot.drone.forward(0.2);
    });
    after(10 * 1000, function () {
        bot.drone.forward(0);
        bot.drone.hover();
    });
    after(11 * 1000, function () {
        bot.drone.left(0.2);
    });
    after(13 * 1000, function () {
        bot.drone.left(0);
        bot.drone.hover();
    });
    after(14 * 1000, function () {
        bot.drone.back(0.2);
    });
    after(16 * 1000, function () {
        bot.drone.back(0);
        bot.drone.hover();
    });

    after(17 * 1000, function () {
        bot.drone.land();
    });
    after(22 * 1000, function () {
        bot.drone.stop();
    });

}
Cylon.start();


