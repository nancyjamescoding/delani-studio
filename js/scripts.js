function toggle(div1, div2) {
    const styleOne = document.getElementById(div1).style.display
    const styleTwo = document.getElementById(div2).style.display
    document.getElementById(div1).style.display = styleTwo
    document.getElementById(div2).style.display =  styleOne
}