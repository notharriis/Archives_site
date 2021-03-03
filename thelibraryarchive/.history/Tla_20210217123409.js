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
















