function inverse(){
    let matrix_data = document.getElementsByClassName("matrix-data");
    let ordo = document.getElementById("ordo-number").value;
    let matrix = new Array(ordo);

    for(let i = 0; i < ordo; i++){
        matrix[i] = new Array(ordo);
    }

    let k = 0;
    for (let i = 0; i < ordo; i++) {
        for (let j = 0; j < ordo; j++) {
            matrix[i][j] = matrix_data[k].value;
            k++;
        }
        
    }
    for (let i = 0; i < ordo; i++) {
        for (let j = 0; j < ordo; j++) {
            console.log(matrix[i][j]);
            console.log("   ")
        }
        console.log('\n');
    }
}