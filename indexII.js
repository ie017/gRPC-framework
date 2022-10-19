const studentStabs = require('./Student_pb');
const fileSystem = require('fs');

let s1 = new studentStabs.Student();
s1.setId(1);
s1.setName("issam");
s1.setUniversity("UM5");
s1.setStudy("Data");

let s2 = new studentStabs.Student();
s2.setId(2);
s2.setName("rachid");
s2.setUniversity("UM5");
s2.setStudy("IOT");

let s3 = new studentStabs.Student();
s3.setId(3);
s3.setName("hassan");
s3.setUniversity("EMSI");
s3.setStudy("Network");

let s4 = new studentStabs.Student();
s4.setId(4);
s4.setName("achraf");
s4.setUniversity("UM5");
s4.setStudy("Maths");

let students =new studentStabs.Students();
students.addStudents(s1);
students.addStudents(s2);
students.addStudents(s3);
students.addStudents(s4);
// Sérialiser en format binaire
const DataBinary = students.serializeBinary();
console.log(DataBinary);

fileSystem.writeFileSync("Data.proto", DataBinary);