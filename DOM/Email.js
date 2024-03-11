 

    function check(){
        let mail = document.getElementById("email").value
        let data = mail.split('@')
        let myId = data[1].split('.')
        if(data[0] == " "){
            document.getElementById("result").textContent = "Enter Valid Id"
        }
        else{
            if(myId[0] == "gmail")
            {
                document.getElementById("result").textContent = "It's an Email"
            }
            else if(myId[0] == "yahoo"){
                document.getElementById("result").textContent = "It's Yahoo"
            }
            else{
                document.getElementById("result").textContent = "Niether Email nor Yahoo type"
            }
        }
      
    }