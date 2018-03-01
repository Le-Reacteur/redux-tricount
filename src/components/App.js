import React from 'react';
import { Panels } from './Panels';
import { Panel } from './Panel';
import { Card } from './Card';
import { Button } from './Button';
import { ButtonContainer } from './ButtonContainer';
import { Expense } from './Expense';
import { User } from './User';
import { List } from './List';
import { Input } from './Input';
import { Select } from './Select';

const userColors = ['#2196F3', '#F44336', '#9C27B0', '#FF9800', '#009688', '#E91E63'];

export const App = () => (
  <Panels>
    <Panel>
      <Card title="Users">
        <List>
          <User name="Etienne" color={userColors[0]} sum={Math.random() * 1000 - 500} />
          <User name="Farid" color={userColors[1]} sum={Math.random() * 1000 - 500} />
          <User name="Lucas" color={userColors[2]} sum={Math.random() * 1000 - 500} />
          <User name="Rémi" color={userColors[3]} sum={Math.random() * 1000 - 500} />
        </List>
      </Card>
      <Card title="New Users">
        <Input placeholder="User name" />
      </Card>
      <ButtonContainer>
        <Button>Add User</Button>
      </ButtonContainer>
    </Panel>
    <Panel>
      <Card title="Expenses">
        <List>
          <Expense
            amount={Math.random() * 1000}
            description={'Small description'}
            date={new Date()}
            userColor={userColors[0]}
            userName="Etienne"
          />
          <Expense
            amount={Math.random() * 1000}
            description={'Not so small description that take two lines'}
            date={new Date()}
            userColor={userColors[1]}
            userName="Farid"
          />
          <Expense
            amount={Math.random() * 1000}
            description={'Small description'}
            date={new Date()}
            userColor={userColors[1]}
            userName="Farid"
          />
          <Expense
            amount={Math.random() * 1000}
            description={'Small description'}
            date={new Date()}
            userColor={userColors[1]}
            userName="Farid"
          />
          <Expense
            amount={Math.random() * 1000}
            description={'Small description'}
            date={new Date()}
            userColor={userColors[1]}
            userName="Farid"
          />
        </List>
      </Card>
      <Card title="New Expense">
        <Input placeholder="Description" />
        <Input placeholder="Amount" />
        <Select name="user" options={{ etienne: 'Etienne', yolo: 'Yolo', lucas: 'Lucas' }} label="User" />
      </Card>
      <ButtonContainer>
        <Button>Add Expense</Button>
      </ButtonContainer>
    </Panel>
  </Panels>
);

App.propTypes = {};
