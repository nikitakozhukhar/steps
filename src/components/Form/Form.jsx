import styles from "../Form/form.module.css";

const regDate = /^\d{2}\.\d{2}\.\d{4}$/;
const regDistance = /^\d+\.?\d*$/;


export default function Form({form, setForm, addHistory}) {
  
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!regDate.test(form.date) || !regDistance.test(form.distance)) return;

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
