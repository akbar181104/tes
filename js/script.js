// toggle class active hamburgermenu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hambergermenu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active searchform
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const sb = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// klik luar untuk menghilangkan menu

const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// klik luar untuk menghilangkan menu

// checkout box 

// const itemCheckout = document.querySelector("#checkout-detail-pubg");
const itemProduct = document.querySelector(".menu-card-img1");
const itemCheckout2 = document.querySelector("#checkout-detail-mobilelegend");
const itemProduct2 = document.querySelector(".menu-card-img2");
const itemCheckout3 = document.querySelector("#checkout-detail-freefire");
const itemProduct3 = document.querySelector(".menu-card-img3");
const itemCheckout4 = document.querySelector("#checkout-detail-efootball");
const itemProduct4 = document.querySelector(".menu-card-img4");

itemProduct.onclick = (e) => {
  itemCheckout.style.display = "flex";
  e.preventDefault();
};

itemProduct2.onclick = (e) => {
    itemCheckout2.style.display = "flex";
    e.preventDefault();
  };

itemProduct3.onclick = (e) => {
    itemCheckout3.style.display = "flex";
    e.preventDefault();
  };  

itemProduct4.onclick = (e) => {
    itemCheckout4.style.display = "flex";
    e.preventDefault();
  };  

//Input user id dan zone id hanya angka
document.addEventListener("DOMContentLoaded", () => {
  const checkout = document.querySelector("#checkout-detail"); // Ambil elemen checkout
  if (checkout) {
    checkout.querySelectorAll("input[type='text']").forEach((input) => {
      input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, ""); // Hanya angka
      });
    });
  }
});


// klik tombol close pubg
const itemCheckout = document.querySelector("#checkout-detail-pubg");
document.querySelector(".checkout .close-icon1").onclick = (e) => {
  itemCheckout.style.display = "none";
  
  // Sembunyikan QR Code dan reset QR
  document.getElementById("qr-container").style.display = "none";
  document.getElementById("qr-code").src = "";

  // Reset total harga
  document.getElementById("total-amount").innerHTML = "Rp. - <br /><span>*Termasuk PPN</span>";

  // Hilangkan highlight pilihan UC (pastikan semua UC tidak terpilih)
  document.querySelectorAll(".voucher-total").forEach((item) => {
    item.classList.remove("selected"); // Hapus class 'selected' jika ada
  });

  e.preventDefault();
};

// klik tombol close mobile legend
document.querySelector(".checkout .close-icon2").onclick = (e) => {
    itemCheckout2.style.display = "none";
    
    // Sembunyikan QR Code dan reset QR
    document.getElementById("qr-container2").style.display = "none";
    document.getElementById("qr-code2").src = "";
  
    // Reset total harga
    document.getElementById("total-amount2").innerHTML = "Rp. - <br /><span>*Termasuk PPN</span>";
  
    // Hilangkan highlight pilihan UC (pastikan semua UC tidak terpilih)
    document.querySelectorAll(".voucher-total2").forEach((item) => {
      item.classList.remove("selected"); // Hapus class 'selected' jika ada
    });
  
    e.preventDefault();
  };

// klik tombol close freefire
document.querySelector(".checkout .close-icon3").onclick = (e) => {
    itemCheckout3.style.display = "none";
    
    // Sembunyikan QR Code dan reset QR
    document.getElementById("qr-container3").style.display = "none";
    document.getElementById("qr-code3").src = "";
  
    // Reset total harga
    document.getElementById("total-amount3").innerHTML = "Rp. - <br /><span>*Termasuk PPN</span>";
  
    // Hilangkan highlight pilihan UC (pastikan semua UC tidak terpilih)
    document.querySelectorAll(".voucher-total3").forEach((item) => {
      item.classList.remove("selected"); // Hapus class 'selected' jika ada
    });
  
    e.preventDefault();
  };

  // klik tombol close efootball
document.querySelector(".checkout .close-icon4").onclick = (e) => {
    itemCheckout4.style.display = "none";
    
    // Sembunyikan QR Code dan reset QR
    document.getElementById("qr-container4").style.display = "none";
    document.getElementById("qr-code4").src = "";
  
    // Reset total harga
    document.getElementById("total-amount4").innerHTML = "Rp. - <br /><span>*Termasuk PPN</span>";
  
    // Hilangkan highlight pilihan UC (pastikan semua UC tidak terpilih)
    document.querySelectorAll(".voucher-total4").forEach((item) => {
      item.classList.remove("selected"); // Hapus class 'selected' jika ada
    });
  
    e.preventDefault();
  };

document.addEventListener("DOMContentLoaded", () => {
  const vouchers = document.querySelectorAll(".voucher-total");
  const vouchers2 = document.querySelectorAll(".voucher-total2");
  const vouchers3 = document.querySelectorAll(".voucher-total3");
  const vouchers4 = document.querySelectorAll(".voucher-total4");
  const totalAmount = document.getElementById("total-amount");
  const totalAmount2 = document.getElementById("total-amount2");
  const totalAmount3 = document.getElementById("total-amount3");
  const totalAmount4 = document.getElementById("total-amount4");
  const buyButton = document.getElementById("buy-now-btn");
  const buyButton2 = document.getElementById("buy-now-btn2");
  const buyButton3 = document.getElementById("buy-now-btn3");
  const buyButton4 = document.getElementById("buy-now-btn4");
  const qrContainer = document.getElementById("qr-container");
  const qrCode = document.getElementById("qr-code");
  const qrContainer2 = document.getElementById("qr-container2");
  const qrCode2 = document.getElementById("qr-code2");
  const qrContainer3 = document.getElementById("qr-container3");
  const qrCode3 = document.getElementById("qr-code3");
  const qrContainer4 = document.getElementById("qr-container4");
  const qrCode4 = document.getElementById("qr-code4");
  const checkoutClose = document.querySelector(".checkout .close-icon");
  const checkoutClose2 = document.querySelector(".checkout .close-icon2");
  const checkoutClose3 = document.querySelector(".checkout .close-icon3");
  const checkoutClose4 = document.querySelector(".checkout .close-icon4");
  const userIdInput = document.querySelector(".id-akun");
  const zoneIdInput = document.querySelector(".id-zona");

  let selectedPrice = 0;

  // Pilih Item Pubg
  const PPN = 0.11; // PPN 11%

  vouchers.forEach((voucher) => {
    voucher.addEventListener("click", () => {
      const priceText = voucher.querySelector("span").innerText;
      let basePrice = parseInt(priceText.replace("Rp. ", "").replace(".", "")); 
  
      let finalPrice = basePrice + (basePrice * PPN); // Hitung harga setelah PPN
      finalPrice = Math.round(finalPrice); // Bulatkan ke angka terdekat
  
      selectedPrice = finalPrice;
      selectedUC = voucher.querySelector("h3").innerText.split("\n")[0]; // Ambil teks UC
  
      totalAmount.innerHTML = `Rp. ${finalPrice.toLocaleString("id-ID")} <br /><span>*Termasuk PPN</span>`;
  
      checkFormValidity();
    });
  });

  // Pilih Item mobile legend
  const PPN2 = 0.11; // PPN 11%

  vouchers2.forEach((voucher) => {
    voucher.addEventListener("click", () => {
      const priceText = voucher.querySelector("span").innerText;
      let basePrice = parseInt(priceText.replace("Rp. ", "").replace(".", "")); 
  
      let finalPrice = basePrice + (basePrice * PPN2); // Hitung harga setelah PPN
      finalPrice = Math.round(finalPrice); // Bulatkan ke angka terdekat
  
      selectedPrice = finalPrice;
      selectedUC = voucher.querySelector("h3").innerText.split("\n")[0]; // Ambil teks UC
  
      totalAmount2.innerHTML = `Rp. ${finalPrice.toLocaleString("id-ID")} <br /><span>*Termasuk PPN</span>`;
  
      checkFormValidity();
    });
  });

  // Pilih Item mobile freefire
  const PPN3 = 0.11; // PPN 11%

  vouchers3.forEach((voucher) => {
    voucher.addEventListener("click", () => {
      const priceText = voucher.querySelector("span").innerText;
      let basePrice = parseInt(priceText.replace("Rp. ", "").replace(".", "")); 
  
      let finalPrice = basePrice + (basePrice * PPN3); // Hitung harga setelah PPN
      finalPrice = Math.round(finalPrice); // Bulatkan ke angka terdekat
  
      selectedPrice = finalPrice;
      selectedUC = voucher.querySelector("h3").innerText.split("\n")[0]; // Ambil teks UC
  
      totalAmount3.innerHTML = `Rp. ${finalPrice.toLocaleString("id-ID")} <br /><span>*Termasuk PPN</span>`;
  
      checkFormValidity();
    });
  });
  
  // Pilih Item efootball
  const PPN4 = 0.11; // PPN 11%

  vouchers4.forEach((voucher) => {
    voucher.addEventListener("click", () => {
      const priceText = voucher.querySelector("span").innerText;
      let basePrice = parseInt(priceText.replace("Rp. ", "").replace(".", "")); 
  
      let finalPrice = basePrice + (basePrice * PPN4); // Hitung harga setelah PPN
      finalPrice = Math.round(finalPrice); // Bulatkan ke angka terdekat
  
      selectedPrice = finalPrice;
      selectedUC = voucher.querySelector("h3").innerText.split("\n")[0]; // Ambil teks UC
  
      totalAmount4.innerHTML = `Rp. ${finalPrice.toLocaleString("id-ID")} <br /><span>*Termasuk PPN</span>`;
  
      checkFormValidity();
    });
  });

  // Validasi input hanya angka tanpa panah atas-bawah
  [userIdInput, zoneIdInput].forEach((input) => {
    input.setAttribute("type", "text");
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, ""); // Hanya angka
      checkFormValidity();
    });
  });

  // Saat klik "Beli Sekarang", munculkan QR Code (PUBG)
  buyButton.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah reload halaman

    if (!selectedUC || selectedPrice <= 0) {
        alert("Pilih jumlah UC terlebih dahulu!");
        return;
    }

    // Data pembelian
    const userID = document.querySelector(".id-akun input").value;
    const zoneID = document.querySelector(".id-zona input").value;

    if (!userID || !zoneID) {
        alert("Silakan isi User ID dan Zone ID!");
        return;
    }

    // Buat link ke halaman konfirmasi dengan parameter data pembelian
    const confirmationURL = `https://konfirmasi-gudang-top-up222.vercel.app/?uc=${encodeURIComponent(selectedUC)}&price=${encodeURIComponent(selectedPrice)}&user=${encodeURIComponent(userID)}&zone=${encodeURIComponent(zoneID)}`;

    // Generate QR Code dengan URL halaman konfirmasi
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(confirmationURL)}`;

    // Tampilkan QR Code
    qrCode.src = qrURL;
    qrContainer.style.display = "block";
});


// Saat klik "Beli Sekarang", munculkan QR Code (MobilLegend)
buyButton2.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah reload halaman

    if (selectedPrice > 0) {
        const qrMessage = `Pembayaran Berhasil!\n` +
                          `─────────────────────\n` +
                          `💰 Pembelian : ${selectedUC}\n` +
                          `💵 Total           : Rp. ${selectedPrice}\n` +
                          `─────────────────────\n` +
                          `Terima kasih telah berbelanja!`;

        const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrMessage)}`;
        qrCode2.src = qrURL;
        qrContainer2.style.display = "block";
    } else {
        alert("Pilih jumlah UC terlebih dahulu!");
    }
});

// Saat klik "Beli Sekarang", munculkan QR Code (freefire)
buyButton3.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah reload halaman

    if (selectedPrice > 0) {
        const qrMessage = `Pembayaran Berhasil!\n` +
                          `─────────────────────\n` +
                          `💰 Pembelian : ${selectedUC}\n` +
                          `💵 Total           : Rp. ${selectedPrice}\n` +
                          `─────────────────────\n` +
                          `Terima kasih telah berbelanja!`;

        const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrMessage)}`;
        qrCode3.src = qrURL;
        qrContainer3.style.display = "block";
    } else {
        alert("Pilih jumlah UC terlebih dahulu!");
    }
});

// Saat klik "Beli Sekarang", munculkan QR Code (efootball)
buyButton4.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah reload halaman

    if (selectedPrice > 0) {
        const qrMessage = `Pembayaran Berhasil!\n` +
                          `─────────────────────\n` +
                          `💰 Pembelian : ${selectedUC}\n` +
                          `💵 Total           : Rp. ${selectedPrice}\n` +
                          `─────────────────────\n` +
                          `Terima kasih telah berbelanja!`;

        const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrMessage)}`;
        qrCode4.src = qrURL;
        qrContainer4.style.display = "block";
    } else {
        alert("Pilih jumlah UC terlebih dahulu!");
    }
});


  // Saat checkout ditutup, reset form (PUBG)
  checkoutClose.addEventListener("click", (e) => {
    e.preventDefault();
    qrContainer.style.display = "none";
    qrCode.src = "";
    selectedPrice = 0;
    totalAmount.innerHTML = `Rp. - <br /><span>*Termasuk PPN</span>`;
    userIdInput.value = "";
    zoneIdInput.value = "";
    checkFormValidity();
  });

  // Saat checkout ditutup, reset form (MOBILELEGEND)
  checkoutClose2.addEventListener("click", (e) => {
    e.preventDefault();
    qrContainer2.style.display = "none";
    qrCode2.src = "";
    selectedPrice = 0;
    totalAmount2.innerHTML = `Rp. - <br /><span>*Termasuk PPN</span>`;
    userIdInput.value = "";
    zoneIdInput.value = "";
    checkFormValidity();
  });

  // Saat checkout ditutup, reset form (efootball)
  checkoutClose3.addEventListener("click", (e) => {
    e.preventDefault();
    qrContainer3.style.display = "none";
    qrCode3.src = "";
    selectedPrice = 0;
    totalAmount3.innerHTML = `Rp. - <br /><span>*Termasuk PPN</span>`;
    userIdInput.value = "";
    zoneIdInput.value = "";
    checkFormValidity();
  });

  checkFormValidity();
});




// Agar input hanya huruf di Nama
const nameInput = document.getElementById("name-input");

nameInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z\s]/g, ""); // Hanya huruf dan spasi
});

// Tombol Topup Sekarang
document.getElementById("topup-sekarang").addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah perilaku default link
  window.location.href = "#menu"; // Arahkan ke daftar game
});

// Kolom Pencarian
document.getElementById("search-button").addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah perilaku default link
  window.location.href = "#menu"; // Arahkan ke daftar game
});
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("search-box");
  const menuCards = document.querySelectorAll(".menu-card");

  searchBox.addEventListener("input", function () {
    const query = this.value.toLowerCase(); // Ambil input dan ubah ke huruf kecil

    menuCards.forEach((card) => {
      const title = card.querySelector(".menu-card-tittle").textContent.toLowerCase();

      if (title.includes(query)) {
        card.style.display = "block"; // Tampilkan jika cocok
      } else {
        card.style.display = "none"; // Sembunyikan jika tidak cocok
      }
    });
  });
});


