function generatePage(title, content) {
    const html = `
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
            <h1>${title}</h1>
            <nav class="mobile-nav">
              <a href="/">Inicio</a>
              <a class="menu" href="/webapp/nuevo">Crear proyecto</a>
              <a href="/webapp">Ver proyectos</a>
            </nav>
            ${content}
          </main>
        </body>
      </html>`;
  
    return html;
  }
  
  function generateListWebapps(webapps) {
    let html = '<ul class="ul-landing">';
    for (const webapp of webapps) {
      html += `
        <li>
          <h4>${webapp.name}</h4>
          <div class="landingsDiv">
            <a href="webapp/${webapp._id}">Ver</a>
            <a href="/webapp/${webapp._id}/edit">Modificar</a>
            <a href="/webapp/${webapp._id}/delete">Eliminar</a>
          </div>
        </li>`;
    }
    html += '</ul>';
  
    return generatePage('Proyectos', html);
  }
  
  function generateWebappDetail(webapp) {
    const html = `
      <div class="div-proyect">
        <h1>${webapp.name}</h1>
        <p>${webapp.description}</p>
        <a class="link-repo" href="${webapp.link}">Link del repositorio</a>
        <img src="${webapp.img}" alt="${webapp.name}">
        <p>${webapp.section}</p>
      </div>`;
  
    return generatePage('Detalle de Proyecto', html);
  }
  
  function generateNewWebappForm() {
    const html = `
      <form action="/webapp/nuevo" method="post">
        <label for="name">Nombre:
          <input type="text" name="name" id="name">
        </label>
        <label for="description">Descripción:
          <input type="text" name="description" id="description">
        </label>
        <label for="img">Imagen del proyecto:
          <input type="text" name="img" id="img">
        </label>
        <label for="link">Link:
          <input type="text" name="link" id="link">
        </label>
        <label for="section">Sección:
          <input type="text" name="section" id="section">
        </label>
        <button type="submit">Crear proyecto</button>
      </form>
      <a class="back" href="/webapp/section/webapp">Volver a proyectos</a>`;
  
    return generatePage('Crear Proyecto', html);
  }
  
  function generateEditWebappForm(webapp) {
    const html = `
      <h1>Modificar Proyecto</h1>
      <form action="/webapp/${webapp._id}/edit" method="post">
        <label for="name">Nombre:
          <input type="text" name="name" id="name" value="${webapp.name}">
        </label>
        <label for="description">Descripción:
          <input type="text" name="description" id="description" value="${webapp.description}">
        </label>
        <label for="link">Link:
          <input type="text" name="link" id="link" value="${webapp.link}">
        </label>
        <label for="img">Imagen del proyecto:
          <input type="text" name="img" id="img" value="${webapp.img}">
        </label>
        <label for="section">Sección:
          <input type="text" name="section" id="section" value="${webapp.section}">
        </label>
        <button type="submit">Modificar</button>
      </form>
      <a class="back" href="/webapp/section/webapp">Volver a proyectos</a>`;
  
    return generatePage('Modificar Proyecto', html);
  }
  
  function generateDeleteWebapp(webapp) {
    const html = `
      <h1>${webapp.name}</h1>
      <div class="div-proyect">
        <p>${webapp.description}</p>
        <a class="link-repo" href="${webapp.link}">Link del repositorio</a>
        <img src="${webapp.img}" alt="${webapp.name}">
        <p>${webapp.section}</p>
      </div>
      <form action="/webapp/${webapp._id}/delete" method="post">
        <button type="submit">Eliminar</button>
      </form>
      <a class="back" href="/webapp/section/webapp">Volver a proyectos</a>`;
  
    return generatePage('Eliminar Proyecto', html);
  }
  
  export {
    generateListWebapps,
    generateWebappDetail,
    generateNewWebappForm,
    generateEditWebappForm,
    generateDeleteWebapp
  };
  
  