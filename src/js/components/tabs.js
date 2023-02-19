function initTabs(tabs, contentItems) {
    let tabsList = document.querySelectorAll(tabs);
    let contentList = document.querySelectorAll(contentItems);

    if (tabsList.length != 0) {
        tabsList.forEach(function (item) {
            item.addEventListener('click', function () {
                if (!item.classList.contains('active')) {
                    tabsList.forEach(function (item) {
                        item.classList.remove('active');
                    });

                    contentList.forEach(function (item) {
                        item.classList.remove('active');
                    });

                    this.classList.add("active");
                    let tabId = this.getAttribute("data-id");
                    let currentItem = document.getElementById(tabId);
                    currentItem.classList.add('active');
                }
            });
        });
    }
}

// initTabs(".marketing__tab", ".marketing__content-item");