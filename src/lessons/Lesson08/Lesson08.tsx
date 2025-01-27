//Стилизация
//1 способ - использование обычного CSS
import "./styles.css";
import Examole1 from '../../assets/Foto/Image20250127122523.jpg'
import Examole2 from '../../assets/Foto/Image20250127122557.jpg'

//3-й способ - использование библиотеки emotion (использование стилизованых компонентов)
import { BoxInfo } from "./styles";
import { Text } from "./styles";
import { Image } from "./styles";
import { ContentContainer } from "./styles";

function Lesson08() {
  //Объект для inline styles - относится ко 2-му способу
  const textStyle = {
    color: "blue",
    fontSize: "26px",
  };

  return (
    <div className="lesson08-contaoner">
      {/* 2-й способ - inline styles (передача объекта стилей в атрибут style)*/}
      <div style={{ color: "blueviolet", fontSize: "24px" }}>
        Inline style example 1
      </div>
      <p style={textStyle}>Inline style example 2</p>
      <div style={textStyle}>Inline style example 2</div>
      {/* Использование стилизованых компонентов */}
      <BoxInfo primary>
        <ContentContainer>
          <Image src={Examole1}/>
          <Text>Emotion example 1</Text>
        </ContentContainer>
      </BoxInfo>
      <BoxInfo>
        {" "}
        <ContentContainer>
          <Image src={Examole2}/>
          <Text>Emotion example 2</Text>
        </ContentContainer>
      </BoxInfo>
    </div>
  );
}

export default Lesson08;
