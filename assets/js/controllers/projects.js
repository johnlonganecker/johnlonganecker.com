myPortfolio.controller('ProjectsCtrl', function($scope, projects, $sce) {
  $scope.allProjects = projects.getAllProjects();

  $scope.renderHtml = function (htmlCode) {
    return $sce.trustAsHtml(htmlCode);
  };
});
