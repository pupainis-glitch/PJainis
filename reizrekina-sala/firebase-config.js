// Firebase konfigurācija (projekts BB-layer, web lietotne "sala").
// Šīs web atslēgas nav slepenas — datus aizsargā firestore.rules.
export const firebaseConfig = {
  apiKey: "AIzaSyAZDSoU6OOGpxmEFZeEwlO7bfRnhQruNx0",
  authDomain: "bb-layer.firebaseapp.com",
  projectId: "bb-layer",
  storageBucket: "bb-layer.firebasestorage.app",
  messagingSenderId: "56599651442",
  appId: "1:56599651442:web:96f2bfa0d4304966238eeb",
  measurementId: "G-L02HYGQ38P"
};

// Tikai šis e-pasts var atvērt admina paneli (admin.html).
// Tas pats e-pasts ir ierakstīts arī firestore.rules — ja maini, maini abās vietās.
export const ADMIN_EMAIL = "pupainis@gmail.com";
