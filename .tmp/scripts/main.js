'use strict';

console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
var app = angular.module('starcraft', []);
app.controller('myCtrl', function ($scope, $http) {
  var pendingTask;
  // https://us.api.battle.net/sc2/profile/602274/2/Colusso/ladders?locale=en_US&apikey=wn8zvrq35vgfqktdbypr4pfnvcdz9pcd
  $scope.change = function () {
    if (pendingTask) {
      clearTimeout(pendingTask);
    }
    pendingTask = setTimeout(fetch, 800);
  };

  function fetch() {
    $http.get("https://us.api.battle.net/sc2/profile/" + $scope.search + "/ladders?locale=en_US&apikey=wn8zvrq35vgfqktdbypr4pfnvcdz9pcd").success(function (response) {
      $scope.details = response;
    });

    $http.get("https://us.api.battle.net/sc2/profile/" + $scope.search + "/?locale=en_US&apikey=wn8zvrq35vgfqktdbypr4pfnvcdz9pcd").success(function (response2) {
      $scope.jogador = response2;
    });
  };
});
//# sourceMappingURL=main.js.map
