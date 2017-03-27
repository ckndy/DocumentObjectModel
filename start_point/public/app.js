var createSomething = function(){
  var something = document.createElement('ul');
  something.classList.add('cat');
  return something;
};

var createCatName = function(name){
  var catName = document.createElement('li');
  catName.innerText = 'Name: ' + name;
  return catName;
};

var createCatFood = function(favouriteFood){
  var catFood = document.createElement('li');
  catFood.innerText = 'Favourite Food: ' + favouriteFood;
  return catFood;
};

var createCatImage = function(image){
  var catImage = document.createElement('li');
  catImage.innerHTML = '< img width="500" src=' + image
  return catImage;
};

var appendElements = function(name, favouriteFood, image, something){
  catFood.appendChild(catImage);
  catName.appendChild(catFood);
  cats.appendChild(catName);

  // UNCERTAIN IF THE ABOVE IS CORRECT?
};

var addCat = function(name, favouriteFood, image){
  var catName = createCatName(name);
  var catFood = createCatFood(favouriteFood);
  var catImage = createCatImage(image);

  var cats = document.querySelector('#cats');
  appendElements(catName, catFood, catImage);
};

var catsArray = [
{name: "Boba", favouriteFood: "Sock Fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},

{name: "Barnaby", favouriteFood: "Tuna", image: "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"},

{name: "Max", favouriteFood: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},

{name: "Thomas O'Malley", favouriteFood: "Anything he can lay his paws on", image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-08/19/13/campaign_images/webdr08/everybody-wants-to-bone-a-cat-2-26634-1440006635-1_dblbig.jpg"},
];

var app = function(){
  for (var cat of catsArray){
    addCat(cat.name, cat.favouriteFood, cat.image);
  }
};

window.onload = app;
