import React from 'react';
import { Panels } from '../components/Panels';
import { Panel } from '../components/Panel';
import { Card } from '../components/Card';
import { List } from '../components/List';
import { Expense } from '../components/Expense';

export const App = () => (
  <Panels>
    <Panel>
      <Card title="Expenses">
        <List>
          <Expense description="First expense" amount={10.5} />
          <Expense description="Second expense" amount={25} />
          <Expense description="Third expense" amount={42.42} />
        </List>
      </Card>
    </Panel>
  </Panels>
);
