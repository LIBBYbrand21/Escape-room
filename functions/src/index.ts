// Start writing functions
// https://firebase.google.com/docs/functions/typescript
import * as functions from "firebase-functions/v2";
import * as logger from "firebase-functions/logger";
import {initializeApp} from "firebase-admin/app";

initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

interface TriggerEventRequest {
  message: string;
}

export const triggerEvent = functions.https.onCall((data: any, context) => {
  const requestData: TriggerEventRequest = data;
  if (!requestData.message) {
    throw new functions.https.HttpsError("invalid-argument", "message.");
  }
  const message: string = requestData.message;
  // כאן תוכלי להוסיף לוגיקה לשליחת האירוע או המידע למכשירים אחרים
  console.log(message);
  // החזרת תשובה ללקוח
  return {success: true, message: "Event processed"};
});
