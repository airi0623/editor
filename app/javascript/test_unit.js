// 自動で単位取得
// jqueryで記述中
$(function() {
  console.log('cok');
  $('#categories').on('cocoon:after-insert', function(e, insertedItem){
    console.log('aaa');

    $('#thing-select').change(function(){
      //select = $("#thing-select option:selected").data("unit");
      console.log('bbb');
    });
  });

  // queryselectorでとってきた方が早くね？




  function action() {
    console.log("kkk")
  }
});