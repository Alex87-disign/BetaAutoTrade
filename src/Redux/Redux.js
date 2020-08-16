const Openmenu = ()=>{
    var x =document.getElementById("myTopnav");

        if(x.className==="topnav"){
            x.className+=" responsive"
    }else{
        x.className = "topnav"
    }  
}

export default Openmenu