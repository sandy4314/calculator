const input=document.getElementById("input");

function display(data){
   input.value+=data;
}
function remove(){
    input.value=input.value.slice(0,-1);
}
function clearinput(){
    input.value="";
}
function calculate(){
    try{

    
        input.value=eval(input.value);
    }
    catch(error){
        input.value="error";
    }

}