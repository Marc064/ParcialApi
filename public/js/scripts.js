function loadData() {
    return new Promise((res, rej) => {
        fetch("https://api-dishes.vercel.app/")
            .then(result => result.json())
            .then(result => res(result))
            .catch(err => rej(err))
    })
}

loadData()
    .then( result => {
        if (result.state) {
            try {
                const table = document.getElementById('tBody')
                table.innerHTML=''
                result.data.forEach(dish => {
                    const row = document.createElement('tr')
                    const colId = document.createElement('td')
                    colId.appendChild(document.createTextNode(dish.idDish))
                    row.append(colId)
                    const colName = document.createElement('td')
                    colName.appendChild(document.createTextNode(dish.name))
                    row.append(colName)
                    const colCalories = document.createElement('td')
                    colCalories.appendChild(document.createTextNode(dish.calories))
                    row.append(colCalories)
                    const colVegetarian = document.createElement('td')
                    let vegetarian = dish.isVegetarian ? "Si":"No"
                    colVegetarian.appendChild(document.createTextNode(vegetarian))
                    row.append(colVegetarian)
                    const colValue = document.createElement('td')
                    colValue.appendChild(document.createTextNode(dish.value))
                    row.append(colValue)
                    const colComments = document.createElement('td')
                    colComments.appendChild(document.createTextNode(dish.comments))
                    row.append(colComments)
                    table.append(row)
                })
            } catch (err) {
                alert("Ha ocurrido un error")
                console.log(err)
            }
        }
    })
    .catch( err => {
        alert("Ha ocurrido un error")
        console.log(err)
    })