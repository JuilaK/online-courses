const dropdownToggle = document.querySelectorAll('.js-dropdown-toggle');
const dropdownMenu = document.querySelectorAll('.js-dropdown-menu');
const dropdownOptions = document.querySelectorAll(".js-dropdown-option");

function dropdownClick() {
    let active = document.querySelector(".js-dropdown.show");
    if (active && active !== this.offsetParent) {
        active.classList.remove('show');
    }
    this.offsetParent.classList.toggle('show');  
}   

function onOptionClick() {
    if (!this.classList.contains('active')) {
        const menu = this.offsetParent;
        const options = menu && menu.querySelectorAll(".js-dropdown-option");
        const selectedOptionHTML = menu && menu.previousElementSibling.querySelector(".js-dropdown-toggle-wrapper");

        options && options.forEach(option => {
            option.classList.remove('active');
        });
        this.classList.add('active');
        menu && menu.offsetParent.classList.remove('show'); 
        if (selectedOptionHTML) {
            selectedOptionHTML.innerHTML = this.innerHTML;
        }        
    }
}

dropdownOptions && dropdownOptions.forEach(option => option.addEventListener('click', onOptionClick));

dropdownToggle && dropdownToggle.forEach(toggle => {
    toggle.addEventListener('click', dropdownClick);
    toggle.nextElementSibling.querySelector('.js-dropdown-option').click()
});