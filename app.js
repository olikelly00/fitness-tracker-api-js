import express from 'express';
import helmet from 'helmet';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

import {
    getAllActivities,
    getActivitiesByUserID,
    getActivitiesByActivityID,
    addNewActivity,
    updateActivity,
    deleteActivityById
} from "./models/activitiesFunctions.js";

app.use(express.json())

app.use(helmet());



/* 
This handler function sets up a welcome message to display on our landing page
*/

app.get('/', (req, res) => {
    res.send("Hello world! Welcome to TrackIt!")
});



/* 
This listener tells our Express.js app to start listening for incoming requests on a specific port.
*/

app.listen(port, () => {
    console.log(`We are now listening on port ${port}`)
})



/* 
This handler function returns either:
• the array of all activities 
• an error message including a status code and explanation 
*/


app.get("/activities", async (req, res) => {
    try {
        const payload = await getAllActivities();
        res.status(200).json({
            "success": true,
            "payload": payload
        });
    } catch (error) {
        res.status(404).json({
            "error": error.message
        });
    }
});


/* 
This handler function takes an user ID from the callers's input, passes it into the getActivitiesByUserID function, and returns either:
• the array containing the activity associated with that user id to the function caller 
• an error message including a status code and explanation 
*/

app.get("/activities/user/:id", async (req, res) => {
    const id = req.params.id; // id from reqest param's object
    try {
        const payload = await getActivitiesByUserID(id);
        res.status(200).json({
            "success": true,
            "payload": payload
        });
    } catch (error) {
        res.status(404).json({
            "error": error.message
        });
    }
});



/* 
This handler function takes an activity ID from the callers's input, passes it into the getActivitiesByActivityID function, and returns either:
• the array containing the activity associated with that activity id to the function caller 
• an error message including a status code and explanation 
*/

app.get("/activities/:id", async (req, res) => {
    //const { id } = req.params;
    const id = req.params.id; // id from reqest param's object
    try {
        const payload = await getActivitiesByActivityID(id);
        res.status(200).json({
            "success": true,
            "payload": payload
        });
    } catch (error) {
        res.status(404).json({
            "error": error.message
        });
    }
});


/* 
This handler function takes a new activity object from the callers's input. Then, it adds a user id, an activity id and a timestamp, and passes it into the addNewActivity function. It returns either:
 returns either:
• a success message with the newly added activity object
• an error message including a status code and explanation 
*/

app.post("/activities", async (req, res) => {
    const newActivity = req.body
    const activity = {
        user_id: uuidv4(),
        id: uuidv4(),
        activity_submitted: Date.now(),
        ...newActivity,
    }
    try {
        const payload = await addNewActivity(activity);
        res.status(200).json({
            "success": true,
            "new_activity": payload
        });
    } catch (error) {
        res.status(404).json({
            "error": error.message
        });
    }
});



/* 
This handler function takes an existing activity object from the callers's input, passes it into the updateActivity function, and returns either:
• a success message with the newly updated activity object
• an error message including a status code and explanation 
*/

app.put("/activities", async (req, res) => {
    const updates = req.body
    try {
        const payload = await updateActivity(updates);
        res.status(200).json({
            "success": true,
            "new_activity": payload
        });
    } catch (error) {
        res.status(404).json({
            "error": error.message
        });
    }
});


/* 
This handler function takes a user ID from the callers's input, passes it into the deleteActivityID function, and returns
either:
• the deleted activity associated with that id
• an error message including a status code and explanation 
*/

app.delete("/activities/:id", async (req, res) => {
    const id = req.params.id; // id from reqest param's object
    try {
        const payload = await deleteActivityById(id);
        res.status(200).json({
            "success": true,
            "payload": payload
        });
    } catch (error) {
        res.status(404).json({
            "error": error.message
        });
    }
});


/*  To run locally, use this URL - http://localhost:3000 */
