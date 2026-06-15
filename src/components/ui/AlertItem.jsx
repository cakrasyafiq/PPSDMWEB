export default function AlertItem({ type = 'red', icon, title, desc }) {
  return (
    <div className={`alert-item ${type}`}>
      <div className="alert-icon">{icon}</div>
      <div className="alert-text">
        <strong>{title}</strong>
        {desc}
      </div>
    </div>
  );
}
