var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope){

	var taskStatus = {
		NOTSTARTED: 0,
		INPROGRESS: 1,
		BLOCKED: 2,
		COMPLETE: 3,
	};

	$scope.name = "Stephanie"; // testing this right now
	$scope.newEvent = "";
	$scope.newEventDate = "";
	$scope.newEventTime = "";
	$scope.newEventLocation = "";

	$scope.tasks = [
		{
			text: "Create Presentation 1",
			taskStatus: taskStatus.INPROGRESS
		},
		{
			text: "Extra Credit Assignment, Problem 3",
			taskStatus: taskStatus.INPROGRESS
		}
	];

	$scope.complete = [];

	$scope.events = [
		{
			text: "Club Meeting",
			date: "4/10/2016",
			time: "8:00 AM",
			location: "Marston, Neon"
		},
		{
			text: "Tennis Practice",
			date: "4/10/2016",
			time: "6:00 PM",
			location: "Flavet Courts"
		}
	];

	$scope.helloWorld = function() {
		console.log("i hope this works");
		alert("hello world!");
	};

	// This function will "quick complete" a task on the dashboard
	// Delete the task from the list
	// Change the status of the task
	$scope.quickComplete = function(index) {
		var item = $scope.tasks[index];
		$scope.complete.push(item);
		$scope.tasks.splice(index, 1);
		console.log("Completed: " + item.text);
		console.log($scope.complete);
	};

	$scope.addTask = function() {
		// here we need to make sure to add this task to the tasks array
	};

	$scope.addEvent = function() {
		console.log("adding a new event");
		$scope.events.push({
			text: $scope.newEvent,
			date: $scope.newEventDate,
			time: $scope.newEventTime,
			location: $scope.newEventLocation
		});
		$scope.newEvent = "";
		$scope.newEventDate = "";
		$scope.newEventTime = "";
		$scope.newEventLocation = "";
	};
});
