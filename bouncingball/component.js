(function() {
'use strict';

angular.module('BouncingBall')
.component('bouncingBall', {
    templateUrl: 'template.html',
    bindings: {
        balls: '<'
    }
});

})();
