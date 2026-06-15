export default function CertTimeline({ items }) {
  return (
    <div className="cert-items">
      {items.map((item, i) => (
        <div className="cert-item" key={i}>
          <div className="cert-timeline-col">
            <div className={`cert-dot ${item.status}`}></div>
            <div className="cert-line"></div>
          </div>
          <div className="cert-content">
            <div className="cert-name">{item.nama}</div>
            <div className="cert-detail">{item.detail}</div>
            <div className="cert-bar-wrap">
              <div className="cert-bar-track">
                <div 
                  className={`cert-bar-fill ${item.status}`} 
                  style={{ width: `${item.pct}%`, background: item.status === 'warning' ? 'var(--amber)' : undefined }}
                ></div>
              </div>
              <div className="cert-bar-pct" style={{ color: item.status === 'urgent' ? 'var(--red)' : undefined }}>
                {item.labelPct}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
