//nav collapse/expand code
class Menu {
    constructor(el) {
        this.el = el;
        this.menu = this.el.querySelector('#menu');
        this.toggle = this.el.querySelector('#toggle');
        this.toggle.addEventListener('click', () => {
            this.toggleMenu();
        })
    }
    isExpanded() {
        return this.el.classList.contains('expanded');
    }
    toggleMenu() {
        if (this.isExpanded()) {
            this.collapse();
        } else {
            this.expand();
        }
    }
    collapse() {
        this.el.classList.add('collapsed');
        this.el.classList.remove('expanded');
    }
    expand() {
        this.el.classList.add('expanded');
        this.el.classList.remove('collapsed');
    }
}

let menu = document.querySelector('nav');

menu = new Menu(menu);