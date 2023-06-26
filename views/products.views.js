function generateNewProductForm() {
    let html = `
      <form action="/products/nuevo" method="post">
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
      <a class="back" href="/products">Volver a Productos</a>
    `;
  
    return generatePage('Crear Producto', html);
  }
  
  function generateEditProductForm(product) {
    let html = `
      <h1>Modificar Producto</h1>
  
      <form action="/products/${product._id}/edit" method="post">
        <label for="name">Nombre del producto:</label>
        <input type="text" name="name" id="name" value="${product.name}">
  
        <label for="description">Descripción del producto:</label>
        <input type="text" name="description" id="description" value="${product.description}">
  
        <label for="img">Imagen del producto:</label>
        <input type="text" name="img" id="img" value="${product.img}">
  
        <label for="section">Categoría:</label>
        <input type="text" name="section" id="section" value="${product.section}">
  
        <button class="btn-confirm" type="submit">Modificar</button>
      </form>
      <a class="back" href="/products">Volver a Productos</a>
    `;
  
    return generatePage('Modificar Producto', html);
  }
  
  function generateDeleteProduct(product) {
    let html = `
      <h1>${product.name}</h1>
      <div class="div-proyect">
        <p>${product.description}</p>
        <img src="${product.img}" alt="${product.name}">
        <p>${product.section}</p>
      </div>
  
      <form action="/products/${product._id}/delete" method="post">
        <button class="btn-confirm" type="submit">Eliminar</button>
      </form>
      <a class="back" href="/products">Volver a Productos</a>
    `;
  
    return generatePage('Eliminar Producto', html);
  }
  
  export {
    generateNewProductForm,
    generateEditProductForm,
    generateDeleteProduct
  };
  