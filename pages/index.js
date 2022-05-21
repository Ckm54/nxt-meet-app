import { useEffect, useState } from "react"

import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
    address: "Some-address 5, 12345, city",
    description: "This is a first meetup"
  },
  {
    id: "m2",
    title: "Second meetup",
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVldHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
    address: "Some-address 5, 12345, city",
    description: "This is a second meetup"
  }
]

function HomePage() {

  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    // send an http request to server to fetch some data
    setLoadedMeetups(DUMMY_MEETUPS)
  }, [])

  return <MeetupList meetups={loadedMeetups} />
}

export default HomePage