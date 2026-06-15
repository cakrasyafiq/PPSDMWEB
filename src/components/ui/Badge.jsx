export default function Badge({ color = 'gray', children, className = '' }) {
  return (
    <span className={`badge ${color} ${className}`}>{children}</span>
  );
}
