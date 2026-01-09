const submit_button = document.getElementsByClassName("order-btn")

submit_button.addEventListner("click", () =>(
    alert ("form is submitted")
))

function submit_function() {
    alert ("The submit function works perfectly")
}