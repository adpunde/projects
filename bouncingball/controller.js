(function() {
'use strict';

angular.module('BouncingBall')
.controller('BouncingBallController', BouncingBallController);

BouncingBallController.$inject = [ '$timeout' ];
function BouncingBallController($timeout) {
    var ctrl = this;
    var count = 100;

    ctrl.balls = [];
    for (var i = 0; i < count; i++) {
        var obj = {
            color: '#' + (Math.round(Math.random() * 0xFFFFFF)).toString(16),
            x: Math.round(Math.max(20, Math.random() * 400)),
            y: Math.round(Math.max(20, Math.random() * 400)),
            velX: Math.round(Math.random() * 200),
            velY: Math.round(Math.random() * 200)
        };

        if (Math.random() > 0.5)
            obj.velX *= -1;
        if (Math.random() > 0.5)
            obj.velY *= -1;

        console.log('Adding ball', obj);
        ctrl.balls.push(obj);
    }

    var interval = 50;
    $timeout(animate, interval);

    function animate() {
        var maxX = 600 + 20 - 15;
        var maxY = 600;
        var minX = 30;
        var minY = 20;
        for (var i = 0; i < count; i++) {
            var ball = ctrl.balls[i];
            ball.x = ball.x + ball.velX / 20;
            ball.y = ball.y + ball.velY / 20;

            if (ball.x > maxX) {
                ball.x = maxX;
                ball.velX *= -1;
            }
            if (ball.x < minX) {
                ball.x = minX;
                ball.velX *= -1;
            }
            if (ball.y > maxY) {
                ball.y = maxY;
                ball.velY *= -1;
            }
            if (ball.y < minY) {
                ball.y = minY;
                ball.velY *= -1;
            }
        }
        $timeout(animate, interval);
    }
}

})();
