function bayragiGoster() {
    const secim = document.getElementById("secim").value;
    const flag = document.getElementById("flag");
    
    if (secim === 'az') {
        flag.src = "https://vectorflags.s3.amazonaws.com/flags/az-flag-01.png"; 
        flag.alt = "Azərbaycan";
    } else if (secim === 'en') {
        flag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"; 
        flag.alt = "İngilis";
    } else if (secim === 'ru') {
        flag.src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"; 
        flag.alt = "Rus";
    } else {
        flag.src = ""; 
        flag.alt = "flag";
    }
};

document.getElementById('submitBtn').addEventListener('click', function(event) {
    var checkbox = document.querySelector('input[type="checkbox"]');
    if (!checkbox.checked) {
        event.preventDefault();
        alert('Xahiş edirik, sifarişi verə bilmək üçün "Məlumatlarımın doğruluğunu təsdiq edirəm" qutusunu işarələyin.');
    }
});

