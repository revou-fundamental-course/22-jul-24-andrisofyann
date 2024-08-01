console.log('hello world');

function formvalidation() {
    let name = document.getElementById('input-name').value;
    console.log('name');

    if (name =='') {
        alert('Maaf inputan anda kosong');
    } else {
        alert('Sukses menginput');
    }
}

function formvalidation() {
    let email = document.getElementById('input-email').value;
    console.log('email');

    if ( email =='') {
        alert('Maaf inputan anda kosong');
    } else {
        alert('Sukses menginput');
    }
}

function formvalidation() {
    let pesan = document.getElementById('input-pesan').value;
    console.log('pesan');

    if ( pesan =='') {
        alert('Maaf inputan anda kosong');
    } else {
        alert('Sukses menginput');
    }
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

