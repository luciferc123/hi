const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})


//Validation Code For Input

var Username = document.forms['form']['Username'];
var password = document.forms['form']['password'];

var Username_error = document.getElementById('Username_error');
var password_error = document.getElementById('password_error');

function Validated(){
	if(Username.value.lenght < 9){
        Username.style.border = "1px solid red";
		Username_error.display = "block";
		Username.focus();
		return false;
	}
	if(password.value.lenght < 9){
        password.style.border = "1px solid red";
		password_error.display = "block";
		password.focus();
		return false;
	}
}


function check(form)
{

if(form.userid.value == "person" && form.pwd.value == "WachtWoord")
{
    return true;
}
else
{
    alert("Error Password or Username")
    return false;
}
}
