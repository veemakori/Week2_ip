const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function user_Action(){
    document.user_form.action = "index.html";
    reg_exp= /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
		if(user_form.user_DOB.value != '') {
			if(regs = user_form.user_DOB.value.match(reg_exp)) {
				// day value between 1 and 31
				if(regs[1] < 1 || regs[1] > 31) {
					alert("Please enter a valid day: " + regs[1]);
					user_form.user_DOB.focus();
					return false;
				}
                // month value between 1 and 12
				if(regs[2] < 1 || regs[2] > 12) {
					alert("Please enter a valid month: " + regs[2]);
					form.dob.focus();
					return false;
				}
                // year value between 1902 and 2021
				if(regs[3] > (new Date()).getFullYear()) {
					alert("Please enter a valid year: " + regs[3] + " - must be less than or equal to  " + (new Date()).getFullYear());
					user_form.user_DOB.focus();
					return false;
				}