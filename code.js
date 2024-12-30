// جلب عناصر HTML
const popupBtn = document.getElementById("popupBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

// فتح النافذة المنبثقة
popupBtn.addEventListener("click", function() {
    popup.style.display = "block";
});

// إغلاق النافذة المنبثقة
closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

// إغلاق النافذة عند الضغط خارجها
window.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

// التعامل مع نموذج الإدخال
nameForm.addEventListener("submit", function(event) {
    event.preventDefault(); // لمنع إرسال النموذج بشكل تقليدي
    const name = nameInput.value.trim();
    if (name) {
        nameDisplay.textContent = `مرحبًا، ${name}!`;
    } else {
        nameDisplay.textContent = "من فضلك أدخل اسمك.";
    }
    nameInput.value = ""; // مسح الحقل بعد الإرسال
});
