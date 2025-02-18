import { html, css, LitElement } from 'https://cdn.skypack.dev/lit';

import "./pokemon-list.js";
import "./pokemon-detail.js";

class PokemonExplorer extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
    `;

    static properties = {
        pokemons: { type: Array },
        selectedPokemon: { type: Object }
    };

    constructor() {
        super();
        this.pokemons = [];
        this.selectedPokemon = null;
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchPokemonData();
    }

    async fetchPokemonData() {
        try {
            const response = await fetch('http://localhost:3002/pokemon');
            if (!response.ok) throw new Error('Error en la carga de datos');

            this.pokemons = await response.json();
            this.requestUpdate(); 
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }

    selectPokemon(event) {
        this.selectedPokemon = event.detail;
    }

    goBack() {
        this.selectedPokemon = null;
    }

    render() {
        return html`
            ${this.selectedPokemon 
                ? html`<pokemon-detail .pokemon="${this.selectedPokemon}" @go-back="${this.goBack}"></pokemon-detail>`
                : html`<pokemon-list .pokemons="${this.pokemons}" @select="${this.selectPokemon}"></pokemon-list>`}
        `;
    }
}

customElements.define("pokemon-explorer", PokemonExplorer);
