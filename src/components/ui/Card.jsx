export default function Card({ title, badgeText, badgeColor, actionNode, children, headerClass = '', bodyClass = '', className = '' }) {
  return (
    <div className={`card ${className}`}>
      {(title || actionNode) && (
        <div className={`card-header ${headerClass}`}>
          <div className="card-title">
            {title}
            {badgeText && <span className={`badge ${badgeColor}`} style={{marginLeft: 8}}>{badgeText}</span>}
          </div>
          {actionNode}
        </div>
      )}
      <div className={`card-body ${bodyClass}`}>
        {children}
      </div>
    </div>
  );
}
