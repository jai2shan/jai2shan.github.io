export class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.closeButton = this.modal.querySelector('.close');
        this.openButton = document.querySelector(`[data-modal="${modalId}"]`);

        this.init();
    }

    init() {
        this.openButton.addEventListener('click', () => this.open());
        this.closeButton.addEventListener('click', () => this.close());
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.close();
            }
        });
    }

    open() {
        this.modal.style.display = 'block';
    }

    close() {
        this.modal.style.display = 'none';
    }
}