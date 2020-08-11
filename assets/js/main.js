// function input_setup(ordo){
//     let input_table = document.getElementById('input-table');
//     input_table.innerHTML = "";
//     let inp_field = '<input type="text" class="matrix-data">';
//     for (let j = 0; j < ordo; j++) {
//         let table_row = document.createElement("tr");
//         for (let i = 0; i < ordo; i++) {
//             let table_data = document.createElement("td");
//             table_data.innerHTML = inp_field;
//             table_row.appendChild(table_data);
//         }
//         input_table.appendChild(table_row);
//     }
// }

function printInverse(invarr){
    let input_table = document.getElementById('output-table');
    input_table.innerHTML = "";
    for (let j = 0; j < 3; j++) {
        let table_row = document.createElement("tr");
        for (let i = 0; i < 3; i++) {
            let table_data = document.createElement("td");
            table_data.innerHTML = invarr[j][i];
            table_row.appendChild(table_data);
        }
        input_table.appendChild(table_row);
    }
}

function toidx(a, b){
    a += 1;
    b += 1;
    return 3 * (a - 1) + b - 1;
}

function deter(arr){
    det = arr[0] * arr[3] - arr[1] * arr[2];
    return det;
}

const inverse_button = document.getElementById("inverse-button");
inverse_button.addEventListener('click', function(event){
    let matrix_data = document.getElementsByClassName("matrix-data");
    // let determinan =  matrix_data[0].value * matrix_data[4].value * matrix_data[8].value
    //                 + matrix_data[1].value * matrix_data[5].value * matrix_data[6].value
    //                 + matrix_data[2].value * matrix_data[3].value * matrix_data[7].value
    //                 - matrix_data[2].value * matrix_data[4].value * matrix_data[6].value
    //                 - matrix_data[0].value * matrix_data[5].value * matrix_data[7].value
    //                 - matrix_data[1].value * matrix_data[3].value * matrix_data[8].value;
    // alert(determinan);
    kofaktor = new Array(3);
    for (let i = 0; i < 3; i++){
        kofaktor[i] = new Array(3);
        for(let j = 0; j < 3; j++){
            minor = new Array(4);
            let ind = 0;
            for(let k = 0; k < 3; k++){
                for(let l = 0; l < 3; l++){
                    if(!(k == i || l == j)){
                        minor[ind] = parseInt(matrix_data[toidx(k, l)].value);
                        ++ind;
                    }
                }
            }
            kofaktor[i][j] = (-1) ** ((i + 1) + (j + 1)) * deter(minor);
        }
    }
    let determinan = 0;
    for(let i = 0; i < 3; i++){
        determinan += kofaktor[i][0] * matrix_data[toidx(i, 0)].value;
    }

    if(determinan == 0){
        alert("Determinan = 0, maka matrix tersebut tidak memiliki inverse");
        return;
    }

    const inverse = new Array(3);
    for (let i = 0; i < 3; i++){
        inverse[i] = new Array(3);
        for (let j = 0; j < 3; j++){
            inverse[i][j] = (kofaktor[j][i] / determinan).toFixed(3);
        }
    }
    printInverse(inverse);
});
