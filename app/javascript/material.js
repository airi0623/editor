function material() {
  
  const add = document.getElementById("add-btn");
  const imageElementNum = document.querySelectorAll('#image-box').length

    add.addEventListener("click",function(e){
      const selectBox = document.getElementById("thing-select");
      const unit = document.getElementById("unit-auto");
      selectBox.addEventListener("change",function(e){
      console.log(e)
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
};

window.addEventListener("load", material); 
// if (window.location.pathname === '/items/new') {