var btn=document.querySelector("#orderbutton>button");

const isopen=true;


btn.addEventListener("click",()=>{
    const items=document.querySelectorAll("#orderitems div");
    var ordereditems=[];
    console.log(items);
    for(let i=0;i<items.length;i++){
        if(items[i].lastElementChild.checked){
            ordereditems.push(items[i].firstElementChild);
        }
    }
    console.log("check",ordereditems);

    let myFirstPromise = new Promise((resolve, reject) => {
        setTimeout( function() {
            if(isopen){
                resolve(ordereditems)  
            }else{
                reject();
            }
         
        }, 250)
      })
      
      myFirstPromise.then((ordereditems) => {
        document.querySelector("#orderitems").innerHTML="";
        document.querySelector("#heading").innerText="Your orders ready";
        document.querySelector("#orderbutton").innerHTML="";
        var count=1;
        ordereditems.forEach(function(ele){
           var box=document.createElement("div");
           var id=document.createElement("p");
           id.innerText="Orderid:"+count;
           count++;
           box.append(id,ele);
            document.querySelector("#orderitems").append(box);

        })
        
      })
      .catch((err)=>{
          console.log(err);
      })
})


  
  