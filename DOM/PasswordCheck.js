

    // function check(){
    //     let userId = document.getElementById("textbox").value
    //     if(userId.length > 4 && userId.length <15)
    //     {
    //         // console.log(" Valid! Username is between 4 to 14")
    //         document.getElementById("result").textContent = "Username is between 4 to 15"
    //         for(let a in userId)
    //         {
    //             //   console.log(userId[a])
    //              if(typeof(parseInt(userId[a])) == typeof(1))
    //              {
    //                 console.log("valid username")
    //              }
    //              else{
    //                 console.log("UserId must have atleast one number!")
    //              }

    //         }
    //     }
    // }

    function check(){
        let userId = document.getElementById("textbox").value
        // for(let a in userId)
        // {
        //     //console.log(a)
        //      //console.log(userId[a])
        //     if(typeof(userId[a]) == typeof(1))
        //     {
        //         console.log("Valid Username")
        //     }
        //     else{
        //         console.log("Invalid")
        //     }
        // }

        for(let i =0;i<userId.length;i++)
        {
            // if(typeof(userId[i]) == typeof(1))
            // {
            //         console.log("valid")
            // }
            // else
            // console.log("invalid")
        }
    }