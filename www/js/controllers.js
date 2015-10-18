angular.module('starter.controllers', [])

.controller('SignInCtrl', function($scope, $state, $http) {

  $scope.signIn = function(user, isSign) {
    console.log('Sign-In', user);
    if (isSign == true){
       $http.get('http://localhost:3000/users/login/' + user.username +
                      "?password=" + user.password + "&isSign="+isSign).
          then(function(response) {
            if (response.data.error == null) {
              user = response.data
              $state.go('app.favors');
            }
          }, function(response) {
            console.log("Error " + response.data.error)
          });
     } else {
       console.log("We dont accept new profiles at this time");
     };
   }
})

.controller('FavorsCtrl', function($scope, $http) {
  $scope.favors = [
    { username: 'Wii', id: 1, item: 'Colgate 360 Optic White Toothbrush ', price: '10', location: '1069 Morewood Avenue, Pittsburgh PA' },
    { username: '', id: 2, item: 'Cooler', price: '20', location: '5000 Forbes Avenue' },
    { username: 'Akash', id: 3, item: 'Eyedrops', price: '7', location: 'Beeler, Pittburgh PA' },
    { username: 'Akash', id: 4, item: 'IS Shirt', price: '20', location: 'Beeler, Pittburgh PA' },
    { username: 'Akash', id: 5, item: 'Pack of 10 pencils', price: '10', location: 'Beeler, Pittburgh PA' },
    { username: 'Weikun', id: 6, item: 'Stapler', price: '3', location: '1069 Morewood Avenue, Pittsburgh PA' }
  ];
  $http.get('http://localhost:3000/favors').
     then(function(response) {
       console.log(response.data.favors + "     " + response.data.users);
     }, function(response) {
       console.log("Error " + response.data.error)
     });
})

.controller('ShoppingCtrl', function($scope, $ionicModal) {

  $scope.shoppings = [
  	{ description: 'Eyedrops', price: '4', live: '4 days' },
  	{ description: 'Bag', price: '20', live: '3 hours' },
  ];

  $scope.editItem = function() {
    console.log("Editing");
  };

  $ionicModal.fromTemplateUrl('templates/mylongform.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

  $scope.openModal = function(){
    console.log("OPEN MODEL");
    $scope.modal.show();
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }
  $scope.createItem = function(item) {
    $scope.shoppings.push({
      description: item.description,
      price: item.price,
      live: item.live
    });
    $scope.modal.hide();
  };


})

.controller('ActivityCtrl', function($scope) {
  $scope.activityComplete = [
    { username: 'Weikun', id: 1, item: 'Colgate 360 Optic White Toothbrush ', price: '10', location: '1069 Morewood Avenue, Pittsburgh PA'},
    { username: 'Justin', id: 2, item: 'Cooler', price: '20', location: '5000 Forbes Avenue'},
    { username: 'Akash', id: 3, item: 'Eyedrops', price: '7', location: 'Beeler, Pittburgh PA'},
  ];
  $scope.activityPending = [
    { username: 'Weikun', id: 1, item: 'Colgate 360 Optic White Toothbrush ', price: '10', location: '1069 Morewood Avenue, Pittsburgh PA'},
  ];

})
.controller('AddCtrl', function($scope) {
  console.log("ADDING CONTROLLER");
})


.controller('FavorCtrl', function($scope, $stateParams) {
});
