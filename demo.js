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
