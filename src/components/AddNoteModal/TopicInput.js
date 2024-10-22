function TopicInput({
  topic,
  index,
  handleTopicChange,
  handleRemoveTopic
}) {
  return (
    <div className="flex items-center mb-2">
      <input
        type="text"
        value={topic}
        onChange={(e) => handleTopicChange(e, index)}
        className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
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