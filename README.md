# TestGCP
#Messinn - A Solution for Local Kitchens.

## Title : 
System requirement specification document for Mess Network.

## Team : 
Direct Users, Indirect users, business analyst, system architect, quality assurance team.


## Objective : 
Messinn - A Solution for Local Kitchens for project purpose in CDAC PG-DAC course.
It provides real-time updates along with the specifications about the mess network. Objective of meeting the requirements of mess owners as well as customers through single gateway using internet.


## Scope:
Customers will be able to locate nearby mess and also look the real time menu of mess. This system will allow customers to track mess along with other specifications on the system. 
Mess owners will be able to update the menu by login and also register new mess. Along with that all updates will be provided in real time.
Admin will be able to monitor all the processes and admin will be able to update and monitor data flowing through the system.

## Definitions: 
Portal: Mess Network Systems Solution
BOA : Body of Admins
PDA: Portable Device Application

## Functional requirements: -
Customers will be able to view the mess menu for the day along with it's location. All the charges and prices will also be available for the customer.
Registered customer will be able to like or give rating to any mess or specific dish, also they will be able to post photos of the same.
Customers will be able to pay for the meal or even apply for the mess via this platform.
Registered customers will also be able to request for some specific dish at particular mess.

Mess owners will be able to register themselves on the portal.
They will be able to enter other specific information about their mess which will be visible to customers.
Registered mess owners will be able to update the menu of the mess for all the meals available. 
Other specifications like location, special dish, menu and timings will also be shared on the platform.
Mess owners will be able to review the comments and demands of customers and upgrade their systems accordingly.


Admins can access Track record and data of customers and can check overall systems of all mess owners.
this data will help course admin in enhancing efficiency of system as well as structuring it.





## Non-Functional requirements: -
### Security
	Each admin will be able to access system  through authentication process. Who are you?
	System will provide access to the content, operations using Role based security (Authorization) (Permissions based on Role)
	System will automatically log off all users after some time due to inactiveness.
	System will block operations for inactive user and would redirect for authentication.
	System will internally maintain secure communication channel between Servers ( Web Servers, App Servers, database Server)
	Sensitive data will be always encrypted across communication.
	proper firewall will be used to protect servers from outside fishing, vulnerable attacks.


### Reliability
	The system will backup business data on regular basis and recover in short time duration to keep system operational
	Continuous updates are maintained and continuous mess management is done to keep system operational.
	During peak hours system will maintain same user experience by managing load balancing.

### Availability
	 uptime:   24* 7  available
	 99.999%

### Maintainability:
	A Commercial database software will be used to maintain System data Persistence.
	A readymade Web Server will be installed to host Mess network solutions (Web Site) for management of server capabilities.
	IT operations team will easily monitor and configure System usingmanagerial tools provided by Servers.
	Separate environment will be maintained for system for isolation in  production, testing, and development.

### Portability:
		
	  System will provide portable User Interface ( HTML, CSS, JS) through  which users will be able to access Mess network system.
	  System can be deployed to single server, multi server, to any OS, Cloud (Azure or AWS or GCP)

### Accessibility:
	only registered users will be able access portal after authentication.
	Admins  will be able to view daily, weekly, monthly, annual performance Growth through customized dashboard.
	Mess owners will be able to see their performance graph.

### Durability:
	  System will implement backup and recovery for retaining users data, assessment operation data over time.

### Efficiency:
During peak hours, system should able to handle maximum number of users with same response time

### Modularity:
	 System will be designed and developed using reusable, independent or dependent scenarios in the form of modules.
	 These modules will be loosely coupled and highly cohesive.

### Scalability:
	System will be able  to  provide  consistent user experience to users as well as visitors irrespective of load.

### Safety:
	
	Mess Network Management Portal will be secure from malicious attack, fishing.
	Mess Network Management Portal functionalities are protected from outside with proper firewall configuration.
	Mess Network Management Portal will be always kept updated with latest anti-virus software.
	Business data will be backed up periodically to ensure safety of data using incremental back up strategy.
	Role based security will be applied for Application data and operations accessibility.







