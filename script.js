var medicamentos = [];

function Cadastrar() {
    event.preventDefault();

    let newMedicamento = {
        "nome": document.getElementById('nomeMedicamento').value,
        "qtd": document.getElementById('qtd').value,
        "classe": document.getElementById('classe').value
    }

    resetForm()
    medicamentos.push(newMedicamento);
    renderTable()
    
}

function renderTable() {
    let table = document.querySelector("table");
    table.innerHTML = 
    `<thead>
        <tr>
            <th>ID</th>
            <th>Medicamento</th>
            <th>Quantidade</th>
            <th>Classe de Medicamento</th>
            <th>Remover</th>
        </tr>
    </thead>`;

    console.log(medicamentos);

    for(let i = 0; i < medicamentos.length; i++){
        table.innerHTML = table.innerHTML  + 
        
        `<tbody>
                <tr>
                    <td>${i}</td>
                    <td>${medicamentos[i].nome}</td>
                    <td>${medicamentos[i].qtd}</td>
                    <td>${medicamentos[i].classe}</td>
                    <td><img src="img/dell.svg" alt="Deletar" onclick="removeMedicamento(${i})"></td>
                </tr>

         </tbody>`


    }
}

function removeMedicamento(index){
    medicamentos.splice(index,1);
    renderTable();
}

function resetForm(){
    document.getElementById("nomeMedicamento").value = "";
    document.getElementById("qtd").value = "";
    document.getElementById("classe").value = "";
}

