const tabsBtn = document.querySelectorAll(".js-tabs-nav-btn");
const tabsItems = document.querySelectorAll(".js-tabs-content-item");

tabsBtn && tabsBtn.forEach(onTabClick);

function onTabClick(btn) {
    btn.addEventListener("click", function() {
        let tabId = btn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!btn.classList.contains('active')){
            tabsBtn.forEach(function(btn) {
                btn.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            btn.classList.add('active');
            currentTab.classList.add('active');
        }
        
    });
}

(tabsBtn.length != 0) && document.querySelector('.js-tabs-nav-btn').click();