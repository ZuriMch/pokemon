import { LitElement, html, css } from "lit";

class PokemonForms extends LitElement {
    static styles = css`
    form {
        display: flex;
        flex-direction: column;
    }
    `;
    static properties = {
        pokemon: { type: Object }
    };
    constructor() {
        super();
        this.pokemon = null;
    }
    render() {
        if (!this.pokemon) return html``;
        return html`
        <h2>Editar Evolución</h2>
        <form >
            <label>
                Nombre
                <input type="text" .value="${this.pokemon?.name}" >
            </label>
            <label>
                Tipo
                <input type="text" .value="${this.pokemon?.type}" >
            </label>
            <label>
                Imagen
                <input type="text" .value="${this.pokemon?.image}">
            </label>
            <label>
                <input type="checkbox" @change="${this.checkDuplicate}"> Es duplicado
            </label>
            <button type="button">Guardar</button>
        </form>
        `;
    }
    checkDuplicate(e) {
       if (e.target.checked) {
           this.dispatchEvent(new CustomEvent("show-modal"));
       }
    }
}
    customElements.define("pokemon-forms", PokemonForms);