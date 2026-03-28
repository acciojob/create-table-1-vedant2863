function insert_Row() {
    const table = document.getElementById("sampleTable");

    // create new row at top (index 0)
    const row = table.insertRow(0);

    // create two cells
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    // add content
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}