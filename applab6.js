'use strict';


const seattle = {
    cityName: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookiePerCustomer: 6.3,
    randomNumCustomer: function() {
        let randomNumber = Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
        return randomNumber;
    }        
}
const tokyo = {
    cityName: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookiePerCustomer: 1.2,
    randomNumCustomer: function() {
        let randomNumber = Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
        return randomNumber;
    }
}


const dubai = {
    cityName: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookiePerCustomer: 3.7,
    randomNumCustomer: function() {
        let randomNumber = Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
        return randomNumber;
    }
}


const paris = {
    cityName: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookiePerCustomer: 2.3,
    randomNumCustomer: function() {
        let randomNumber = Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
        return randomNumber;
    }
}


const lima = {
    cityName: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookiePerCustomer: 4.6,
    randomNumCustomer: function() {
        let randomNumber = Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
        return randomNumber;
    }
}


const locationDivElem = document.getElementById('SalesReport');
    
function generateSalesArray(location) {
    location.grandTotal = 0;
    location.hourlySaleArray = [];
    for (let i = 0; i < hoursOfOperations.length; i++) {
        let customers = location.randomNumCustomer();
        let cookiesSold = Math.floor(customers * location.avgCookiePerCustomer);
        location.grandTotal += cookiesSold;
        location.hourlySaleArray.push(cookiesSold)
    }
}

generateSalesArray(seattle);
console.log(seattle)
generateSalesArray(tokyo);
generateSalesArray(dubai);
generateSalesArray(paris);
generateSalesArray(lima);


function storeLocationInfo(location) {

    const h2Elem = document.createElement('h2');
    h2Elem.textContent = location.cityName;
    locationDivElem.appendChild(h2Elem);

    const ulElem = document.createElement('ul');
    locationDivElem.appendChild(ulElem);

    for(let i = 0; i < hoursOfOperations.length; i++) {
        const liElem = document.createElement('li');
        liElem.textContent = `${hoursOfOperations[i]}: ${location.hourlySaleArray[i]} cookies`;
        ulElem.appendChild(liElem);
    }

    const totalLiElem = document.createElement('li');
    totalLiElem.textContent = `Total: ${location.grandTotal} cookies.`;
    ulElem.appendChild(totalLiElem);
}

storeLocationInfo(seattle);
storeLocationInfo(tokyo);
storeLocationInfo(dubai);
storeLocationInfo(paris);
storeLocationInfo(lima);
