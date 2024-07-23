function navbar(arg){
    let store=document.querySelector('#menu');

    if(arg===0){
        document.querySelector('#menu').innerHTML='';
    }
    if(arg===2){
        document.querySelector('#menu').innerHTML=`<div class="dropdown-content">
      <a href="#">Cart</a>
      <a href="#">Checkout</a>
      <a href="#">My account</a>
    </div>`;
    }

}