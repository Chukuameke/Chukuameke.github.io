document.addEventListener("DOMContentLoaded", function() {
    const introContent = document.querySelector('.intro-content');
    
    // Wait for a short delay before showing the intro content
    setTimeout(() => {
      introContent.style.opacity = '1';
    }, 1000); // Adjust the delay as needed
  });
  
  
  var typed = new Typed('#element', {
    strings: ['Web Developer', 'Mobile App developer','Product Researcher'],
    typeSpeed: 50,
  });
  
  
  document.getElementById('searchInput').addEventListener('input', function() {
    var searchQuery = this.value.toLowerCase();
    var listItems = document.querySelectorAll('#searchList li');
  
    listItems.forEach(function(item) {
      var text = item.textContent.toLowerCase();
      var isVisible = text.includes(searchQuery);
      item.style.display = isVisible ? 'block' : 'none';
    });
  });
  

  
