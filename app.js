var myApp = angular.module("myApp", []);

myApp.controller("myAppCtrl", ["$scope",
  function($scope) {
    $scope.comments = [
      "This is comment 1!",
      "This is comment 2!",
      "hahha 3"
    ];
    $scope.addCommentFromInputBox = function () {
      var $new_comment;

      if ($(".comment-input input").val() !== "") {
          $new_comment = $("<p>").text($(".comment-input input").val());
          $new_comment.hide();
          $(".comments").append($new_comment);
          $new_comment.fadeIn();
          $(".comment-input input").val("");
      }
    };
  }
]);

var main = function () {
    "use strict";
};

$(document).ready(main);