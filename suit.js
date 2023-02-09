var ulang = true;

while (ulang) {
  var player = prompt("pilih : gunting, batu, kertas");
  var computer = Math.random();

  if (computer < 0.34) {
    computer = "gunting";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "batu";
  } else {
    computer = "kertas";
  }

  var hasil = "";

  if (player == computer) {
    hasil = "seri";
  } else if (player == "gunting") {
    hasil = computer == "kertas" ? "Menang" : "Kalah";
  } else if (player == "batu") {
    hasil = computer == "gunting" ? "Menang" : "Kalah";
  } else if (player == "kertas") {
    hasil = computer == "batu" ? "Menang" : "Kalah";
  } else {
    hasil =
      "Memasukan pilihan yang salah! \nSilahkan ulangi dengan pilihan yang benar";
  }

  alert(
    "Kamu memilih " +
      player +
      " dan komputer memilih " +
      computer +
      "\nMaka hasilnya kamu " +
      hasil
  );

  ulang = confirm("ulangi lagi?");
}
