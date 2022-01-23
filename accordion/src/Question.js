import { useState } from "react/cjs/react.development";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  //   console.log(title);
  const [ans, setans] = useState(false);
  return (
    <div className="que">
      <div className="see_ans">
        <h4>{title}</h4>
        <button onClick={() => setans(!ans)}>
          {ans ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p>{ans ? info : ""}</p>
    </div>
  );
};

export default Question;
