import "./styles.css";
import React, { Component } from "react";
class Test extends Component {
  state = {
    nome: "Bárbara",
    idade: 26,
    comidaFavorita: "baião de dois",
    musica: ["Até o sol quis ver", "Como nunca amei ninguém", "Melhor eu ir"]
  };
  render() {
    return (
      <div className="bio">
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Eu tenho {this.state.idade} anos</h2>
        <h3>Eu amo comer {this.state.comidaFavorita}</h3>
        <p>
          Os pagodes que eu mais escuto são:
          <ul>
            <li>{this.state.musica[0]}</li>
            <li>{this.state.musica[1]}</li>
            <li>{this.state.musica[2]}</li>
          </ul>
        </p>
      </div>
    );
  }
}
export default Test;
