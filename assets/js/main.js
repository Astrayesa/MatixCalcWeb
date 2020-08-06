function input_setup(ordo){
    let input_table = document.getElementById('input-table');
    input_table.innerHTML = "";
    let inp_field = '<input type="text" class="matrix-data">';
    for (let j = 0; j < ordo; j++) {
        let table_row = document.createElement("tr");
        for (let i = 0; i < ordo; i++) {
            let table_data = document.createElement("td");
            table_data.innerHTML = inp_field;
            table_row.appendChild(table_data);
        }
        input_table.appendChild(table_row);
    }
}

const genenerate_button = document.getElementById("generate-button");
genenerate_button.addEventListener('click', function(event){
    let ordo_number = document.getElementById("ordo-number");
    input_setup(ordo_number.value);
});


input_setup(3);