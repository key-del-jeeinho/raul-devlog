import Template from "./templates";

const templateData = {
  title: {
    text: "나무에 물 주듯",
  },
  subTitle: {
      text: "raul.devlog",
  },
  newestArticle: {
      text: "최신 글 보기",
      link: "/articles/newest",
  }
}

export default function Home() {
  return (<Template 
    title={templateData.title}
    subTitle={templateData.subTitle}
    newestArticle={templateData.newestArticle}
  />)
}
