// Add dynamic social media icons
const socialIcons = document.querySelector('.social-background');
const icons = ['instagram', 'youtube', 'facebook', 'tiktok', 'whatsapp', 'telegram', 'twitter', 'snapchat'];

icons.forEach((icon, index) => {
    const i = document.createElement('i');
    i.className = `fab fa-${icon}`;
    i.style.left = `${Math.random() * 100}%`;
    i.style.animationDelay = `${index * 2}s`;
    socialIcons.appendChild(i);
});

// Instamojo API integration
const form = document.querySelector('.payment-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    formData.append('api_key', '6239a9219431681df2cd324792065c5a');
    formData.append('auth_token', 'dc8f990d49ec188ad393e171ccc8569a');

    fetch('https://test.instamojo.com/api/1.1/payment-requests/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            window.location.href = data.payment_request.longurl;
        }
    })
    .catch(error => console.error('Error:', error));
});
