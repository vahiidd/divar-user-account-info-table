import styles from '../styles/Table.module.css';
import TableRow from './TableRow';

const Table = ({ filteredData }) => {
  return (
    <>
      <table className={styles.items}>
        <thead>
          <tr>
            <th>نام تغییر دهنده</th>
            <th>تاریخ</th>
            <th>نام آگهی</th>
            <th>فیلد</th>
            <th>مقدار قدیمی</th>
            <th>مقدار جدید</th>
          </tr>
        </thead>
        <tbody>
          {/* {filtered_ads.map(ad => (
      <tr key={ad.id}>
      <td>{ad.name}</td>
      <td>{ad.date}</td>
      <td>{ad.title}</td>
      <td>{ad.field}</td>
      <td>{ad.old_value}</td>
      <td>{ad.new_value}</td>
    </tr>
    ))} */}

          {filteredData.map((data) => (
            <TableRow {...data} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
