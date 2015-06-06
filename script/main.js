/**
 *  require 配置
 *  @ paths ：映射非AMD标准控件
 *  @ shim  ：描述依赖关系
 */
require.config({
    paths : {
        'angular' : "libs/angular/angular.min",
        'ngRoute' : "libs/angular/angular-ui-router.min",
        'ngResource' : "libs/angular/angular-resource.min",
        'ngSanitize' : "libs/angular/angular-sanitize.min",
        'ngMessages' : "libs/angular/angular-messages.min",
        'jquery' : "libs/jquery/jquery-2.1.4"
    },
    shim: {
        "angular" : {
            deps : ["jquery"],
            exports : "angular"
        },
        "jquery" : {
            exports : "jquery"
        },
        "ngRoute" : {
            deps : ["angular"]
        },
        "ngResource" : {
            deps : ["angular"]
        },
        "ngMessages" : {
            deps : ["angular"]
        },
        "ngSanitize" : {
            deps : ["angular"]
        }
    }
});

/**
 *  main 函数，整个程序的入口
 */
require([
    "app",
    "angular",
    "jquery",
    "ngRoute",
    "ngResource",
    "ngSanitize",
    "ngMessages",
    "controller/controllers",
    "directive/directives",
    "service/services",
    "filters/filters",
], function (){
    "use strict";

    // 手动在 Windwo.document 上加载 ['app'] 模块, 这里 app 是指一个 angular.model
    angular.bootstrap( window.document, ["app"] );
})
