function buat_login(){
  var elem = document.getElementById('x');
    elem.parentElement.removeChild(elem);

  var p = document.createElement('p');
  p.className = 'tulisan_login';
  p.innerHTML = "<b>Silahkan Mendaftar</b>";

  var element = document.getElementsByTagName('div')[0];
  element.appendChild(p);

  var form = document.createElement('FORM');
  element.appendChild(form);

//script untuk membuat Nama User
var label1 = document.createElement('label');
label1.innerHTML = "Nama User";
form.appendChild(label1);

var input_nama = document.createElement('input');
input_nama.type = 'text';
input_nama.name = 'Nama User';
input_nama.placeholder = 'Nama User...';
input_nama.className = 'form_login';
form.appendChild(input_nama);

//script untuk membuat No HP
var label2 = document.createElement('label');
label2.innerHTML = "Nomor Handphone";
form.appendChild(label2);

var input_hp = document.createElement('input');
input_hp.type = 'text';
input_hp.name = 'Nomor Handphone';
input_hp.placeholder = 'Nomor Handphone...';
input_hp.className = 'form_login';
form.appendChild(input_hp);

//script untuk membuat input Username
var label3 = document.createElement('label');
label3.innerHTML = "Username";
form.appendChild(label3);

var input_username = document.createElement('input');
input_username.type = 'text';
input_username.name = 'username';
input_username.placeholder = 'Username atau Email...';
input_username.className = 'form_login';
form.appendChild(input_username);

//script untuk membuat input password
var label4 = document.createElement('label2');
label4.innerHTML = "Password";
form.appendChild(label4);

var input_password = document.createElement('input');
input_password.type = 'password';
input_password.name = 'password';
input_password.placeholder = 'Password...';
input_password.className = 'form_login';
form.appendChild(input_password);

//script untuk membuat button
var tombol = document.createElement('input');
tombol.type = 'submit';
tombol.value = "Daftar Sekarang";
tombol.className = 'tombol_login';
form.appendChild(tombol);
}
