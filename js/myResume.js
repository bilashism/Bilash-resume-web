const age = document.getElementById("age_val");
birthday = Date.parse('1995/03/21');
actual_age = ~~((Date.now() - birthday) / (31557600000));
age.innerHTML = actual_age;