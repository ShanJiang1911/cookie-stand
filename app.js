'use strict';

const allStores = [];

let hoursOfOperation = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Location Total']

let totalSum = [];

function City (name, minCustomerPerHour, maxCustomerPerHour, avgCookiePerCustomer){
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.totalCookiesPerHour = [];
  this.totalCookiesForDay = 0;
}

function randomAvgCookie(minCustomerPerHour, maxCustomerPerHour, avgCookiePerCustomer) {
  return Math.floor(avgCookiePerCustomer * (Math.random() * (maxCustomerPerHour - minCustomerPerHour) + minCustomerPerHour));
}

City.prototype.totalCookies = function() {
  for (let i = 0; i < hoursOfOperation.length; i++){
    this.totalCookiesPerHour.push(randomAvgCookie(this.minCustomerPerHour, this.maxCustomerPerHour, this.avgCookiePerCustomer));
  }
  for (let n = 0; n < hoursOfOperation.length; n++) {
    this.totalCookiesForDay = (this.totalCookiesForDay + this.totalCookiesPerHour[n]);
  }
}

let seattleStore = new City('Seattle', 23, 65, 6.3)
let tokyoStore = new City('Tokyo', 3, 24, 1.2,)
let dubaiStore = new City('Dubai', 11, 38, 3.7,)
let parisStore = new City('Paris', 20, 38, 2.3,)
let limaStore = new City('Lima', 2, 16, 4.6,)
let storeList = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

const articleElem = document.getElementById('Saleslist');
  
const tableElem = document.createElement('table');
articleElem.appendChild(tableElem);

function timeTableRow(){
  const trElemTime = document.createElement('tr');
  tableElem.appendChild(trElemTime);
  
  let thElemTime = document.createElement('th');
  thElemTime.textContent = ("Open Hours");
  trElemTime.appendChild(thElemTime);

  for (let i = 0; i < hoursOfOperation.length; i++){
    let tdElemTime = document.createElement('td');
    tdElemTime.textContent = `${hoursOfOperation[i]}`
    trElemTime.appendChild(tdElemTime);
  }
}

function addTable(stores) {
  stores.totalCookies();
  console.log(stores);
  const trElem = document.createElement('tr');
  tableElem.appendChild(trElem);


  let thElem = document.createElement('th');
  thElem.textContent = `${stores.name}`
  trElem.appendChild(thElem);

  for (let i = 0; i < hoursOfOperation.length - 1; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = `${stores.totalCookiesPerHour[i]}`
    trElem.appendChild(tdElem);
  }

  let tdElemTotal = document.createElement('td');
  tdElemTotal.textContent = `${stores.totalCookiesForDay}`
  trElem.appendChild(tdElemTotal);
}

function totalRow(){
  const trElemTT = document.createElement('tr');
  tableElem.appendChild(trElemTT);
  
  let tfElemTT = document.createElement('tfoot');
  tfElemTT.textContent = ("Total");
  trElemTT.appendChild(tfElemTT);

  for (let i = 0; i < hoursOfOperation.length -1; i++){
    let tdElemTT = document.createElement('td');
    trElemTT.appendChild(tdElemTT);
    let final = 0;
    for (let j = 0; j < storeList.length; j++){
      final += storeList[j].totalCookiesPerHour[i];
    }
    tdElemTT.textContent = final
  }
  let totalCookiesForDay = 0;
  for (let i = 0; i < storeList.length; i++){
    totalCookiesForDay += storeList[i].totalCookiesForDay;
  }
  let tdElemTT = document.createElement('td');
  trElemTT.appendChild(tdElemTT);
  tdElemTT.textContent = totalCookiesForDay;
}

timeTableRow();

addTable(seattleStore);
addTable(tokyoStore);
addTable(dubaiStore);
addTable(parisStore);
addTable(limaStore);

totalRow();


//add from from here

const formElem = document.getElementById('addStore');

formElem.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let storeName = event.target.storeName.value;
    let minCustomerPerHour = event.target.minCustomerPerHour.value;
    let maxCustomerPerHour = event.target.maxCustomerPerHour.value;
    let avgCustomerSale = event.target.avgCustomerSale.value;

    let newStore = new City(storeName, minCustomerPerHour, maxCustomerPerHour, avgCustomerSale);
    console.log(newStore);
    
    addTable(newStore);

    event.target.reset();
    newStore.totalCookies();

}
