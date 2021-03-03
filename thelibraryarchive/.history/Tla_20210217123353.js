// Get Color Attribute
// Set the background book color


function displayBookDetails(el) {
  var $this = $(el);
  $('.main-container').addClass('prevent-scroll');
  $('.main-overlay').fadeIn();

  $this.find('.overlay-details').clone().prependTo('.main-overlay');

  $('a.close-overlay-btn').on('click', function(e) {
    e.preventDefault();
    $('.main-container').removeClass('prevent-scroll');
    $('.main-overlay').fadeOut();
    $('.main-overlay').find('.overlay-details').remove();
  });

  $('.main-overlay a.preview').on('click', function() {
    $('.main-overlay .overlay-desc').toggleClass('activated');
    $('.main-overlay .overlay-preview').toggleClass('activated');
  });

  $('.main-overlay a.back-preview-btn').on('click', function() {
    $('.main-overlay .overlay-desc').toggleClass('activated');
    $('.main-overlay .overlay-preview').toggleClass('activated');
  });
}

/*
 *  Offcanvas Menu
 */
// Open Offcanvas Menu
$('.main-navigation a').on('click', function() {
  $('.main-container').addClass('nav-menu-open');
  $('.main-overlay').fadeIn();
});

// Close Offcanvas Menu
$('.overlay-full').on('click', function() {
  $('.main-container').removeClass('nav-menu-open');
  $('.main-container').removeClass('prevent-scroll');
  $(this).parent().fadeOut();
  $(this).parent().find('.overlay-details').remove();
});

/*
 *  Shuffle.js for Search, Catagory filter and Sort
 */

// Initiate Shuffle.js
var Shuffle = window.shuffle;

var Demo = function (element) {
  this.element = element;

  // Log out events.
  this.addShuffleEventListeners();

  this.shuffle = new Shuffle(element, {
    itemSelector: '.picture-item',
    sizer: element.querySelector('.my-sizer-element'),
  });

  this._activeFilters = [];

  this.addFilterButtons();
  this.addSorting();
  this.addSearchFilter();

  this.mode = 'exclusive';
};
















// Search function Handler to search list
bookList.prototype._handleSearchKeyup = function(evt) {
  var searchInput = document.querySelector('.shuffle-search');
  var searchText = evt.target.value.toLowerCase();

  // Check if Search input has value to toggle class
  if (searchInput && searchInput.value) {
    $('.catalog-search').addClass('input--filled');
  } else {
    $('.catalog-search').removeClass('input--filled');
  }

  this.shuffle.filter(function(element, shuffle) {

    // If there is a current filter applied, ignore elements that don't match it.
    if (shuffle.group !== Shuffle.ALL_ITEMS) {
      // Get the item's groups.
      var groups = JSON.parse(element.getAttribute('data-groups'));
      var isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;

      // Only search elements in the current group
      if (!isElementInCurrentGroup) {
        return false;
      }
    }

    var titleElement = element.querySelector('.book-item_title');
    var titleText = titleElement.textContent.toLowerCase().trim();

    return titleText.indexOf(searchText) !== -1;
  });
};

// Wait till dom load to start the Shuffle js funtionality
document.addEventListener('DOMContentLoaded', function() {
  window.book_list = new bookList(document.getElementById('grid'));
});