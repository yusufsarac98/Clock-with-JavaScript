function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM";

    if (hour == 0){
        hour = 12;
    }

    if(hour > 12){
        hour = hour - 12; // Örneğin 18.00 aslında 6.00(Öğleden Sonra) anlamına gelir. 18-12 = 6 yazdırıyoruz.
        session = "PM"; // 18.00 yerine 6.00 "PM" kullanıyoruz.
    }

    hour = (hour < 10) ? "0" + hour : hour; // Saat 10'dan küçükse örneğin 9 ise başına 0 koy ve sonra 9'u yazdır. Değilse direkt saati yaz.
    minute = (minute < 10) ? "0" + minute : minute; // Dakika 10'dan küçükse örneğin 9 ise başına 0 koy ve sonra 9'u yazdır. Değilse direkt dakikayı yaz.
    second = (second < 10) ? "0" + second : second; // Saat 10'dan küçükse örneğin 9 ise başına 0 koy ve sonra 9'u yazdır. Değilse direkt saniyeyi yaz.
    
    var time = hour + ":" + minute + ":" + second + " " + session;
    // document.getElementById("TimeZone").innerText = time;
    document.getElementById("TimeZone").textContent = time;

    setTimeout(showTime, 1000); // 1 Saniye = 1000ms'de bir kere fonksiyon çalışır.
}

showTime();
