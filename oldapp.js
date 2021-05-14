// const hoursOfOperations = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Totals of the Day: '];


// function Stores (cityName, minCustomer, maxCustomer, avgCookiesPerCustomer) {
//     this.cityName = cityName;
//     this.minCustomer = minCustomer;
//     this.maxCustomer = maxCustomer;
//     this.avgCookiesPerCustomer = avgCookiesPerCustomer;
//     this.cookiesPerHourList = [];
//     this.cookiesWholeDay = 0;
// }


// let seattleStore = new Stores('Seattle', 23, 65, 6.3);
// let tokyoStore = new Stores('Tokyo', 3, 24, 1.2);
// let dubaiStore = new Stores('Dubai', 11, 38, 3.7);
// let parisStore = new Stores('Paris', 20, 38, 2.3);
// let limaStore = new Stores('Lima', 2, 16, 4.6);
// let locationList = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];


// function randomCookiePerHour (minCustomer, maxCustomer, avgCookiePerCustomer) {
//     return Math.floor(avgCookiesPerCustomer * (Math.random() * (maxCustomer - minCustomer + 1) + minCustomer));
// }



// Stores.prototype.totalCookies = function() {
//     for(let i = 0; i < hoursOfOperations.length; i++) {
//         this.cookiesPerHourList.push(randomCookiePerHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerCustomer));
//     }
//     for(let j = 0; j < hoursOfOperations.length; j++) {
//         this.cookiesWholeDay = (this.cookiesWholeDay + this.cookiesPerHourList[j]);
//     }
//     return this.cookiesWholeDay;
// }


// const SalesDivElem = document.getElementById('SalesReport');

// const tableElem = document.createElement('table');
// SalesDivElem.appendChild(tableElem);
// console.log(tableElem);

// function hourTableRow() {
//     const trElemHour = document.createElement('tr')
//     tableElem.appendChild(trElemHour);

//     let thElemHour = document.createElement('th')
//     thElemHour.textContent = ('Hours')
//     trElemHour.appendChild(thElemHour);

//     for (let i =0; i < hoursOfOperations; i++) {
//         let tdElemHour = document.createElement('td')
//         tdElemHour.textContent = `${hoursOfOperations[i]}`
//         trElemHour.appendChild(tdElemHour);
//     }
// }

// function addTable(location) {
//     location.totalCookies();
//     const trElem = document.createElement('tr');
//     tableElem.appendChild(trElem);

//     let thElem = document.createElement('th');
//     thElem.textContent = `${location.cityName}`
//     trElem.appendChild(thElem);

//     for (let i = 0; i < hoursOfOperations.length - 1; i++) {
//         let tdElem = document.createElement('td');
//         tdElem.textContent = `${location.cookiesPerHourList[i]}`
//         trElem.appendChild(tdElem);
//     }
// }

// function totalRow() {
//     const trElemTotal = document.createElement('tr');
//     tableElem.appendChild(trElemTotal);

//     let tfElemTotal = document.createElement('tf');
//     tfElemTotal.textContent = ('Total');
//     trElemTotal.appendChild(tfElemTotal);

//     for (let i = 0; i < hoursOfOperations.length; i++) {
//         let tdElemTotal = document.createElement('td');
//         trElemTotal.appendChild(tdElemTotal);
//         let totally = 0;
//         for (let j = 0; j < locationList.length; j++) {
//             totalRow += locationList[j].cookiesPerHourList[i];
//         }
//         tdElemTotal.textContent = Total
//     }
// }

// hourTableRow();
// totalRow();

// addTable(seattleStore);
// addTable(tokyoStore);
// addTable(dubaiStore);
// addTable(parisStore);
// addTable(limaStore);