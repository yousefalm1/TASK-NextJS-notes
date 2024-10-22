import { useState } from "react";

import TopicInput from "./TopicInput"

function TopicInputList() {
  const [topics, setTopics] = useState([]);

  const handleAddTopic = () => {
    setTopics([...topics, ""]);
  };

  const handleRemoveTopic = (index) => {
    const updatedTopics = [...topics];
    updatedTopics.splice(index, 1);
    setTopics(updatedTopics);
  };

  const topicInputs = topics.map((_, index) => (
    <TopicInput
      key={index}
      index={index}
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