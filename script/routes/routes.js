define([

], function (){
    "use strict";

    return [
        {
            name: "abouthis",
            url : "/abouthis",
            templateUrl : "views/abouthis.html",
            controller : "abouthisController"
        },
        {
            name : "html",
            url : "/html",
            templateUrl : "views/html.html",
            controller: "htmlController",
        },
        {
            name : "css",
            url : "/css",
            templateUrl : "views/css.html",
            controller: "cssController"
        },
        {
            name : "javascript",
            url : "/javascript",
            templateUrl : "views/javascript.html",
            controller: "javascriptController"
        },
        {
            name : "tools",
            url : "/tools",
            templateUrl : "views/tools.html",
            controller: "toolsController"
        }
    ]

});
