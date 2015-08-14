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
    .on("ready", fly);
    
// Fly the bot
.device("nav", {
    driver: "ardrone-nav",
connection: "ardrone"
})

bot.nav.on("navdata", function(data) {
    console.log(data);
});


function fly(robot) {
    bot = robot

    bot.drone.disableEmergency();
    bot.drone.ftrim();

    bot.drone.takeoff();

    bot.drone.foward(0.2);
    after(2*1000, function() {
        bot.drone.forward(0);
    });

    bot.drone.left(0.2);
    after(3*1000,function() {
        bot.drone.left(0)
    });

    bot.drone.up(0.3);
    after(1*1000,function(){
        bot.drone.up(0)
    });

    after(30*1000, function() {
        bot.drone.land();
    });
    after(35*1000, function() {
        bot.drone.stop();
    });

}
Cylon.start();


