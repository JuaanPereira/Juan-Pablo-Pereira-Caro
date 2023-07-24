$(document).ready(function () {
    // Attach click event handler to all section toggle buttons
    $('.section-toggle').click(function () {
      // Find the corresponding section content and toggle its visibility
      $(this).next('.section-content').slideToggle();
    });
  });