import User from '../models/user';
import moment from 'moment';

export const index = (req, res, next) => {
  User.find().lean().exec((err, users) => res.json(
    { users: users.map(user => ({
      ...user,
    }))}
  ));
};
