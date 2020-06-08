// Start off by creating an array with three student names.
const studentNames=['Joe', 'Adan', 'David'];
// Create a loop that will prompt the user for three more names.
for(let i =0; i<3; i++){
  const newName = prompt(`Enter name ${i+1}`);
  // After every user input, store the new name into the array.
  studentNames.push(newName);
}
// Create a new loop that will iterate through the array and console log each element of the array.
for(let i=0; i<studentNames.length; i++){
  console.log(studentNames[i]);
}
