function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
    return precioConDescuento;
  
  }
  
  function onClickButtonPriceDiscount() {
    
      const totalPrice = document.getElementById("totalPrice");
      const priceValue = totalPrice.textContent;
      
      const inputCoupon = document.getElementById("inputCoupon");
      const couponValue = inputCoupon.value;
  
      const resultCoupon = document.getElementById("priceWithCoupon");
      const totalDiscount = document.getElementById("totalDiscount");
      let descuento;
      let precioConDescuento; 
    
      switch(true) {        
        case couponValue === "JuanDC_es_Batman":
          descuento = 15;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón aplicado`;
        break;
        case couponValue === "pero_no_le_digas_a_nadie":
          descuento = 30;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón aplicado`;
        break;
        case couponValue === "es_un_secreto":
          descuento = 25;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón aplicado`;
        break;
        default:
          resultCoupon.innerText = `El cupón ingresado no es valido`;
      }
      const summary = document.getElementById('summary');
      const classtotalPrice = document.getElementById('totalPrice');
      const newPrice = document.getElementById('newPrice');
      if (couponValue === 'JuanDC_es_Batman' || couponValue === 'pero_no_le_digas_a_nadie' || couponValue === "es_un_secreto") {
        summary.classList.add('newcolor');
        classtotalPrice.classList.add('addline');
        newPrice.innerText = `\n $${precioConDescuento}`;
      }
  }
