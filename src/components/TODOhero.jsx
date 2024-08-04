import React from "react";

function TODOHero({ todos_completed, total_todos }) {
  return (
    <section className="todohero-section">
      <div>
        <p>Task Done</p>
        <p>Keep It Up</p>
      </div>
      <div>
        {todos_completed} / {total_todos}
      </div>
    </section>
  );
}

export default TODOHero;
