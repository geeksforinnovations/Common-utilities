'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Pujari', [{
            firstName: 'prasad',
            lastName: 'sastry',
            middleName: 'lokesh',
            description: 'He is efficent and clearly knowns vedas',
            contactNo: '3108691600',
            address1: '1212 washington ave',
            address2: 'near high school',
            type: '',
            city: 'stCloud',
            state: 'MN',
            country: 'USA',
            timezone: 'CST',
            status: 'accepted',
            imageid: '',
            rating: '4',
            experience: '5',
            email: 'aksanudeep@gmail.com'
        },
        {
            firstName: 'john',
            lastName: 'sastry',
            middleName: 'lokesh',
            description: 'He is efficent and clearly knowns vedas',
            contactNo: '333333333',
            address1: '1212 washington ave',
            address2: 'near high school',
            type: '',
            city: 'stCloud',
            state: 'MN',
            country: 'USA',
            timezone: 'CST',
            status: 'requested',
            imageid: '',
            rating: '4',
            experience: '5',
            email: 'aksanudeep@gmail.com'

        },
        {
            firstName: 'Gopi',
            lastName: 'sharma',
            middleName: '',
            description: 'He is specialized in homas ',
            contactNo: '3108691600',
            address1: '122 godavari rd',
            address2: 'near high school',
            type: '',
            city: 'Hyderabad',
            state: 'TS',
            country: 'India',
            timezone: 'CST',
            status: 'accepted',
            imageid: '',
            rating: '4',
            experience: '15',
            email: 'krishayyagari4@gmail.com'
        },

        {
            firstName: 'karanam',
            lastName: 'sastry',
            middleName: '',
            description: 'He is efficent and clearly knowns vedas',
            contactNo: '5108691650',
            address1: '102 satya',
            address2: '',
            type: '',
            city: 'Ofallon',
            state: 'MO',
            country: 'USA',
            timezone: 'CST',
            status: 'accepted',
            imageid: '',
            rating: '4',
            experience: '5',
            email: 'vinay.ananthu77@gmail.com'
        }], {});

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Pujari', null, {});

    }
};



