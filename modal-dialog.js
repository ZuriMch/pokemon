import { LitElement, html, css } from "lit";

class ModalDialog extends LitElement {
    static styles = css`
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    }
        button {    
        margin-top: 10px;
}`;
static properties = {
    visible: { type: Boolean }
};
constructor() {
    super();
    this.visible = false;
}
render() {
    if (!this.visible) return html``;
    return html`
    <div class="modal">
        <p>Este pokemon ya existe, Puedes cambiarlo en el punto más cercano :)</p>
        <button @click="${this.close}">Cerrar</button>
    </div>
    `;
}
close() {
    this.visible = false;
}
} 
customElements.define("modal-dialog", ModalDialog);