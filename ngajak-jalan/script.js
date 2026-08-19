const tanggal = document.getElementById("tanggal");
const jam = document.getElementById("jam");
const tempat = document.getElementById("tempat");
const result = document.getElementById("result");
const dateResult = document.getElementById("dateResult");
const noButton = document.getElementById("noButton");

function scrollToPlan() {
    document.getElementById("plan").scrollIntoView({
        behavior: "smooth"
    });
}

function acceptDate() {
    if (!tanggal.value) {
        alert("Pilih tanggal dulu ya.");
        tanggal.focus();
        return;
    }

    if (!jam.value) {
        alert("Pilih jamnya juga ya.");
        jam.focus();
        return;
    }

    if (!tempat.value) {
        alert("Pilih kegiatannya juga.");
        tempat.focus();
        return;
    }

    const date = new Date(tanggal.value + "T00:00:00");

    const tanggalFormat = date.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    dateResult.innerHTML = `
        ${tanggalFormat}<br>
        ${jam.value} WIB<br>
        ${tempat.value}
    `;

    result.style.display = "flex";
    result.scrollIntoView({ behavior: "smooth" });
}

/* Tombol "Nanti dulu" sedikit menghindar di desktop */
noButton.addEventListener("mouseenter", () => {
    if (window.innerWidth > 700) {
        const x = Math.random() * 120 - 60;
        const y = Math.random() * 70 - 35;
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    }
});

noButton.addEventListener("mouseleave", () => {
    noButton.style.transform = "";
});

/* Tanggal tidak boleh sebelum hari ini */
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
tanggal.min = `${yyyy}-${mm}-${dd}`;
