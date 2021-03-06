"use strict";
var nodeSrv = soajsApp.components;
nodeSrv.service('nodeSrv', ['ngDataApi', '$timeout', '$modal', function (ngDataApi, $timeout, $modal) {
	
	/**
	 * Nodes Functions
	 * @param currentScope
	 */
	function listNodes(currentScope, cb) {
		getSendDataFromServer(currentScope, ngDataApi, {
			"method": "get",
			"routeName": "/dashboard/cloud/nodes/list",
			params: {
				env : currentScope.envCode.toLowerCase()
			}
		}, function (error, response) {
			if (error) {
				currentScope.displayAlert('danger', error.message);
			}
			else {
				delete response.soajsauth;
				currentScope.infraCloudProviders = response;
			}
		});
	}

	function scaleNodes(currentScope, providerInfo) {
		//call bridge, and request scaling an environment deployment
		let formEntries = environmentsConfig.providers[providerInfo.name][currentScope.envPlatform].ui.form.scale.entries;

		let workernumber = 0;
		let zonesList = [];
		providerInfo.nodes.forEach((oneNode) => {
			if(oneNode.spec.role === 'manager'){
				workernumber++;
			}
			if (oneNode.zone && zonesList.indexOf(oneNode.zone) === -1){
				zonesList.push(oneNode.zone)
			}
		});
		let zones = zonesList.length > 1 ? zonesList.length : 1;
		if (zones > 1){
			formEntries[0].fieldMsg += "(per zone)";
			formEntries[0].tooltip =  'Enter the number of Worker Node(s) per zone to scale your deployment to';
			formEntries[0].label +=  ' Per Zone';
		}
		var options = {
			timeout: $timeout,
			form: {
				"entries": formEntries
			},
			data: {
				"number": Math.ceil(workernumber/zones)
			},
			name: 'scaleNodes',
			label: 'Scale Node(s)',
			actions: [
				{
					'type': 'submit',
					'label': translation.submit[LANG],
					'btn': 'primary',
					'action': function (formData) {
						overlayLoading.show();
						getSendDataFromServer(currentScope, ngDataApi, {
							"method": "post",
							"routeName": "/dashboard/infra/cluster/scale",
							"params":{
								"id": providerInfo._id,
								"envCode": currentScope.envCode.toUpperCase(),
							},
							"data":{
								"number": formData.number
							}
						}, function (error) {
							overlayLoading.hide();
							if (error) {
								currentScope.form.displayAlert('danger', error.message);
							}
							else {
								currentScope.$parent.displayAlert('success', "Deployment Scaled Successfully, changes might take a few minutes.");
								currentScope.modalInstance.close();
								currentScope.form.formData = {};
								listNodes(currentScope);
							}
						});
					}
				},
				{
					'type': 'reset',
					'label': translation.cancel[LANG],
					'btn': 'danger',
					'action': function () {
						currentScope.modalInstance.dismiss('cancel');
						currentScope.form.formData = {};
					}
				}
			]
		};

		buildFormWithModal(currentScope, $modal, options);
	}
	
	function addNode(currentScope) {
		var formConfig = angular.copy(environmentsConfig.form.node);
		if (currentScope.envPlatform === 'kubernetes') {
			for (var i = formConfig.entries.length - 1; i >= 0; i--) {
				if (formConfig.entries[i].name === 'port' || formConfig.entries[i].name === 'role') {
					formConfig.entries.splice(i, 1);
				}
			}
		}
		
		var options = {
			timeout: $timeout,
			form: formConfig,
			name: 'addNode',
			label: 'Add New Node',
			actions: [
				{
					'type': 'submit',
					'label': translation.submit[LANG],
					'btn': 'primary',
					'action': function (formData) {
						var postData = {
							env: currentScope.envCode,
							host: formData.ip,
							port: formData.port,
							role: formData.role
						};
						
						overlayLoading.show();
						getSendDataFromServer(currentScope, ngDataApi, {
							"method": "post",
							"routeName": "/dashboard/cloud/nodes/add",
							"data": postData
						}, function (error, response) {
							overlayLoading.hide();
							currentScope.modalInstance.close();
							currentScope.form.formData = {};
							if (error) {
								currentScope.displayAlert('danger', error.message);
							}
							else {
								currentScope.displayAlert('success', 'Node added successfully');
								currentScope.listNodes(currentScope);
							}
						});
					}
				},
				{
					'type': 'reset',
					'label': translation.cancel[LANG],
					'btn': 'danger',
					'action': function () {
						currentScope.modalInstance.dismiss('cancel');
						currentScope.form.formData = {};
					}
				}
			]
		};
		
		buildFormWithModal(currentScope, $modal, options);
	}
	
	function removeNode(currentScope, node) {
		getSendDataFromServer(currentScope, ngDataApi, {
			"method": "delete",
			"routeName": "/dashboard/cloud/nodes/remove",
			"params": {
				env: currentScope.envCode,
				nodeId: node.id
			}
		}, function (error, response) {
			if (error) {
				currentScope.displayAlert('danger', error.message);
			}
			else {
				currentScope.displayAlert('success', 'Node removed successfully');
				currentScope.listNodes(currentScope);
			}
		});
	}
	
	function updateNode(currentScope, node, type, newStatus) {
		var params = {
			env: currentScope.envCode,
			nodeId: node.id
		};
		
		var postData = {
			type: type,
			value: newStatus
		};
		
		getSendDataFromServer(currentScope, ngDataApi, {
			"method": "put",
			"routeName": "/dashboard/cloud/nodes/update",
			params: params,
			data: postData
		}, function (error, response) {
			if (error) {
				currentScope.displayAlert('danger', error.message);
			}
			else {
				currentScope.displayAlert('success', 'Node updated successfully');
				currentScope.listNodes(currentScope);
			}
		});
	}
	
	return {
		'listNodes': listNodes,
		'addNode': addNode,
		'removeNode': removeNode,
		'updateNode': updateNode,
		'scaleNodes': scaleNodes
	};
}]);
