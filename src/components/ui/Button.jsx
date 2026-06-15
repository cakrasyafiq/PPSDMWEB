export default function Button({ variant = 'primary', size = '', className = '', children, ...props }) {
  const sizeClass = size ? `btn-${size}` : '';
  const variantClass = variant ? `btn-${variant}` : '';
  return (
    <button className={`btn ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
