import viewPrioritarios from "../views/prioritarios.html";

export default () => {
  const url = "http://localhost:1337/api/priorities";
  const prioritariosElements = document.createElement("section");
  prioritariosElements.innerHTML = viewPrioritarios;
  const btnClickMain = prioritariosElements.querySelector(".menu__btn");
  const btnFilters = document.querySelector(".box__filters-menu");
  const aside = document.querySelector("aside");
  const main = document.querySelector("main");
  const prioritariosWindow = window.location.hash;
  const menuPages = document.querySelector('.menu__pages')
  const buttonPrioritarios = menuPages.children[1].children[0];

  const table = prioritariosElements.querySelector(".main__table");
  table.style.marginTop = "4rem";
  btnClickMain.style.marginTop = "-2rem";

  if (prioritariosWindow == "#/Prioritarios") {
    menuPages.children[0].children[0].classList.remove('active')
    menuPages.children[2].children[0].classList.remove('active')
    menuPages.children[3].children[0].classList.remove('active')
    buttonPrioritarios.classList.add('active')
    main.classList.remove("main__with-filters");
    aside.classList.remove("filters");
    aside.classList.add("filters-off");

    btnClickMain.addEventListener("click", () => {
      main.classList.toggle("main__with-filters");
      aside.classList.remove("filters-off");
      aside.classList.add("filters");
      btnClickMain.classList.remove("menu__btn");
    });

    btnFilters.addEventListener("click", () => {
      main.classList.remove("main__with-filters");
      aside.classList.add("filters-off");
      btnClickMain.classList.toggle("menu__btn");
    });

    // GET Method (Priorities Registers)
    fetch(url)
      .then((res) => res.json())
      .then((prioritarios) => mostrarData(prioritarios))
      .catch((err) => console.log(err));

    const mostrarData = (data) => {
      let body = `
              <tr>
                  <th>Nº</th>
                  <th>Fecha de Entrada</th>
                  <th>Area responsable</th>
                  <th>Localidad</th>
                  <th>Solicitante</th>
                  <th>Estado</th>
                  <th>Modificar</th>
              </tr>
          `;
      for (let i = 0; i < data.length; i++) {
        body += `
               <tr>
                  <td>${data[i].nota}</td>
                  <td>${data[i].fecha}</td>
                  <td>${data[i].areaResponsable}</td>
                  <td>${data[i].localidad}</td>
                  <td>${data[i].solicitanteForm}</td>
                  <td>${data[i].estadoForm}</td>
                  <td>
                      <div class="main__table-modifiers">
                          <div>
                              <span class="material-symbols-outlined">
                                  check
                              </span>
                          </div>
  
                          <div>
                              <span class="material-symbols-outlined">
                                  attach_file
                              </span>
                          </div>
  
                          <div>
                              <span class="material-symbols-outlined table-icons--center">
                                  delete
                              </span>
                          </div>
  
                          <div>
                              <span class="material-symbols-outlined">
                                  edit
                              </span>
                          </div>
  
                      </div>
                  </td>
              </tr>
                      `;
      }
      prioritariosElements.querySelector(".main__table").innerHTML = body;

      const divs = document.querySelectorAll(".main__table-modifiers");
      for (let i = 0; i < divs.length; i++) {
        let completeRow = divs[i].parentNode.parentNode;
        let nota = parseInt(completeRow.children[0].innerText);
        let fecha = completeRow.children[1].innerText;
        let areaResponsable = completeRow.children[2].innerText;
        let localidad = completeRow.children[3].innerText;
        let solicitanteForm = completeRow.children[4].innerText;
        let estadoForm = completeRow.children[5].innerText;

        let bodyData = { nota, fecha, areaResponsable, localidad, solicitanteForm, estadoForm, };
        divs[i].children[2].addEventListener("click", () => {
          let completeRow = divs[i].children[2].parentNode.parentNode.parentNode;
          completeRow.remove();
          console.log(bodyData);
          fetch("http://localhost:1337/api/finalizados", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
          }).then( res => { 
            if (res.status === 409) {
              alert('Error, vuelve a intentar luego.')
            } else if (res.status === 201) {
              fetch(`${url}/` + `${data[i]._id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
              });
    
              alert("Registro Prioritario eliminado.");
            }
          })


          
        });
      }
    };
  }

  return prioritariosElements;
};
