// Exercise 1:
var saveUser = function (user) {
  console.log("saving", user.name);
};

var saveUsers = function () {
  var users = [
    { id: 15, name: "Bob" },
    { id: 23, name: "Jimbo" },
    { id: 35, name: "Cathy" },
  ];

  
  // for (var i = 0; i < users.length; i++) {
  //   saveUser(users[i]);

  users.forEach(function (u) {
    saveUser(u);
  });
};

// Exercise 2:
// Use forEach to calculate the volumes of each "box" in the boxes array and populate volumes with those figures. The volumes array should have 5 numbers in it.

var boxes = [
  { length: 10, width: 15, height: 20 },
  { length: 15, width: 20, height: 25 },
  { length: 20, width: 25, height: 30 },
  { length: 25, width: 30, height: 35 },
  { length: 30, width: 35, height: 40 },
];

var volumes = [];

boxes.forEach(function(box){
  volumes.push(box.length * box.width * box.height);
})  

console.log(volumes);
