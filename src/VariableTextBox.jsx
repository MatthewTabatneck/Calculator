export function VariableTextBox({ label, value, onChange }) {
  return (
    <div className="Variable1">
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
