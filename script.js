document.addEventListener('DOMContentLoaded', () => {
    const umbrella = document.getElementById('umbrella');
    const logo = document.getElementById('logo');
    const colorButtons = document.querySelectorAll('.color-button');
    const logoUpload = document.getElementById('logo-upload-input');

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            umbrella.src = `images/umbrella_${color}.png`;
        });
    });

    logoUpload.addEventListener('change', event => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                logo.src = e.target.result;
                logo.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
});
