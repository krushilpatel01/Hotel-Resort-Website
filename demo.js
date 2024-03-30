function toggleSidebar() {

    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("navbarNav").classList.toggle('demo');


}

function message_popup() {
    var x = document.getElementById('date_check_in').value;
    var y = document.getElementById('date_check_out').value;

    alert(x + " check in date" + y + "check out date");
}

function toggleSidebar() {

    document.getElementById("sidebar").classList.toggle('active');

}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

    document.getElementById("navbar").style.display = "none";

    document.getElementById("navbar2").style.display = "block";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    document.getElementById("navbar").style.display = "block";

    document.getElementById("navbar2").style.display = "none";
}



// for contact for get value

function getvalue(){
    var name = document.getElementById("p-name").value;
    var mobile = document.getElementById("p-phone").value;
    var mail = document.getElementById("p-mail").value;
    var subject = document.getElementById("p-subject").value;
    var message = document.getElementById("p-message").value;


    console.log(name);
    console.log(mobile);
    console.log(mail);
    console.log(subject);
    console.log(message);
}

// function showvalue extends getvalue{
//     console.log(name);
// }