function processPayment(){

    alert("Processing payment... 💸");

    setTimeout(function(){

        alert("Payment Successful ✅");

        window.location.href = "#thankyou";

    },1500);

}

function goTop(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
