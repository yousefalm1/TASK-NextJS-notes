import TopicInput from "./TopicInput"

function TopicInputList({ topics, setTopics }) {
  const handleTopicChange = (e, index) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = e.target.value;
    setTopics(updatedTopics);
  };
  const handleAddTopic = () => {
    setTopics([...topics, ""]);
  };

  const handleRemoveTopic = (index) => {
    const updatedTopics = [...topics];
    updatedTopics.splice(index, 1);
    setTopics(updatedTopics);
  };


  const topicInputs = topics.map((topic, index) => (
    <TopicInput
      key={topic + index}
      topic={topic}
      index={index}
      handleTopicChange={handleTopicChange}
      handleRemoveTopic={handleRemoveTopic} />
  ))

  return (
    <>
      {topicInputs}
      <button
        type="button"
        onClick={handleAddTopic}
        className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Add Topic
      </button>
    </>
  )
}

export default TopicInputList