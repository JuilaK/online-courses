const paginationItems = document.querySelectorAll(".js-pagination-item");

paginationItems.forEach(onPaginationClick);

function onPaginationClick(item) {
    item.addEventListener("click", function() {
        if (!item.classList.contains('active') && !item.querySelector('.icon-arrow-right')) {
            paginationItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            item.classList.add('active');
        }

        if (item.querySelector('.icon-arrow-right')) {
            let activeIndex=0;
            paginationItems.forEach(function(item, index) {
                if (item.classList.contains('active')) {
                    activeIndex = index;
                };
            });
            if (activeIndex < paginationItems.length - 2) {
                paginationItems[activeIndex].classList.remove('active');
                paginationItems[activeIndex+1].classList.add('active');
            }           
        }
        
    });
}

(paginationItems.length != 0) && document.querySelector('.js-pagination-item').click();