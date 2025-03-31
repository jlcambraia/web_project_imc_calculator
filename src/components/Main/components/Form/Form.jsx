import { useState } from "react";
import Input from "./components/Input/Input";
import { imcArticles } from "../../../../utils/constants.js";

export default function Form() {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [imc, setImc] = useState(null);
  const [imcClassification, setImcClassification] = useState("");
  const [showHeightInput, setShowHeightInput] = useState(true);
  const [showWeightInput, setShowWeightInput] = useState(false);
  const [showImc, setShowImc] = useState(false);
  const [showArticles, setShowArticles] = useState(false);
  const [articles, setArticles] = useState();
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");

  function getHeight(evt) {
    const heightValue = evt.target.value;
    if (
      heightValue === "" ||
      (!isNaN(heightValue) && Number(heightValue) >= 0)
    ) {
      setheight(heightValue);
      setHeightError("");
    } else {
      setheight(heightValue);
      setHeightError("Digite apenas números para a altura.");
    }
  }

  function getWeight(evt) {
    const weightValue = evt.target.value;
    if (
      weightValue === "" ||
      (!isNaN(weightValue) && Number(weightValue) >= 0)
    ) {
      setweight(weightValue);
      setWeightError("");
    } else {
      setweight(weightValue);
      setWeightError("Digite apenas números para o peso.");
    }
  }

  function heightButtonClick(evt) {
    evt.preventDefault();
    const cleanHeight = String(height).trim();
    if (cleanHeight && !isNaN(parseFloat(cleanHeight))) {
      setShowHeightInput(false);
      setShowWeightInput(true);
      setHeightError("");
    } else {
      setHeightError("Digite uma altura válida.");
    }
  }

  function weightButtonClick(evt) {
    evt.preventDefault();
    const cleanWeight = String(weight).trim();
    if (cleanWeight && !isNaN(parseFloat(cleanWeight))) {
      const heightMeters = parseFloat(height) / 100;
      const calculateImc = (
        parseFloat(cleanWeight) /
        (heightMeters * heightMeters)
      ).toFixed(2);

      setImc(calculateImc);
      setImcClassification(getImcClassification(calculateImc));
      setShowWeightInput(false);
      setShowImc(true);
      setShowArticles(true);
      suggestArticles(calculateImc);
      setWeightError("");
    } else {
      setWeightError("Por favor, verifique se o peso é um valor válido.");
    }
  }

  function getImcClassification(imc) {
    const imcNum = parseFloat(imc);

    if (imcNum < 18.5) {
      return "Abaixo do peso";
    } else if (imcNum >= 18.5 && imcNum < 25) {
      return "Peso normal";
    } else if (imcNum >= 25 && imcNum < 30) {
      return "Sobrepeso";
    } else if (imcNum >= 30 && imcNum < 35) {
      return "Obesidade grau 1";
    } else if (imcNum >= 35 && imcNum < 40) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  }

  function suggestArticles(imc) {
    const imcNum = parseFloat(imc);

    let articles = [];

    if (imcNum < 18.5) {
      articles = imcArticles.underweight;
    } else if (imcNum < 25) {
      articles = imcArticles.normal;
    } else if (imcNum < 30) {
      articles = imcArticles.overweight;
    } else if (imcNum < 35) {
      articles = imcArticles.obesity1;
    } else if (imcNum < 40) {
      articles = imcArticles.obesity2;
    } else {
      articles = imcArticles.obesity3;
    }

    setArticles(articles);
  }

  function resetCalculator() {
    setweight("");
    setheight("");
    setImc(null);
    setImcClassification("");
    setShowHeightInput(true);
    setShowWeightInput(false);
    setShowImc(false);
    setShowArticles(false);
    setArticles();
    setHeightError("");
    setWeightError("");
  }

  return (
    <>
      <form>
        {showHeightInput && (
          <>
            <Input
              placeholder="Digite sua altura (cm)"
              value={height}
              onChange={getHeight}
            />

            <button className="form__button" onClick={heightButtonClick}>
              Próximo
            </button>
            {heightError && (
              <p className="form__error-message">{heightError}</p>
            )}
          </>
        )}

        {showWeightInput && (
          <>
            <p className="form__text">
              Altura informada:{" "}
              <span className="form__text_weight_bold">{height} cm</span>
            </p>
            <Input
              placeholder="Agora, digite seu peso (kg)"
              value={weight}
              onChange={getWeight}
            />

            <button className="form__button" onClick={weightButtonClick}>
              Calcular IMC
            </button>
            {weightError && (
              <p className="form__error-message">{weightError}</p>
            )}
          </>
        )}
      </form>
      <div className="form__results">
        {showImc && (
          <div>
            <p className="form__text">
              Altura informada:{" "}
              <span className="form__text_weight_bold">{height} cm</span>
            </p>
            <p className="form__text">
              Peso informado:{" "}
              <span className="form__text_weight_bold">{weight} kg</span>
            </p>
            <p className="form__text form__text_margin_top_l">O seu IMC é:</p>
            <p className="form__text form__text_margin_bottom_l">
              <span className="form__text_weight_bold form__text_size_l ">
                {imc}
              </span>
            </p>
            <p className="form__text form__text_margin_s">
              Classificação:{" "}
              <span className="form__text_weight_bold">
                {imcClassification}
              </span>
            </p>
            <button
              className="form__button form__button_margin_l"
              onClick={resetCalculator}
            >
              Calcular novamente?
            </button>
          </div>
        )}

        {showArticles && (
          <div>
            <p className="form__text form__text_weight_bold">
              Veja alguns artigos sugeridos, conforme seu IMC:{" "}
            </p>
            <ul>
              {articles.map((article, index) => (
                <li className="form__list" key={index}>
                  <p className="form__article">{article.title}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
