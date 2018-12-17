import React from "react";
import { shallow } from "enzyme";
import Fic from "../components/Fic/Fic";
import Chapter from "../components/Fic/Chapter";
import FicDescription from "../components/Fic/FicDescription";

const fic = {
  status: "in progress",
  synopsis: "No synopsis.",
  language: "pt-br",
  category: "gay",
  genre: ["comedy", "plot-twist"],
  adult_content: false,
  _chapters: [
    {
      _id: "5bf9b66a1cc7fc0016b3de41",
      title: "Capitulo 1",
      _author: "5bf9b61a1cc7fc0016b3de3f",
      _fic: "5bf9b6331cc7fc0016b3de40",
      text:
        "então né gente, sempre que eu vou pra universidade pela manhã tem um coroa que fica sentado em frente a loja de material de construção aqui na esquina de casa... aí tipo, eu não sou muito chegado em coroa e tal, mas.",
      created_at: "2018-11-24T20:36:58.663Z",
      updated_at: "2018-11-24T20:36:58.663Z",
      __v: 0
    },
    {
      _id: "5bf9b67e1cc7fc0016b3de42",
      title: "Capitulo 2",
      _author: "5bf9b61a1cc7fc0016b3de3f",
      _fic: "5bf9b6331cc7fc0016b3de40",
      text:
        "ele é muito bonito.. .. ele tem aquela coisa meio bad boy, porém mais maduro e o jeito dele me encarar sempre me intrigou MUITO porque é na maior cara de pau mesmo kajoiasjd aí eu fico 'ai pai para' ou 'oh daddy stop' para quem n fala portugues.",
      created_at: "2018-11-24T20:37:18.072Z",
      updated_at: "2018-11-24T20:37:18.072Z",
      __v: 0
    },
    {
      _id: "5bf9b6841cc7fc0016b3de43",
      title: "Capitulo 3",
      _author: "5bf9b61a1cc7fc0016b3de3f",
      _fic: "5bf9b6331cc7fc0016b3de40",
      text:
        "aí enfim né, um desses dias que eu tava indo pra universidade aí quando eu passo, geralmente ele ta conversando com os amigos dele lá da loja, mas nesse dia ele estava sozinho e tal, aí eu fiquei logo atenta né, eu pensei 'agora vai' aí eu fiquei foi gelado e disse vai nao.",
      created_at: "2018-11-24T20:37:24.864Z",
      updated_at: "2018-11-24T20:37:24.864Z",
      __v: 0
    }
  ],
  views: 32,
  _id: "5bf9b6331cc7fc0016b3de40",
  title: "O Coroa da Loja",
  _author: {
    social: {
      facebook: "1bibiu",
      twitter: "shakepaulinha",
      instagram: "paul0viniciuss"
    },
    description: "No description.",
    _fics: [
      "5bf9b6331cc7fc0016b3de40",
      "5c117f8b6adbe90016562737",
      "5c1181036adbe90016562738",
      "5c11853b6adbe9001656273c",
      "5c118af96adbe9001656273d",
      "5c118c4c6adbe9001656273e",
      "5c118c7c6adbe9001656273f",
      "5c118cbd6adbe90016562740",
      "5c118d2d6adbe90016562741",
      "5c1468efdf9cda0016f33068",
      "5c14690cdf9cda0016f33069"
    ],
    _chapters: [
      "5bf9b66a1cc7fc0016b3de41",
      "5bf9b67e1cc7fc0016b3de42",
      "5bf9b6841cc7fc0016b3de43"
    ],
    fav_fics: [],
    is_admin: false,
    _id: "5bf9b61a1cc7fc0016b3de3f",
    username: "shakepaulinha",
    email: "shakepaulinha@test.com",
    birthday: "1996-01-18T00:00:00.000Z",
    gender: "male",
    created_at: "2018-11-24T20:35:38.877Z",
    profile_name: "shakepaulinha",
    __v: 0
  },
  created_at: "2018-11-24T20:36:03.992Z",
  updated_at: "2018-11-24T20:36:03.992Z",
  __v: 0
};

const match = {
  params: { ficId: "5bf9b6331cc7fc0016b3de40" }
};

let FicComponent = shallow(<Fic match={match} />);
FicComponent.setState({
  fic: fic,
  isLoading: false
});

let ChapterComponent = shallow(<Chapter data={fic._chapters[0]} />);

let FicDescriptionComponent = shallow(<FicDescription data={fic} favoritable={true} showGenres={true} />);

it("always renders a div with fic css class", () => {
  expect(FicComponent.find("div.fic").length).toBe(1);
});

describe("the rendered div with fic css class", () => {
  it("contains wrappes all others html elements from the component", () => {
    const divs = FicComponent.find("div");
    const wrappingDiv = divs.first();

    expect(wrappingDiv.children()).toEqual(FicComponent.children());
  });
});

it("always renders an Fic Description", () => {
  expect(FicComponent.find(FicDescription).length).toBe(1);
});

it("always renders the Fic Title on the Fic Description Component", () => {
  expect(
    FicDescriptionComponent.find("Header")
      .first()
      .dive()
      .text()
  ).toEqual(fic.title +  "<Rating /><Statistic />");
});

it("renders Chapters if the Fic has at least one", () => {
  expect(FicComponent.find(Chapter).length).toBe(3);
});

it("always renders an Chapter title", () => {
  expect(
    ChapterComponent.find("Header")
    .first()
    .dive()
    .text()
  ).toEqual(fic._chapters[0].title);
});

it("always renders an Chapter text", () => {
  expect(
    ChapterComponent.find("p")
      .text()
  ).toEqual(fic._chapters[0].text);
});
