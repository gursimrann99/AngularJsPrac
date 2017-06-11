var app = angular
            .module("myModule",[])
            .controller("myController",function($scope, $http){
              $http ({
                method: 'GET',
                url: 'http://localhost:8081/books'
              })
              .then(function(res){
                console.log(res.data);
                console.log("receiving");
                $scope.books = res.data;

            });
            var ratings = [  { star: "5 star", selected: true}, { star: "4 star", selected: false }, { star: "3 star", selected: false }, { star: "2 star", selected: false }, { star: "1 star", selected: false } ];
              $scope.ratings = ratings;

               $scope.addEntry = function(data) {
                var tempObj = {
                  star: data.star,
                  email: data.email,
                  comment: data.comment
                }
                if (data.star==undefined) {
                  alert("Pl select rating");
                }
                else {
                data.reviews.push(tempObj);
                delete data.star;
                delete data.email;
                delete data.comment;
           //     delete data.star;
                console.log(data);
                $http ({
                    method: 'PUT',
                    url: 'http://localhost:8081/books/' + data.id,
                    data: data
               })
            }
              }
 

          });
