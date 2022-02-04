    
    for (let i = 0; i < 14; i++) {
        var itm = document.getElementsByTagName("section")[i];
        var cln = itm.cloneNode(true);
        let newElement = document.getElementById("main").appendChild(cln);
    }
    
    document.domain.appendChild(newElement);
    
    