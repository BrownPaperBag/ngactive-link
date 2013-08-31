angular.module('active-link', []).
  directive('active', ['$location',
    function(location) {

      /**
       * Add or remove the active class.
       *
       * @param {Object} element HTML element
       * @param {Object} attr The element's attributes
       */
      function applyState(element, attr) {
        var activeLinkClass = attr.active || 'active';
        if (attr.href === location.path()) {
          element.addClass(activeLinkClass);
        } else {
          element.removeClass(activeLinkClass);
        }
      }

      return {
        restrict: 'A',

        /**
         * Apply the correct state to the element and return the directive's
         * link function.
         *
         * @param {Object} element HTML element
         * @param {Object} attr The element's attributes
         * @return {Function} The directive's link function
         */
        compile: function(element, attr) {
          applyState(element, attr);

          return function(scope, element, attr, controller) {
            scope.location = location;
            scope.$watch('location.path()', function() {
              applyState(element, attr);
            });
          }
        }
      };
    }
  ]);
