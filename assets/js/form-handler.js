(function () {
  var form = document.getElementById("kayit-formu");
  if (!form) return;

  var success = form.querySelector(".form-success");
  var errorBox = form.querySelector(".form-error");
  var waNumber = "905322600571";
  var mail = "didemsarkya@gmail.com";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (success) success.style.display = "none";
    if (errorBox) errorBox.style.display = "none";

    var data = new FormData(form);
    var name = (data.get("ad") || "").toString().trim();
    var phone = (data.get("telefon") || "").toString().trim();
    var child = (data.get("cocuk") || "").toString().trim();
    var age = (data.get("yas") || "").toString().trim();
    var message = (data.get("mesaj") || "").toString().trim();

    if (!name || !phone) {
      if (errorBox) {
        errorBox.textContent = "Lütfen adınızı ve telefon numaranızı yazın.";
        errorBox.style.display = "block";
      }
      return;
    }

    var text =
      "Merhaba, Özel Didem Öğretmen Anaokulu 2026 kayıt için yazıyorum.\n" +
      "Ad: " + name + "\n" +
      "Telefon: " + phone + "\n" +
      "Çocuk: " + child + "\n" +
      "Yaş: " + age + "\n" +
      "Mesaj: " + message;

    window.open("https://wa.me/" + waNumber + "?text=" + encodeURIComponent(text), "_blank");

    var subject = "2026 Kayıt talebi - " + name;
    window.location.href = "mailto:" + mail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);

    if (success) success.style.display = "block";
    form.reset();
  });
})();
