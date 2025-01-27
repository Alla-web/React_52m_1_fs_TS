//Стилизация
//1 способ - использование обычного CSS
import "./styles.css";

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
    </div>
  );
}

export default Lesson08;
