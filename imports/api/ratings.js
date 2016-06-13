import { Mongo } from 'meteor/mongo';
import { Beans } from './beans';

const Ratings = new Mongo.Collection("ratings");

Ratings.attachSchema(new SimpleSchema({
	score: {
		type: Number,
        label: 'Rating'    
    },
    type: {
        type: String,
        label: 'Type',
        max: 30
    },
    bean: {
        type: Beans,
        label: 'Bean',
    },
    lastMod: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate || this.isInsert || this.isUpsert) {
                return new Date();
            }
        },
        optional: true
    }
}));

export default Ratings;