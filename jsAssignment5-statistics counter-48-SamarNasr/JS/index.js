function countUp(clas, val) {
    let elements = document.querySelectorAll(`.${clas}`);
    elements.forEach(element => {
        let count = 0;
        let interval = setInterval(() => {
            element.innerHTML = count++;
            if (count > val) {
                clearInterval(interval);
            }
        }, 1);
    });
}

countUp('count1', 2000)
countUp('count2', 1000)
countUp('count3', 500)
countUp('count4', 200)

setTimeout(() => {
    Swal.fire({
        title: 'مرحبا بك في موقعنا',
        text: 'نتمنى لك جولة رائعة',
        icon: 'success',
        timer: 8000,
    });
}, 5000);