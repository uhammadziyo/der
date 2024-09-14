let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

const container = document.createElement('div'); 
document.body.appendChild(container); 

data.map(num => {
    const numElement = document.createElement('div'); 
    numElement.textContent = num;
    
    if (num > 50) {
        numElement.style.backgroundColor = 'green'; 
    } else {
        numElement.style.backgroundColor = 'red'; 
    }

    container.appendChild(numElement).style.textAlign='center'; 
    container.appendChild(numElement).style.color=`white`; 
});