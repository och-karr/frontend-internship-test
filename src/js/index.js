/* Here goes your JS code */

function setDisplayElement(loginState) {
    var beforeLoginElem = document.getElementById('js-before-login');
    var loginElem = document.getElementById('js-login');
    var afterLoginElem = document.getElementById('js-after-login');

    function displayFlex(element) {
        element.classList.add("display-flex");
        element.classList.remove("display-none");
    }

    function displayNone(element) {
        element.classList.add("display-none");
        element.classList.remove("display-flex");
    }

    switch (loginState) {
        case 'beforeLoginState':
            displayFlex(beforeLoginElem);
            displayNone(loginElem);
            displayNone(afterLoginElem);
            break;
        case 'loginState':
            displayNone(beforeLoginElem);
            displayFlex(loginElem);
            displayNone(afterLoginElem);
            break;
        case 'afterLoginState':
            displayNone(beforeLoginElem);
            displayNone(loginElem);
            displayFlex(afterLoginElem);
            break;
        default:
            displayFlex(beforeLoginElem);
            displayNone(loginElem);
            displayNone(afterLoginElem);
    }
}

function setLoginState() {

    var loginState = 'beforeLoginState';
    setDisplayElement(loginState);

    var showPopupForm = document.getElementById('js-show-popup-form');
    showPopupForm.addEventListener('click', showLoginPanel);

    var exitBtn = document.getElementById('js-exit-button');
    exitBtn.addEventListener('click', showBeforeLoginPanel);

    function showBeforeLoginPanel() {
        loginState = 'beforeLoginState';
        setDisplayElement(loginState);
    }

    function showLoginPanel() {
        loginState = 'loginState';
        setDisplayElement(loginState);
    }

    function showAfterLoginPanel() {
        loginState = 'afterLoginState';
        setDisplayElement(loginState);
    }

    function validateForm() {
        var formElem = document.getElementById('js-form');
        var checkboxElem = document.getElementById('js-checkbox');

        formElem.addEventListener('submit', (function (e) {
            e.preventDefault();

            if (checkboxElem.checked == true) {

                setTimeout(showAfterLoginPanel, 3000);

            } else {

                function setRedColor(element) {
                    element.classList.add("red-font-color");
                }

                var checkboxLabel = document.getElementById('js-checkbox-label');
                setRedColor(checkboxLabel);
            }
        }))
    }

    validateForm();
}

setLoginState();