# Welcome to app.js
## Authors: Jin Wang, Oli Kelly & Jonathan Hill

### Setup Instructions

1) Download Node
Follow this link: https://nodejs.org/en/download

To check this has been successful, check your current version by running

```
node -v
```

2) Install npm
In the command line, run 
```
npm install
```

3) Install express
In the command line, run

```
npm install express
```

4) Install helmet
```
npm install helmet
```

### Running application

In the command line, run

```
node app.js
```

###  Using TrackIt - overview of API endpoints

### 1\. Welcome Message

**Endpoint:** `/`

**Method:** `GET`

**Description:** Displays a welcome message on the landing page.

**Response:**

-   `200 OK` - Returns a welcome message.


`Hello world! Welcome to TrackIt!`

### 2\. Get All Activities 

**Endpoint:** `/activities`

**Method:** `GET`

**Description:** Retrieves an array of all activities.

**Responses:**

-   `200 OK` - Returns an array of activities.

```
    {
        "success": true,
        "payload": [...]
    }
```

-   `404 Not Found` - Returns an error message if no activities are found.

```
    {
        "error": "Error message"
    }

```

### 3\. Get Activities by User ID

**Endpoint:** `/activities/user/:id`

**Method:** `GET`

**Description:** Retrieves an array of activities associated with a given user ID.

**Parameters:**

-   `id` (path parameter) - The ID of the user.

**Responses:**

-   `200 OK` - Returns an array of activities.

```
    {
        "success": true,
        "payload": [...]
    }
```

-   `404 Not Found` - Returns an error message if the user ID is not found.

```
    {
        "error": "Error message"
    }

```

### 4\. Get Activity by Activity ID

**Endpoint:** `/activities/:id`

**Method:** `GET`

**Description:** Retrieves the activity associated with a given activity ID.

**Parameters:**

-   `id` (path parameter) - The ID of the activity.

**Responses:**

-   `200 OK` - Returns the activity object.


```
    {
        "success": true,
        "payload": {...}
    }
```

-   `404 Not Found` - Returns an error message if the activity ID is not found.

```
    {
        "error": "Error message"
    }
```

### 5\. Add New Activity

**Endpoint:** `/activities`

**Method:** `POST`

**Description:** Adds a new activity to the database. A user ID, activity ID, and timestamp are generated automatically.

**Request Body:**

-   An object representing the new activity (excluding `user_id`, `id`, and `activity_submitted` which are generated automatically).

```
    {
        "activity_name": "Running",
        "activity_duration": 30
    }
```

**Responses:**

-   `200 OK` - Returns a success message with the newly added activity object.

```
    {
        "success": true,
        "new_activity": {...}
    }
```

-   `404 Not Found` - Returns an error message if the activity cannot be added.


```
    {
        "error": "Error message"
    }
```

### 6\. Update Existing Activity

**Endpoint:** `/activities`

**Method:** `PUT`

**Description:** Updates an existing activity in the database.

**Request Body:**

-   An object representing the activity updates.


```
    {
        "id": "existing_activity_id",
        "activity_name": "Updated Running",
        "activity_duration": 45
    }

```
**Responses:**

-   `200 OK` - Returns a success message with the updated activity object.


```
    {
        "success": true,
        "new_activity": {...}
    }
```

-   `404 Not Found` - Returns an error message if the activity cannot be updated.


```



    {
        "error": "Error message"
    }
```
### 7\. Delete Existing Activity

**Endpoint:** `/activities/:id`

**Method:** `DELETE`

**Description:** Deletes an existing activity from the database.

**Parameters:**

-   `id` (path parameter) - The ID of the activity.

**Responses:**

-   `200 OK` - Returns the deleted activity object.


```
    {
        "success": true,
        "payload": {...}
    }
```

-   `404 Not Found` - Returns an error message if the activity ID is not found.

```
    {
        "error": "Error message"
    }
```
* * * * *

To run the application locally, use the following URL:


`http://localhost:3000`

Happy tracking with TrackIt!