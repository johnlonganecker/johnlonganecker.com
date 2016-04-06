myPortfolio.factory('projects', function($resource) {

  var projects = {
    "1" : {
      "thumbnail" : "/assets/images/projects/intellastar-thumbnail.png",
      //"screenshots" : [{"tiny": "http://placehold.it/50x50", "large": "http://placehold.it/950x501"}, {"tiny": "http://placehold.it/50x50", "large": "http://placehold.it/950x500"}],
      "title": "Intellastar",
      "previewTitle" : "M2M Portal",
      "subHeading" : "Machine to Machine(M2M) Management Portal",
      "technologies" : ["JavaScript", "Angular", "MomentJS", "JQuery", "NodeJS", "MongoDB", "Grunt"],
      "link": "",
      "description" : "<p>Architected and developed a high-performance web portal with unlimited hierarchical company/user creation management with complex business rules enforced with authorization policies and RBAC/ACLs. The application interfaces directly with Verizon M2M APIs for real time device provisioning and management and provides automated data analysis and reporting for business intelligence.</p>"
    },
    "2" : {
      "thumbnail" : "/assets/images/projects/tata-thumbnail.png",
      "screenshots" : [
        {"tiny": "/assets/images/projects/tata-tiny-1.png", "large": "/assets/images/projects/tata-large-1.png"},
        {"tiny": "/assets/images/projects/tata-tiny-2.png", "large": "/assets/images/projects/tata-large-2.png"}
      ],
      "title": "Tata Communications",
      "previewTitle" : "Tata Services Map",
      "subHeading" : "Services Map",
      "technologies" : ["JavaScript", "Leaflet", "Postgres", "PostGIS", "PHP", "Grunt"],
      "link" : "http://map.tatacommunications.com/",
      "description" : "<p>Showcase Tata Communications global network on an interactive map. Designed with angular and a PHP/Postgres/PostGIS backend. The app was published as a native app with Cordova to the Apple App Store and the Google Play store.</p>"
    },
    "3" : {
      "thumbnail" : "/assets/images/projects/wb-thumbnail.png",
      "screenshots" : [
        {"tiny": "/assets/images/projects/wb-tiny-1.png", "large": "/assets/images/projects/wb-large-1.png"},
        {"tiny": "/assets/images/projects/wb-tiny-2.png", "large": "/assets/images/projects/wb-large-2.png"},
        {"tiny": "/assets/images/projects/wb-tiny-3.png", "large": "/assets/images/projects/wb-large-3.png"},
        {"tiny": "/assets/images/projects/wb-tiny-4.png", "large": "/assets/images/projects/wb-large-4.png"},
        {"tiny": "/assets/images/projects/wb-tiny-5.png", "large": "/assets/images/projects/wb-large-5.png"}
      ],
      "title": "Island Institute",
      "previewTitle" : "WeatherBlur",
      "subHeading" : "WeatherBlur",
      "technologies" : ["JavaScript", "Leaflet", "Angular", "MomentJS", "Underscore", "LESS", "MySQL", "Elgg", "Grunt"],
      "link" : "http://www.weatherblur.com/",
      "description" : "<p>Team member for the development and maintenance of a collaborative teaching tool. The online tool is being used to document and discuss weather phenomenon including the science behind specific weather events and their impact on the natural environment, economies, and social fabric of communities.</p>"
    },
    "4" : {
      "thumbnail" : "/assets/images/projects/devils-breath-thumbnail.png",
      "screenshots" : [
        {"tiny": "/assets/images/projects/db-tiny-1.png", "large": "/assets/images/projects/db-large-1.png"},
        {"tiny": "/assets/images/projects/db-tiny-2.png", "large": "/assets/images/projects/db-large-2.png"},
        {"tiny": "/assets/images/projects/db-tiny-3.png", "large": "/assets/images/projects/db-large-3.png"},
        {"tiny": "/assets/images/projects/db-tiny-4.png", "large": "/assets/images/projects/db-large-4.png"}
      ],
      "title": "Devil's Breath",
      "previewTitle" : "Devil's Breath",
      "subHeading" : "Virtual Worlds Class Project",
      "technologies" : ["Unity", "Unity JavaScript", "Photoshop", "Maya", "Grunt"],
      "link" : "",
      "description" : "<p>Devil's Breath is an interactive game-experience that involves the distortion of recollected memories, especially when you're a detective on a murder case.</p><p>The game begins with the main character wakes up in his office, remembering nothing from the night before. The player must use the given interactive tools to interact physically with the space around them to uncover memories and memory-elements. The main character is a private eye that is about to discover who his arch-nemesis \"The Eyeglass Killer\" is. As the story progresses, the main character finds out that he was with an informant, discussing the case, and walking through the mind of the killer, including reasoning and methods. One of the first things learned about the informant is that he is the killer. They agree to talk. At the very end of the night, the man tells the main character to kill him, thereby sealing the end of his reign and the beginning of a new reign, passing on the torch of \"The Eyeglass Killer\" to the main character. The main character kills him.</p><p>However, since the memory is just that, a memory, the main character in the present is given a choice as to who they really are: Did they kill the mentor because they wanted to take the torch and begin their new life as the Eyeglass Killer or because they were ending the age of the EK? Is the person in the memory that performed the action for one reason really the same person as the one in the present, remembering?</p><p>The general aesthetic is film-noire, with cell shaded color and detail.</p><p>Team:<br/> Nathanael Marquardt - Lead Designer(Concepts, Modeling, Programming)<br/> John Longanecker - Programming/UI design<br> Leomary Rodriguez - Modeling<br>Xiang Xiang Zeng - Modeling</p><p><a href='http://www.nathanaelmarquardt.com/assets/projects/devilsbreath/devilsbreath.html'>Try the game</a></p>"
      //"description" : "<p>A game I created with 3 other classmates</p><p>Relive the distorted memories of a detective. While the actions were clear, the motives were not. It is up to you to solve the case.</p><p><a href='http://www.nathanaelmarquardt.com/assets/projects/devilsbreath/devilsbreath.html'>Try the game</a></p>"
    }
  };

  function getAllProjects() {
    return _.reduce(projects, function(memo, value, key) {
      value.id = key;
      memo.push(value);
      return memo;
    }, []);
  }

  return {
    getAllProjects : getAllProjects,
    get : function(id) {
      return projects[id];
    }
  }

});
