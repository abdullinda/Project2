function generatePage(title, content) {
    let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="/css/styles.css">
          <title>${title}</title>
        </head>
        <body>
          <main>
            <h1>Mis proyectos - Mobile</h1>
            <nav class="mobile-nav">
              <a href="/">Inicio</a>
              <a class="menu" href="/mobile/nuevo">Crear proyecto</a>
              <a href="/mobile">Ver proyectos</a>
            </nav>
            ${content}
          </main>
        </body>
      </html>`;
  
    return html;
  }
  
  function generateListMobiles(mobiles) {
    let html = '<ul class="ul-landing">';
    for (const mobile of mobiles) {
      html += `
        <li>
          <h4>${mobile.name}</h4>
          <div class="landingsDiv">
            <a href="/mobile/${mobile._id}">Ver</a>
            <a href="/mobile/${mobile._id}/edit">Modificar</a>
            <a href="/mobile/${mobile._id}/delete">Eliminar</a>
          </div>
        </li>`;
    }
    html += '</ul>';
  
    return generatePage('Proyectos', html);
  }
  
  function generateMobileDetail(mobile) {
    let html = `
      <h1>${mobile.name}</h1>
      <div class="div-proyect">
        <p>${mobile.description}</p>
        <a class="link-repo" href="${mobile.link}">Link del repositorio</a>
        <img src="${mobile.img}" alt="${mobile.name}">
        <p>${mobile.section}</p>
      </div>`;
  
    return generatePage('Detalle de Proyecto', html);
  }
  
  function generateNewMobileForm() {
    const html = `
      <form action="/mobile/nuevo" method="post">
        <label for="name">Nombre:</label>
        <input type="text" name="name" id="name">
  
        <label for="description">Descripción:</label>
        <input type="text" name="description" id="description">
  
        <label for="img">Imagen del proyecto:</label>
        <input type="text" name="img" id="img">
  
        <label for="link">Link:</label>
        <input type="text" name="link" id="link">
  
        <label for="section">Sección:</label>
        <input type="text" name="section" id="section">
  
        <button type="submit">Crear proyecto</button>
      </form>
      <a class="back" href="/webapp/section/mobile">Volver a proyectos</a>`;
  
    return generatePage('Crear Proyecto', html);
  }
  
  function generateEditMobileForm(mobile) {
    const html = `
      <h1>Modificar Proyecto</h1>
      <form action="/mobile/${mobile._id}/edit" method="post">
        <label for="name">Nombre:</label>
        <input type="text" name="name" id="name" value="${mobile.name}">
  
        <label for="description">Descripción:</label>
        <input type="text" name="description" id="description" value="${mobile.description}">
  
        <label for="img">Imagen del proyecto:</label>
        <input type="text" name="img" id="img" value="${mobile.img}">
  
        <label for="link">Link:</label>
        <input type="text" name="link" id="link" value="${mobile.link}">
  
        <label for="section">Sección:</label>
        <input type="text" name="section" id="section" value="${mobile.section}">
  
        <button type="submit">Modificar</button>
      </form>
      <a class="back" href="/webapp/section/mobile">Volver a proyectos</a>`;
  
    return generatePage('Modificar Proyecto', html);
  }
  
  function generateDeleteMobile(mobile) {
    const html = `
      <h1>${mobile.name}</h1>
      <div class="div-proyect">
        <p>${mobile.description}</p>
        <a class="link-repo" href="${mobile.link}">Link del repositorio</a>
        <img src="${mobile.img}" alt="${mobile.name}">
        <p>${mobile.section}</p>
      </div>
      <form action="/mobile/${mobile._id}/delete" method="post">
        <button type="submit">Eliminar</button>
      </form>
      <a class="back" href="/webapp/section/mobile">Volver a proyectos</a>`;
  
    return generatePage('Eliminar Proyecto', html);
  }
  
  export {
    generatePage,
    generateListMobiles,
    generateMobileDetail,
    generateNewMobileForm,
    generateEditMobileForm,
    generateDeleteMobile
  };
  