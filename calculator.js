let currentInput = '';

function pressDigit(key) {
    currentInput += key;
    document.getElementById('display').value = currentInput;
}
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}
function translateToWords() {
    let trans = "";
    single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    const enter = document.getElementById('display').value;
    if (enter == ""){
        trans = "Must add a value"
    }else if (enter == 0){
        trans= "zero";
    }else if (enter < 10 && enter != 0) {
        trans = single_digit[enter] + ' ';
    } else if (enter < 20) {
        trans = double_digit[enter - 10] + ' ';
    } else if (enter < 100) {
        let left = enter % 10;
        trans = below_hundred[(enter-enter% 10) / 10 - 2] + ' ' + single_digit[left];
    }else if(enter >=100){
        trans = "MAXIMUM NUMBER IS 99";
    }else{
        trans = "Unknown Alien Disruption"
    }
  
    document.getElementById('display').value = trans;
} 

function lightmode(){
    document.body.style.backgroundColor= 'bisque';

}
function darkmode(){
    document.body.style.backgroundColor='gray';
    document.querySelectorAll('button').foreach(e=>e.style.color='white');
}