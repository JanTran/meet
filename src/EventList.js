import React, { Component } from 'react';
import Event from './Event'; // in src/EventList.js
import { render } from '@testing-library/react';
import EventList from './components/EventList';


describe('<EventList /> component', () => {
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });
  const EventList = ({ events }) => {
    return (
      <ul id="event-list">
        {events? events.map(event => <Event event={event} />): null}
      </ul>
    );
   }
});

export default EventList;




