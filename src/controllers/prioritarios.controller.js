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
  const buttonPrioritarios = document.querySelector(".menu__pages").children[1].children[0];

  const table = prioritariosElements.querySelector(".main__table");
  table.style.marginTop = "4rem";
  btnClickMain.style.marginTop = "-2rem";

  if (prioritariosWindow == "#/Prioritarios") {
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
    };
    
  }

  return prioritariosElements;
};
