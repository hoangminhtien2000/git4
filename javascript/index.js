// function do_somthing() {
//     var selectedValue = document.getElementById("myselect").value;
//     alert(selectedValue)
// } cách 1
// ..........................................................................
var selectedValue = document.getElementById("myselect");
selectedElevent = document.addEventListener("change",changeFunction);
function changeFunction(){
    var selectedValue = document.getElementById("myselect").value;
    alert(selectedValue);
}