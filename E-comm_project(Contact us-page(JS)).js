send_button.addEventListener("click",fn)
// send_button.addEventListener("click",fn);
function fn(){
    // email_input.addEventListener("change");
    // document.location.href="practise.html";
    console.log(email_input.value);
    let value=email_input.value.trim();
    if(value.length==0){
        let new_div_tag=document.createElement("div");
        new_div_tag.innerHTML=`<p><img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/62-512.png" class="zoom" style="width:20px; height:20px;">  Please adjust the following<p>
        <ul><li>Email is invalid</li></ul>`; 
        new_div_tag.id="append_text_unsuccess";
        new_div_tag.className="m-4";
        let id=document.getElementById("append_text_unsuccess");
        if(!id){
            contact_heading.append(new_div_tag);
        }
        append_text_success.remove();
    }else{
        let new_div_tag=document.createElement("div");
        // let new_div_tag2=document.createElement("div");
        new_div_tag.innerHTML=`<p><img src="https://pngimg.com/uploads/exclamation_mark/exclamation_mark_PNG52.png" class="zoom m-1" style="width:20px; height:20px;">Thank you for contacting us we will get back to you<p><p><img id="refresh_page" src="https://tse2.mm.bing.net/th?id=OIP.KaaJuENF9HHpdahboWlvmQHaHa&pid=Api&P=0" class="zoom m-1" style="width:20px; height:20px;">Click here to refresh the page</p>`;
        // new_div_tag2.innerHTML=``;
        // new_div_tag2.id="refresh_page";
        new_div_tag.id="append_text_success";
        new_div_tag.className="m-4";
        // new_div_tag.append(new_div_tag2);
        let id=document.getElementById("append_text_success");
        if(!id){
            contact_heading.append(new_div_tag);
        }
        
        // console.log(refresh_page.textContent);
        refresh_page.addEventListener("click",()=>{
            document.location.href="E-comm_project(Contact us-page).html";
        })
    append_text_unsuccess.remove();
    }
}