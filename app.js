const firstTab = document.getElementById('openTab');
const secondTab = document.getElementById('openTab2');
const thirdTab = document.getElementById('openTab3');
const tabOne = document.getElementById('tab1');
const tabTwo = document.getElementById('tab2');
const tabThree = document.getElementById('tab3');
const email = document.querySelector('.email');
const form = document.querySelector('.form');
const emailMessage = document.querySelector('.empty-email-message');
const errorEmail = document.querySelector('.invalid-email-message');
const headerContent = document.querySelector('.header-dropdown-content');
const list = document.getElementById('list');
const logo = document.querySelector('.logo');
const loginBtn = document.getElementById('login-btn');
const navBar = document.getElementById('headerDropdown');
const closeBtn = document.getElementById('closeNavBar')
const tabImg = document.querySelector('.tab-img');
const errImg = document.getElementById('warningImg');
const tabOneRuler = document.querySelector('.underline1')
const tabTwoRuler = document.querySelector('.underline2')
const tabThreeRuler = document.querySelector('.underline3')

// Tab 1 
firstTab.addEventListener('click', tabOneReview);

// To open tab 1
function tabOneReview(e) {
    tabOne.style.display = "flex"
    tabTwo.style.display = "none"
    tabThree.style.display = "none"
    tabOneRuler.style.backgroundColor = '#fa5757'
    tabTwoRuler.style.backgroundColor = 'transparent'
    tabThreeRuler.style.backgroundColor = 'transparent'
    tabOneRuler.style.fontWeight = '700'
    tabTwoRuler.style.fontWeight = '400'
    tabThreeRuler.style.fontWeight = '400'
}

// Tab 2
secondTab.addEventListener('click', tabTwoReview);

// To open tab 2
function tabTwoReview(e) {
    tabOne.style.display = "none"
    tabTwo.style.display = "flex"
    tabThree.style.display = "none"
    tabOneRuler.style.backgroundColor = 'transparent'
    tabTwoRuler.style.backgroundColor = '#fa5757'
    tabThreeRuler.style.backgroundColor = 'transparent'
    tabOneRuler.style.fontWeight = '400'
    tabTwoRuler.style.fontWeight = '700'
    tabThreeRuler.style.fontWeight = '400'
}

// Tab 3
thirdTab.addEventListener('click', tabThreeReview);

// To open tab 3
function tabThreeReview(e) {
    tabOne.style.display = "none"
    tabTwo.style.display = "none"
    tabThree.style.display = "flex"
    tabOneRuler.style.backgroundColor = 'transparent'
    tabTwoRuler.style.backgroundColor = 'transparent'
    tabThreeRuler.style.backgroundColor = '#fa5757'
    tabOneRuler.style.fontWeight = '400'
    tabTwoRuler.style.fontWeight = '400'
    tabThreeRuler.style.fontWeight = '700'
}



// FORM VALIDATION

form.addEventListener('submit', function (e) {

    let emailValidation = false
    let code = email.value
    let sign = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);

    e.preventDefault();

    if (!code) {
        setMessage(`email is invalid`, errorEmail, email, errImg)
    } else if (!sign) {
        setMessage(`Whoops, make sure it is an email`, emailMessage, email, errImg)
    } else {
        emailValidation = true;
        emailMessage.style.display = 'none';
    }
})

// Set message
function setMessage(errMsg, errMsgClass, borderClass, warningClass) {
    errMsgClass.style.color = 'white';
    errMsgClass.textContent = errMsg;
    errMsgClass.style.backgroundColor = '#fa5757';
    errMsgClass.style.borderBottomLeftRadius = '4px';
    errMsgClass.style.borderBottomRightRadius = '4px';
    errMsgClass.style.padding = '3px 3px 3px 15px';
    borderClass.style.border = '2px solid #fa5757';
    warningClass.style.display = 'flex';
    setTimeout(() => {
    errMsgClass.style.display = 'none';
    warningClass.style.display = 'none';
    borderClass.style.border = '1px solid white'
    }, 3000);
}

// Header  Dropdown
navBar.addEventListener('click', headerDropdown);

// To Open Nav Bar
function headerDropdown(e) {
    headerContent.style.display = "flex";
    headerContent.style.backgroundColor = '#252b46';
    headerContent.style.color = 'white';
    headerContent.style.flexDirection = 'column';
    headerContent.style.padding = '50px 40px';
    list.style.gap = '0px';
    headerContent.style.margin = '0px';
    navBar.style.margin = '0px';
    logo.style.margin = '0px';
    logo.style.display = 'none';
    list.style.flexDirection = 'column';
    list.style.textAlign = 'center';
    loginBtn.style.backgroundColor = '#252b46';
    loginBtn.style.border = '3px solid white'
    loginBtn.style.padding = '18px 0px';
    headerContent.style.minWidth = '375px';
    headerContent.style.opacity = '0.9';
    navBar.style.display = 'none';
    tabImg.style.margin = '100px 0px ';
    tabImg.style.marginLeft = 'auto';
    tabImg.style.marginRight = 'auto';
    list.style.fontSize = '24px';
    loginBtn.style.fontSize = '24px';
    loginBtn.style.fontWeight = '400'
    list.style.fontWeight = '400'
}

// To Close Nav Bar
closeBtn.addEventListener('click', closeDropdown);

function closeDropdown(e) {
    headerContent.style.display = 'none';
    navBar.style.display = 'flex';
    logo.style.display = 'flex';
    navBar.style.margin = '42px 44px 0px 0px';
    logo.style.margin = '42px 0px 0px 44px';
    tabImg.style.margin = '80px 0px';
    tabImg.style.marginLeft = 'auto';
    tabImg.style.marginRight = 'auto';
}