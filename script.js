function display(id) { 

  var checkRadio = document.querySelector('input[name="Question"]:checked');
      

  if(checkRadio != null) {
      
          
         var question=id.slice(0, 1);
          
        
          var number=id.slice(2, 3);
          var point=id.slice(4, 5);
         

        for(var m=1;m<4;m++){
          
          for(var n=1;n<4;n++){
          
            for(var k=1;k<4;k++){//czyszczenie
              

                if(  !(  document.getElementById(question + "_1_"+k.toString()   ).checked ||  document.getElementById(question + "_2_"+k.toString()  ).checked ||document.getElementById(question + "_3_"+k.toString()  ).checked)){
                  console.log("yay");
                 (document.getElementById(question + "_1_" +k ).disabled) = false;
                   (document.getElementById(question + "_2_" +k ).disabled) = false;
                   (document.getElementById(question+ "_3_" +k ).disabled )= false;
                }
                
              
            }

            


            for(var k=1;k<4;k++){//disabledowanie 
              for(var l=1;l<4;l++){
                if(k!=number && l==point)document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).disabled = true;
                
              }
            }
            

          }
        }
 
  }
  
  else {
      document.getElementById("disp").innerHTML
          = "No one selected";
  }
}


function done(){
  var AGRESOR=0;
  var WSZYSTKOWIEDZĄCY=0;
  var Malkontent=0;
  var GADUŁA=0;
  var MILCZEK=0;
  var DYPLOMATA=0;
  var ele = document.getElementsByTagName('input');
    

       


        document.getElementById("disp").innerHTML = "";
        var ele = document.getElementsByTagName('input');
        var d=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].type="radio") {
              
                if(ele[i].checked)
                {

                  if(ele[i].value!=null)d+= ele[i].value ;
                 
                }
                    

            }
        


          }


  var p=Array.from(d);
 
  AGRESOR=

  AGRESOR=parseInt(p[3])+parseInt(p[6])+parseInt(p[16])+parseInt(p[18])+parseInt(p[21])+parseInt(p[25])+parseInt(p[30]);
  WSZYSTKOWIEDZĄCY=parseInt(p[1])+parseInt(p[8])+parseInt(p[13])+parseInt(p[17])+parseInt(p[24])+parseInt(p[31])+parseInt(p[37])+parseInt(p[44]);
  malkontent=parseInt(p[2])+parseInt(p[7])+parseInt(p[10])+parseInt(p[14])+parseInt(p[28])+parseInt(p[34])+parseInt(p[36])+parseInt(p[41]);
  GADUŁA=parseInt(p[4])+parseInt(p[20])+parseInt(p[23])+parseInt(p[27])+parseInt(p[29])+parseInt(p[33])+parseInt(p[43]) +parseInt(p[45]);
   MILCZEK=parseInt(p[0])+parseInt(p[9])+parseInt(p[15])+parseInt(p[22])+parseInt(p[32])+parseInt(p[35])+parseInt(p[39]) +parseInt(p[42]);
   DYPLOMATA=parseInt(p[5])+parseInt(p[11])+parseInt(p[12])+parseInt(p[19])+parseInt(p[26])+parseInt(p[38])+parseInt(p[40]) +parseInt(p[46]);
console.log(mentor)

if(isNaN(AGRESOR) || isNaN(WSZYSTKOWIEDZĄCY) || isNaN(malkontent)||isNaN(GADUŁA)||isNaN( MILCZEK)||isNaN(DYPLOMATA))
{
  alert ("Wszystkie pola muszą być uzupełnione!");
}
else
{
  document.getElementById("punkty_agresor").innerHTML
  +=  
  + AGRESOR + "<br>";
  document.getElementById("punkty_wszystkowiedzacy").innerHTML
  +=  
  + WSZYSTKOWIEDZĄCY + "<br>";
  document.getElementById("punkty_malkontent").innerHTML
  +=  
  + malkontent + "<br>";
  document.getElementById("punkty_gadula").innerHTML
  +=  
  + GADUŁA + "<br>";
  document.getElementById("punkty_milczek").innerHTML
  +=  
  + MILCZEK + "<br>";
  document.getElementById("punkty_dyplomata").innerHTML
  +=  
  + DYPLOMATA + "<br>";
  
}





}


function reset(id) {

  for(var k=1;k<4;k++){//czyszczenie
    for(var l=1;l<4;l++){

      document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).disabled = false;
      document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).checked = false;
      //document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).checked = false;

      //document.getElementById("0_1_3").disabled = false;
    }
  }

} 


function show_table()
{
  if (document.getElementById("result_table").style.display == "none")
        document.getElementById("result_table").style.display="block";
    else if(document.getElementById("result_table").style.display="block")
        document.getElementById("result_table").style.display="none";
}


