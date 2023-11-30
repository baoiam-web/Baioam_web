


    const wepAccordionFaqItemHeaders = document.querySelectorAll(".wep-accordion-faq-item-header");

    wepAccordionFaqItemHeaders.forEach(wepAccordionFaqItemHeader => {
        wepAccordionFaqItemHeader.addEventListener("click", event => {


            const currentlyActiveWepAccordionFaqItemHeader = document.querySelector(".wep-accordion-faq-item-header.active");
            if (currentlyActiveWepAccordionFaqItemHeader && currentlyActiveWepAccordionFaqItemHeader !== wepAccordionFaqItemHeader) {
                currentlyActiveWepAccordionFaqItemHeader.classList.toggle("active");
                currentlyActiveWepAccordionFaqItemHeader.nextElementSibling.style.maxHeight = 0;
            }

            wepAccordionFaqItemHeader.classList.toggle("active");
            const wepAccordionFaqItemBody = wepAccordionFaqItemHeader.nextElementSibling;
            if (wepAccordionFaqItemHeader.classList.contains("active")) {
                wepAccordionFaqItemBody.style.maxHeight = wepAccordionFaqItemBody.scrollHeight + "px";
            }
            else {
                wepAccordionFaqItemBody.style.maxHeight = 0;
            }

    
  });
