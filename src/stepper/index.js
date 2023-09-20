// Mengambil semua elemen dengan kelas "one", "two", "three", "four", dan "five"
const elements = document.querySelectorAll(".one, .two, .three, .four, .five");

// Menambahkan event listener onclick untuk setiap elemen
elements.forEach(function(element, index) {
    element.onclick = function() {
        // Menambahkan kelas "active" untuk elemen yang diklik dan semua elemen sebelumnya
        for (let i = 0; i <= index; i++) {
            elements[i].classList.add("active");
        }
        // Menghapus kelas "active" untuk semua elemen setelah yang diklik
        for (let i = index + 1; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
    }
});
