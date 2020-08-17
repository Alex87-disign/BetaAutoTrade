
const Openmenu = ()=>{
    var x =document.getElementById("myTopnav");
    var menu =document.getElementById("menu");
    var active =document.getElementsByClassName("active");

        if(x.className==="topnav"){
            x.className+=" responsive"}
    // }else if(x.className+=" responsive"){
    // onclick.active+=document.getElementById("menu").style.display== "none" ? "block" : "none";
    // }  
    else{
        x.className = "topnav";
    }
};
// if( document.getElementById("menu").style.display=='block') document.getElementById(id).style.display='none';
// else document.getElementById(id).style.display='none';

export default Openmenu