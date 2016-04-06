myPortfolio.controller('ProjectCtrl', function($scope, $stateParams, projects, $sce) {
  $scope.project = projects.get($stateParams.id);

  if($scope.project.screenshots) {
    $scope.mainScreenshot = $scope.project.screenshots[0];
    $scope.selectedScreenshot = 0;
  }

  $scope.renderHtml = function (htmlCode) {
    return $sce.trustAsHtml(htmlCode);
  };

  $scope.changeMainScreenshot = function(idx) {
    $scope.mainScreenshot = $scope.project.screenshots[idx];
    $scope.selectedScreenshot = idx;
  };

});
