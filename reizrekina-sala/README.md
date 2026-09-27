# Reizrēķina Sala

Battle royale stila reizrēķina spēle ar Google pieslēgšanos un admina paneli.

- `index.html` — spēle
- `admin.html` — admina panelis (atveras tikai `ADMIN_EMAIL` kontam)
- `firebase-config.js` — Firebase atslēgas (jāaizpilda)
- `firestore.rules` — datubāzes drošības noteikumi

## Uzstādīšana (vienreiz, ~15 min)

### 1. Firebase projekts
1. Atver https://console.firebase.google.com → **Add project** → nosaukums `reizrekina-sala` → Google Analytics var izslēgt.
2. **Build → Authentication → Get started → Sign-in method → Google → Enable**. Norādi savu e-pastu kā support e-pastu, Save.
3. **Authentication → Settings → Authorized domains → Add domain**: `pupainis-glitch.github.io`
4. **Build → Firestore Database → Create database** → atrašanās vieta `eur3 (europe-west)` → **Start in production mode**.
5. **Firestore → Rules**: izdzēs visu un ielīmē `firestore.rules` saturu → **Publish**.
6. **Project settings (zobrats) → General → Your apps → Web (`</>`)** → nosaukums `sala` → Register. Nokopē `firebaseConfig` vērtības uz `firebase-config.js`.

> Firebase web atslēgas nav slepenas — tās drīkst būt publiskā repo. Datus aizsargā `firestore.rules`.

### 2. GitHub Pages
1. Repo → **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)`** → Save.
2. Pēc 1–2 min spēle būs pieejama:
   - Spēle: https://pupainis-glitch.github.io/PJainis/reizrekina-sala/
   - Admins: https://pupainis-glitch.github.io/PJainis/reizrekina-sala/admin.html

## Kādi dati tiek glabāti
Tikai spēlētāja Google vārds, profila bilde un spēles rezultāti (XP, monētas, raundi, kļūdas piemēros). E-pasta adrese netiek saglabāta datubāzē.
Bērniem līdz 13 gadiem pieslēgšanās jāveic ar vecāku ziņu un piekrišanu.
