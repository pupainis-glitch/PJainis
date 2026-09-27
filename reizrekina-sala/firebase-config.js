// Firebase konfigurācija.
// Ielīmē šeit vērtības no Firebase konsoles:
// Project settings → General → Your apps → Web app → SDK setup and configuration → Config
export const firebaseConfig = {
  apiKey: "IELĪMĒ_ŠEIT",
  authDomain: "IELĪMĒ_ŠEIT.firebaseapp.com",
  projectId: "IELĪMĒ_ŠEIT",
  storageBucket: "IELĪMĒ_ŠEIT.appspot.com",
  messagingSenderId: "IELĪMĒ_ŠEIT",
  appId: "IELĪMĒ_ŠEIT"
};

// Tikai šis e-pasts var atvērt admina paneli (admin.html).
// Tas pats e-pasts ir ierakstīts arī firestore.rules — ja maini, maini abās vietās.
export const ADMIN_EMAIL = "pupainis@gmail.com";
