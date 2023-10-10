function check(form){
	if(form.uname.value == "admin" && form.pword.value == "0000"){
		window.close('index.html')
		window.open('Temp.html')
	}
	else {
		alert("NOT THE ADMIN!!")
		alert("Please Try Again Later.")
	}
}
