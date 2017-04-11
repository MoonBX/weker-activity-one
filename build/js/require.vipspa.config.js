$(function(){
	vipspa.start({
        view: '#ui-view',
        errorTemplateId: '#error', // 可选
        router: {
          'tab5': {
            templateUrl: 'pages/tabs.html',
          },
          'about': {
            templateUrl: 'pages/about.html',
          },
          'shop': {
            templateUrl: 'pages/shop.html',
          },
          'shop/order': {
            templateUrl: 'pages/shop-order.html',
          },
          'payment': {
            templateUrl: 'pages/payment.html',
            controller: 'js/payment.js'
          },
          'defaults': 'tab5' //默认路由
        }
    });

});
