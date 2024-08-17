export function VariableTextBox({ className, label, value, onChange }) {
  return (
    <div className={className}>
      <label htmlFor="item">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="number"
        id="item"
      />
    </div>
  );
}
