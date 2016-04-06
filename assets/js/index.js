var myPortfolio = angular.module('myPortfolio', ['ui.router', 'ngResource']);

myPortfolio.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouteProvider) {
  
  $urlRouteProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      views: {
          '': {
            templateUrl: './assets/views/homepage.html',
            controller: 'HomepageCtrl'
        },
        'experience@home': {
          templateUrl: './assets/views/experience.html',
          controller: 'ExperienceCtrl'
        },
        'projects@home' : {
          templateUrl: './assets/views/projects.html',
          controller: 'ProjectsCtrl'
        },
        'education@home': {
          templateUrl: './assets/views/education.html',
          controller: 'EducationCtrl'
        },
        'skills@home' : {
          templateUrl: './assets/views/skills.html',
          controller: 'SkillsCtrl'
        }
      }
    })
    // experience
    .state('experience', {
      url: '/experience',
      templateUrl: './assets/views/experience.html',
      controller: 'ExperienceCtrl'
    })
    // project
    .state('project', {
      url: '/project/:id',
      templateUrl: '/assets/views/project.html',
      controller: 'ProjectCtrl'
    })
    // projects
    .state('projects', {
      url: '/projects',
      templateUrl: './assets/views/projects.html',
      controller: 'ProjectsCtrl'
    })
    // skills
    .state('skills', {
      url: '/skills',
      templateUrl: './assets/views/skills.html',
      controller: 'SkillsCtrl'
    })
    // education
    .state('education', {
      url: '/education',
      templateUrl: './assets/views/education.html',
      controller: 'EducationCtrl'
    });

}]);
