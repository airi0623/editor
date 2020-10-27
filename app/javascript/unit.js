// いけた！！

$(function() {
  
  let index = 1;
  $('.onegai') 
    .on('cocoon:after-insert', function(e, insertedItem) {
      // insertedItemへdata属性付与
      //*上にあるやつしかid与えられない
      $(insertedItem).find('.select').attr('data-select', index);
      $(insertedItem).find('.box-spoon').attr('data-spoon', index);
      $(insertedItem).find('.box-unit').attr('data-unit', index);
      index = index+1

      // 確認用：data-selectでindex取得できる
      // $("#add-btn").on('click',function() {
      //   const id = $('.select').attr('data-select'); //dataでも付与できる
      //   console.log(id)

      // -------------------------------------
      // 個別にid取得
      // コンテンツの数を数えで4つ目でイベントを起こす
      $('.select').on('change',function(e){

      // idがそれぞれに付与されているか確認用
      // const selectBox = $(this).attr('id');
      // const id = $('.this').attr('id');
      // console.log(id)

      const dataSelect = $(this).attr('data-select')
      const dataUnit = $("option:selected", this).data("unit");
      const dataSpoon = $("option:selected", this).data("spoon");
      console.log(dataUnit)//unitは取れてる
      $(`[data-unit="${dataSelect}"]`).text(dataUnit)
      $(`[data-spoon="${dataSelect}"]`).text(dataSpoon)
      })
    })
})