# CodeNest EmailJS beállítás

Az új EmailJS-fiók tulajdonosa: `info.codenest.hu@gmail.com`.

## 1. Email service

Csatlakoztasd a Gmail-fiókot az **Email Services** oldalon, majd futtasd a **Test Service** tesztet.

## 2. Belső értesítési sablon

- Név: `CodeNest Contact Notification`
- To Email: `info.codenest.hu@gmail.com`
- From Name: `CodeNest weboldal`
- Reply-To: `{{reply_to}}`
- Subject: `Új megkeresés: {{from_name}} – {{project_label}}`
- Content: másold be a `codenest-contact-notification.html` teljes tartalmát a Code Editorba.

## 3. Automatikus válasz sablon

- Név: `CodeNest Contact Auto-Reply`
- To Email: `{{from_email}}`
- From Name: `CodeNest`
- Reply-To: `info.codenest.hu@gmail.com`
- Subject: `Megkaptuk megkeresését – CodeNest`
- Content: másold be a `codenest-contact-auto-reply.html` teljes tartalmát a Code Editorba.

Az Auto-Reply sablon **Settings** fülén:

- **Do not save private data:** bekapcsolva
- **Allow unsubscribing from emails:** kikapcsolva
- **Enable reCAPTCHA V2 verification:** kikapcsolva
- **Enable Google Analytics tracking:** kikapcsolva

Az **Attachments** fülön ne adj hozzá fájlt, mert a sablon a codenest.hu nyilvánosan elérhető képeit használja. A **Contacts** fülön a kontaktmentés maradjon kikapcsolva, mert az űrlap nem marketing-feliratkozás.

Az Auto-Reply sablon saját **Auto-Reply** fülén ne kapcsolj hozzá további sablont.

## 4. Weboldali azonosítók

Az új fiókból másold ki ezt a négy értéket, majd írd át őket a `script.js` EmailJS config blokkjában:

- Public Key → `EMAILJS_PUBLIC_KEY`
- Gmail Service ID → `EMAILJS_SERVICE_ID`
- belső értesítési Template ID → `EMAILJS_TEMPLATE_ID`

Ezután nyisd meg a belső értesítési sablont, az **Auto-Reply** fülön válaszd ki a `CodeNest Contact Auto-Reply` linked template-et, majd mentsd el. Az automatikus válasz Template ID-ját nem kell a JavaScriptben megadni.

Végül küldj egy valódi tesztet a codenest.hu űrlapjáról. A belső levélnek azonnal, az automatikus válasznak körülbelül egy másodperccel később kell megérkeznie.
