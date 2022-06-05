window.onload = function() {
    var bdayButton = document.getElementById("bday");
    console.log(bdayButton)
    const d = new Date();
    let month = d.getMonth()
    console.log(month)
    if (month === 5) {
        bdayButton.style.display = 'block' 
    }
}