app.controller('indexController', function ($scope, loginService) {

    // 显示当前登录用户名
    $scope.showLoginName = function () {
        loginService.showName().success(
            function (response) {
                $scope.loginName = response.loginName;
            }
        );
    }
});