export default function DeleteConfirmation({ onDelete, onCancel }) {
  return (
    <div>
      <h2>Are you sure you want to delete this place?</h2>
      <button
        onClick={onDelete} // This still triggers the delete action
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Confirm
      </button>
      <button
        onClick={onCancel} // This now triggers the cancel action (closes modal)
        className="bg-gray-500 text-white px-4 py-2 rounded-md"
      >
        Cancel
      </button>
    </div>
  );
}
