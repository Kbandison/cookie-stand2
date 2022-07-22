'use strict';

let storeDiv = document.getElementById('store');

function randomCustPerHour(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
  name: 'seattle',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 23,
  max: 65,
  avgCookie: 6.3,
  custPerHour: 0,
  cookieSoldPerHour: [],

  getCustPerHour: function() {
    this.custPerHour = randomCustPerHour(this.min, this.max);
    console.log(this.custPerHour);
  },

  getcookieSoldPerHour: function(){
    this.total = 0;

    for(let i = 0; i <= this.custPerHour.length; i++) {
      this.getCustPerHour();
      let cookiePerHour = (Math.ceil(this.custPerHour * this.avgCookie));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },

  render: function() {
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for(let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${this.hours[i]}: ${this.cookieSoldPerHour[i]}cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  },

};

seattle.getcookieSoldPerHour();
seattle.render();


let tokyo = {
  name: 'Tokyo',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 3,
  max: 24,
  avgCookie: 1.2,
  custPerHour: 0,
  cookieSoldPerHour: [],

  getCustPerHour: function() {
    this.custPerHour = randomCustPerHour(this.min, this.max);
    console.log(this.custPerHour);
  },

  getcookieSoldPerHour: function(){
    this.total = 0;

    for(let i = 0; i <= this.custPerHour.length; i++) {
      this.getCustPerHour();
      let cookiePerHour = (Math.ceil(this.custPerHour * this.avgCookie));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },

  render: function() {
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for(let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${this.hours[i]}: ${this.cookieSoldPerHour[i]}cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  }
};

tokyo.getcookieSoldPerHour();
//tokyo.render();


let dubai = {
  name: 'Dubai',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 11,
  max: 38,
  avgCookie: 3.7,
  custPerHour: 0,
  cookieSoldPerHour: [],

  getCustPerHour: function() {
    this.custPerHour = randomCustPerHour(this.min, this.max);
    console.log(this.custPerHour);
  },

  getcookieSoldPerHour: function(){
    this.total = 0;

    for(let i = 0; i <= this.custPerHour.length; i++) {
      this.getCustPerHour();
      let cookiePerHour = (Math.ceil(this.custPerHour * this.avgCookie));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },

  render: function() {
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for(let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${this.hours[i]}: ${this.cookieSoldPerHour[i]}cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  }
};

dubai.getcookieSoldPerHour();
//dubai.render();


let paris = {
  name: 'Paris',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 20,
  max: 38,
  avgCookie: 2.3,
  custPerHour: 0,
  cookieSoldPerHour: [],

  getCustPerHour: function() {
    this.custPerHour = randomCustPerHour(this.min, this.max);
    console.log(this.custPerHour);
  },

  getcookieSoldPerHour: function(){
    this.total = 0;

    for(let i = 0; i <= this.custPerHour.length; i++) {
      this.getCustPerHour();
      let cookiePerHour = (Math.ceil(this.custPerHour * this.avgCookie));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },

  render: function() {
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for(let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${this.hours[i]}: ${this.cookieSoldPerHour[i]}cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  }
};

paris.getcookieSoldPerHour();
//paris.render();


let lima = {
  name: 'Lima',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 2,
  max: 16,
  avgCookie: 4.6,
  custPerHour: 0,
  cookieSoldPerHour: [],

  getCustPerHour: function() {
    this.custPerHour = randomCustPerHour(this.min, this.max);
    console.log(this.custPerHour);
  },

  getcookieSoldPerHour: function(){
    this.total = 0;

    for(let i = 0; i <= this.custPerHour.length; i++) {
      this.getCustPerHour();
      let cookiePerHour = (Math.ceil(this.custPerHour * this.avgCookie));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },

  render: function() {
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for(let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${this.hours[i]}: ${this.cookieSoldPerHour[i]}cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  }
};

lima.getcookieSoldPerHour();
//lima.render();


