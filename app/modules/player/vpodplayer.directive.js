(function() {
    'use strict';

    angular
        .module('vpod.player')
        .directive('vpodPlayer', vpodPlayer);

    vpodPlayer.$inject = ['pubSub', 'Feed'];

    /**
     * @name vpodPlayer
     * @desc Directive to control playing an episode after selection
     * @param  {Object} pubSub
     * @param  {Object} Feed
     * @return {Object}
     */
    function vpodPlayer(pubSub, Feed) {

        return {
            restrict: 'E',
            replace: true,

            link: function ($scope, elem, attrs, ctrl, transclude) {

                pubSub.sub('play', function() {
                    $scope.episode = Feed.getCached().items[arguments[0]];
                    elem[0].load();
                    elem[0].play();
                });
            },

            templateUrl: '/modules/player/vpodplayer.view.html'
        }
    }
})();
