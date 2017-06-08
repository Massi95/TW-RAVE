


app.factory('wikiService', function($http) {

    var wikiService = {
        get: function(title) {
            return $http.jsonp('http://en.wikipedia.org/w/api.php?titles=' + title + '&rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK');
        }
    };
    return wikiService;
});


app.controller('pageController', function($scope, $http, $routeParams, wikiService, $sce) {
    $scope.$sce = $sce;
	var wiki = this;
      
   	wiki.getInfo = function(){
        wikiService.get($routeParams.title).then(function(data) {
            wiki.wikiData = data.data;
         	var id = Object.keys(wiki.wikiData.query.pages)[0];
       	 	wiki.text = wiki.wikiData.query.pages[id].extract;
            wiki.title = wiki.wikiData.query.pages[id].title;
        });
    }	// getWikiInfo

    wiki.getInfo();
    
});
