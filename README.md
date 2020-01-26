# IAD-Project-SOHDA-KR-APP--BackEnd
API for IAD Project, using MongoDb and NodeJs

There is one Database named as SodhaKarDB which contains three 

Collections 

      1) User  
      2) Ad  
      3) Chat
      

#Accessing User Collection

Request Type: POST ....................//Add A User In DataBase

Url: localhost:4000/api/user/

Body Format:

      {
	    "name": "Vishal",
	    "user_name": "vishal321",
	    "password": "abc",
	    "ad_id":[],      
	    "chat_id":[]
      }
      
      
Request Type: POST ....................//Add an Ad id in a user's document

Url: localhost:4000/api/user/add_ad_id/:id

Body Format:

      {
	    "ad_id": "abcdefg"
      }
      
Request Type: POST ....................//Delete an Ad id from a user's document

Url: localhost:4000/api/user/add_ad_id/:id

Body Format:

      {
	    "ad_id": "abcdefg"
      }
      
Request Type: POST ....................//Add an Chat id in a user's document

Url: localhost:4000/api/user/add_chat_id/:id

Body Format:

      {
	    "chat_id": "abcdefg"
      }
      
Request Type: POST ....................//Delete an Chat id from a user's document

Url: localhost:4000/api/user/delete_chat_id/:id

Body Format:

      {
	    "chat_id": "abcdefg"
      }



Request Type: GET ...................//Get all available users from Database

Url: localhost:4000/api/user/

Request Type: GET ...................//Get some particular user form Database

Url: localhost:4000/api/user/:id

Request Type: PUT ...................//Update some particular user in Database

Url: localhost:4000/api/user/:id

Body Format:

          {
           //Fields to be modified
          }
          
Request Type: DELETE ...................//Delete some particular user from Database

Url: localhost:4000/api/user/:id

	*****************************************************************************************************************
	
#Accessing Ad Collection

Request Type: POST ....................//Add ad in Ad Collection 

Url: localhost:4000/api/ad/

Body Format:

	  {
	    "name" : "Honda Civic 2013",
	    "category": "Vechile",
	    "price": 900000,
	    "user_id": "5e2bdfdbc14bed33c82c0581"
	  }


Request Type: GET ....................//Get all availavbe ads in Ad Collection 

Url: localhost:4000/api/ad/


Request Type: GET ....................//Get some particular ad from Ad Collection 

Url: localhost:4000/api/ad/:id


Request Type: PUT ....................//Update some particular ad in Ad Collection 

Url: localhost:4000/api/ad/:id

Body Format:

          {
           //Fields to be modified
          }
      
      
Request Type: DELETE ....................//Delete some particular ad from Ad Collection 

Url: localhost:4000/api/ad/:id


*****************************************************************************************************************
	
#Accessing Chat Collection

Request Type: POST ....................//Add Chat in chat Collection 

Url: localhost:4000/api/chat/

Body Format:

	  {
	    	"user1_id": "5e2bdfdbc14bed33c82c0581",
		"user2_id": "5e2bdfdbc14bed33c82c0584",
		"messages": [{
			"user_id":"5e2bdfdbc14bed33c82c0584",
			"message": "Hello"
		}]
	  }
	  
Request Type: POST ....................//Add message in chat document 

Url: localhost:4000/api/chat/add_message/:id

Body Format:

	  {
	    	"user_id":"5e2bdfdbc14bed33c82c0584",
		"message": "Hello"
	  }



Request Type: GET ....................//Get all availavbe chats in chat Collection 

Url: localhost:4000/api/chat/


Request Type: GET ....................//Get some particular chat from chat Collection 

Url: localhost:4000/api/chat/:id


Request Type: PUT ....................//Update some particular chat in chat Collection 

Url: localhost:4000/api/chat/:id

Body Format:

          {
           //Fields to be modified
          }
      
      
Request Type: DELETE ....................//Delete some particular chat from Chat Collection 

Url: localhost:4000/api/chat/:id
