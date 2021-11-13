$(document).ready(function () {

  console.log('script is working now!');

  let petName = 'Vinni';

  console.log(petName);

  petName = 'Gans';

  console.log(petName);

  const Pi = 3.14;

  console.log(Pi);



  let petsArray = ['Тигр', 'Сова', 'Свинья', 'Медведь', 'Осел']; // 5 4

  console.log(petsArray);
  console.log(petsArray.length);



  console.log('Ivan' + ' ' + 'Ivanovich');

  console.log(9 - '5');

  let a = 1;

  console.log(a); // 1
  // a = a + 1;
  a++;
  console.log(a); // 2
  a--;
  console.log(a); // 1


  let age = 14;

  if (age >= 18) {
    console.log('Можно продать алкоголь');
  } else {
    console.log('Платим штраф и закрываем магазин...');
  }


  let name;

  console.log(name);

  let someArray = [];

  console.log(someArray.length);

  if (someArray.length) {
    console.log('Здравствуйте, ' + name);
  } else {
    console.log('Здравствуйте, товарищ!');
  }



  // for (let i = 0; i < petsArray.length; i++) {

  //   hello(petsArray[i]);

  // }


  function hello(subjectArray) {

    if (subjectArray) {
      for (let i = 0; i < subjectArray.length; i++) {
        console.log('hello, ' + subjectArray[i] + '!');
      }

      return;
    }

    console.log('Печалька, никто не пришел((');
  }

  hello(petsArray);
  hello();

  let helloSome = function () {
    console.log('hello some!');
  }

  helloSome();

  let pet = {
    name: 'Gans',
    age: {

    },
    color: 'black',
    meow: function () {
      console.log('i\'m ' + this.name + '! meeeooowwwww');
    },
    actions: {
      meow: function () { },
      run: function () { },
      sleep: function () { }
    }
  }

  console.log(pet.name);
  console.log(pet.age);

  pet.meow();


  // let serviceNodeArray = document.querySelectorAll('.services-item');

  // serviceNodeArray.forEach(function (itemNode) {
  //   itemNode.style.color = 'red';
  // });


  $('.services-item').css({ 'color': 'red' });


  function summ(a, b) {
    console.log('before');
    return a + b;
    console.log('after');
  }

  let someSumm = summ(3, 7);
  console.log(someSumm);



});
