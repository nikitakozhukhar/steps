import "./App.css";
import Form from "./components/Form/Form";
import History from "./components/History/History";
import sortFunction from "./components/utilits/sortFunction";

import { useState } from "react";

export default function App() {

  const [form, setForm] = useState({ date: "", distance: "" });
  const [history, setHistory] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const addHistory = (result) => {
    if(isEdit) setIsEdit(false);
    if (history.some(item => item.date === result.date)) {
      setHistory(prevHistories => prevHistories.map(prevHistory => {
        if(prevHistory.date === result.date) {
          if (isEdit) return result;
          return {
            date: prevHistory.date,
            distance:  parseFloat(prevHistory.distance) + parseFloat(result.distance)
          }
        }
        
        return prevHistory
      }))
      return
    }
    setHistory(prevHistories => sortFunction([...prevHistories, result]));
  }

  const handleDelete = (date) => {
    setHistory(history.filter(result => result.date !== date))
  }

  const handleChange = (date) => {
    setForm(date);
    setIsEdit(true)
  }
  return (
    <>
      <Form 
        form={form} 
        setForm={setForm} 
        addHistory={addHistory}
       />
       <div className="historyContainer">
          <div className="historyColumn">
            <header className="historyHeader">
               <div className="historyHeaderDate">Дата (дд.мм.гггг)</div>
               <div className="historyHeaderDistance">Пройдено км</div>
               <div className="historyHeaderActions">Действия</div>
            </header>
          </div>
       </div>
        <History 
          history={history} 
          handleDelete={handleDelete}
          handleChange={handleChange}/>
    </>
  );
}
