// import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // const events = data.events;

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
    </Suspense>
    // <EventsList />
    // <EventsList events={events} />

    // <>
    //   <div style={{ textAlign: 'center' }}>
    //     {isLoading && <p>Loading...</p>}
    //     {error && <p>{error}</p>}
    //   </div>
    //   {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    // </>
  );
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch('http://localhost:8080/events');

  //     if (!response.ok) {
  //       setError('Fetching events failed.');
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}

// export async function loader() {
//   const response = await fetch('http://localhost:8080/events');

//   if (!response.ok) {
//     // return { isError: true, message: 'Could not fetch events.' };
//     // throw { message: 'Could not fetch events.' };
//     // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
//     return json(
//       { message: 'Could not fetch events.' },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     return response;
//     // const resData = await response.json();
//     // const res = new Response();
//     // return res;
//   }
// }

// import { Link } from 'react-router-dom';

// const DUMMY_EVENTS = [
//     {
//         id: 'e1',
//         title: 'Some event',
//     },
//     {
//         id: 'e2',
//         title: 'Another event'
//     }
// ]

// function EventsPage() {
//     return (
//         <>
//             <h1>EventsPage</h1>
//             <ul>
//                 {DUMMY_EVENTS.map(event =>
//                 <li key={event.id}>
//                     <Link to={event.id}>{event.title}</Link>
//                 </li>
//             )}
//             </ul>
//         </>
//     )
// }

// export default EventsPage;
