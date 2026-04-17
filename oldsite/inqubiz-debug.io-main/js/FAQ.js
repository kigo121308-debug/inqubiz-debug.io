var items = document.querySelectorAll('.FAQ-question')

items.forEach(function(question){
  question.addEventListener('click', function(){
    const answer = this.nextElementSibling;

    if (answer.style.display === 'block'){
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});