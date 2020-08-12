const CACHE_KEY = "calculation_history";
     
function checkForStorage() {
   return typeof(Storage) !== "undefined";
}
 
function putHistory(data) {
   if (checkForStorage()) {
       let historyData = null;
       if (localStorage.getItem(CACHE_KEY) === null) {
           historyData = [];
       } else {
           historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
       }
 
       historyData.unshift(data);
 
       if (historyData.length > 3) {
           historyData.pop();
       }
 
       localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
   }
   else{
       alert("browser tidak mendukung local storage")
   }
}
 
function showHistory() {
   if (checkForStorage) {
       return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
   } else {
       return [];
   }
}

function makeTable(arr){
    let table = '<table>';
    for(let i = 0; i < 3; i++){
        table += '<tr>';
        for(let j = 0; j < 3; j++){
            table += '<td>' + arr[i][j] + '</td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    return table;
}
 
function renderHistory() {
   const historyData = showHistory();
   let historyList = document.querySelector("#history-table");
   historyList.innerHTML = "";
   let head = document.createElement('tr');
   head.innerHTML = "<td>" + "Matrix" + "</td>";
   head.innerHTML += "<td>" + "Determinan" + "</td>";
   head.innerHTML += "<td>" + "Inverse" + "</td>";
   historyList.appendChild(head);
 
   for (let history of historyData) {
       let row = document.createElement('tr');
       row.innerHTML = "<td>" + makeTable(history.inputMatrix) + "</td>";
       row.innerHTML += "<td>" + history.determinan + "</td>";
       row.innerHTML += "<td>" + makeTable(history.inverseMatrix) + "</td>";
 
       historyList.appendChild(row);
   }
}
 
renderHistory();