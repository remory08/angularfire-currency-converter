app.controller("currencyController", function($scope, $firebaseObject) {
  var coinRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com");
  $scope.coinData = $firebaseObject(coinRef);
  console.log($scope.coinData);
  $scope.coin = $scope.coinData.currency;
  $scope.conversion = function(currency) {
    if (currency === 'bitcoin') {
      return $scope.coinData.bitcoin.ask
    }
    else if (currency === 'dogecoin') {
      return $scope.coinData.dogecoin.ask
    }
    else if (currency === 'litecoin') {
      return $scope.coinData.litecoin.ask
    }
  }


  // coinData.bitcoin.ask
})
