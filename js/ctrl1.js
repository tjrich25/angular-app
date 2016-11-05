var app = angular.module('myModule');

app.controller('ctrlOne', function($scope){
  $scope.flySparklePony = function(sparklePony){
    var originalWord = sparklePony;
    var reverseWord = originalWord.split('').reverses().join('');

    if (originalWord === reverseWord){
      $scope.result = "The word is a palindrome";
    }
  else {
    $scope.result = "The word is not a palindrome";
    }

  };
});
