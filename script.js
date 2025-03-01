document.getElementById("redirectButton").addEventListener("click", function () {
    const age = parseInt(document.getElementById("age").value);

    // Verifica se o campo idade está preenchido
    if (isNaN(age)) {
        alert("Preencha todos os campos obrigatórios.");
        return; // Impede o redirecionamento
    }

    if (age >= 0 && age <= 9) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = "transitional.html";
        }, 1000); // Tempo da animação de 1 segundo
    } else if (age >= 10 && age <= 12) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = "transitional1.html";
        }, 1000); // Tempo da animação de 1 segundo
    } else if (age >= 13 && age <= 16) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = "transitional2.html";
        }, 1000); // Tempo da animação de 1 segundo
    } else if (age >= 17 && age <= 30) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = "transitional3.html";
        }, 1000); // Tempo da animação de 1 segundo
    } else if (age >= 31 && age <= 55) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = "transitional4.html";
        }, 1000); // Tempo da animação de 1 segundo
    } else if (age >= 56) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = "transitional5.html";
        }, 1000); // Tempo da animação de 1 segundo
    } else {
        alert("Idade inválida.");
    }
});
