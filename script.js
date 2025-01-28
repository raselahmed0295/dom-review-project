
    document.getElementById('reviewBtn').addEventListener("click", function () {
        
        const elements = document.getElementById('textArea');
        const inputValue = elements.value;
        
        const container = document.getElementById('reviews');
        
        const p = document.createElement('p');
        p.innerText = inputValue;
        container.appendChild(p);

        elements.value = "";
    })

  
