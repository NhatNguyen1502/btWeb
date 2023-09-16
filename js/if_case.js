function function1() {
    var a = parseInt(document.getElementById('semester1').value);
    var b = parseInt(document.getElementById('semester2').value);
    var c = document.getElementById('select');
    var value = parseInt(c.options[c.selectedIndex].value);
    var k;
    switch (value) {
        case 1:{
            k = parseFloat((a+(b*2))/3);
            document.getElementById('output1').value = k;
        }
        case 2:{
            k = parseFloat((a*2+(b*3))/5);
            document.getElementById('output1').value = k;
        }
        case 3:{
            k = parseFloat((a*3+(b*4))/7);
            document.getElementById('output1').value = k;
        }
    }
    if (k >= 9) {
        document.getElementById('output2').innerHTML = "Học sinh giỏi";
        document.getElementById('output2').style.color = "red";

    } else if (k >=7 && k < 9) {
        document.getElementById('output2').innerHTML = "Học sinh khá";
        document.getElementById('output2').style.color = "blue";

    }else if (k >= 5 && k < 7) {
        document.getElementById('output2').innerHTML = "Học sinh trung bình";
        document.getElementById('output2').style.color = "yellow";

    } else {
        document.getElementById('output2').innerHTML = "Học sinh yếu";
        document.getElementById('output2').style.color = "green";
    }
} 

function function2() {
    document.getElementById('semester1').value = "";
    document.getElementById('semester2').value = "";
}