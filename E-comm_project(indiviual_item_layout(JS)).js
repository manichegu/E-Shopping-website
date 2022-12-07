// getting elemnts from  local storage:
shirt_name.textContent=localStorage.getItem("shirt_name");
main_img.src=localStorage.getItem("shirt_src");
sub_img_1.src=localStorage.getItem("shirt_subpic_1");
sub_img_2.src=localStorage.getItem("shirt_subpic_2");
actual_price.textContent="Rs:"+localStorage.getItem("actual_price");
discount_price.textContent="Rs:"+localStorage.getItem("discount_price");
description_item.textContent=localStorage.getItem("description_item");
styling_image1.src=localStorage.getItem("styling_image1");
styling_image2.src=localStorage.getItem("styling_image2");
styling_image3.src=localStorage.getItem("styling_image3");
styling_image4.src=localStorage.getItem("styling_image4");

let Size_checkout=""
function fn_size(e){
  for(node of size.children){
    // console.log(node.background);
    // console.log(e);
    if(node.id==e.currentTarget.id)
    {
      node.style.backgroundColor="black";
      node.style.color="white";
      // continue;
      // node.style.textTransform="uppercase";
      Size_checkout=node.textContent;
      console.log(Size_checkout);
    }
  else{
    node.style.backgroundColor="white";
      node.style.color="black";
      // node.style.textTransform="lowercase";
  }
  }
}

Small.addEventListener("click",fn_size);
Medium.addEventListener("click",fn_size);
Large.addEventListener("click",fn_size);
XL.addEventListener("click",fn_size);
DXL.addEventListener("click",fn_size);

plus.addEventListener("click",fn_number_plus);
minus.addEventListener("click",fn_number_minus);

sub_img_1.addEventListener("click",change_main_img_to_img1);
sub_img_2.addEventListener("click",change_main_img_to_img2);
// sub_img_3.addEventListener("click",change_main_img_to_img3);



buy_now.addEventListener("click",fn);
function fn(){
  if(Size_checkout!=""){
    let  item_checkout_name=localStorage.getItem("shirt_name");
    let shirt_src=localStorage.getItem("shirt_src")
   let Quantity=number.textContent;
   let Subtotal=localStorage.getItem("discount_price");
   localStorage.setItem("Quantity",Quantity);
   localStorage.setItem("Size",Size_checkout);
   localStorage.setItem("Subtotal",Subtotal); 

    window.location.href="E-comm_project(buy-page).html";


//    let Total=
   
   
    // noofitems.textContent=number.textContent;
    // popup_buy.classList.add("active");
    // subtotal.textContent="Rs:"+localStorage.getItem("discount_price");
    // total.textContent=Number(localStorage.getItem("discount_price"))*Number(number.textContent)+Number(50);
    // total.textContent="Rs:"+total.textContent;
    // console.log(Size_checkout.textContent);
  }
  else{
    alert("PLEASE SELECT THE SIZE!!");
  }
}

 


function change_main_img_to_img1(){
    main_img.src=localStorage.getItem("shirt_subpic_1");
}
function change_main_img_to_img2(){
    main_img.src=localStorage.getItem("shirt_subpic_2");
}
function change_main_img_to_img3(){
    main_img.src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/9/5/h/s-jc22-rn-3-4th-olive-red-rock-jump-cuts-original-imagjff8qunvzsfw.jpeg?q=70"
}

function fn_number_plus(){
  number.textContent=Number(number.textContent)+1;
  // noofitems.textContent=Number(number.textContent);
  // subtotal.textContent=Number(number.textContent)*Number(price_each_item.textContent);
  // total.textContent=Number(subtotal.textContent)+Number(shipping_charge.textContent);
//   console.log(subtotal.textContent);
// console.log(noofitems.textContent);
}
function fn_number_minus(){
  if(Number(number.textContent)>=2)
  number.textContent=Number(number.textContent)-1;
  // noofitems.textContent=Number(number.textContent);
  // subtotal.textContent=Number(number.textContent)
  // *Number(price_each_item.textContent);
  // subtotal.textContent=Number(number.textContent)*Number(price_each_item.textContent);
  // total.textContent=Number(subtotal.textContent)+Number(shipping_charge.textContent);
//   console.log(Number(subtotal.textContent));
// console.log(noofitems.textContent);
}



img_PQ.addEventListener('click',Size_chart)
        function Size_chart(){
            if(img_PQ.src=="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"){
                img_PQ.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"
                let appendText=document.createElement("div");
                appendText.id="appendText_PQ";
                appendText.innerHTML=`<table class="table table-bordered text-light">
                <thead>
                  <tr>
                    <th scope="col"> Sizes</th>
                    <th scope="col">S</th>
                    <th scope="col">M</th>
                    <th scope="col">L</th>
                    <th scope="col">XL</th>
                    <th scope="col">2XL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">A) Length (in)</th>
                    <td>23</td>
                    <td>25</td>
                    <td>26.5</td>
                    <td>27</td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <th scope="row">B) Width (in)</th>
                    <td>18</td>
                    <td>20.5</td>
                    <td>22.5</td>
                    <td>24.5</td>
                    <td>26.5</td>
                  </tr>
                </tbody>
              </table>`;
                size_chart.append(appendText);
            }
            else if(img_PQ.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"){
                img_PQ.src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"
                appendText_PQ.remove();
            }
        }
img_ES.addEventListener('click',CARE_instructions)
        function CARE_instructions(){
            if(img_ES.src=="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"){
                img_ES.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"
                let appendText=document.createElement("div");
                appendText.id="appendText_ES";
                appendText.innerHTML=`      <table class="table table-bordered text-light">
                <thead>
                  <tr>
                    <th scope="col"> Wash</th>
                    <th scope="col">Machine, warm, inside out, similar colors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Tumble Dry</th>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <th scope="row">Bleach</th>
                    <td>Only non-chlorine</td>
                  </tr>
                  <tr>
                    <th scope="row">Dry Clean</th>
                    <td>Do not dry clean</td>
                  </tr>
                  <tr>
                    <th scope="row">Iron</th>
                    <td>Do not iron</td>
                  </tr>
                </tbody>
              </table>`
                CARE_Instructions.append(appendText);
            }
            else if(img_ES.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"){
                img_ES.src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"
                appendText_ES.remove();
            }
        }
shipping_img.addEventListener('click',shipping)
        function shipping(){
            if(shipping_img.src=="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"){
              shipping_img.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"
                let appendText=document.createElement("div");
                appendText.id="appendText_S";
                appendText.innerHTML=`<p>Most orders will be sent for delivery within 72 hours from Toronto, Canada.</p>`
                SHIPPING.append(appendText);
            }
            else if(shipping_img.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"){
              shipping_img.src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"
                appendText_S.remove();
            }
        }


      