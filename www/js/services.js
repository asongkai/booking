/**
 * Created by ceeb on 12/10/15.
 */
angular.module('fbobApp.services', [])

.service('searchService',['$http', function ($http) {
    this.pitches = { }
    this.requestDate = ''
    this.startTime = ''
    this.hours = ''
}])

.service('loading',['$http', '$ionicLoading', function($http, $ionicLoading) {
	this.show = function() {
                $ionicLoading.show({
                  template: 'ກຳລັງດຳເນີນ...',
                  hideOnStageChange: true
                })
            }
    this.hide = function(){
                $ionicLoading.hide()
            }
}])

.factory('price',[ function() {
	return {
		
	}
}])

.service('HardwareBackButtonManager',['$ionicPlatform', function($ionicPlatform){
	this.deregister = undefined
	this.disable = function(){
		this.deregister = $ionicPlatform.registerBackButtonAction(function(e){
			e.preventDefault()
			return false
		}, 101)
	}
	return this
}])

.service('Navigation',['$state', function($state) {
  //directly binding events to this context
  this.goNative = function(view, data, direction) {
    $state.go(view, data)
    window.plugins.nativepagetransitions.slide({
        "direction": direction
      },
      function(msg) {
        console.log("success: " + msg)
      }, // called when the animation has finished
      function(msg) {
        alert("error: " + msg)
      } // called in case you pass in weird values
    )
  }
}])

.factory('Locations',['$state', '$http', 'store', '$rootScope', function($state, $http, store, $rootScope) {
  return {
    distrit: distrit,
    province: province
  }
  
  function distrit() {
    return $http.get(api_url + 'districts')
  }
  
  function province() {
    return $http.get(api_url + 'provinces')
  }
}])

