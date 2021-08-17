const marsCost  = 5000;
const moonCost = 3000;

function handleQuantity(planet,operator){
    //console.log(planet ,operator);
    const quantityInput = document.getElementById(planet + '-quantity').value;
    let quantity = parseInt(quantityInput);
    
    if(operator == 'plus' ){
        quantity = quantity + 1;
    }/* else{
        if(quantity < 1){
            return;
        }
        quantity = quantity - 1;
    } */
    if(operator == 'minus' && quantity > 0){
        quantity = quantity - 1;
    }
    
    document.getElementById(planet + '-quantity').value = quantity;

    calculateJourney(planet);
    updateTotalCost();

}

function calculateJourney(planet){
    const quantityInput = document.getElementById(planet + '-quantity').value;
    let quantity = parseInt(quantityInput);

    //planet = 'mars';
    if(planet == 'mars'){
        let marsTotal = quantity * marsCost;
        //console.log(marsTotal);
        updateCost(planet,marsTotal)
    }
    if(planet == 'moon'){
        let moonTotal = quantity * moonCost;
        //console.log(moonTotal);
        updateCost(planet,moonTotal)
    }
}

function updateCost(planet,total){
    const planetTotal = document.getElementById(planet + '-total');
    planetTotal.innerText = total;
}

function updateTotalCost(){
    const marsQuantityInput = document.getElementById('mars-quantity').value;
    const moonQuantityInput = document.getElementById('moon-quantity').value;
    let marsQuantity = parseInt(marsQuantityInput);
    let moonQuantity = parseInt(moonQuantityInput);

    const totalCost = marsQuantity * marsCost + moonQuantity * moonCost;
    document.getElementById('total-cost').innerText = totalCost;
}