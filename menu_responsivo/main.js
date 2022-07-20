class MobileNavBar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelector(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind();
  }
  addClickEvent() {
    this.mobileMenu.addEventListener("click", () => console.log("TESTE"));
  }
  init() {
    if(this.mobileMenu) {
        this.addClickEvent();
    }
    return this;
  }
}

const mobileMenu = new MobileNavBar(
    '.mobile-menu',
    '.nav-list',
    'nav-list li'
)
