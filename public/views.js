angular.module("app").run(['$templateCache', function(a) { a.put('/layout.html', '<div class="sidebar"><div class="menu"><ul><li><a ui-sref="index.home">Home</a></li><li><a ui-sref="index.month-view">Month view</a></li></ul></div></div>');
	a.put('/home.html', '<article ng-if="awesome" class="home"><section><h1>Hey, awesome!</h1><p>You have just created a seed project with AngularJS and Gulp. Here\'s what you\'ve got:</p><ul><li>AngularJS (1.2.x branch)</li><li>Gulpfile ready to run</li><li>SASS + node-sass (no Ruby needed)</li><li>Karma test runner + configs</li><li>Mock-up setup to unit testing and backend-less preview</li><li>ExpressJS to serve your project files</li></ul></section><footer>Made with ❤︎ by <a target="_blank" href="https://github.com/darlanalves/slush-angular-seed">Darlan Alves</a></footer></article>');
	 }]);