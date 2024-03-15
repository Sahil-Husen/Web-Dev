


    const t1 = performance.now()
    for(let i = 1;i<=100;i++){
        let para = document.createElement('p')
        para.textContent = "I am a para" +i 

        document.body.append(para)
    }
      document.write("Div start")
    const t2 = performance.now()
    console.log("the performance"+(t2-t1) +"ms" )
     

    // Optimizing a bit
    const t3 = performance.now()
    let myDiv = document.createElement('div')
    for(let a=1;a<=100;a++)
    {
        let element = document.createElement('p')
        element.textContent = "I am a div para" +a
        myDiv.appendChild(element)
    }
    document.body.appendChild(myDiv)
    
    const t4  = performance.now()
    console.log("the div element performance"+(t4-t3)+" ms")