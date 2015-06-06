define([
    "angular",
    "controllers/controllers",
    "directives/directives",
    "services/services",
    "filters/filters",
    "routes/routes"
], function(angular, controllers, directives, services, filters, routes){
    "use strict";

    var mainModule = angular.module("app", [
            "ui.router",
            "controllers",
            "directives",
            "services",
            "filters",
            'ngSanitize',
            "ngMessages",
            "ngResource"
        ]);
        // '[]' 中代表依赖的模块
        mainModule.config( function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
            // 默认打开路径
            // $urlRouterProvider.otherwise('guide');
            // 注册路由
            // for( var obj in routes ){
            //     $stateProvider.state(
            //         routes[obj].name,
            //         {
            //             url : routes[obj].route,
            //             templateUrl : routes[obj].templateUrl,
            //             title : routes[obj].title,
            //             controller : routes[obj].controller,
            //             views : routes[obj].views
            //         }
            //     );
            // };
            // $httpProvider.defaults.withCredentials = true; //CORS跨域支持的配置
        });
});
