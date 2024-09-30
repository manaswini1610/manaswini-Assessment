
function scrollToSection(sectionId, element) {
   
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.classList.remove('activeContainer'));

    element.classList.add('activeContainer');
  }



  
  function toggleContent(contentId) {
    
    const contentDiv = document.getElementById(contentId);
  
  
    if (contentDiv.style.display === "none" || contentDiv.style.display === "") {
      contentDiv.style.display = "flex";
    } else {
      contentDiv.style.display = "none";
    }
  
  
    const allBoxes = document.querySelectorAll('.mBox');
    
   
    allBoxes.forEach(box => {
      box.classList.remove('mobileActive');
    });
  

    const clickedBox = contentDiv.previousElementSibling;
    clickedBox.classList.add('mobileActive');
  }
  