app.factory("emails", ["$http", function($http) {
    return $http.get("https://content.codecademy.com/courses/ltp4/emails-api/emails.json?_gl=1*1qbgesd*_ga*OTk5MTA2NzI1Mi4xNjc5NDc4MzEz*_ga_3LRZM6TM9L*MTcxNTQzODgwOC42Ny4xLjE3MTU0NDM3OTAuMC4wLjA")
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        })
}])