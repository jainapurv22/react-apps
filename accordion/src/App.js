import questions from "./data";
import Question from "./Question";
function App() {
  return (
    <div className="App">
      <div className="acc">
        <h1>Questions And Answers About Login</h1>
        <section className="ques">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
