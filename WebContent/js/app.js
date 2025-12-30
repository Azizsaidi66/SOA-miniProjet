const API_URL = "http://localhost:8080/mini-projet/api/users"

function loadPersons() {
  fetch(`${API_URL}/list`)
    .then((res) => res.json())
    .then((data) => {
      const table = document.getElementById("personTable")
      table.innerHTML = ""

      if (!Array.isArray(data)) return

      if (data.length === 0) {
        table.innerHTML = '<tr><td colspan="4" class="no-result">No persons</td></tr>'
        return
      }

      data.forEach((p) => {
        table.innerHTML += `
                    <tr>
                        <td>${p.id}</td>
                        <td>${p.name}</td>
                        <td>${p.age}</td>
                        <td>
                            <div class="btn-group">
                                <button class="btn update" onclick='prefillUpdate(${JSON.stringify(p)})'>Edit</button>
                                <button class="btn delete" onclick='deletePerson(${p.id})'>Delete</button>
                            </div>
                        </td>
                    </tr>
                `
      })
    })
    .catch((err) => console.error(err))
}

function addPerson() {
  const name = document.getElementById("addName").value.trim()
  const age = document.getElementById("addAge").value

  if (!name || !age) {
    alert("Please fill in all fields")
    return
  }

  fetch(`${API_URL}/add/${age}/${encodeURIComponent(name)}`, { method: "PUT" })
    .then((res) => res.json())
    .then(() => {
      loadPersons()
      document.getElementById("addName").value = ""
      document.getElementById("addAge").value = ""
    })
    .catch((err) => console.error(err))
}

function prefillUpdate(p) {
  document.getElementById("updateId").value = p.id
  document.getElementById("updateName").value = p.name
  document.getElementById("updateAge").value = p.age
}

function updatePerson() {
  const id = document.getElementById("updateId").value
  const name = document.getElementById("updateName").value.trim()
  const age = document.getElementById("updateAge").value

  if (!id || !name || !age) {
    alert("Please fill in all fields")
    return
  }

  fetch(`${API_URL}/update/${id}/${age}/${encodeURIComponent(name)}`, { method: "PUT" })
    .then((res) => res.json())
    .then(() => {
      loadPersons()
      document.getElementById("updateId").value = ""
      document.getElementById("updateName").value = ""
      document.getElementById("updateAge").value = ""
    })
    .catch((err) => console.error(err))
}

let deleteId = null

function deletePerson(id) {
  deleteId = id
  document.getElementById("confirmOverlay").style.display = "flex"
}

document.getElementById("confirmYes").addEventListener("click", () => {
  fetch(`${API_URL}/remove/${deleteId}`, { method: "DELETE" })
    .then(() => {
      loadPersons()
      document.getElementById("confirmOverlay").style.display = "none"
    })
    .catch((err) => console.error(err))
})

document.getElementById("confirmNo").addEventListener("click", () => {
  deleteId = null
  document.getElementById("confirmOverlay").style.display = "none"
})

function searchPerson() {
  const value = document.getElementById("searchValue").value.trim()
  const table = document.getElementById("searchTable")
  table.innerHTML = ""

  if (value === "") {
    return
  }

  const url = isNaN(value) ? `${API_URL}/getname/${encodeURIComponent(value)}` : `${API_URL}/getid/${value}`

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (!res || res.state !== "ok" || !res.data) {
        table.innerHTML = `<tr><td colspan="3" class="no-result">No result found</td></tr>`
        return
      }

      const p = res.data
      table.innerHTML = `
                <tr>
                    <td>${p.id}</td>
                    <td>${p.name}</td>
                    <td>${p.age}</td>
                </tr>
            `
    })
    .catch((err) => console.error(err))
}

loadPersons()