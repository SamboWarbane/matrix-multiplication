let size;

function onSizeInput() {
    size = document.getElementById('size').value;
    if (!size) {
        return;
    }
    if (size > 10 || size < 1) {
        alert("Enter size between 1 and 10");
    } else {
        console.log('Size: ' + size);
        let formElement = document.getElementById('matrix-form-1');
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let box = document.createElement("input");
                box.setAttribute('type', 'number');
                box.setAttribute('name', ('ONE'+ i) + j);
                box.setAttribute('id', ('ONE'+ i) + j);
                formElement.appendChild(box);
            }
            let brk = document.createElement('br');
            formElement.appendChild(brk);
        }
        formElement = document.getElementById('matrix-form-2');
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let box = document.createElement("input");
                box.setAttribute('type', 'number');
                box.setAttribute('name', ('TWO'+ i) + j);
                box.setAttribute('id', ('TWO'+ i) + j);
                formElement.appendChild(box);
            }
            let brk = document.createElement('br');
            formElement.appendChild(brk);
        }
        formElement = document.getElementById('matrix-output');
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let box = document.createElement("input");
                box.setAttribute('type', 'number');
                box.setAttribute('name', ('OUT'+ i) + j);
                box.setAttribute('id', ('OUT'+ i) + j);
                box.setAttribute('disabled', '');
                formElement.appendChild(box);
            }
            let brk = document.createElement('br');
            formElement.appendChild(brk);
        }
    }
}

function multiply() {
    console.log('hello');
    for(let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
            let val = 0;
            for (let j = 0; j < size; j++) {
                val += document.getElementById(('ONE'+ i) + j).value * document.getElementById(('TWO'+ j) + k).value;

            }
            console.log(val);
            document.getElementById(('OUT'+ i) + k).value = val;
        }
        console.log(" ");
    }
}