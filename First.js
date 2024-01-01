const currency = document.getElementById('money');
const buyGarage = document.getElementById('buygarage');
const ShopMenu = document.getElementById('shop');
const Allbutton = document.getElementById('buycar');
const Car = document.getElementById('car');
const Menu = document.getElementById('menu');
const sellBTN = document.getElementById('sell'); 
const currencySFX = document.getElementById('currency');
const garageSFX = document.getElementById('garagedoor');
const repairSFX = document.getElementById('repair');

const car1 = 5000;
const car2 = 8000;
const car3 = 50000;
const car4 = 100000;

let balance = 9000;
let garage = false;
let menuopen = false;
let oneAlurt = false;
let engineHP = Math.floor(Math.random() * 90) + 10;
let turboHP = Math.floor(Math.random() *  90) + 10;
let bodyHP = Math.floor(Math.random() *  90) + 10;
let wheelsHP = Math.floor(Math.random() *  90) + 10;

const enginePrice = 50;
const turboPrice = 20;
const bodyPrice = 10;
const wheelsPrice = 20;

function currencySystem () {
     currency.textContent = balance;
}
function moneySFX() {
      currencySFX.play();
};
function garageopening() {
      garageSFX.play();
}
function SFX() {
      repairSFX.play();
}
function engineUp() {
      repair2.textContent = engineHP + '%';
}

function turboUp() {
      repair.textContent = turboHP + '%';
}

function bodyUp() {
      repair3.textContent = bodyHP + '%';
}

function wheelsUp() {
      repair4.textContent = wheelsHP + '%';
}

const buyCar = document.createElement('button');

buyGarage.addEventListener('click', () => {
      moneySFX();
      garage = true;
      document.body.style.backgroundColor = '#000000';

      buyGarage.remove();    
      garageopening();
      
    setTimeout(() => {
            document.body.style.backgroundImage = 'url("Garage.png")'
            garage = true;
            balance -= 1500;
            currencySystem();

            buyCar.classList = 'buycar';
            buyCar.textContent = 'Buy Car';
      
            Allbutton.append(buyCar);

},3000);
});

const Shop = document.createElement('div');
const car1Sell = document.createElement('div');
const car2Sell = document.createElement('div'); 
const car3Sell = document.createElement('div');
const car4Sell = document.createElement('div')
const car = document.createElement('div');

buyCar.addEventListener('click', () => {

      Shop.classList = 'shopDisplay';

      car1Sell.classList = 'car1';
      car2Sell.classList = 'car2';
      car3Sell.classList = 'car3';
      car4Sell.classList = 'car4'; 

      ShopMenu.append(Shop);
      Shop.append(car1Sell);
      Shop.append(car2Sell);
      Shop.append(car3Sell);
      Shop.append(car4Sell);
      Allbutton.appendChild(buyCar).remove();

});

car1Sell.addEventListener('click', () => {

if (balance >= car1) {
      ShopMenu.appendChild(Shop).remove();
      car.classList = 'cars';
      balance -= car1;
      moneySFX();
      carNum = 'car1st';
      Car.append(car);
      currencySystem();
} else {
      alert('You have not enough money');
}
if (oneAlurt === false) {
      alert('Click on the car to see the damage and repair the damaged parts by clicking on them. It takes money.');
      oneAlurt = true;
}
});

car2Sell.addEventListener('click', () => {

if (balance >= car2) {
      ShopMenu.appendChild(Shop).remove();
      car.classList = 'cars2';
      Car.append(car);
      balance -= car2;
      moneySFX();
      carNum = 'car2nd';
      currencySystem();
}else {
      alert('You have not enough money');
}
});

car3Sell.addEventListener('click', () => {
  
if (balance >= car3) {
      ShopMenu.appendChild(Shop).remove();
      car.classList = 'cars3';
      Car.append(car);
      balance -= car3;
      moneySFX();
      carNum = 'car3rd';
      currencySystem();
} else {
      alert('You have not enough money');
}
});

car4Sell.addEventListener('click', () => {

if (balance >= car4) {
      ShopMenu.appendChild(Shop).remove();
      car.classList = 'cars4';
      Car.append(car);
      balance -= car4;
      moneySFX();
      carNum = 'car4th';
      currencySystem();
}else {
      alert('You have not enough money');
}
});

const repair = document.createElement('div');
const repair2 = document.createElement('div');
const repair3 = document.createElement('div');
const repair4 = document.createElement('div');

      repair.className = 'turbo';
      repair.style.backgroundImage = 'url("turbo.png")';
      turboUp();
      repair2.className = 'engine';
      repair2.style.backgroundImage = 'url("engine.png")';
      engineUp();
      repair3.className = 'body';
      repair3.style.backgroundImage = 'url("body.png")';
      bodyUp();
      repair4.className = 'wheels';
      repair4.style.backgroundImage = 'url("wheels.png")';
      wheelsUp();

Car.addEventListener('click', () => {
     if(menuopen === false) {
      Menu.append(repair, repair2, repair3, repair4);
      
      engineHP = Math.floor(Math.random() * 90) + 10;
      turboHP = Math.floor(Math.random() *  90) + 10;
      bodyHP = Math.floor(Math.random() *  90) + 10;
      wheelsHP = Math.floor(Math.random() *  90) + 10;

      engineUp();
      turboUp();
      bodyUp();
      wheelsUp();
     }

      menuopen = true;

      if(menuopen === true) {
            Car.removeAttribute('click');
      }
});


repair.addEventListener('click', () => {
if(balance >= turboPrice) { 
      if (turboHP >= 100) {
            turboHP = 100
            repair.textContent = 100 + '%';
            repair.removeAttribute('click');         
      }else {
            SFX();
            turboHP += 5;
            turboUp();
            balance -= turboPrice;
            currencySystem()
      }
}else {
      alert('You heve not enough money for fix this part.');
}

})

repair2.addEventListener('click', () => {
if (balance >= enginePrice) {
      if(engineHP >= 100) {
        engineHP = 100;
        repair2.textContent = 100 + '%';
        repair2.removeAttribute('click');
      } else {
      SFX();
       engineHP += 5;
       engineUp();
       balance -= enginePrice;
       currencySystem()
      }
}else {
      alert('you have not enough money for fix this part.');
}
})

repair3.addEventListener('click', () => {
if (balance >= bodyPrice) {
      if(bodyHP >= 100) {
      bodyHP = 100;
      repair3.textContent = 100 + '%';
      repair3.removeAttribute('click');
      }else {
      SFX();
      bodyHP += 5;
      bodyUp();
      balance -= bodyPrice;
      currencySystem();
      }
}else {
      alert('You have not enough money for fix this part.')
}
})

repair4.addEventListener('click', () => {
if (balance >= wheelsPrice) {
      if(wheelsHP >= 100) {
            wheelsHP = 100;
            repair4.textContent = 100 + '%';
            repair4.removeAttribute('click');
        } else {
            SFX();
            wheelsHP += 5;
            wheelsUp();
            balance -= wheelsPrice;
            currencySystem();
        }
        if(engineHP === 100 && turboHP === 100 && bodyHP === 100 && wheelsHP === 100) {
            selling();
            updateCarPrice()
        }
}else {
      alert('You have not enough money for fix this part.');
}
});

const sellCar = document.createElement('div');

let carPrice = '';

function updateCarPrice() {
 if (carNum === 'car1st') {
      carPrice = Math.floor(Math.random() * (9000 - 4000 + 1)) + 4000;
      sellCar.textContent = 'Car Sell At: $' + carPrice;
} else if (carNum === 'car2nd') {
      carPrice = Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000;
      sellCar.textContent = 'Car Sell At: $' + carPrice;
}else if (carNum === 'car3rd') {
      carPrice = Math.floor(Math.random() * (90000 - 55000 + 1)) + 55000;
      sellCar.textContent = 'Car Sell At: $' + carPrice;
}else if (carNum === 'car4th') {
      carPrice = Math.floor(Math.random() * (200000 - 110000 + 1)) + 110000;
      sellCar.textContent = 'Car Sell At: $' + carPrice;
}
}

function selling() {
      setInterval(updateCarPrice, 3000);
      sellCar.className = 'Sellcar';
      sellCar.textContent = 'Car Sell At: $' + carPrice;
      sellBTN.appendChild(sellCar);
}    
    
sellCar.addEventListener('click', () => {
      setInterval(updateCarPrice, 3000);
      balance += carPrice;
      moneySFX();
      menuopen = false;
      currencySystem();
   
      updateCarPrice()      
      
     sellBTN.appendChild(sellCar).remove();
     Car.appendChild(car).remove();
     Allbutton.append(buyCar);
     Menu.appendChild(repair).remove();
     Menu.appendChild(repair2).remove();
     Menu.appendChild(repair3).remove();
     Menu.appendChild(repair4).remove();
})
currencySystem();