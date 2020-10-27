// if文でunitの表示切り替え
// 一番上にあるのがクリックのたびに定義される

function material() {
  
  const add = document.getElementById("add-btn");
  const imageElementNum = document.querySelectorAll('#image-box').length
  
  // 最初の一つの選択
  const selectBox = document.getElementById("thing-select");
  const unit = document.getElementById("unit-auto");
    selectBox.addEventListener("change",function(e){
      const materialId = selectBox.value
      if (materialId >= 1 && materialId <= 100){
        unit.innerHTML = "個";
      } else if (materialId >= 101 && materialId <= 200){ 
        unit.innerHTML = "本";
      } else if (materialId >= 201 && materialId <= 300){ 
        unit.innerHTML = "束";
      } else if (materialId >= 301 && materialId <= 400){ 
        unit.innerHTML = "ml";
      } else if (materialId >= 401 && materialId <= 500){ 
        unit.innerHTML = "袋";
      } else if (materialId >= 501 && materialId <= 600){ 
        unit.innerHTML = "g";
      } else {
        unit.innerHTML = "--";
      }
    });
  //for (let i = 0; i < 3; i++) { なんのために必要かわからん
    // それ以降


    
    add.addEventListener("click",function(e){
      const selectBox = document.getElementById("thing-select");
      const unit = document.getElementById("unit-auto");
      
      selectBox.addEventListener("change",function(e){
        // const selectB = document.getElementById("thing-select");
        // const unit = document.getElementById("unit-auto");

        const materialId = selectBox.value
        if (materialId >= 1 && materialId <= 100){
          unit.innerHTML = "個";
        } else if (materialId >= 101 && materialId <= 200){ 
          unit.innerHTML = "本";
        } else if (materialId >= 201 && materialId <= 300){ 
          unit.innerHTML = "束";
        } else if (materialId >= 301 && materialId <= 400){ 
          unit.innerHTML = "ml";
        } else if (materialId >= 401 && materialId <= 500){ 
          unit.innerHTML = "袋";
        } else if (materialId >= 501 && materialId <= 600){ 
          unit.innerHTML = "g";
        } else {
          unit.innerHTML = "--";
        }
      });
    });
  //}
};

window.addEventListener("load", material); 
// if (window.location.pathname === '/items/new') {