function clicked(val) {
    document.getElementById("screen").value = document.getElementById("screen").value + val
}
function cleared() {
    document.getElementById("screen").value = ""
}
function equal() {
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value = result
}