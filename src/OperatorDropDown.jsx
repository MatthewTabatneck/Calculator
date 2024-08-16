export function OperatorDropDown({ value, onChange }) {
  return (
    <div>
      <label htmlFor="dropdown">Operator?</label>
      <select
        id="dropdown"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="null"></option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
    </div>
  );
}
