console.log('js'); //viewed in console of the browser


var students = [{
  fname: 'Chris', //if we are storing it in a database (sending over a network via json), then we need to do 'fname' to turn it into a string
  lname: 'Kane',
  s_class: 'Year 13',
  lab1: 8.7,
  lab2: 5.5,
}];

document.getElementById('fname').value = students[0].fname;
document.getElementById('lname').value = students[0].lname;
document.getElementById('student-class').value = students[0].s_class;
// document.getElementById('lab1').value = students[0].lab1;
// document.getElementById('lab2').value = students[0].lab2;

calculateAvgTotal()
{
  var total = students[0].lab1 + students[0].lab2;
  document.getElementById('total').value = total;
  document.getElementById('average').value = total / 2;
  if (total > 10) {
    document.getElementById('result').value = "Pass";
  } else {
    {
      document.getElementById('result').value = "Fail";
    }
  }

}



var updateBtn = document.getElementById('update-btn');

updateBtn.addEventListener('click', ()=>{
students[0].lab1 = parseFloat(document.getElementById('lab1').value);
students[0].lab2 = parseFloat(document.getElementById('lab2').value);

var total = students[0].lab1 + students[0].lab2;
document.getElementById('total').value = total;
document.getElementById('average').value = total / 2;
if (total > 10) {
  document.getElementById('result').value = "Pass";
} else {
  {
    document.getElementById('result').value = "Fail";
  }
}

} );
