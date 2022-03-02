var step = 1;
var backStep = step;
var formField = 0;

var form = document.getElementById("formC");

var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var confirmBtn = document.getElementById("confirm");
var backBtn = document.getElementById("back");

var PaymentMeth = document.getElementsByName("method");
var DeliveryData = document.getElementsByName("deliverdata");

var DebitForm = document.getElementsByName("debitcarddata");
var CreditForm = document.getElementsByName("creditcarddata");

function next() {
    switch (step) {
        case 1:
            for (i = 0; i < PaymentMeth.length; i++) {
                if (PaymentMeth[i].checked == true) {
                    step++;
                    document.getElementById("deliverydata").classList.add("act");
                    document.getElementById("paymentmethod").classList.add("hide");
                    prevBtn.classList.add("act");
                    form.scrollIntoView();
                }
            }
            break;

        case 2:
            if (DeliveryData[0].value != "" && DeliveryData[1].value != "" && DeliveryData[2].value != "" && DeliveryData[3].value != "") {
                step++;
                document.getElementById("deliverydata").classList.remove("act");
                for (i = 0; i < PaymentMeth.length; i++) {
                    if (PaymentMeth[i].value == 1 && PaymentMeth[i].checked) {
                        document.getElementById("debitcarddata").classList.add("act");
                        form.scrollIntoView();
                        backStep++;
                    }
                    else if (PaymentMeth[i].value == 2 && PaymentMeth[i].checked) {
                        document.getElementById("creditcarddata").classList.add("act");
                        form.scrollIntoView();
                        backStep++;
                    }
                    else if (PaymentMeth[i].value == 3 && PaymentMeth[i].checked) {
                        document.getElementById("speit").classList.add("act");
                        form.scrollIntoView();
                        backStep++;
                    }
                }
            }
            break;

        case 3:
            for (i = 0; i < PaymentMeth.length; i++) {
                if (PaymentMeth[i].value == 1 && PaymentMeth[i].checked) {
                    formField = 0;
                    for (j = 0; j < DebitForm.length; j++) {
                        if (DebitForm[j].value != "") {
                            formField++;
                        }
                    }
                    if (formField == 4) {
                        document.getElementById("debitcarddata").classList.remove("act");
                        document.getElementById("orderdata").classList.add("act");
                        confirmBtn.classList.add("act");
                        nextBtn.classList.add("hide");
                        form.scrollIntoView();
                        backStep = step;
                    }
                }
                else if (PaymentMeth[i].value == 2 && PaymentMeth[i].checked) {
                    formField = 0;
                    for (j = 0; j < CreditForm.length; j++) {
                        if (CreditForm[j].value != "") {
                            formField++;
                        }
                    }
                    if (formField == 4) {
                        document.getElementById("creditcarddata").classList.remove("act");
                        document.getElementById("orderdata").classList.add("act");
                        confirmBtn.classList.add("act");
                        nextBtn.classList.add("hide");
                        form.scrollIntoView();
                        backStep = step;
                    }
                }
                else if (PaymentMeth[i].value == 3 && PaymentMeth[i].checked) {
                    document.getElementById("speit").classList.remove("act");
                    document.getElementById("orderdata").classList.add("act");
                    confirmBtn.classList.add("act");
                    nextBtn.classList.add("hide");
                    form.scrollIntoView();
                    backStep = step;
                }
            }
            break;
    }
}

function confirmed() {
    document.getElementById("orderdata").classList.remove("act");
    document.getElementById("success").classList.add("act");
    confirmBtn.classList.remove("act");
    prevBtn.classList.remove("act");
    backBtn.classList.add("act");
}

function prev() {
    switch (backStep) {
        case 1:
            step--;
            document.getElementById("deliverydata").classList.remove("act");
            document.getElementById("paymentmethod").classList.remove("hide");
            prevBtn.classList.remove("act");
            form.scrollIntoView();
            break;

        case 2:
            if (PaymentMeth[0].value == 1 && PaymentMeth[0].checked) {
                document.getElementById("debitcarddata").classList.remove("act");
                document.getElementById("deliverydata").classList.add("act");
                form.scrollIntoView();
                backStep--;
                step--;
            }
            else if (PaymentMeth[1].value == 2 && PaymentMeth[1].checked) {
                document.getElementById("creditcarddata").classList.remove("act");
                document.getElementById("deliverydata").classList.add("act");
                form.scrollIntoView();
                backStep--;
                step--;
            }
            else if (PaymentMeth[2].value == 3 && PaymentMeth[2].checked) {
                document.getElementById("speit").classList.remove("act");
                document.getElementById("deliverydata").classList.add("act");
                form.scrollIntoView();
                backStep--;
                step--;
            }
            break;

        case 3:
            if (PaymentMeth[0].value == 1 && PaymentMeth[0].checked) {
                document.getElementById("debitcarddata").classList.add("act");
                document.getElementById("orderdata").classList.remove("act");
                confirmBtn.classList.remove("act");
                nextBtn.classList.remove("hide");
                form.scrollIntoView();
                backStep--;
            }
            else if (PaymentMeth[1].value == 2 && PaymentMeth[1].checked) {
                document.getElementById("creditcarddata").classList.add("act");
                document.getElementById("orderdata").classList.remove("act");
                confirmBtn.classList.remove("act");
                nextBtn.classList.remove("hide");
                form.scrollIntoView();
                backStep--;
            }
            else if (PaymentMeth[2].value == 3 && PaymentMeth[2].checked) {
                document.getElementById("speit").classList.add("act");
                document.getElementById("orderdata").classList.remove("act");
                confirmBtn.classList.remove("act");
                nextBtn.classList.remove("hide");
                form.scrollIntoView();
                backStep--;
            }
            break;
    }
}



function check() {
    alert("Current step = " + step + " Current BackStep = " + backStep);
}