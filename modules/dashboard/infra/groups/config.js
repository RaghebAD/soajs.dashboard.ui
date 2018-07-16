'use strict';

let infraGroupConfig = {
	permissions: {
		list: ['dashboard', '/infra', 'get'],
		removeGroup: ['dashboard', '/infra/extra', 'delete'],
		addGroup: ['dashboard', '/infra/extra', 'post'],
		editGroup: ['dashboard', '/infra/extra', 'put']
	},

	form: {
		addGroup: [
			{
				'name': 'name',
				'label': 'Name',
				'type': 'text',
				'value': "",
				'placeholder': 'My Template',
				'fieldMsg': 'Enter a name for your template',
				'required': true
			},
			{
				'name': 'description',
				'label': 'Description',
				'type': 'textarea',
				'value': "",
				'placeholder': 'My Template Description',
				'fieldMsg': 'Provide  a description for your template',
				'required': false
			},
			{
				'name': 'location',
				'label': 'Location',
				'type': 'select',
				'value': [],
				'fieldMsg': 'Select where to store this template.',
				'required': true
			}
		]
	},

	grid: {
		recordsPerPageArray: [5, 10, 50, 100],
		'columns': [
			{ 'label': 'Resource Group Name', 'field': 'name' },
			{'label': '', 'field': 'networks' },
			{'label': '', 'field': 'firewalls' },
			{'label': '', 'field': 'ips' },
			{'label': '', 'field': 'lbs' },
		],
		'leftActions': [],
		'topActions': [],
		'defaultSortField': '',
		'defaultLimit': 10
	},
};
