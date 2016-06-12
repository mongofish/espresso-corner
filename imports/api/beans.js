import { Mongo } from 'meteor/mongo';

const Beans = new Mongo.Collection("beans");

Beans.attachSchema(new SimpleSchema({
	name: {
		type: String,
        label: 'Name',
        max: 60
    },
	description: {
		type: String,
        label: 'Description',
        max: 900
    },
	origins: {
		type: [String],
        label: 'Origins',
        optional: true
    },
    roast: {
        type: String,
        label: 'Roast',
        optional: true
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

export default Beans;

