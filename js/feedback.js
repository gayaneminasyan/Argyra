
function submitFeedback(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
  

    console.log('Feedback Submitted:', {
      name,
      email,
      rating,
      comments
    });
  
    alert('Thank you for your feedback!');
    document.getElementById('feedback-form').reset();
  }
  