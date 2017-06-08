app.controller("homeController", ["$scope", "$http", function($scope, $http) {
    
	const url = "https://en.wikipedia.org/w/api.php?action=opensearch&namespace=0&exsentences=1&format=json&callback=JSON_CALLBACK&search=";
	
    $scope.search = () => {
      $http.jsonp(url + $scope.content).then(function (data){
        $scope.results = []
		if (data.data[1] == undefined){
		  return;  
		}
		for (let i = 0; i < 10; i++){
		  $scope.results.push({
            title: data.data[1][i],
            extract: data.data[2][i],
            link: "./#/getPage/" + data.data[1][i]
          })
        }
      })
    }
}]);