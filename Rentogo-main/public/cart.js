const add=document.querySelector("#bt");
const name1=String(document.querySelector("#bt").value);
add.addEventListener('click',async function(e){
    e.preventDefault();
    alert(name1);
    alert(e);
    const name1=String(document.querySelector("#bt").value);
   
    alert("hi");
    if(1!=1){
    
    }
    else{
       
        alert(name1);
    //     fetch('http://localhost:5000/',{
    //         mode:'cors',
    //         method:'POST',
    //         headers:{
    //             'Content-type':'application/json'
    //         },
    //         body:JSON.stringify({
    //             name:name1,
    //             roll:roll1,
    //             gend:gend,
    //             dept:dept,
                
    //         })
    //     })
    //     .then(async(e)=>{
    //         const data=await e.json();
    //     })
    //     .catch(async()=>{
    //         console.log("ERROR");
    //         result.innerHTML="ERROR";
    //     })
    }
})