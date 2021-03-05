import React from "react";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";

export default function About() {
  return (
    <div>
      <Header clean title="Project requirements" />
      <ContentWrapper>
        <article id="requirements">
          <h2>Aplikacja składa się z 3 ekranów:</h2>
          <p>
            Aplikacja korzysta z najnowszego api react.js (hooki, Context, itd.)
            oraz spełniaja poniższe założenia:
          </p>

          <h3>1. Wyszukiwarka projektów githubowych </h3>
          <ul>
            <li>
              Wykorzystane jest publiczne API Githuba ✅
              <ul>
                <li> Czeka na podanie loginu użytkownika ✅</li>
                <li>obsługuje nieistniejące loginy</li>
              </ul>
            </li>
            <li>
              wyświetla maksymalnie 5 projektów w kolejności od ostatnio
              updatowanego
            </li>
            <li>wyświetla maksymalnie 5 commitów każdego z projektów</li>
          </ul>
          <h3>2. Założenia całej aplikacji </h3>
          <ul>
            <li>wyświetla listę wymagań ✅</li>
            <li>zawiera też autora aplikacji ✅</li>
          </ul>
          <h3>3. Wyliczanie silni </h3>
          <ul>
            <li>
              input do podania liczby dla której bedzie wyliczona silnia ✅
            </li>
            <li>historia poprzednich wyszukiwań ✅</li>
          </ul>
          <h3>Wymagania ogólne</h3>
          <ul>
            <li>
              korzysta z LESS / SASS. Spełnia wymogi BEM. Jest też estetyczna ✅
            </li>
            <li>
              wyświetla co drugi element każdej listy wyróżnionym kolorem ✅
            </li>
            <li>
              jest hostowana (github pages, heroku, itd..), a jej kod jest
              dostępny publicznie
            </li>
            <li>Miło widziane użycie middlewarów reduxowych ✅</li>
          </ul>
          <p className="author">
            Autorem aplikacji jest{" "}
            <a href="https://github.com/dembicki/">Damian Dembicki </a> <br />
          </p>
        </article>
      </ContentWrapper>
    </div>
  );
}
