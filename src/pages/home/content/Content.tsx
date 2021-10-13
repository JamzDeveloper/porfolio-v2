import CardArticle from "../../../components/card/article/Article";

import './Content.css';

type contentType = {
    nameClass?:string
}
const Content = (props:contentType) => {
  return (
    <div className={`home--content`}>
        <CardArticle/>
        <CardArticle/>
        <CardArticle/>
     
    </div>
  );
};

export default Content;