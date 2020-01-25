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


      
      
