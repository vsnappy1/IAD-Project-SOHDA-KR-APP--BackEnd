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


      
      
