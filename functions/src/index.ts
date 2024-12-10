// Start writing functions
// https://firebase.google.com/docs/functions/typescript
import * as functions from 'firebase-functions/v2';
import * as admin from 'firebase-admin';
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

admin.initializeApp();
interface TriggerEventRequest {
  message: string;
}

export const triggerEvent = functions.https.onCall((data: any, context) => {
  const requestData: TriggerEventRequest = data;

  if (!requestData.message) {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a message.');
  }

  const message: string = requestData.message;

  // כאן תוכלי להוסיף לוגיקה לשליחת האירוע או המידע למכשירים אחרים
  console.log('Event triggered with message:', message);

  // החזרת תשובה ללקוח
  return { success: true, message: 'Event processed' };
});
