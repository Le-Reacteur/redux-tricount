import React from 'react';
import { Panels } from '../components/Panels';
import { Panel } from '../components/Panel';
import { Card } from '../components/Card';
import { Expense } from '../components/Expense';
import { List } from '../components/List';

export const Starter = () => (
  <Panels>
    <Panel>
      <Card title="Expenses">
        <List>
          <Expense amount={12.45} description={'An expense for the demo'} />
          <Expense amount={34} description={'An other expense'} />
          <Expense amount={25} description={'This is quite expensive'} />
        </List>
      </Card>
    </Panel>
  </Panels>
);
