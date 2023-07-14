import React from 'react';
import EventList from '../EventList';
import { mockData } from '../mock-data';
import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import App from "../App";

describe('<EventList /> component', () => {
  test('renders correct number of events', async () => {
    const EventListComponent = render(<EventList events={[{}, {}, {}, {}]} />);
    const allEvents = await getEvents(); 
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });
});
describe('<EventList /> integration', () => {
  test('renders a list of 32 events when the app is mounted and rendered', async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(32);
    });
  });
});
