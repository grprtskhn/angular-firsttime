var myApp = angular.module("myapp",[]);


/*Q1 alert "hello"*/
/*myApp.controller("alrt",function($scope){
	
	$scope.display = function(){
		alert("Hello Angular");
	}
	
});
*/

/*Q2 change square to circle*/

/*myApp.controller("changeShape", function($scope){
	
	$scope.x = "0px";
	$scope.shapeChange = function(){
		
		if($scope.x == "0px"){
			$scope.x = "200px";	
		}
		else
		{$scope.x = "0px";}
	}
	
});
*/





/*Q3 change the color of list and delete the list item*/

/*myApp.controller("ctrl1",function($scope){
	$scope.colors = ["yellow","green","blue","black","pink","red"];
	
	$scope.del = function(index){
	
	$scope.colors.splice(index,1);

	};
	
	$scope.addInput = function(){
		
		$scope.colors.push($scope.color);
	};
   
});*/


/*Q4 Traffic Light */

/*myApp.controller("trfc1",function($scope){
	
	$scope.lightColor = "redTrafficlight.png";
	
	$scope.toYellow = function(){
		
		$scope.lightColor = "yellowTrafficlight.png";
	};
	
$scope.toGreen = function(){
		
		$scope.lightColor = "greenlight.png";
	};

$scope.toRed = function(){
	
	$scope.lightColor = "redTrafficlight.png";
};
	
	
	
});*/

/*Q5 how to access array object*/

/*myApp.controller("accessobj",function($scope){
	
	$scope.grocery = [{"name": "Milk", "price": 4, "qty": 5, "soldOut": false},
	                {"name": "Yogurt", "price": 5, "qty": 10, "soldOut": true},
	                {"name": "Butter", "price": 10, "qty": 15, "soldOut": false},
	                {"name": "Creamer", "price": 11, "qty": 17, "soldOut": true},
	                {"name": "Juice", "price": 5, "qty": 14, "soldOut": true},
	];
	
});
*/

/*Q6 Reverse custom filters*/

/*myApp.filter('reverseS',function(){
	//make a function, input will be passed as parameter
	var my_func = function(input){
		//make changes and return variable
		return input+'s';
	};
	//once done return the function you made
	return my_func;
});*/

/*myApp.controller('cusFilt',function(){
});

myApp.filter("reverse", function() {
  return function(input) {
    return input.split('').reverse().join('');
  };


});	*/

/*Q7 First letter capital each word custom filters*/

/*myApp.controller("customFilt",function(){
});

myApp.filter("titleCase", function () {
	  return function (input) {
	    var words = input.split(" ");
	    for (var i = 0; i < words.length; i++) {
	      words[i] = words[i].toLowerCase(); // lower case everything to get rid of weird casing issues	
	      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	    }
	    return words.join(" ");
	  };
	});*/

/*Q8 edit the form */

/*myApp.controller("ctrl2",function($scope){
	$scope.persons = [
	               {
	            	   "First_Name":"John",
	            	   "Last_Name" :"Singh",
	            	   "ZipCode"   :"97838",
	            	   "Age"       : 31
	              		   
	               },
	               {
	            	   "First_Name":"Hira",
	            	   "Last_Name" :"Singh",
	            	   "ZipCode"   :"97838",
	            	   "Age"       : 29
	              		   
	               },
	               
	               {
	            	   "First_Name":"Mohan",
	            	   "Last_Name" :"Singh",
	            	   "ZipCode"   :"97838",
	            	   "Age"       : 30
	              		   
	               }
	              
	              ];
	
	$scope.saveChanges = function(){
		
		$scope.person;
		
	};
});*/

/*Q8 carasoul */

/*myApp.controller('MainCtrl', function ($scope) {
    $scope.slides = [
        'Images/a3.jpg',
        'Images/fileds_small_1.jpg',
        'Images/flower for C_P_ website _small file size_ _1 of 5_.jpg',
        'Images/small-mixed-flowers.jpg',
        'Images/images.jpg'
    ];
    $scope.pic = 0;
    $scope.prevSlide = function () {
        $scope.pic--;
    };

    $scope.nextSlide = function () {
        $scope.pic++;
    };

});
*/

/*Q9 Planets */

/*myApp.controller("planetController",function ($scope,$http) {
	$scope.planets = [];
	
	$http({url:"planets.json",method:"GET"})
	.success(function(resp){
		$scope.planets = resp.planetsArray;
	});*/
	
//$scope.planets = ["Neptune","Uranus","Saturn", "Jupiter",  "Mars",  "Earth",  "Venus",  "Mercury"];	
/*});
myApp.filter("planetSorter",function(){
		return function(input){
			//return input;
			var temp = [];
			temp.push(input[7],input[6],input[5],input[4],input[3],input[2],input[1],input[0]);
			//temp.push(input[1]);
			return temp;
		};
	
});*/

/*Q10 To do list */

myApp.controller("toDoCtrl1",function($scope){
		  $scope.todos = [];
		 
		  $scope.addTodo = function() {
		    $scope.todos.push({"text":$scope.todoText, "done":false});
		    $scope.todoText = '';
		  };
		 
		  $scope.deleteThis = function(input){
			  
			  $scope.todos.splice(input,1);  
		  }
		  
		  $scope.remaining = function() {
		    var count = 0;
		    angular.forEach($scope.todos, function(todo) {
		      count += todo.done ? 0 : 1;
		    });
		    return count;
		  };
		 
		  $scope.archive = function() {
		    var oldTodos = $scope.todos;
		    $scope.todos = [];
		    angular.forEach(oldTodos, function(todo) {
		      if (!todo.done) $scope.todos.push(todo);
		    });
		  };
		  
		  $scope.doneList = function() {
			    var doneTodos = $scope.todos;
			    $scope.todos = [];
			    angular.forEach(doneTodos, function(todo) {
			      if (todo.done) $scope.todos.push(todo);
			    });
			  };
			  
			  /*$scope.allTask = function() {
				    var doneTodos = $scope.todos;
				    $scope.todos = [];
				    angular.forEach(doneTodos, function(todo) {
				    $scope.todos.push(todo);
				    });
				  };
		  */
		  
		});






