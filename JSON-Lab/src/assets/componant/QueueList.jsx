import PropTypes from "prop-types";
const QueueList = ({ queues, onDeleteQueue }) => {
  return (
    <div className="queue">
      <h2>รายชื่อคิว</h2>
      <ol>
        {queues.map((item) => (
          <li key={item._id}>
            {item.fname} {item.lname}
          </li>
        ))}
      </ol>
      <button onClick={onDeleteQueue}>เชิญคิวถัดไป</button>
    </div>
  );
};
QueueList.propTypes = {
  queues: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      fname: PropTypes.string.isRequired,
      lname: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteQueue: PropTypes.func.isRequired,
};

export default QueueList;
