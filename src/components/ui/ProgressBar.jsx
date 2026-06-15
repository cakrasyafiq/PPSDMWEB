export default function ProgressBar({ val, color = 'amber' }) {
  return (
    <div className="progress-bar">
      <div className={`progress-fill ${color}`} style={{ width: `${val}%` }}></div>
    </div>
  );
}
