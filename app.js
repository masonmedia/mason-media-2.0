var app = angular.module("myApp", ["ngRoute","ngAnimate","smoothScroll"]);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
		controller: 'mainController'
    })
    .when("/about", {
        templateUrl : "about.html",
		controller: 'aboutController'
    })
    .when("/design", {
        templateUrl : "design.html",
		controller: 'designController'
    })
	.when("/development", {
        templateUrl : "development.html",
		controller: 'developmentController'
    })
	.when("/writing", {
        templateUrl : "writing.html",
		controller: 'writingController'
    })
	.when("/work", {
        templateUrl : "work.html",
    })
	.when("/at", {
        templateUrl : "at.html",
		controller: 'atController'
    })
	.when("/sfs", {
        templateUrl : "sfs.html",
		controller: 'sfsController'
    })
	.when("/djm", {
        templateUrl : "djm.html",
		controller: 'djmController'
    })
	.when("/jm", {
        templateUrl : "jm.html",
		controller: 'jmController'
    })
	.when("/n2", {
        templateUrl : "n2.html",
		controller: 'n2Controller'
    })
	.when("/jms", {
        templateUrl : "jms.html",
		controller: 'jmsController'
    })
	.when("/bhs", {
        templateUrl : "bhs.html",
		controller: 'bhsController'
    })
	.when("/ccsls", {
        templateUrl : "ccsls.html",
		controller: 'ccslsController'
    })
	.when("/copetin", {
        templateUrl : "copetin.html",
		controller: 'copetinController'
    })
	.when("/mc", {
        templateUrl : "mc.html",
		controller: 'mcController'
    })
	.when("/contact", {
        templateUrl : "contact.html",
		controller: 'contactController'
    }).otherwise({redirectTo:'/'}); 
	
	// use the HTML5 History API to remove url hash: for some reason this does not work locally, but does and is needed live 
//        $locationProvider.html5Mode(true);
});


//angularjs how to redirect unmatched URLs to your index.html

//app.config(['$routeProvider',function($routeProvider){
//        $routeProvider
//        .when('/one',  {templateUrl:"one.html"})
//        .when('/two',  {templateUrl:"two.html"})
//        .when('/three',    {templateUrl:"three.html"}).otherwise({redirectTo:'/'})
//    }]); 


//#42 https://stackoverflow.com/questions/21055952/changing-route-doesnt-scroll-to-top-in-the-new-page *I added the app.run line from above code, works better

app.run(function ($rootScope, $timeout, $window) {
$rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {

    window.scrollTo(0, 0);

	});
});
