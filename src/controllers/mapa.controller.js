import mapa from "../views/mapa.html";

export default () => {
  const mapsElements = document.createElement("section");
  mapsElements.innerHTML = mapa;

  
  const menuPages = document.querySelector('.menu__pages')
  const mapaWindow = window.location.hash;
  console.log(mapaWindow);
  if (mapaWindow === "#/Mapa") {
    menuPages.children[0].children[0].classList.remove("active");
    menuPages.children[1].children[0].classList.remove("active");
    menuPages.children[2].children[0].classList.remove("active");
    menuPages.children[3].children[0].classList.add("active");
    
  }

  return mapsElements;
};
