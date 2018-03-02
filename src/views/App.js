import React from 'react';
import { Panels } from '../components/Panels';
import { UsersPanel } from './UsersPanel';
import { ExpensesPanel } from './ExpensesPanel';

export const App = () => (
  <Panels>
    <UsersPanel />
    <ExpensesPanel />
  </Panels>
);
