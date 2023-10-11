document.addEventListener("DOMContentLoaded", function () {
  var bilangan1Input = document.getElementById("bilangan1");
  var bilangan2Input = document.getElementById("bilangan2");
  var jumlahButton = document.getElementById("jumlahButton");

  jumlahButton.addEventListener("click", function () {
    var bilangan1 = parseFloat(bilangan1Input.value);
    var bilangan2 = parseFloat(bilangan2Input.value);

    if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
      var hasil = bilangan1 + bilangan2;
      alert("Hasil penjumlahan: " + hasil);
    } else {
      alert("Mohon masukkan bilangan yang valid.");
    }
  });

  var ulangiButton = document.getElementById("ulangiButton");
  ulangiButton.addEventListener("click", function () {
    bilangan1Input.value = "";
    bilangan2Input.value = "";
  });
});
