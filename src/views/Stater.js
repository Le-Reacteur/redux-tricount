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
          <Expense amount={12.45} description={'An expense for the demo'} userColor={'black'} userName={'Anonymous'} />
          <Expense amount={34} description={'An other expense'} userColor={'black'} userName={'Anonymous'} />
          <Expense amount={25} description={'This is quite expensive'} userColor={'black'} userName={'Anonymous'} />
        </List>
      </Card>
    </Panel>
  </Panels>
);
