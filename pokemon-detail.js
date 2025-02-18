import { html, css, LitElement } from 'https://cdn.skypack.dev/lit';


class PokemonDetail extends LitElement {
    static styles = css`
        button { margin-top: 10px; cursor: pointer; }
    `;

    static properties = {
        pokemon: { type: Object }
    };
    render() {
        return html`
            <h2>${this.pokemon.name}</h2>
            <img src="${this.pokemon.image}" alt="${this.pokemon.name}" width="100">
            <p>Tipo: ${this.pokemon.type}</p>
    
            <h3>Evoluciones:</h3>
            <ul>
                ${this.pokemon.evolutions && Array.isArray(this.pokemon.evolutions) && this.pokemon.evolutions.length > 0
                    ? this.pokemon.evolutions.map(evo => html`
                        <li>
                            <img src="${evo.image}" alt="${evo.name}" width="50">
                            ${evo.name} - ${evo.type}
                        </li>
                    `)
                    : html`<li>No hay evoluciones disponibles</li>`
                }
            </ul>
    
            <button @click="${this.goBack}">Volver</button>
        `;
    }
    
    goBack() {
        this.dispatchEvent(new CustomEvent('go-back'));
    }
}

customElements.define("pokemon-detail", PokemonDetail);
