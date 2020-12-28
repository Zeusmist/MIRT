function showMenu()
{
    let button = document.getElementById('menuBar');
    let menu = document.getElementById('menuContents');
    let noti = document.getElementById('notificationBell');
    let alertCon = document.getElementById('notificationAlertCon');
    if (!menu.style.display || menu.style.display == 'none')
        {
            menu.style.display = 'block';
            button.style.left = '190px';
            noti.style.left = "190px";
        }
    else
        {
            menu.style.display = "none";
            button.style.left = "40px";
            noti.style.left = "40px";
        }
}
function showSearch()
{
    let button = document.getElementById('searchButton');
    let box = document.getElementById('searchBox');
    let submit = document.getElementById('searchSubmit');
    if(!submit.style.display || submit.style.display == "none")
        {
            box.style.display = "block";
            submit.style.display = "block";
            button.style.right = "290px"
        }
    else
        {
            box.style.display = "none";
            submit.style.display = "none";
            button.style.right = "35px";
        }
}