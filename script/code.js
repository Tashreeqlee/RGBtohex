document.getElementById('convertBtn').addEventListener('click', function() {
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    
    let hex = "#" + ((1 << 24) | (red << 16) | (green << 8) | blue).toString(16).slice(1);
    document.getElementById('result').textContent = hex;
});