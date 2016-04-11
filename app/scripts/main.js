console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
var app = angular.module('starcraft', [ ]);
app.controller('myCtrl', function($scope, $http) {
  var pendingTask; 
  $http.get("https://us.api.battle.net/sc2/profile/602274/2/Colusso/ladders?locale=en_US&apikey=wn8zvrq35vgfqktdbypr4pfnvcdz9pcd",{ cache: true})
  .success(function(response) {
    $scope.details = response; 
    var pegaliga = response;
    
    angular.forEach(pegaliga['currentSeason'], function (data){
      console.log(data.ladder[0].matchMakingQueue);
      if(data.ladder[0].matchMakingQueue === "LOTV_SOLO"){
        $scope.ligaAtual = data.ladder[0];
        console.log("we did it reddit");
      }
    });
  });
  $http.get("https://us.api.battle.net/sc2/profile/602274/2/Colusso/?locale=en_US&apikey=wn8zvrq35vgfqktdbypr4pfnvcdz9pcd",{ cache: true})
  .success(function(response2){
    $scope.jogador = response2;  
  });

     // https://us.api.battle.net/sc2/profile/602274/2/Colusso/ladders?locale=en_US&apikey=wn8zvrq35vgfqktdbypr4pfnvcdz9pcd
     $scope.change = function() {
      if (pendingTask) {
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 20);
    };

    function fetch() {
     $http.get("https://us.api.battle.net/sc2/profile/" + $scope.search + "/ladders?locale=en_US&apikey=wn8zvrq35vgfqktdbypr4pfnvcdz9pcd",{ cache: true})
     .success(function(response) {
      $scope.details = response; 
      var pegaliga = response;
      
      angular.forEach(pegaliga['currentSeason'], function (data){
        console.log(data.ladder[0].matchMakingQueue);
        if(data.ladder[0].matchMakingQueue === "LOTV_SOLO"){
          $scope.ligaAtual = data.ladder[0];
          console.log("we did it reddit".ligaAtual.league);
        }
      });
    });
     $http.get("https://us.api.battle.net/sc2/profile/" + $scope.search + "/matches?locale=en_US&apikey=wn8zvrq35vgfqktdbypr4pfnvcdz9pcd",{ cache: true})
     .success(function(response3) {
      $scope.partidas = response3;  
    });

     $http.get("https://us.api.battle.net/sc2/profile/" + $scope.search + "/?locale=en_US&apikey=wn8zvrq35vgfqktdbypr4pfnvcdz9pcd",{ cache: true})
     .success(function(response2) {
      $scope.jogador = response2;  
    });

     
     
   };

 });





 





 