'use strict';


const seattle = {
    name: 'Seattle',
    customerNumber: 0,
    time: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'],
    avgCookieSale: 6.3,
    hourlyCookieSale: 0,
    
    // getHourlyCookieSale: function() {
    //     this.hourlyCookieSale = getCustomerNumber * avgCookieSale;
    //     console.log(this.hourlyCookieSale);
    // }

    getCustomerNumber: function() {
        this.customerNumber = randomCustomer(23,65);
    }
        
}




const tokyo = {
    name: 'Tokyo',
    customerNumber: 0,
    time: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'],
    avgCookieSale: 1.2,
    getCustomerNumber: function() {
        this.customerNumber = randomCustomer(3,24);
    }
}




const dubai = {
    name: 'Dubai',
    customerNumber: 0,
    time: ['6am: ', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'],
    avgCookieSale: 3.7,
    getCustomerNumber: function() {
        this.customerNumber = randomCustomer(11,38);
    }
}




const paris = {
    name: 'Paris',
    customerNumber: 0,
    time: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'],
    avgCookieSale: 2.3,
    getCustomerNumber: function() {
        this.customerNumber = randomCustomer(20,38);
    }
}



const lima = {
    name: 'Lima',
    customerNumber: 0,
    time: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'],
    avgCookieSale: 4.6,
    getCustomerNumber: function() {
        this.customerNumber = randomCustomer(2,16);
    }
        
}



function randomCustomer(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}


seattle.getCustomerNumber();
tokyo.getCustomerNumber();
dubai.getCustomerNumber();
paris.getCustomerNumber();
lima.getCustomerNumber();


const salesArray = [seattle, tokyo, dubai, paris, lima];

const salesList = document.getElementById("salesList");

const avgCookieSale = ['6.3', '1.2', '3.7', '2.3', '4.6'];



for (let j = 0; j < salesArray.length; j++) {
    
    let currentStore = salesArray[j];
    
    const article = document.createElement('article');
    salesList.appendChild(article);

    
    const h2Elem = document.createElement('h2');
    h2Elem.textContent = currentStore.name;
    article.appendChild(h2Elem);

    const pElem = document.createElement('p');
    pElem.textContent = currentStore.customerNumber;
    article.appendChild(pElem);

    const ulElem = document.createElement('ul');
    article.appendChild(ulElem);




        for (let i = 0; i < currentStore.time.length; i++) {
            const liElem = document.createElement('li');
            liElem.textContent = `${currentStore.time[i]} ${currentStore.customerNumber + ' cookies'}`;
            ulElem.appendChild(liElem);
        }

}










