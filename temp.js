
function convert(){

    let from=document.getElementById("select").value;
    let to=document.getElementById("select2").value;
    let inp=document.getElementById("input").value;
    if(from==to){
        alert("Both of Same Types");
    }
    if(inp==''){
        alert("Enter the Temprature");
        
    }
    else{
    if(from=="fahrenheit" && to=="celsius" && inp!=''){
        
        document.getElementById("output").innerHTML=`${((inp-32)*5/9).toFixed(3)}`+`°C`;
    
    }
    else if(from=="celsius" && to=="fahrenheit" && inp!=''){
        
        document.getElementById("output").innerHTML=`${((inp*9/5)+32).toFixed(3)}`+`°F`;
    
    }
    else if(from=="celsius" && to=="kelvin" && inp!=''){
        
        document.getElementById("output").innerHTML=`${(273.15+Number(inp)).toFixed(3)}`+`K`;
    
    }
    else if(from=="fahrenheit" && to=="kelvin" && inp!=''){
        
        document.getElementById("output").innerHTML=`${(((inp-32)*5/9)+273.15).toFixed(3)}`+`K`;
    
    }
    else if(from=="kelvin" && to=="fahrenheit" && inp!=''){
        
        document.getElementById("output").innerHTML=`${(((inp-273.15)*9/5)+32).toFixed(3)}`+`°F`;
    
    }
    else if(from=="kelvin" && to=="celsius" && inp!=''){
        
        document.getElementById("output").innerHTML=`${(inp-273.15).toFixed(3)}`+`°C`;
    
    }
    else if(from=="celsius" && to=="kelvin" && inp!=''){
        
        document.getElementById("output").innerHTML=`${(inp+273.15).toFixed(3)}`+`K`;
    
    }
    
    }
    
    }