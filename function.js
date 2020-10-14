function changeImg(id) {
    let img=document.getElementById(id);
    //alert(typeof img);
    //alert(src1+"src")
     let alt1=+document.getElementById(id).alt;
     //alert(alt1+" alt")
    // alert( typeof alt);
    alt1 <4 ? alt1++ : alt1=2;
    img.src="img/"+alt1+".jpg";
    img.alt=alt1;
    setTimeout(winGame,100);// time co phep js chay doi HTML

}
function winGame() {
    let alt2=+document.getElementById("av2").alt;
    let alt3=+document.getElementById("av3").alt;
    let alt4=+document.getElementById("av4").alt;
    let alt5=+document.getElementById("av5").alt;
    if(alt2==alt3&& alt3==alt4&&alt4==alt5){
        alert("You Win");
    }
}