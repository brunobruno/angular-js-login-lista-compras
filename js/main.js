$(function() {
     $("body").hide();
     $("body").fadeIn(1000);
 })

 var app = angular.module('login', []);

 app.directive('enterNext', function() {
     return {
         restrict: 'A',
         link: function($scope, elem, attrs) {
             elem.bind('keydown', function(e) {
                 var code = e.keyCode || e.which;
                 if (code === 13) {
                     e.preventDefault();
                     elem.nextAll('input').first().focus();
                 }
             });
         }
     }
 })

 .directive('login', function($http, $rootScope) {
     return {
         restrict: 'A',
         link: function(scope, elem, attrs) {
             elem.bind('submit', function() {
                 var user_data = {
                     "username": scope.username,
                     "password": scope.password,
                 };


                 $("body").fadeOut(1000, function() {
                     $(location).attr('href', 'lista.html')
                 })
             });
         }
     }
 });

 function ListaComprasController($scope) {
     $scope.itens = [{
         produto: 'Chocolate',
         quantidade: 25,
         comprado: false
     }, {
         produto: 'Bala',
         quantidade: 13,
         comprado: false
     }, {
         produto: 'Biscoito',
         quantidade: 3,
         comprado: false
     }, {
         produto: 'Bombom',
         quantidade: 19,
         comprado: false
     }];

     $scope.adicionaItem = function() {
         $scope.itens.push({
             produto: $scope.item.produto,
             quantidade: $scope.item.quantidade,
             comprado: false
         });
         $scope.item.produto = $scope.item.quantidade = '';
     };
     $scope.remove = function(index) {
         $scope.itens.splice(index, 1);
     };

 }
