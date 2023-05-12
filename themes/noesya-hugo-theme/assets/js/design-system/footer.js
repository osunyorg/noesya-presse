class Footer {
    constructor (selector) {
        this.element = document.querySelector(selector);
        this.limit = window.innerHeight / 4;
        
        this.listen();
    }

    listen () {
        window.addEventListener('resize', this.resize.bind(this));

        ['scroll'].forEach(event => {
            window.addEventListener(event, this.onScroll.bind(this));
        });
    }

    resize () {
        this.limit = window.innerHeight / 4;
    }

    onScroll () {
        if (window.scrollY > this.limit) {
            this.element.classList.add('is-visible');
        } else {
            this.element.classList.remove('is-visible');
        }
    }
}

export default new Footer('footer#document-footer');
