document.getElementById("redirectButton").addEventListener("click", function () {
    const age = parseInt(document.getElementById("age").value);
    const grade = parseInt(document.getElementById("grade").value);

    // Verifica se os campos estão preenchidos
    if (isNaN(age) || isNaN(grade)) {
        alert("Preencha todos os campos obrigatórios.");
        return; // Impede o redirecionamento
    }

    if (age === 13 && grade === 1) {
        window.location.href = "https://campsite.bio/iape";
    } else if (age <= 13 && grade <= 9) {
        window.location.href = "https://taplink.cc/iape";
    } else if (age === 14) {
        window.location.href = "https://linktr.ee/iape7";
    }else {
        window.location.href = "https://campsite.bio/iape";
    }
});
