function TopicBadge({ topic }) {
  return (
    <span
      key={topic}
      className="inline-block bg-gray-600 text-gray-200 text-sm px-2 py-1 rounded-md mr-2 mb-2"
    >
      {topic}
    </span>
  )

}

export default TopicBadge