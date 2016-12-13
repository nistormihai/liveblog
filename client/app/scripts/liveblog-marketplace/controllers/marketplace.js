liveblogMarketplace
    .controller('MarketplaceController', ['$scope', '$location', function($scope, $location) {
        $scope.states = [
            { text: 'Available Producers' },
            { text: 'Registered Producers' }
        ];

        $scope.producers = { _items: [{
            _id: 0,
            title: 'Deutsche Presse-Argentur',
            description: 'Lorem ipsum dolor sit amet'
        },
        {
            _id: 1,
            title: 'Sourcefabric',
            description: 'Lorem ipsum dolor sit amet'
        }]};

        $scope.open = function(producer) {
            $location.path('/marketplace/' + producer._id);
        };
    }]);
