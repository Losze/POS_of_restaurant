var path = window.location.pathname;
var page = path.split("/").pop();

// back tot top

let backToTopBtn = document.querySelector('.back-to-top')

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}

// top nav menu

let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item, index) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})

// food category


if(page === "menu"){
    let foodMenuList = document.querySelector('.food-item-wrap')

    let foodCategory = document.querySelector('.food-category')

    let categories = foodCategory.querySelectorAll('button')

    Array.from(categories).forEach((item, index) => {
        item.onclick = (e) => {
            let currCat = foodCategory.querySelector('button.active')
            currCat.classList.remove('active')
            e.target.classList.add('active')
            foodMenuList.classList ='food-item-wrap '+ e.target.getAttribute('data-food-type')
        }
    })
}

// on scroll animation

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()

// mobile nav

let bottomNavItems = document.querySelectorAll('.mb-nav-item')

let bottomMove = document.querySelector('.mb-move-item')

if(page === "index"){
    bottomMove.style.left = 0 + '%';
}
else if(page === "about"){
    bottomMove.style.left = 25 + '%';
}
else if(page === "menu"){
    bottomMove.style.left = 50 + '%';
}
else {
    bottomMove.style.left = 75 + '%';
}

/*
bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        console.log('object')
        let crrItem = document.querySelector('.mb-nav-item.active')
        crrItem.classList.remove('active')
        item.classList.add('active')
        bottomMove.style.left = index * 20 + '%'
    }
})
*/

//Modal Box
function incrementValue(id)
{
    var value = parseInt(document.getElementById(String(id)).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(String(id)).value = value;
}

function decrementValue(id)
{
    var value = parseInt(document.getElementById(String(id)).value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>0){
        value--;
        document.getElementById(String(id)).value = value;
    }
}

var logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click',function(e){
    document.cookie = "token" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = "/login";
});