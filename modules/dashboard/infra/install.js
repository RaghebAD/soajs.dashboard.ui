'use strict';

let infraNav = [
	{
		'id': 'infra-providers',
		'label': 'Settings',
		'checkPermission': {
			'service': 'dashboard',
			'route': '/infra',
			'method': 'get'
		},
		'url': '#/infra',
		'tplPath': 'modules/dashboard/infra/main/directives/list.tmpl',
		'icon': 'cog',
		'pillar': {
			'name': 'infra',
			'label': "Infrastructure",
			'position': 0
		},
		'mainMenu': true,
		'tracker': true,
		'order': 1,
		'scripts': ['modules/dashboard/infra/config.js', 'modules/dashboard/infra/_services/infra.js', 'modules/dashboard/infra/main/controller.js'],
		'ancestor': [translation.home[LANG]]
	},
	{
		'id': 'infra-templates',
		'label': 'Infra As Code Templates',
		'checkPermission': {
			'service': 'dashboard',
			'route': '/infra',
			'method': 'get'
		},
		'url': '#/infra-templates',
		'tplPath': 'modules/dashboard/infra/iac/directives/list.tmpl',
		'icon': 'file-text',
		'pillar': {
			'name': 'infra',
			'label': "Infrastructure",
			'position': 0
		},
		'hideMe': true,
		'mainMenu': true,
		'tracker': true,
		'order': 2,
		"fallbackLocation": "#/infra",
		'scripts': ['modules/dashboard/infra/config.js', 'modules/dashboard/infra/iac/config.js', 'modules/dashboard/infra/_services/infra.js', 'modules/dashboard/infra/iac/services/infra.js', 'modules/dashboard/infra/iac/controller.js'],
		'ancestor': [translation.home[LANG]]
	},
	{
		'id': 'infra-deployments',
		'label': 'Deployments',
		'checkPermission': {
			'service': 'dashboard',
			'route': '/infra',
			'method': 'get'
		},
		'url': '#/infra-deployments',
		'tplPath': 'modules/dashboard/infra/deployments/directives/list.tmpl',
		'icon': 'codepen',
		'pillar': {
			'name': 'infra',
			'label': "Infrastructure",
			'position': 0
		},
		'hideMe': true,
		'mainMenu': true,
		'tracker': true,
		'order': 3,
		"fallbackLocation": "#/infra",
		'scripts': ['modules/dashboard/infra/config.js', 'modules/dashboard/infra/deployments/config.js', 'modules/dashboard/infra/_services/infra.js', 'modules/dashboard/infra/deployments/controller.js'],
		'ancestor': [translation.home[LANG]]
	},
	{
		'id': 'infra-groups',
		'label': 'Resource Groups',
		'checkPermission': {
			'service': 'dashboard',
			'route': '/infra',
			'method': 'get'
		},
		'url': '#/infra-groups',
		'tplPath': 'modules/dashboard/infra/groups/directives/list.tmpl',
		'icon': 'make-group',
		'pillar': {
			'name': 'infra',
			'label': "Infrastructure",
			'position': 0
		},
		'hideMe': true,
		'mainMenu': true,
		'tracker': true,
		'order': 4,
		"fallbackLocation": "#/infra",
		'scripts': [
			'modules/dashboard/infra/config.js',
			'modules/dashboard/infra/groups/config.js',
			'modules/dashboard/infra/_services/infra.js',
			'modules/dashboard/infra/groups/services/groups.js',
			'modules/dashboard/infra/groups/controller.js',
			'/modules/dashboard/infra/_drivers/azure/services/groups.js'
		],
		'ancestor': [translation.home[LANG]]
	},
	{
		'id': 'infra-networks',
		'label': 'Networks',
		'checkPermission': {
			'service': 'dashboard',
			'route': '/infra',
			'method': 'get'
		},
		'url': '#/infra-networks',
		'tplPath': 'modules/dashboard/infra/network/directives/list.tmpl',
		'icon': 'connection',
		'pillar': {
			'name': 'infra',
			'label': "Infrastructure",
			'position': 0
		},
		'hideMe': true,
		'mainMenu': true,
		'tracker': true,
		'order': 5,
		"fallbackLocation": "#/infra",
		'scripts': [
			'modules/dashboard/infra/config.js',
			'modules/dashboard/infra/network/config.js',
			'modules/dashboard/infra/_services/infra.js',
			'modules/dashboard/infra/network/services/network.js',
			'modules/dashboard/infra/network/controller.js',
			'/modules/dashboard/infra/_drivers/azure/services/network.js',
			'/modules/dashboard/infra/_drivers/aws/services/network.js'
		],
		'ancestor': [translation.home[LANG]]
	},
	{
		'id': 'infra-firewall',
		'label': 'Firewall',
		'checkPermission': {
			'service': 'dashboard',
			'route': '/infra',
			'method': 'get'
		},
		'url': '#/infra-firewall',
		'tplPath': 'modules/dashboard/infra/firewall/directives/list.tmpl',
		'icon': 'shield',
		'pillar': {
			'name': 'infra',
			'label': "Infrastructure",
			'position': 0
		},
		'hideMe': true,
		'mainMenu': true,
		'tracker': true,
		'order': 6,
		"fallbackLocation": "#/infra",
		'scripts': [
			'modules/dashboard/infra/config.js',
			'modules/dashboard/infra/firewall/config.js',
			'modules/dashboard/infra/_services/infra.js',
			'modules/dashboard/infra/firewall/services/firewall.js',
			'modules/dashboard/infra/firewall/controller.js',
			'/modules/dashboard/infra/_drivers/azure/services/firewall.js',
			'/modules/dashboard/infra/_drivers/aws/services/firewall.js'
		],
		'ancestor': [translation.home[LANG]]
	},
	{
		'id': 'infra-lb',
		'label': 'Load Balancers',
		'checkPermission': {
			'service': 'dashboard',
			'route': '/infra',
			'method': 'get'
		},
		'url': '#/infra-lb',
		'tplPath': 'modules/dashboard/infra/loadBalancer/directives/list.tmpl',
		'icon': 'tree',
		'pillar': {
			'name': 'infra',
			'label': "Infrastructure",
			'position': 0
		},
		'hideMe': true,
		'mainMenu': true,
		'tracker': true,
		'order': 7,
		"fallbackLocation": "#/infra",
		'scripts': [
			'modules/dashboard/infra/config.js',
			'modules/dashboard/infra/loadBalancer/config.js',
			'modules/dashboard/infra/_services/infra.js',
			'modules/dashboard/infra/loadBalancer/services/lb.js',
			'modules/dashboard/infra/loadBalancer/controller.js',
			'/modules/dashboard/infra/_drivers/azure/services/loadBalancer.js',
			'/modules/dashboard/infra/_drivers/aws/services/loadBalancer.js'
		],
		'ancestor': [translation.home[LANG]]
	},
	{
		'id': 'infra-ip',
		'label': 'Public IP Addresses',
		'checkPermission': {
			'service': 'dashboard',
			'route': '/infra',
			'method': 'get'
		},
		'url': '#/infra-ip',
		'tplPath': 'modules/dashboard/infra/ip/directives/list.tmpl',
		'icon': 'power-cord',
		'pillar': {
			'name': 'infra',
			'label': "Infrastructure",
			'position': 0
		},
		'hideMe': true,
		'mainMenu': true,
		'tracker': true,
		'order': 8,
		"fallbackLocation": "#/infra",
		'scripts': [
			'modules/dashboard/infra/config.js',
			'modules/dashboard/infra/ip/config.js',
			'modules/dashboard/infra/_services/infra.js',
			'modules/dashboard/infra/ip/services/ip.js',
			'modules/dashboard/infra/ip/controller.js',
			'/modules/dashboard/infra/_drivers/azure/services/ip.js',
			'/modules/dashboard/infra/_drivers/aws/services/ip.js'
		],
		'ancestor': [translation.home[LANG]]
	},
	{
		'id': 'infra-keyPairs',
		'label': 'Key Pairs',
		'checkPermission': {
			'service': 'dashboard',
			'route': '/infra',
			'method': 'get'
		},
		'url': '#/infra-keyPairs',
		'tplPath': 'modules/dashboard/infra/keyPair/directives/list.tmpl',
		'icon': 'key',
		'pillar': {
			'name': 'infra',
			'label': "Infrastructure",
			'position': 0
		},
		'hideMe': true,
		'mainMenu': true,
		'tracker': true,
		'order': 9,
		"fallbackLocation": "#/infra",
		'scripts': [
			'modules/dashboard/infra/config.js',
			'modules/dashboard/infra/keyPair/config.js',
			'modules/dashboard/infra/_services/infra.js',
			'modules/dashboard/infra/keyPair/services/keyPair.js',
			'modules/dashboard/infra/keyPair/controller.js',
			'/modules/dashboard/infra/_drivers/aws/services/keyPair.js'
		],
		'ancestor': [translation.home[LANG]]
	},
	{
		'id': 'infra-certificates',
		'label': 'Certificates',
		'checkPermission': {
			'service': 'dashboard',
			'route': '/infra',
			'method': 'get'
		},
		'url': '#/infra-certificates',
		'tplPath': 'modules/dashboard/infra/certificate/directives/list.tmpl',
		'icon': 'profile',
		'pillar': {
			'name': 'infra',
			'label': "Infrastructure",
			'position': 0
		},
		'hideMe': true,
		'mainMenu': true,
		'tracker': true,
		'order': 10,
		"fallbackLocation": "#/infra",
		'scripts': [
			'modules/dashboard/infra/config.js',
			'modules/dashboard/infra/certificate/config.js',
			'modules/dashboard/infra/_services/infra.js',
			'modules/dashboard/infra/certificate/services/certificate.js',
			'modules/dashboard/infra/certificate/controller.js',
			'/modules/dashboard/infra/_drivers/aws/services/certificate.js'
		],
		'ancestor': [translation.home[LANG]]
	}
];

navigation = navigation.concat(infraNav);
