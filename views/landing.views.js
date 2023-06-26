function generatePage(title, content) {
    let html = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="/css/styles.css">
          <title>${title}</title>
        </head>
        <body>
          <div class="header">
            <img src="public/img/logo-final.png" class="logo" alt="logo">
            <nav class="navbar">
              <ul class="navbar-list">
                <li><a class="navbar-link" href="#">Inicio</a></li>
                <li><a class="navbar-link" href="pagina/anime.html">Productos</a></li>
                <li><a class="navbar-link" href="#">Nosotros</a></li>
                <li><a class="navbar-link" href="#" target="_blank">Contacto</a></li>
              </ul>
            </nav>
            <div class="mobile-navbar-btn">
              <ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
              <ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
            </div>
          </div>
          <nav class="navbar-prods">
            <a href="/">Inicio</a>
            <a class="menu" href="/landingpage/nuevo">Crear producto</a>
            <a class="menu" href="/landingpage">Ver todos los productos</a>
            <a class="menu" href="/landingpage/section/mobile">Barniz</a>
          </nav>
          ${content}
        </body>
      </html>`;
  
    return html;
  }
  
  function generateListLandings(landings) {
    let html = '<ul class="ul-landing">';
    for (let landing of landings) {
      html += `
        <li>
          <div class="landingsDiv">
            <div class="product-img">
              <img src="${landing.img}" alt="${landing.name}">
              <div class="details-prod">
                <h4>${landing.name}</h4>
                <a href="/landingpage/${landing._id}">Ver</a>
                <a href="/landingpage/${landing._id}/edit">Modificar</a>
                <a href="/landingpage/${landing._id}/delete">Eliminar</a>
              </div>
            </div>
          </div>
        </li>`;
    }
    html += '</ul>';
  
    return generatePage('Productos', html);
  }
  
  function generateLandingDetail(landing) {
    let html = `<h1>${landing.name}</h1>`;
    html += '<div class="div-proyect">';
    html += `<p>${landing.description}</p>`;
    html += `<a class="link-repo" href="${landing.link}">Link del repositorio</a>`;
    html += `<img src="${landing.img}" alt="${landing.name}">`;
    html += `<p>${landing.section}</p>`;
    if (landing.technologies && landing.technologies.length > 0) {
      html += "<ul>";
      landing.technologies.forEach(technology => {
        html += `<li>${technology}</li>`;
      });
      html += "</ul>";
    }
    html += '</div>';
  
    return generatePage('Detalle de Producto', html);
  }
  
  function generateNewLandingForm() {
    let html = `
      <form action="/landingpage/nuevo" method="post">
        <label for="name">Nombre del producto:</label>
        <input type="text" name="name" id="name">
  
        <label for="description">Descripción del producto:</label>
        <input type="text" name="description" id="description">
  
        <label for="img">Imagen del producto:</label>
        <input type="text" name="img" id="img">
  
        <label for="section">Categoría:</label>
        <input type="text" name="section" id="section">
  
        <button class="btn-confirm" type="submit">Crear Producto</button>
      </form>
      <a class="back" href="/landingpage">Volver a Productos</a>
    `;
  
    return generatePage('Crear Producto', html);
  }
  
  function generateEditLandingForm(landing) {
    let html = `
      <h1>Modificar Producto</h1>
  
      <form action="/landingpage/${landing._id}/edit" method="post">
        <label for="name">Nombre del producto:</label>
        <input type="text" name="name" id="name" value="${landing.name}">
  
        <label for="description">Descripción del producto:</label>
        <input type="text" name="description" id="description" value="${landing.description}">
  
        <label for="img">Imagen del producto:</label>
        <input type="text" name="img" id="img" value="${landing.img}">
  
        <label for="section">Categoría:</label>
        <input type="text" name="section" id="section" value="${landing.section}">
  
        <button class="btn-confirm" type="submit">Modificar</button>
      </form>
      <a class="back" href="/landingpage/section/landingpage">Volver a Productos</a>
    `;
  
    return generatePage('Modificar Producto', html);
  }
  
  function generateDeleteLanding(landing) {
    let html = `<h1>${landing.name}</h1>`;
    html += '<div class="div-proyect">';
    html += `<p>${landing.description}</p>`;
    html += `<img src="${landing.img}" alt="${landing.name}">`;
    html += `<p>${landing.section}</p>`;
    html += '</div>';
  
    html += `
      <form action="/landingpage/${landing._id}/delete" method="post">
        <button class="btn-confirm" type="submit">Eliminar</button>
      </form>
      <a class="back" href="/landingpage">Volver a Productos</a>
    `;
  
    return generatePage('Eliminar Producto', html);
  }
  
  export {
    generatePage,
    generateListLandings,
    generateLandingDetail,
    generateNewLandingForm,
    generateEditLandingForm,
    generateDeleteLanding
  };
  