import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, List } from "semantic-ui-react";
import "./App.css";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      const { data } = await axios.get("https://localhost:5001/api/Activities");

      setActivities(data);
    };

    getActivities();
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
