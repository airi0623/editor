// Jqueryをjavascriptで描こうとしている
function material() {
  
  const add = document.getElementById("add-btn"); //追加ボタン
    
  document.querySelector(".onegai").addEventListener('cocoon:after-insert',function(insertedItem){
    console.log("OK")
    const selectBox = insertedItem.find("select").setAttribute('id', 'select-' + index); 
    const unit = document.getElementById("unit-auto");
    const spoon = document.getElementById("spoon-auto");

    console.log(selectBox)
    // selectBox.addEventListener("change",function(e){
    //   //const selectBox = document.getElementById("thing-select"); //選択ボックス
    //   //data-unit
    //   const dataUnit = selectBox.options[ selectBox.selectedIndex].getAttribute('data-unit');
    //   //const unit = document.getElementById("unit-auto");

    //   //data-spoon
    //   const dataSpoon = selectBox.options[ selectBox.selectedIndex].getAttribute('data-spoon');
    //   // const spoon = document.getElementById("spoon-auto");
      
    //   //取得したデータを格納
    //   spoon.innerHTML = dataSpoon;
    //   unit.innerHTML = dataUnit;
    // });
  });
};

window.addEventListener("load", material); 
// if (window.location.pathname === '/items/new') {