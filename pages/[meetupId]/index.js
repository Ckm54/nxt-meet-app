import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails(props) {
  return <MeetupDetail image={props.image} title={props.title} address={props.address} description={props.description}/>
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ]
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log("running")
  return {
    props: {
      meetupData: {
        image: "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500",
        id: meetupId,
        title: "First meetup",
        address: "some place 5, city nvgd",
        description: "This is our first meetup",
      }
    }
  }
}

export default MeetupDetails