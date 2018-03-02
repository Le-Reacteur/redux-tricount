import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Panel } from '../components/Panel';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ButtonContainer } from '../components/ButtonContainer';
import { User } from '../components/User';
import { List } from '../components/List';
import { Input } from '../components/Input';
import { CustomPropTypes, selectUsersWithSum } from '../selectors';
import { extractDataFromSubmitEvent, clearFormFromSubmitEvent } from '../utils';
import { addUser, removeUser } from '../actions';
import { CenteredText } from '../components/CenteredText';

const mapStateToProps = state => ({
  usersWithSum: selectUsersWithSum(state),
});

const mapDispatchToProps = {
  addUser,
  removeUser,
};

const UsersPanelRender = ({ usersWithSum, addUser, removeUser }) => {
  const noUsers = usersWithSum.length === 0;
  return (
    <Panel>
      <Card title="Users">
        {noUsers ? (
          <CenteredText>Use the form below to create your first user</CenteredText>
        ) : (
          <List>
            {usersWithSum.map(user => (
              <User
                key={user.id}
                name={user.name}
                color={user.color}
                sum={user.sum}
                onRemove={() => removeUser(user.id)}
              />
            ))}
          </List>
        )}
      </Card>
      <form
        onSubmit={e => {
          e.preventDefault();
          const data = extractDataFromSubmitEvent(e);
          // Validate data
          if (!data.username) {
            alert('No name ?');
            return;
          }
          addUser(data.username);
          clearFormFromSubmitEvent(e);
        }}
      >
        <Card title="New User">
          <Input name="username" placeholder="User name" />
        </Card>
        <ButtonContainer>
          <Button submit>Add User</Button>
        </ButtonContainer>
      </form>
    </Panel>
  );
};

UsersPanelRender.propTypes = {
  usersWithSum: CustomPropTypes.usersWithSum.isRequired,
  addUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
};

export const UsersPanel = connect(mapStateToProps, mapDispatchToProps)(UsersPanelRender);
