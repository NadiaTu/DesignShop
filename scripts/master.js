//create navigation bar:
var i = 1;
(function () {
    //create list elements
    for (i = 1; i <= 6; i++) {
        var listEl = document.createElement('li');
        var listIdName = document.getElementById('my-list');
        var aTagLink = document.createElement('a');
        listIdName.appendChild(listEl);
        listEl.appendChild(aTagLink);
    }

//add attributes to <a> 
    var a3 = document.getElementsByTagName("a")[3];
    var a4 = document.getElementsByTagName("a")[4];
    var a5 = document.getElementsByTagName("a")[5];
    var a6 = document.getElementsByTagName("a")[6];
    var a8 = document.getElementsByTagName("a")[7];
    var a9 = document.getElementsByTagName("a")[8];
    
    a3.href = "index.html";
    a3.textContent = "Home";
    ///     
    a4.href = "CategoryPage1.html";
    a4.textContent = "Earrings";
    ///     
    a5.href = "CategoryPage2.html";
    a5.textContent = "Necklace";
    ///    
    a6.href = "CategoryPage3.html";
    a6.textContent = "Bracelet";
    ///    
    a8.href = "about.html";
    a8.textContent = "About";
    ///    
    a9.href = "Contact.html";
    a9.textContent = "Contact";
}());

document.getElementById("signReg").onclick = function signFunc() {
    location.href = "register.html";
};

/* toggle menu*/
var toggler = document.querySelector('.menu__toggler');
var menu = document.querySelector('.menu1');
toggler.addEventListener('click', ()=> {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
});


