'use strict';

let storeDiv = document.getElementById('store');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'seattle',
  min: 23,
  max: 65,
  avgCookie: 6.3,
  custPerHour: [],
  cookieSoldPerHour: [],
  total: 0,

  getCustPerHour: function () {

    for (let i = 0; i < hours.length; i++)
      this.custPerHour.push(randomCustPerHour(this.min, this.max));
    console.log(this.custPerHour);
  },

  getcookieSoldPerHour: function () {
    // this.total = 0;
    this.getCustPerHour();
    for (let i = 0; i <= hours.length; i++) {
      let cookiePerHour = (Math.ceil(this.custPerHour[i] * this.avgCookie));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },

  render: function () {
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]}cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  },

};

seattle.getCustPerHour();
seattle.getcookieSoldPerHour();
seattle.render();

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgCookie: 1.2,
  custPerHour: [],
  cookieSoldPerHour: [],
  total: 0,

  getCustPerHour: function () {

    for (let i = 0; i < hours.length; i++)
      this.custPerHour.push(randomCustPerHour(this.min, this.max));
    console.log(this.custPerHour);
  },

  getcookieSoldPerHour: function () {
    // this.total = 0;
    this.getCustPerHour();
    for (let i = 0; i <= hours.length; i++) {
      let cookiePerHour = (Math.ceil(this.custPerHour[i] * this.avgCookie));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },

  render: function () {
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]}cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  }
};

tokyo.getCustPerHour();
tokyo.getcookieSoldPerHour();
tokyo.render();


let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avgCookie: 3.7,
  custPerHour: [],
  cookieSoldPerHour: [],
  total: 0,

  getCustPerHour: function () {

    for (let i = 0; i < hours.length; i++)
      this.custPerHour.push(randomCustPerHour(this.min, this.max));
    console.log(this.custPerHour);
  },

  getcookieSoldPerHour: function () {
    // this.total = 0;
    this.getCustPerHour();
    for (let i = 0; i <= hours.length; i++) {
      let cookiePerHour = (Math.ceil(this.custPerHour[i] * this.avgCookie));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },

  render: function () {
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]}cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  }
};

dubai.getCustPerHour();
dubai.getcookieSoldPerHour();
dubai.render();


let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avgCookie: 2.3,
  custPerHour: [],
  cookieSoldPerHour: [],
  total: 0,

  getCustPerHour: function () {

    for (let i = 0; i < hours.length; i++)
      this.custPerHour.push(randomCustPerHour(this.min, this.max));
    console.log(this.custPerHour);
  },

  getcookieSoldPerHour: function () {
    // this.total = 0;
    this.getCustPerHour();
    for (let i = 0; i <= hours.length; i++) {
      let cookiePerHour = (Math.ceil(this.custPerHour[i] * this.avgCookie));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },

  render: function () {
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]}cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  }
};

paris.getCustPerHour();
paris.getcookieSoldPerHour();
paris.render();


let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avgCookie: 4.6,
  custPerHour: [],
  cookieSoldPerHour: [],
  total: 0,

  getCustPerHour: function () {

    for (let i = 0; i < hours.length; i++)
      this.custPerHour.push(randomCustPerHour(this.min, this.max));
    console.log(this.custPerHour);
  },

  getcookieSoldPerHour: function () {
    // this.total = 0;
    this.getCustPerHour();
    for (let i = 0; i <= hours.length; i++) {
      let cookiePerHour = (Math.ceil(this.custPerHour[i] * this.avgCookie));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },

  render: function () {
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]}cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  }
};

lima.getCustPerHour();
lima.getcookieSoldPerHour();
lima.render();


function randomCustPerHour(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
