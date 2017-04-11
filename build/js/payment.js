/**
 * Created by zhongyuqiang on 17/2/23.
 */
$(function(){

  $('#paymentConfirm').click(function(){
    $.modal({
      title: "Hello",
      text: "sdaf",
      buttons: [
        { text: "确定", className: "default", onClick: function(){
          console.log(3)
          $.closeModal();
          $.modal({
            title: "Hello",
            text: "sdaf",
            buttons: [
              { text: "确定", className: "default", onClick: function(){ console.log(3)} },
              { text: "取消", className: "default", onClick: function(){ console.log(3)} },
            ]
          });
        }},
        { text: "取消", className: "default", onClick: function(){ console.log(3)} },
      ]
    });
  })

})