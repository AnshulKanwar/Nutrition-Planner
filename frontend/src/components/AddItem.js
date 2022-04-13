function AddItem({ input, handleChange }) {
  return (
    <div className="mb-12 max-w-lg mx-auto">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="w-full p-5 rounded-2xl outline-fuchsia-500 caret-fuchsia-700 font-semibold"
        placeholder="Add Food Item..."
      />
    </div>
  );
}

export default AddItem;
