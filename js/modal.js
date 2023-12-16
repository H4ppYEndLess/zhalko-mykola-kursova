(() => {
    const forms = document.querySelectorAll("#subscribe");
    const refs = {
        openModalBtns: document.querySelectorAll("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
  
    function disableScroll() {
        document.body.style.setProperty('overflow', 'hidden', 'important');
    }
  
    function enableScroll() {
        document.body.style.removeProperty('overflow');
    }
  
    function openModal() {
        // Get the form associated with the clicked button
        const form = this.closest("form");

        if (form.checkValidity()) {
            refs.modal.classList.remove("is-hidden");
            disableScroll();
        } else {
            form.reportValidity();
        }
    }
  
    function closeModal() {
        refs.modal.classList.add("is-hidden");
        enableScroll();
    }

    refs.openModalBtns.forEach(element => {
        element.addEventListener("click", openModal);
    });
    refs.closeModalBtn.addEventListener("click", closeModal);
})();
