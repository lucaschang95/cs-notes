function Person(name = 'anonymous') {
  this.name = name;
}

Person.prototype.getName = function() {
  console.log(this.name);
}

function Student(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.getSubject = function() {
  console.log(subject);
};


let student1 = new Student('bob', 'math');
console.log(student1.constructor);
console.log(student1 instanceof Object);
console.log(student1 instanceof Person);