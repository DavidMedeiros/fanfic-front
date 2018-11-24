import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";
import "./App.scss";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./Home/Home";
import Fic from "./Fic/Fic";
import Profile from "./Profile/Profile";

class App extends Component {
  render() {
    let fic = {
      status: "in progress",
      synopsis:
        "O aconteceu quando tive que ir na loja de construção aqui perto de casa?",
      language: "pt-br",
      category: "gay",
      genre: ["comedy", "plot-twist"],
      adult_content: false,
      _chapters: [
        {
          _id: "5beb76db2cbe813eabffa36b",
          title: "Capitulo 1",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "então né gente, sempre que eu vou pra universidade pela manhã tem um coroa que fica sentado em frente a loja de material de construção aqui na esquina de casa... aí tipo, eu não sou muito chegado em coroa e tal, mas.",
          created_at: "2018-11-14T01:14:03.914Z",
          updated_at: "2018-11-14T01:14:03.914Z",
          __v: 0
        },
        {
          _id: "5beb772a2cbe813eabffa36c",
          title: "Capitulo 2",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "ele é muito bonito.. .. ele tem aquela coisa meio bad boy, porém mais maduro e o jeito dele me encarar sempre me intrigou MUITO porque é na maior cara de pau mesmo kajoiasjd aí eu fico 'ai pai para' ou 'oh daddy stop' para quem n fala portugues.",
          created_at: "2018-11-14T01:15:22.829Z",
          updated_at: "2018-11-14T01:15:22.829Z",
          __v: 0
        },
        {
          _id: "5beb773f2cbe813eabffa36d",
          title: "Capitulo 3",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "aí enfim né, um desses dias que eu tava indo pra universidade aí quando eu passo, geralmente ele ta conversando com os amigos dele lá da loja, mas nesse dia ele estava sozinho e tal, aí eu fiquei logo atenta né, eu pensei 'agora vai' aí eu fiquei foi gelado e disse vai nao.",
          created_at: "2018-11-14T01:15:43.740Z",
          updated_at: "2018-11-14T01:15:43.740Z",
          __v: 0
        },
        {
          _id: "5beb77712cbe813eabffa36e",
          title: "Capitulo 4",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "aí quando eu tava passando pela loja, já quase perdendo ele de vista aí ele me chamou 'ei boy vem cá! tu ta sabendo que a gente tá com uma promoção hoje?' \n eu ja fiquei nervosa bem pensando 'anham eu sei a promoção viu inxirido' mas aí eu disse 'mentira serio??'.",
          created_at: "2018-11-14T01:16:33.857Z",
          updated_at: "2018-11-14T01:16:33.857Z",
          __v: 0
        },
        {
          _id: "5beb77872cbe813eabffa36f",
          title: "Capitulo 5",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "minina tava precisando de uma promoção viu tu nem sabe menina a porta do meu quarto tá com o trinco quebrado digai' aí ele 'oxe pois vamo dar uma olhadinha que eu te arranjo uma fechadura novinha rs' aí eu tremi logo na base mas por fora eu disse bora.",
          created_at: "2018-11-14T01:16:55.369Z",
          updated_at: "2018-11-14T01:16:55.369Z",
          __v: 0
        },
        {
          _id: "5beb779a2cbe813eabffa370",
          title: "Capitulo 6",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "aí a gente entrou na loja e curiosamente porém não surpreendentemente não tinha ninguém, aí eu já fiquei mais aquela coisa, mais a vontade, comecei a olhar as coisas na seção de fechadura e tal né os trinco sei lá o nome daquele troço aí ele atrás de mim só me observando.",
          created_at: "2018-11-14T01:17:14.714Z",
          updated_at: "2018-11-14T01:17:14.714Z",
          __v: 0
        },
        {
          _id: "5beb77ad2cbe813eabffa371",
          title: "Capitulo 7",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "eu sou baixo né, aí ele deve ter uns 1,80 sei la tava sem fita na hora pra medir aí enfim ele foi se aproximando e eu só consegui sentir ele respirando já perto da minha nuca eu pensei eita porra agora vai ai eu virei e ele tava ja quase encostando na minha boca QUE HOMEM LINDO a.",
          created_at: "2018-11-14T01:17:33.031Z",
          updated_at: "2018-11-14T01:17:33.031Z",
          __v: 0
        },
        {
          _id: "5beb77c32cbe813eabffa372",
          title: "Capitulo 8",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "aí ele encostou a mão no meu peito e disse assim 'se tu quiser eu posso trocar a fechadura lá pra tu e não precisa pagar nada não rs' aí eu aaaan uuu aa aan 'tudo bem pois vamo xo pagar que a gente vai como vc é prestativo né que bom que deus coloca pessoas boas aqui'.",
          created_at: "2018-11-14T01:17:55.925Z",
          updated_at: "2018-11-14T01:17:55.925Z",
          __v: 0
        },
        {
          _id: "5beb77dd2cbe813eabffa373",
          title: "Capitulo 9",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "no caso era pagar a fechadura gente. o serviço ia sair de graça, mas a fechadura não porque a crise tá foda.",
          created_at: "2018-11-14T01:18:21.737Z",
          updated_at: "2018-11-14T01:18:21.737Z",
          __v: 0
        },
        {
          _id: "5beb77ff2cbe813eabffa374",
          title: "Capitulo 10",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "mas ele realmente me deu desconto parcelou 4x sem juros nem nada eu fiquei besta.",
          created_at: "2018-11-14T01:18:55.369Z",
          updated_at: "2018-11-14T01:18:55.369Z",
          __v: 0
        },
        {
          _id: "5beb78122cbe813eabffa375",
          title: "Capitulo 11",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "aí vamos aos finalmente.. .. a gente veio caminhando aqui pra casa e viemos conversando bastante, apesar da loja ser perto da minha casa. ele é super simpatico super gente boa e muito prestativo mesmo que homem ne gente.. aí chegamos aqui, entramos no quarto aí ele oxe.",
          created_at: "2018-11-14T01:19:14.612Z",
          updated_at: "2018-11-14T01:19:14.612Z",
          __v: 0
        },
        {
          _id: "5beb784a2cbe813eabffa376",
          title: "Capitulo 12",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "nera o trinco da porta que tava quebrado, kd? aí eu kkk não ome eu confundi era o do banheiro! aí ele 'ah sim pois amostra ai hehe' aí eu hmm amostro aí eu mostrei o trinco do banheiro aí ele trocou a fechadura aí quando terminou ele disse me traz agua por favor.",
          created_at: "2018-11-14T01:20:10.344Z",
          updated_at: "2018-11-14T01:20:10.344Z",
          __v: 0
        },
        {
          _id: "5beb785c2cbe813eabffa377",
          title: "Capitulo 13",
          _author: "5beb73fc2cbe813eabffa369",
          _fic: "5beb742a2cbe813eabffa36a",
          text:
            "aí eu disse ta certo pode deixar aí eu levei agua pra ele ele agradeceu, aí eu fui deixar ele lá embaixo e ele foi embora. voltou pra loja do material de construção e eu desisti de ir pra aula e voltei a dormir com minha porta do banheiro novinha em folha.",
          created_at: "2018-11-14T01:20:28.868Z",
          updated_at: "2018-11-14T01:20:28.868Z",
          __v: 0
        }
      ],
      views: 1024,
      _id: "5beb742a2cbe813eabffa36a",
      title: "O Coroa da Loja de Material de Construção",
      _author: {
        description: "se uma lagarta vira borboleta.",
        is_admin: false,
        _id: "5beb73fc2cbe813eabffa369",
        username: "shakepaulinha",
        email: "shakepaulinha@test.com",
        gender: "male",
        birthdate: "1996-01-18",
        created_at: "2018-11-14T01:01:48.300Z",
        profile_name: "shakepaulinha",
        social: {
          facebook: "1bibiu",
          twitter: "shakepaulinha",
          instagram: "paul0viniciuss"
        },
        _fics: ["1", "2", "3", "4", "5", "8"],
        _chapters: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "8",
          "1",
          "11",
          "111",
          "5",
          "5",
          "7",
          "7",
          "7",
          "7",
          "7",
          "7",
          "7"
        ],
        fav_fics: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "8",
          "5",
          "5",
          "7",
          "7",
          "7",
          "7",
          "7",
          "7",
          "7"
        ],
        __v: 0
      },
      created_at: "2018-11-14T01:02:34.964Z",
      updated_at: "2018-11-14T01:13:16.603Z"
    };

    return (
      <div className="App white-text">
        <BrowserRouter>
          <Container>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route
                path="/fic"
                render={props => <Fic data={fic} {...props} />}
              />
            </Switch>
            <Footer />
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
