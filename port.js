
const content=document.getElementsByClassName("content")[0];
const button=document.getElementById("apl");
const form=document.getElementById("form");
const button1=document.getElementById("submit");
const reply=document.getElementById("repl");
function main(){
button.addEventListener("click",e=>{
    form.classList.toggle("frm");
})
}
main();
button1.addEventListener("click",e=>{
    form.classList.toggle("submit");
    // console.log(fname.value+" "+lname.value);
reply.classList.toggle("repl");
if(fname.value && lname.value && email.value && password.value){
    reply.innerText=`Congratulations ${fname.value} ${lname.value}!
    your application is successfully received. You will obtain a fedback within 48hours.`;
    console.log(`${fname.value} ${lname.value} ${email.value} ${password.value}`)
}
else{
    reply.innerText=`Please, fill all the fields correctly!!`
    console.log(`${fname.value} ${lname.value} ${email.value} ${password.value}`);

setTimeout(()=>{
    Message();
    },10000)
}
})
function Message(){
    reply.classList.add("up");
    reply.innerText=`Please,Refresh and click on Apply button to obtain the form again!!!.`
}