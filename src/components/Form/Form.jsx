import styles from "../Form/form.module.css";





export default function Form({form, setForm, addHistory}) {
  
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.distance < 0) return;
    
    addHistory({...form})

    setForm({ date: "", distance: "" });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
              <div className={styles.formDate}>
                  <label htmlFor="date">Дата (дд.мм.гггг)</label>
                  <input
                      type="date"
                      className={styles.inputDate}
                      name={"date"}
                      value={form.date}
                      onChange={handleChange}
                      placeholder="дд.мм.гггг"
                  ></input>
              </div>

              <div className={styles.formDistance}>
                  <label>Пройдено км</label>
                  <input
                      type="number"
                      className={styles.inputDistance}
                      name={"distance"}
                      value={form.distance}
                      onChange={handleChange}
                  ></input>
              </div>

              <button type="submit" className={styles.formButton}>
                OK
              </button>
          </div>
      </form>
    </>
  );
}
