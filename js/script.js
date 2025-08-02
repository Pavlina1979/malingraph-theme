const pageNavWrapper = document.querySelector('#navbarSupportedContent');
const pageNavAnchors = document.querySelectorAll('#navbarSupportedContent a');
const lastMenuElement = document.querySelector('#navbarSupportedContent .langswitcher li:last-child a');
const toggleButton = document.querySelector('.navbar-toggler');
const ikona = document.querySelector('.navIcon');
let bsPageNav = null;
if (pageNavWrapper && pageNavAnchors) {
  //const bsPageNav = new bootstrap.Collapse(pageNav);
  bsPageNav = bootstrap.Collapse.getOrCreateInstance(pageNavWrapper, { toggle: false });
  function closeHamburger() {
	if (bsPageNav) bsPageNav.hide();
	ikona.classList.remove("aktivni_ikona");
  }
  for (let i = 0; i < pageNavAnchors.length; i++) {
	if (pageNavAnchors[i].getAttribute('id') !== 'navbarDropdown') {
		pageNavAnchors[i].addEventListener('click', closeHamburger);
	}
	
  }
  document.addEventListener('keydown', function(event) {
	var key = event.key || event.keyCode;
	if (key === 'Escape' || key === 'Esc' || key === 27) {
		closeHamburger();
	}
})
lastMenuElement.addEventListener('keydown', function(event) {
	if (event.key === 'Tab' || event.keyCode === 9) {
		if ( event.shiftKey ) /* shift + tab */ {
			return false;
		} else /* tab */ {
			closeHamburger();
		}
	}
})
toggleButton.addEventListener('click', function() {
	ikona.classList.toggle("aktivni_ikona");
})
}