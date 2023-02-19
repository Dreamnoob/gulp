function toggleInfo() {
    const topicsItems = document.querySelectorAll(".topics__btn");
    const topicsInfos = document.querySelectorAll(".topics__info");

    if (topicsItems.length != 0) {
        topicsItems.forEach(item => {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                let currentItem = this;
                let currentInfo = this.nextElementSibling;

                currentItem.classList.toggle('active');
                currentInfo.classList.toggle('active');
                currentInfo.style.top = currentItem.offsetTop + currentItem.clientHeight + "px";

                topicsItems.forEach(item => {
                    if(item != currentItem) {
                        item.classList.remove("active");
                    }
                });

                topicsInfos.forEach(item => {
                    if(item != currentInfo) {
                        item.classList.remove("active");
                    }
                });

              
            });
        });
    }
}

// toggleInfo();