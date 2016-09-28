angular.module('myApp', [])
.service('CEPService', CEPService)
.controller('MainCtrl', function ($scope, $http, CEPService) {

  CEPService.find('06608430')
  .then((json) => {
    console.log('1', json)
    $scope.part1 = json.data; 
    
    return CEPService.find('80610905');
  })
  .then((json) => {
    console.log('2', json)
    $scope.part2 = json.data; 
    
    return CEPService.find('83605490');
  })
  .then((json) => {
    console.log('3', json)
    $scope.part3 = json.data; 
  });
});

function CEPService($http) {
  const BASE_URL = 'https://crossorigin.me/http://labs.edysegura.com/busca-por-cep/cep/endereco.php?cep='
  
  this.find = function (cep) {
    return $http.get(BASE_URL + cep)
  }
}
CEPService['$inject'] = ['$http']