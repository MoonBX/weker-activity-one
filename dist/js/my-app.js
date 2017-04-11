// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true
});

$(function(){

  $('.img-2').click(function(){
    myApp.modal({
      title: '活动规则',
      afterText:  '<div style="margin-top: 10px; height: 300px; overflow: scroll;">' +
      '<div style="text-align: left;margin-bottom: 5px">1. 商品如何发放：在支付 1元下单成功后，1-7个工作日内客服人员会电话沟通门锁相关的参数，并安排商品发放与安装（免费安装、免费配送）</div>' +
      '<div style="text-align: left;margin-bottom: 5px">2. 预约功能：如果您对本次活动感兴趣，请立即预约，客服人员稍后会电话联系您，为您一对一的服务，预约是免费的。</div>' +
      '<div style="text-align: left;margin-bottom: 5px">3. 分期付款金额：指纹锁全额1800元（首月付1元 ，次月支付149元，剩余11期/月付150，全期0利率）</div>' +
      '<div style="text-align: left;margin-bottom: 5px">4. 退货赔偿标准：</div>' +
      '<div style="text-align: left;margin-bottom: 5px">（1）一个月纯体验期内，用户不满意，可无条件退货，只收取1元的费用； </div>' +
      '<div style="text-align: left;margin-bottom: 5px">（2）整个代扣期内（即13个月），如果因为产品本身的质量问题，用户可以无条件退货，并退还全部已支付金额；</div>' +
      '<div style="text-align: left;margin-bottom: 5px">（3）代扣期的前6个月内，非产品质量问题，用户不满意可无条件退货，退还已支付金额的50%；代扣期的第7到第13个月内，非产品质量问题，用户不满意可无条件退货，退还已支付金额的30%；</div>' +
      '<div style="text-align: left;margin-bottom: 5px">（备注：非产品质量问题，如果客户在使用的第3个月想退货，此时他的已支付金额为300元，我们会终止代扣服务，停止扣款，并退还已支付金额300的50%，即150元）</div>' +'<div style="text-align: left;margin-bottom: 5px">1. 若确认取消，请联系客服400-150-5088</div>' +
      '<div style="text-align: left;margin-bottom: 5px">5. 售后保障：智能锁产品享3年质保(自安装起三年内质量问题免费上门维修）</div>' +
      '<div style="text-align: left;margin-bottom: 5px">6. 如何退货：进入我的订单—分期中——取消订单——拨打电话——和客服人员沟通——确认退货 </div>' +
      '<div style="text-align: left;margin-bottom: 5px">7. 购买须知： 原则上须业主方可参与本次活动 </div>' +
      '<div style="text-align: left;margin-bottom: 5px">8. 消费后如何还款：首月支付1元后，以后每个月的20号平台会自动扣款，请保证你绑定的银行卡每个月有余款支持代扣。</div>' +
      '<div style="text-align: left;margin-bottom: 5px">9. 还款会有消息提醒：距扣款日前2天会有短信提醒；每月20号扣款成功后也会有短信提醒。  </div>' +
      '<div style="text-align: left;margin-bottom: 5px">10. 逾期还款会产生什么影响？ </div>' +
      '<div style="text-align: left;margin-bottom: 5px">如果你在当月的扣款截止日期（20号）未还款成功，我们会在当月21/22再继续扣款两天(每天执行一次扣款)，连续三天扣款失败当月就不再继续扣款了(下月照常扣款)，同时我们的客服将与您及时联系，催促您尽快还款。若持续一周（7天）不还，逾期的将产生逾期费（逾期费的计算方式在购物合同中已进行约定）。同时，您的个人信用记录也将受到影响，对以后的购房、贷款、信用卡等与个人信用相关联的业务和活动产生不良影响。信用生活，从我做起！</div>' +
      '<div style="text-align: left;margin-bottom: 15px">11. 当你参加1元购活动时，提交订单即表示你已阅读并同意《1元购协议》。</div>' +
      '<div style="text-align: center;margin-bottom: 5px">活动最终解释权归指点科技所有 </div>' +
      '<div style="text-align: center;margin-bottom: 5px">客服热线：400-150-5088 </div>' +
      '</div>',
      buttons: [
        {
          text: '确定'
        }
      ]
    });
  });

  $("#city-picker").cityPicker({
    toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-right close-picker">确定</button>\
    </header>'
  });

  $("#city-picker-appoint").cityPicker({
    toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-right close-picker">确定</button>\
    </header>'
  });

  $.mvalidateExtend({
    phone:{
      required : true,
      pattern : /^0?1[3|4|5|8][0-9]\d{8}$/,
      descriptions:{
        required : '<div class="field-invalidmsg">请输入手机号码</div>',
        pattern : '<div class="field-invalidmsg">手机号码格式不正确</div>',
        valid : '<div class="field-validmsg">正确</div>'
      }
    },
    username:{
      required : true,
      pattern : /^\S{1,8}$/,
      descriptions:{
        required : '<div class="field-invalidmsg">请输入姓名</div>',
        pattern : '<div class="field-invalidmsg">姓名长度应小于8个字符</div>',
        valid : '<div class="field-validmsg">正确</div>'
      }
    },
    street: {
      required : true,
      pattern : /^\S{1,16}$/,
      descriptions:{
        required : '<div class="field-invalidmsg">请输入详细地址</div>',
        pattern : '<div class="field-invalidmsg">详细地址应小于16个字符</div>',
        valid : '<div class="field-validmsg">正确</div>'
      }
    },
    idCard: {
      required: true,
      pattern: /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X|x)$/,
      descriptions: {
        required : '<div class="field-invalidmsg">请输入身份证号</div>',
        pattern : '<div class="field-invalidmsg">身份证号格式不正确</div>',
        valid : '<div class="field-validmsg">正确</div>'
      }
    },
    bankCard: {
      required: true,
      pattern: /^([1-9]{1})(\d{14}|\d{18})$/,
      descriptions: {
        required : '<div class="field-invalidmsg">请输入银行卡号</div>',
        pattern : '<div class="field-invalidmsg">银行卡号格式不正确</div>',
        valid : '<div class="field-validmsg">正确</div>'
      }
    }
  });

  $(".order-form").mvalidate({
    type:1,
    onKeyup:true,
    sendForm:false,
    firstInvalidFocus:true,
    valid:function(event,options){
      //点击提交按钮时,表单通过验证触发函数
      //alert("验证通过！");
      mainView.router.load({pageName: 'payment'});
      event.preventDefault();
    },
    invalid:function(event, status, options){
      //点击提交按钮时,表单未通过验证触发函数
    },
    descriptions:{
      city : {
        required : '请选择收货地址',
      }
    }
  });

  $(".payment-form").mvalidate({
    type:1,
    onKeyup:true,
    sendForm:false,
    firstInvalidFocus:true,
    valid:function(event,options){
      //点击提交按钮时,表单通过验证触发函数
      var modal = myApp.modal({
        title: '付款确认',
        afterText:  '<div class="payment-modal">' +
        '<div class="row title-1"><img src="img/card.png" alt="..." width="18px" style="margin-right: 3px">中国工商银行 <span>借记卡(尾号1175)</span></div>' +
        '<div class="row title-2">单笔限额: 50000</div>' +
        '<div class="row phone-block"><div class="text-info">校验码已发送至手机158****2793</div><div class="input-info"><input type="text" class="cd-text"><button class="cd-btn">发送</button></div></div>' +
        '</div>',
        buttons: [
          {
            text: '取消',
            close: false
          },
          {
            text: '确定',
            class: 'open-protocal',
            onClick: function () {
              myApp.popup('.popup-protocal');
            }
          },
        ]
      });

      $$(modal).find('.cd-btn').click(function(){
        console.log($$('.cd-text').val());
        var count = 60;
        var countdown = setInterval(CountDown, 1000);
        function CountDown() {
          $(".cd-btn").attr("disabled", true);
          $(".cd-btn").text(count);
          if (count == 0) {
            $(".cd-btn").text("重新发送").removeAttr("disabled");
            clearInterval(countdown);
          }
          count--;
        }
      });
      //mainView.router.load({pageName: 'payment'});
      event.preventDefault();
    },
    invalid:function(event, status, options){
      //点击提交按钮时,表单未通过验证触发函数
    }
  });

  $(".appoint-form").mvalidate({
    type:1,
    onKeyup:true,
    sendForm:false,
    firstInvalidFocus:true,
    valid:function(event,options){
      //点击提交按钮时,表单通过验证触发函数
      //alert("验证通过！");
      mainView.router.loadPage('../dist/pages/appoint/success.html');
      event.preventDefault();
    },
    invalid:function(event, status, options){
      //点击提交按钮时,表单未通过验证触发函数
    },
    descriptions:{
      city : { required : '请选择收货地址' }
    }
  });

  $(".forgot-form").mvalidate({
    type:1,
    onKeyup:true,
    sendForm:false,
    firstInvalidFocus:true,
    valid:function(event,options){
      //点击提交按钮时,表单通过验证触发函数
      //alert("验证通过！");
      mainView.router.back();
      event.preventDefault();
    },
    invalid:function(event, status, options){
      //点击提交按钮时,表单未通过验证触发函数
    },
    conditional:{
      confirmpwd:function(){
        return $("#pwdFgt").val()==$("#pwdConfirmFgt").val();
      }
    },
    descriptions:{
      picValid: {
        required : '请输入图形验证码'
      },
      messageValid: {
        required: '请输入短信验证码'
      },
      password:{
        required : '请输入密码'
      },
      confirmpassword:{
        required : '请再次输入密码',
        conditional : '两次密码不一致'
      }
    }
  });

  $(".reg-form").mvalidate({
    type:1,
    onKeyup:true,
    sendForm:false,
    firstInvalidFocus:true,
    valid:function(event,options){
      //点击提交按钮时,表单通过验证触发函数
      //alert("验证通过！");
      mainView.router.back();
      event.preventDefault();
    },
    invalid:function(event, status, options){
      //点击提交按钮时,表单未通过验证触发函数
    },
    conditional:{
      confirmpwd:function(){
        return $("#pwdReg").val()==$("#pwdConfirmReg").val();
      }
    },
    descriptions:{
      picValid: {
        required : '请输入图形验证码'
      },
      messageValid: {
        required: '请输入短信验证码'
      },
      password:{
        required : '请输入密码'
      },
      confirmpassword:{
        required : '请再次输入密码',
        conditional : '两次密码不一致'
      }
    }
  });
});

$$(document).on('pageInit', function (e) {
  // 后退
  $$('.back').click(function(){
    mainView.router.back();
  });
});

myApp.onPageInit('shop', function (page) {

  $$('.amount-input').on('keyup', function(){
    if(parseInt($$(this).val())>50){
      $$(this).val(50);
    }else if(!isInteger($$(this).val())||parseInt($$(this).val())<=0){
      if($$(this).val()) $$(this).val(1);
        $$(this).val('');
    }else if($$(this).val()){
      $$(this).val(parseInt($$(this).val()));
    }

    if($$(this).val()){
      $$('.zd-shop-cBlock .tip div span')[0].innerText = 149*$$(this).val();
      $$('.zd-shop-cBlock .tip div span')[1].innerText = 150*$$(this).val();
      $$('.money2')[0].innerText = '¥' + $$(this).val();
    }else{
      $$('.zd-shop-cBlock .tip div span')[0].innerText = 149;
      $$('.zd-shop-cBlock .tip div span')[1].innerText = 150;
      $$('.money2')[0].innerText = '¥1';
    }

    function isInteger(obj) {
      return typeof parseInt(obj) === 'number' && !isNaN(parseInt(obj));
    }

  });

  $$('.skip-to-order').on('click', function(){
    if(!$$('.amount-input').val()){
      var toast = myApp.toast('<div class="zd-toast">请输入购买数量</div>', '', {});
      toast.show();
    }else if($$('.xieyi-checkbox').is(':checked')==false){
      var toast = myApp.toast('<div class="zd-toast">请勾选《一元购机协议》</div>', '', {});
      toast.show();
    }else{
      mainView.router.load({pageName: 'order'})
    }
  });

  var mySwiper = myApp.swiper('.swiper-container', {
    speed: 400,
    pagination:'.swiper-pagination'
  });

});

myApp.onPageInit('order', function(page){
  var formLen = $$('.order-form input').length;
  // start
  for(var i=0; i<formLen; i++){
    if($$('.order-form input')[i].value){
      $$('.order-form input')[i].value = '';
    }
  }
  // end
});

myApp.onPageInit('payment', function(page){
  var formLen = $$('.payment-form input').length;
  // start
  for(var i=0; i<formLen; i++){
    if($$('.payment-form input')[i].value){
      $$('.payment-form input')[i].value = '';
    }
  }
  // end

});

myApp.onPageInit('login', function(page){

  $$('.login-submit').click(function(){
    mainView.router.loadPage('../dist/reg.html');
  })
});


myApp.onPageInit('stage', function(page){

  $$('.zd-cancel-order').on('click', function(){
    myApp.modal({
      title: '温馨提示',
      afterText:  '<div style="margin-top: 10px;">' +
      '<div style="text-align: left;margin-bottom: 5px">1. 若确认取消，请联系客服400-150-5088</div>' +
      '<div style="text-align: left;margin-bottom: 5px">2. 如客服确认取消订单后，分期协议会在3-7个工作日内终止</div>' +
      '<div style="text-align: left;margin-bottom: 5px">3. 退款返现金额会在15个工作日内，打到你的银行账户</div>' +
      '</div>',
      buttons: [
        {
          text: '不取消了',
          onClick: function(){
            myApp.closeModal();
          }
        },
        {
          text: '拨打电话',
          onClick: function(){
            myApp.closeModal();
          }
        }
      ]
    })
  })
});

myApp.onPageInit('appoint', function(page){

  var formLen = $$('.appoint-form input').length;

  // start
  for(var i=0; i<formLen; i++){
    if($$('.appoint-form input')[i].value){
      $$('.appoint-form input')[i].value = '';
    }
  }
  // end

  $$('.back').click(function(){
    mainView.router.back();
  });

});