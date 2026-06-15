export default function KpiCard({
  colorVariant = 'amber',
  icon,
  label,
  value,
  metaText,
  metaChange,
  metaChangeType,
  progressVal,
}) {
  return (
    <div className={`kpi-card ${colorVariant}`}>
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-meta">
        {metaChange && (
          <span className={`kpi-change ${metaChangeType}`}>{metaChange}</span>
        )}
        {metaChange && metaText ? ` ${metaText}` : metaText}
      </div>
      {progressVal !== undefined && (
        <div className="progress-bar">
          <div className={`progress-fill ${colorVariant}`} style={{ width: `${progressVal}%` }}></div>
        </div>
      )}
    </div>
  );
}
