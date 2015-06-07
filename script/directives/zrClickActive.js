define([
    "directives/directives"
], function( directives ){
    "use strict";
    /**
     * 调用此指令在父元素上，
     * 其子元素在被点击的同时会加上'Active'样式，
     * 平级的其他元素则取消'Active'样式
     */
    directives.directive("zrClickActive", ["$location", function( $location) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var isFirefox = /firefox/.test(navigator.userAgent.toLowerCase());
                var thisEle = $(element);
                // 给子标签绑定事件
                var childrenEleList = thisEle.children();
                childrenEleList.each(function(index,element){
                    $(element).on('click',function(){
                        $(element).addClass('active').siblings().removeClass('active');
                    });
                });
                // if( isFirefox ){
                //     thisEle.on('contextmenu', function( e ){
                //         e.preventDefault();
                //         e.stopPropagation();
                //         thisEle.click();
                //         return false;
                //     });
                // }
                // 检测URL是否改变
                var checkUrl = function(){
                    var path = $location.path().split("\/")[1];
                    var aEleList = thisEle.find('a');
                    aEleList.each(function(index,element){
                        var target = $(element).attr('href');
                        if( !target ){
                            target = $(element).attr('ui-sref');
                        }
                        var tempUrl = target.split('#')[1];
                        if( path == tempUrl ){
                            $(element).parent('li').addClass('active').siblings().removeClass('active');
                        }
                    });
                }
                checkUrl();
            }
        }
    }]);
});
