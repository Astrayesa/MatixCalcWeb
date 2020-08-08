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

function deter(arr){
    det = arr[0] * arr[2] - arr[1] * arr[2];
    return det;
}

const inverse_button = document.getElementById("inverse-button");
inverse_button.addEventListener('click', function(event){
    let matrix_data = document.getElementsByClassName("matrix-data");
    let determinan =  matrix_data[0].value * matrix_data[4].value * matrix_data[8].value
                    + matrix_data[1].value * matrix_data[5].value * matrix_data[6].value
                    + matrix_data[2].value * matrix_data[3].value * matrix_data[7].value
                    - matrix_data[2].value * matrix_data[4].value * matrix_data[6].value
                    - matrix_data[0].value * matrix_data[5].value * matrix_data[7].value
                    - matrix_data[1].value * matrix_data[3].value * matrix_data[8].value;
    alert(determinan);
    kofaktor = new Array(3);
    for (let i = 0; i < 3; i++){
        kofaktor[i] = new Array(3);
        for(let j = 0; j < 3; j++){
        }
    }
});


// input_setup(3);