import { createRoutesStub } from 'react-router';
import { render, screen, waitFor } from '@testing-library/react';
import Index from '../../app/routes/_index';

test('renders loader data', async () => {
  const RemixStub = createRoutesStub([
    {
      path: '/',
      Component: Index,
    },
  ]);

  render(<RemixStub />);

  await waitFor(() => screen.findByText('Hello there,'));
});
