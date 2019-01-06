require('babel-register')({
    presets: [ 'env' ]
})

import mongoose from 'mongoose';
import User from './models/user';

const users = [
	{
		username: 'loliwarder',
		password: 'lolicon',
		avg: [146,62,86],
		healthHandles: {
			'9/7/2018': [166,72,77],
			'9/12/2018': [157,62,86],
			'9/16/2018': [156,93,79],
		
		},
		intervention: ["Followed Breakfast Plan","Cardio Movement","8 Glasses of Water","3 Servings of Veggies","No High Sodium Snacks"],
	},
	{
		username: 'Abree',
		password: 'abree123',
		avg: [136,73,68],
		healthHandles: {
			'9/7/2018': [166,72,77],
			'9/12/2018': [157,62,86],
			'9/16/2018': [156,93,79],
		
		},
		intervention: ["Followed Lunch Plan","Cardio Movement","5 Glasses of Water","2 Servings of Veggies","No Sodium Snacks"],
	},
	{
		username: 'andyyankai',
		password: 'dota2',
		avg: [155,78,73],
		healthHandles: {
			'9/7/2018': [166,72,77],
			'9/12/2018': [157,62,86],
			'9/16/2018': [156,93,79],
		
		},
		intervention: ["Followed Dinner Plan","Cardio Movement","3 Glasses of Water","1 Servings of Veggies","High Sodium Snacks"],
	},
];

mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true });

// Go through each user
users.map(data => {
  // Initialize a model with movie data
  const user = new User(data);
  // and save it into the database
  user.save();
});
