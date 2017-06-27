function message(){
	var parts = ["alexander", "katz", "kellogg", "northwestern", "edu", ".", "@"];
	var address = parts[0] + parts[5] + parts[1] + parts[6] + parts[2] + parts[5] + parts[3] 
								+ parts[5] + parts[4];
								
	window.location.href="mailto:" + address;
}

function myFunction() {
    var x = document.getElementById("navigation_list");
    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
}