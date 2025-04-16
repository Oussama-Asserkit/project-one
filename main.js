let InputValue = document.getElementById("input");
let BtnInput = document.getElementById("btn");
let tasksAll = document.getElementById("tasksAll");

BtnInput.addEventListener('click', () => {
    let MyElement2 = document.createElement("p");
    let ElementAll = tasksAll.appendChild(MyElement2);
    MyElement2.innerText = InputValue.value;
    // style Element Css
    MyElement2.style.cssText = "cursor:pointer; color:black; margin:10px 20px; padding:10px 20px; border:solid 1px white; text-align:center";
    if(InputValue.value == ""){
        MyElement2.innerHTML = "Don't waste your day."
    };
    InputValue.value = "";
    MyElement2.addEventListener('click', () =>{
        MyElement2.style.cssText = "text-decoration:line-through ;color:black; margin:10px 20px; padding:10px 20px; border:solid 1px white; text-align:center";
        
    });
});