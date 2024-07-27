import activities from "../libs/activities.js";

/* This function returns an array of all activities */

export async function getAllActivities() {
  return activities
};


/* This function returns an array of activities linked to a specific User ID */

export async function getActivitiesByUserID(number) {
  const resultList = [];

  for (let i = 0; i < activities.length; i++) {


    if (activities[i].user_id == number) {
      resultList.push(activities[i]);
    }
  }

  if (resultList.length === 0) {
    throw new Error(`No activity with User ID ${number} found.`);
  }
  return resultList;
};

/* This function returns an array containing a single activity linked to a specific Activity ID */

export async function getActivitiesByActivityID(number) {

  for (let i = 0; i < activities.length; i++) {

    if (activities[i].id == number) {
      const result = activities[i];
      return result;
    };
  };
  throw new Error(`No activity with Activity ID ${number} found.`);
};

/* This function adds a new activity to our database and returns the newly added activity */

export async function addNewActivity(newActivity) {
  activities.push(newActivity);
  return newActivity;
};

/* This function returns an existing activity with its properties updated according to the user's input */

export async function updateActivity(updates) {
  let index = null;
  const activityID = 'id' in updates;

  if (!activityID) {
    throw new Error(`You haven't given us an id.`);
  }
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].id == updates.id) {
      index = i;
    }
  }
  if (index === null) {
    throw new Error(`No activity ID with ${updates.id} found.`);
  }

  const activityType = 'activity_type' in updates;
  if (activityType) {
    activities[index].activity_type = updates.activity_type;
  }
  const activityDuration = 'activity_duration' in updates;
  if (activityDuration) {
    activities[index].activity_duration = updates.activity_duration;
  }
  activities[index].activity_submitted = Date.now();

  return activities[index];
};

/* This function deletes an existing activity with the specified id from the list and returns the deleted activity */

export async function deleteActivityById(id) {
  const findID = (act) => act.id == id;
  const index = activities.findIndex(findID);
  if (index === -1) {
    throw new Error(`No activity ID with ${id} found.`);
  };
  const [deletedActivity] = activities.splice(index, 1);
  return deletedActivity;
}




