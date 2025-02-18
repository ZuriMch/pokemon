import { html, css, LitElement } from 'https://cdn.skypack.dev/lit';


class PokemonList extends LitElement {
    static styles = css`
        ul { list-style: none; padding: 0; }
        li { padding: 10px; border-bottom: 1px solid #ddd; cursor: pointer; }
        img { width: 50px; height: 50px; }
    `;

    static properties = {
        pokemons: { type: Array }
    };

    render() {
        return html`
            <ul>
                ${this.pokemons.map(pokemon => html`
                <li @click="${() => this.selectPokemon(pokemon)}">
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                    <span>${pokemon.name} - ${pokemon.type}</span>
                </li>
                `)}
            </ul>
        `;
    }

    selectPokemon(pokemon) {
        this.dispatchEvent(new CustomEvent("select", {
            detail: pokemon,
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define("pokemon-list", PokemonList);
