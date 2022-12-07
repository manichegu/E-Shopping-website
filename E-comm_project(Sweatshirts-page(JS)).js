
  let shirt_details=[
    {
        "shirt_name":"Men Full Sleeve Solid Sweatshirt",
        "shirt_src":"https://i.ibb.co/LNSPCkj/xxl-364904-bewakoof-original-imag9mhmp3xy9kfd.jpg",
        "shirt_subpic_1":"https://i.ibb.co/LNSPCkj/xxl-364904-bewakoof-original-imag9mhmp3xy9kfd.jpg",
        "shirt_subpic_2":"https://i.ibb.co/G3L9qMY/xxl-364904-bewakoof-original-imag9mhmtydfpbta.jpg",
        "actual_price":1499,
        "discount_price":799,
        "description_item":"this sweatshirt is a long-sleeved pullover shirt fashioned out of thick, usually cotton cloth material.this Sweatshirt is almost exclusively casual attire and hence not as dressy as some sweaters.",
        "styling_image1":"https://i.ibb.co/4J2sDJz/sweatshirt-7-a.jpg",
        "styling_image2":"https://i.ibb.co/7J81VwF/sweatshirt-7-b.jpg",
        "styling_image3":"https://i.ibb.co/0fmm57Q/sweatshirt-7-c.jpg",
        "styling_image4":"https://i.ibb.co/7J81VwF/sweatshirt-7-b.jpg",
    },
    {
        "shirt_name":"DNWR Sweatshirt With Pocket",
        "shirt_src":"https://i.ibb.co/2YpCXCy/zara-technical-sweatshirt-with-1643348215-c8fc9411-progressive.jpg",
        "shirt_subpic_1":"https://i.ibb.co/2YpCXCy/zara-technical-sweatshirt-with-1643348215-c8fc9411-progressive.jpg",
        "shirt_subpic_2":"https://i.ibb.co/nP1cjDj/zara-technical-sweatshirt-with-1643348215-c87081e3-progressive.jpg",
        "actual_price":2999,
        "discount_price":1999,
        "description_item":"this sweatshirt is a long-sleeved pullover shirt fashioned out of thick, usually cotton cloth material.this Sweatshirt is almost exclusively casual attire and hence not as dressy as some sweaters.",
        "styling_image1":"https://i.ibb.co/wrNn72h/sweatshirt-2-a.jpg",
        "styling_image2":"https://i.ibb.co/vkr5cNG/sweatshirt-2-b.jpg",
        "styling_image3":"https://i.ibb.co/q92T562/sweatshirt-2-d.jpg",
        "styling_image4":"https://i.ibb.co/yNgJN8r/sweatshirt-2-c.jpg",
    },
    {
        "shirt_name":"Relaxed Fit Sweatshirt",
        "shirt_src":"https://i.ibb.co/L6TVNN1/hmgoepprod-1.jpg",
        "shirt_subpic_1":"https://i.ibb.co/L6TVNN1/hmgoepprod-1.jpg",
        "shirt_subpic_2":"https://i.ibb.co/yQ0wT88/hmgoepprod-2.jpg",
        "actual_price":2499,
        "discount_price":1999,
        "description_item":"this sweatshirt is a long-sleeved pullover shirt fashioned out of thick, usually cotton cloth material.this Sweatshirt is almost exclusively casual attire and hence not as dressy as some sweaters.",
        "styling_image1":"https://i.ibb.co/GtQh4zD/sweatshirt-3-a.jpg",
        "styling_image2":"https://i.ibb.co/Rbfmfjp/sweatshirt-3-b.jpg",
        "styling_image3":"https://i.ibb.co/HNmW6Wm/sweatshirt-3-c.jpg",
        "styling_image4":"https://i.ibb.co/x6wvfD3/sweatshirt-3-d.jpg",
    },
    {
        "shirt_name":"Embroided Graffiti S",
        "shirt_src":"https://i.ibb.co/NnctwKf/6771401800-2-1-1.jpg",
        "shirt_subpic_1":"https://i.ibb.co/NnctwKf/6771401800-2-1-1.jpg",
        "shirt_subpic_2":"https://i.ibb.co/KWZ2RxJ/6771401800-2-2-1.jpg",
        "actual_price":1499,
        "discount_price":799,
        "description_item":"this sweatshirt is a long-sleeved pullover shirt fashioned out of thick, usually cotton cloth material.this Sweatshirt is almost exclusively casual attire and hence not as dressy as some sweaters.",
        "styling_image1":"https://i.ibb.co/4sVMfJ7/sweatshirt-5-a.jpg",
        "styling_image2":"https://i.ibb.co/YpWQQCq/sweatshirt-5-b.jpg",
        "styling_image3":"https://i.ibb.co/yqcjs6F/sweatshirt-5-d.jpg",
        "styling_image4":"https://i.ibb.co/ZYHYLBw/sweatshirt-5-c.jpg",
    },
    {
        "shirt_name":"Men Solid Round Neck Brown Sweater",
        "shirt_src":"https://i.ibb.co/Kzw8nQr/s-182493-the-souled-store-original-imag89zv2bkhmkaf-1.jpg",
        "shirt_subpic_1":"https://i.ibb.co/Kzw8nQr/s-182493-the-souled-store-original-imag89zv2bkhmkaf-1.jpg",
        "shirt_subpic_2":"https://i.ibb.co/sC1Wp1G/s-182493-the-souled-store-original-imag89zvwk4qtxue.jpg",
        "actual_price":4599,
        "discount_price":2999,
        "description_item":"this sweatshirt is a long-sleeved pullover shirt fashioned out of thick, usually cotton cloth material.this Sweatshirt is almost exclusively casual attire and hence not as dressy as some sweaters.",
        "styling_image1":"https://i.ibb.co/98Q5DCS/sweatshirt-6-a.jpg",
        "styling_image2":"https://i.ibb.co/k2nYLP0/sweatshirt-6-b.jpg",
        "styling_image3":"https://i.ibb.co/tYSjVzw/sweatshirt-6-c.jpg",
        "styling_image4":"https://i.ibb.co/k2nYLP0/sweatshirt-6-b.jpg",
    },
   
  ]
document.getElementById("noofproducts").textContent=shirt_details.length+" products";
  for(let i in shirt_details){
    // for(let j in shirt_details[i]){
        // console.log(j+":"+shirt_details[i][j]);
        let shirt_name=shirt_details[i]["shirt_name"];
        let shirt_src=shirt_details[i]["shirt_src"];
        let actual_price=shirt_details[i]["actual_price"];
        let discount_price=shirt_details[i]["discount_price"];
        let shirt_subpic_1=shirt_details[i]["shirt_subpic_1"];
        let shirt_subpic_2=shirt_details[i]["shirt_subpic_2"];
        let styling_image1=shirt_details[i]["styling_image1"];
        let styling_image2=shirt_details[i]["styling_image2"];
        let styling_image3=shirt_details[i]["styling_image3"];
        let styling_image4=shirt_details[i]["styling_image4"];
        let description_item=shirt_details[i]["description_item"];
    // }
    // console.log("_____________");
    let new_div=document.createElement("div");
    new_div.innerHTML=`<section id="Tshirt_1" class="h-100 Tshirt col-4 p-4 w-100 ">
    
    <div class="row w-100"><img  class="zoom border-0 "  
     src=${shirt_src} class="col-12"
    alt="this is an img"></div>
    <div class="text-center p-2">
    <a class="text" style="text-decoration:none; color:black;">${shirt_name}</a><br>
    
    <span class="text-center" style='text-decoration:line-through; color:gray; '>Rs:${actual_price}</span><br>
    <span class="fw-bold text-center">Rs:${discount_price}</span><br>
    <button class="text zoom buy_button w-50   text-center p-1 m-2 bg-warning border-2 rounded">Buy</button>
    </div>
    </section>`;
    complete_grid.append(new_div);
    new_div.id="hiee"+i;
    let id=document.getElementById("hiee"+i);
    id.addEventListener("click",(e)=>{
      e.preventDefault();
      localStorage.setItem('shirt_name',shirt_name);
      localStorage.setItem('shirt_src',shirt_src);
      localStorage.setItem('actual_price',actual_price);
      localStorage.setItem('discount_price',discount_price);
      localStorage.setItem('shirt_subpic_1',shirt_subpic_1);
      localStorage.setItem('shirt_subpic_2',shirt_subpic_2);
      localStorage.setItem('styling_image1',styling_image1);
      localStorage.setItem('styling_image2',styling_image2);
      localStorage.setItem('styling_image3',styling_image3);
      localStorage.setItem('styling_image4',styling_image4);
      localStorage.setItem('description_item',description_item);
      // localStorage.setItem('item_name',shirt_name);
      // localStorage.setItem('item_name',shirt_name);
      window.location.href="E-comm_project(indiviual_item_layout).html";
    })
  }





filter.addEventListener("click",fn1);
clear_sidebar.addEventListener("click",fn2);
function fn1(){
  side_bar.classList.add("active");
}
function fn2(){
  side_bar.classList.remove("active");
}

// shirt_details.sort();
// shirt_details.sort((a, b) => {
//   if (a.shirt_name<b.shirt_name) {
//     return -1;
//   }
//   if (a.shirt_name >b.shirt_name) {
//     return 1;
//   }
//   return 0;
//   // return a.shirt_name >b.shirt_name;
// });
// shirt_details.forEach((e) => {
//   console.log(`${e.shirt_name}`);
// });

// for(let i in shirt_details){
//   for(let j in shirt_details[i])
//   console.log(j+":"+shirt_details[i][j]);
// }


let dropdown=document.getElementById("Sort_by");
dropdown.addEventListener("change",()=>{
  document.getElementById("complete_grid").innerHTML="";
  let dropdown_value=dropdown.value;
  if(dropdown_value=="Alphabetically,A-Z"){
       shirt_details.sort();
        shirt_details.sort((a, b) => {
            if (a.shirt_name<b.shirt_name) {
                return -1;
            }
            if (a.shirt_name>b.shirt_name) {
               return 1;
            }
                return 0;
         });
  }
  if(dropdown_value=="Alphabetically,Z-A"){
    shirt_details.sort();
    shirt_details.sort((a, b) => {
        if (a.shirt_name>b.shirt_name) {
            return -1;
        }
        if (a.shirt_name<b.shirt_name) {
           return 1;
        }
            return 0;
     });
  }
  if(dropdown_value=="PRICE,LOW-HIGH"){
    shirt_details.sort();
    shirt_details.sort((a, b) => {
        if (a.discount_price<b.discount_price) {
            return -1;
        }
        if (a.discount_price >b.discount_price) {
           return 1;
        }
            return 0;
     });
  }
  if(dropdown_value=="PRICE,HIGH-LOW"){
    shirt_details.sort();
    shirt_details.sort((a, b) => {
        if (a.discount_price>b.discount_price) {
            return -1;
        }
        if (a.discount_price<b.discount_price) {
           return 1;
        }
            return 0;
     });
  }
  sorted_items();
})


function sorted_items(){
  for(let i in shirt_details){
    // for(let j in shirt_details[i]){
        // console.log(j+":"+shirt_details[i][j]);
        let shirt_name=shirt_details[i]["shirt_name"];
        let shirt_src=shirt_details[i]["shirt_src"];
        let actual_price=shirt_details[i]["actual_price"];
        let discount_price=shirt_details[i]["discount_price"];
        let shirt_subpic_1=shirt_details[i]["shirt_subpic_1"];
        let shirt_subpic_2=shirt_details[i]["shirt_subpic_2"];
        let styling_image1=shirt_details[i]["styling_image1"];
        let styling_image2=shirt_details[i]["styling_image2"];
        let styling_image3=shirt_details[i]["styling_image3"];
        let styling_image4=shirt_details[i]["styling_image4"];
        let description_item=shirt_details[i]["description_item"];
    // }
    // console.log("_____________");
    let new_div=document.createElement("div");
    new_div.innerHTML=`<section id="Tshirt_1" class="h-100 Tshirt col-4 p-4 w-100 ">
    
    <div class="row w-100"><img  class="zoom border-0 "  
     src=${shirt_src} class="col-12"
    alt="this is an img"></div>
    <div class="text-center p-2">
    <a class="text" style="text-decoration:none; color:black;">${shirt_name}</a><br>
    
    <span class="text-center" style='text-decoration:line-through; color:gray; '>Rs:${actual_price}</span><br>
    <span class="fw-bold text-center">Rs:${discount_price}</span><br>
    <button class="text zoom buy_button w-50   text-center p-1 m-2 bg-warning border-2 rounded">Buy</button>
    </div>
    </section>`;
    complete_grid.append(new_div);
    new_div.id="hiee"+i;
    let id=document.getElementById("hiee"+i);
    id.addEventListener("click",(e)=>{
      e.preventDefault();
      localStorage.setItem('shirt_name',shirt_name);
      localStorage.setItem('shirt_src',shirt_src);
      localStorage.setItem('actual_price',actual_price);
      localStorage.setItem('discount_price',discount_price);
      localStorage.setItem('shirt_subpic_1',shirt_subpic_1);
      localStorage.setItem('shirt_subpic_2',shirt_subpic_2);
      localStorage.setItem('styling_image1',styling_image1);
      localStorage.setItem('styling_image2',styling_image2);
      localStorage.setItem('styling_image3',styling_image3);
      localStorage.setItem('styling_image4',styling_image4);
      localStorage.setItem('description_item',description_item);
      // localStorage.setItem('item_name',shirt_name);
      // localStorage.setItem('item_name',shirt_name);
      window.location.href="E-comm_project(indiviual_item_layout).html";
    })
  }
  
}