function User(name) {
  this.name = name;

}
User.sayHi = function() {
  console.log( "My name is: " + this.name );
};

let john = new User("John");

User.sayHi(); // My name is: John
