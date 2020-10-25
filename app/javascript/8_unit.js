// 自動で単位取得
$(function() {
  console.log('cok');
  $("#categories").on('cocoon:after-insert', function(){
    action();
    console.log('ckk');
    $("#thing-select").on('change',function(){
      //select = $("#thing-select option:selected").data("unit");
      console.log('cok');
    });
  });


  function action() {
    console.log("kkk")
  }
});