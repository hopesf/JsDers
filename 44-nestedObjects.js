var db ={
  'car':{
      "inside":{
          "glove box": "maps",
          "passenger seat": "crumbs"
      },
      "outside":{
          "trunk": "jack"
      }
  }
};

var gloveBox = db.car.inside["glove box"];
console.log(gloveBox);