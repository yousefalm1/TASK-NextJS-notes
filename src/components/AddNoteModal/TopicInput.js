import Input from "../Input"

function TopicInput({
  index,
  handleRemoveTopic
}) {
  return (
    <div className="flex items-center mb-2">
      <Input type="text" name="topic" required />
      <button
        type="button"
        onClick={() => handleRemoveTopic(index)}
        className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Remove
      </button>
    </div>
  )
}

export default TopicInput