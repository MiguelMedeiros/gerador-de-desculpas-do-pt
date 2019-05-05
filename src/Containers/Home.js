import React, { Component } from "react";
import Share from "../Components/Share";
import ClipboardButton from "../Components/ClipboardButton";
import ReactGA from "react-ga";

const {
  problem,
  nature,
  guilty,
  motive,
  victim,
} = require("../Data/Excuses.json");
class Home extends Component {
  state = {
    result: "",
  };

  getRandom(obj) {
    return obj[Math.floor(Math.random() * obj.length)];
  }

  generateExcuse = stage => event => {
    this.setState({
      result:
        this.getRandom(problem) +
        this.getRandom(nature) +
        this.getRandom(guilty) +
        this.getRandom(motive) +
        this.getRandom(victim),
    });

    ReactGA.event({
      category: "Desculpas",
      action: "Clique na Estrela",
      label: "Nova desculpa gerada",
    });
  };

  render() {
    const { result } = this.state;
    return (
      <div className="app">
        <p>
          Se você é petista ou tem algum amigo petista, essa ferramenta é para
          vocês!
        </p>
        <p>
          Agora ficou fácil você <strike>ganhar</strike> qualquer discussão
          contra os coxinhas!
        </p>
        <p>
          Basta clicar na estrela do PT para gerar uma desculpa automática e
          legítma!
        </p>
        <div className="star-icon">
          <img
            onClick={this.generateExcuse(4)}
            src="/img/estrela.png"
            alt="estrela"
          />
        </div>
        <div className="result">
          <textarea disabled="disabled" name="result" value={result} />
        </div>
        <ClipboardButton text={result} />
        <Share />
        <div className="share-comments">
          <div
            className="fb-comments"
            data-href="http://www.geradordedesculpasdopt.com.br"
            data-width="500px"
            data-numposts="5"
          />
        </div>
      </div>
    );
  }
}

export default Home;
