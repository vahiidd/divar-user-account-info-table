import { useState } from 'react';
import image from '../images/filter-icon.png';
import styles from '../styles/Header.module.css';
import data from '../api/data.json';
import findDate from '../BST/BST';
import { root } from '../BST/BST';

const Header = ({ setFilteredData }) => {
  const [formData, setFormData] = useState({
    personName: '',
    date: '',
    title: '',
    field: '',
  });

  const changeHandler = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData.date);
    const { personName, title, date } = formData;
    let filteredData = data;
    if (date) {
      const res = findDate(root, date);
      console.log(res);
      filteredData = res;
    }
    filteredData = filteredData.filter(
      (d) =>
        (personName
          ? d.name.toLowerCase().includes(personName.toLowerCase())
          : true) && (title ? d.title.includes(title) : true)
    );
    setFilteredData(filteredData);
  };

  return (
    <>
      <form className={styles.main}>
        <div className={styles.form}>
          <label className={styles.label}>نام تغییر دهنده : </label>
          <input
            className={styles.input}
            type='text'
            name='personName'
            onChange={changeHandler}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}>تاریخ : </label>
          <input
            className={styles.input}
            type='date'
            name='date'
            onChange={changeHandler}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}>نام آگهی : </label>
          <input
            className={styles.input}
            type='text'
            name='title'
            onChange={changeHandler}
          />
        </div>

        <div className={styles.form}>
          <label className={styles.label}> مرتب سازی بر اساس : </label>
          <select
            className={styles.input}
            name='field'
            onChange={changeHandler}
          >
            <option value='عنوان'>عنوان</option>
            <option value='قیمت'>قیمت</option>
          </select>
        </div>
        <br />

        <button
          onClick={submitHandler}
          type='submit'
          style={{
            backgroundColor: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img
            src={image}
            style={{ height: '50px', width: '50px' }}
            alt='filter-icon'
          />
        </button>
      </form>
    </>
  );
};

export default Header;
