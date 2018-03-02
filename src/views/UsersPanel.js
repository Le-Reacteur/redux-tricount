import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Panel } from '../components/Panel';
import { Card } from '../components/Card';
import { User } from '../components/User';
import { List } from '../components/List';
import { CustomPropTypes, selectUsersWithSum } from '../selectors';
import { removeUser } from '../actions';
import { CenteredText } from '../components/CenteredText';
import { NewUserForm } from './NewUserForm';

const mapStateToProps = state => ({
  usersWithSum: selectUsersWithSum(state),
});

const mapDispatchToProps = {
  removeUser,
};

const UsersPanelRender = ({ usersWithSum, removeUser }) => {
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
      <NewUserForm />
    </Panel>
  );
};

UsersPanelRender.propTypes = {
  usersWithSum: CustomPropTypes.usersWithSum.isRequired,
  removeUser: PropTypes.func.isRequired,
};

export const UsersPanel = connect(mapStateToProps, mapDispatchToProps)(UsersPanelRender);
