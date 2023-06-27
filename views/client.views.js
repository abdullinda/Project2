class HTMLGenerator {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
  
    generatePage() {
      let html = `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/css/styles.css">
            <title>${this.title}</title>
          </head>
          <body>
            <main>${this.content}</main>
          </body>
        </html>`;
  
      return html;
    }
  
    generateListClient(Clients) {
      let html = '<h1>Clientes</h1>';
      html += '<nav><a href="/">Inicio</a> <a class="menu" href="/cliente/nuevo">Crear cliente</a> <a class="menu" href="/cliente/section/cliente">Ver todos los clientes</a></nav>';
      html += '<ul class="ul-cliente">';
      
      for (let client of clients) {
        html += `<li> <h4>${client.name}</h4> <div class="clientesDiv"><a href="/cliente/${client._id}">Ver</a> <a href="/cliente/${cliente._id}/edit">Modificar</a> <a href="/cliente/${cliente._id}/delete">Eliminar</a></div> </li>`;
      }
      
      html += '</ul>';
  
      return this.generatePage(html);
    }
  
    generateClientDetail(client) {
      let html = `<h1>${client.name}</h1>`;
      html += '<div class="div-proyect">';
      html += `<p>${client.description}</p>`;
      html += `<p>${client.proyecto}</p>`;
      html += `<img src="${client.img}" alt="${client.name}">`;
      html += `<p>${client.section}</p>`;
      
      if (client.client && Array.isArray(client.client) && client.client.length > 0) {
        html += "<ul>";
        client.client.forEach((item) => {
          html += `<li>${item}</li>`;
        });
        html += "</ul>";
      }
  
      return this.generatePage(html);
    }
  
    generateNewClientForm() {
      let html = `<form action="/cliente/nuevo" method="post">
        <label for="name">Nombre: 
          <input type="text" name="name" id="name">
        </label>
        <label for="description">Descripcion:
          <input type="text" name="description" id="description">
        </label>
        <label for="proyecto">Proyecto:
          <input type="text" name="proyecto" id="proyecto">
        </label>
        <label for="img">Imagen del cliente:
          <input type="text" name="img" id="img">
        </label>
        <label for="section">Seccion:
          <input type="text" name="section" id="section">
        </label>
        <button class="btn-confirm" type="submit">Crear cliente</button>
      </form>
      <a class="back" href="/cliente/section/cliente">Volver a clientes</a>`;
  
      return this.generatePage(html);
    }
  
    generateEditClientForm(Client) {
      let html = `<h1>Modificar cliente</h1>
      <form action="/cliente/${client._id}/edit" method="post">
        <label for="name">Nombre: 
          <input type="text" name="name" id="name" value="${client.name}">
        </label>
        <label for="description">Descripcion:
          <input type="text" name="description" id="description" value="${client.description}">
        </label>
        <label for="proyecto">Proyecto:
          <input type="text" name="proyecto" id="proyecto" value="${client.proyecto}">
        </label>
        <label for="img">Imagen del cliente:
          <input type="text" name="img" id="img" value="${client.img}">
        </label>
        <label for="section">Seccion:
          <input type="text" name="section" id="section" value="${client.section}">
        </label>
        <button class="btn-confirm" type="submit">Modificar</button>
      </form>
      <a class="back" href="/cliente/section/cliente">Volver a clientes</a>`;
  
      return this.generatePage(html);
    }
  
    generateDeleteClient(Client) {
      let html = `<h1>${Client.name}</h1>`;
      html += '<div class="div-proyect">';
      html += `<p>${client.description}</p>`;
      html += `<p>${client.proyecto}</p>`;
      html += `<img src="${client.img}" alt="${client.name}">`;
      html += `<p>${client.section}</p>`;
      
      if (client.client && Array.isArray(client.client) && client.client.length > 0) {
        html += "<ul>";
        client.client.forEach((item) => {
          html += `<li>${item}</li>`;
        });
        html += "</ul>";
      }
  
      html += `<form action="/Client/${client._id}/delete" method="post">
        <button class="btn-confirm" type="submit">Eliminar</button>
      </form>
      <a class="back" href="/Client/section/Client">Volver a clientes</a>`;
  
      return this.generatePage(html);
    }
  }
  
  export {
    generatePagePage,
    generateListClient,
    generateClientDetail,
    generateNewClientForm,
    generateEditClientForm,
    generateDeleteClient
}
