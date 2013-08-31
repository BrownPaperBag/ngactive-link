angular.module('active-link', []).
  directive('active', ['$location',
    function(location) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
          var activeLinkClass = attrs.activeLink || 'active';
          var path = attrs.href;
          console.log(path);
          path = path.substring(1);
          scope.location = location;
          scope.$watch('location.path()', function(newPath) {
            if (path === newPath) {
              element.addClass(activeLinkClass);
            } else {
              element.removeClass(activeLinkClass);
            }
          });
        }
      };
    }
  ]);
