var cal={followupcommittee:"A JAN",ushers:"B MARCH", YOUTH:"c may", CHILDREN:"D JULY",REVIVAL:" " ,  };
var people={ELIZABETH:[" CHILD DEDICATION : 6TH JANUARY 2019"] , MERCY : ["MARRAIGE THANKSGIVING : 6TH JANUARY 2019 "] , MOHAMMED:[" THANKSGIVING: 19TH AUGUST 2018  "," BIRTHDAY: 8TH DEC 18" ]  } ;

      $(document).ready(function(){//checking promptness of doc 
        
      $("#buttonid").click(function(){//when buttonn with id :buttonid is clicked, execute function defined below
        console.log("BUTTON ONLINE");
        var searchval=$("#searcharea-id").val(); //onclick of button above, store in var k the value of search text area with id searcharea-id
        
     
     
     
       var searchvall=searchval.split(" ");
     console.log("array created", searchvall);
     var len=searchvall.length;
       var i;
       
       for(i=0;i < len; i++){
         if(searchvall[i] in cal || searchvall[i] in people){
          if (searchvall[i] in cal  ){
               console.log(cal[searchvall[i]]);
               $("#results").append( "\n\n");   
            $("#results").append( searchvall[i],"  :  ",cal[searchvall[i]]);        
               }
               else if (searchvall[i] in people){
                $("#results").append( "\n\n");   
                $("#results").append( "(BRO/SIS) ",searchvall[i],"  :  ",people[searchvall[i]]);

            
              }
            }
       }
       
        
        


    


     });

    })