var table = document.querySelector("table");
var tr = table.rows;
var th = [];
var noOfHeadings = tr[0].cells.length;
var headings = tr[0].cells;
var dataRows = [];

function getHeadingRow(){
    for(let i=0;i<noOfHeadings;i++){
        th.push(headings[i].innerText);
    }
    return th;
}

function getTableDataRows(){
    for(let i=1;i<tr.length;i++){
        dataRows.push(tr.item(i));
		for(let j=0;j<noOfHeadings;j++){
			console.log(dataRows[i-1].cells[j].innerHTML);
		}        
    }
}

console.log("Headings of table is "+getHeadingRow());
getTableDataRows();

