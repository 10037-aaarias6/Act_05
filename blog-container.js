
// Definición de la clase BlogContainer
class BlogContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div>
          <slot name="post"></slot> // Espacio reservado para el contenido del post
          <slot name="comment-list"></slot> // Espacio reservado para la lista de comentarios
          <slot name="comment-form"></slot> // Espacio reservado para el formulario de comentarios
        </div>
      `;
    }
  }
  
  // Registrar el componente contenedor
  customElements.define('blog-container', BlogContainer);
