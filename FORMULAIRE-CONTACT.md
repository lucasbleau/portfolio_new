# 📧 Configuration du Formulaire de Contact

## ✅ Système Actuel : FormSubmit

Votre portfolio utilise maintenant **FormSubmit** (https://formsubmit.co), un service gratuit qui envoie les messages de contact directement à votre email **sans nécessiter de backend**.

## 🚀 Comment ça fonctionne ?

### Première utilisation (Important !)

**La première fois qu'une personne vous envoie un message**, FormSubmit vous enverra un **email de confirmation** à `bleaulucas7@gmail.com`. 

📌 **Vous DEVEZ cliquer sur le lien de confirmation** dans cet email pour activer le service.

### Après activation

Une fois confirmé, tous les messages futurs seront envoyés directement à votre boîte email sans intervention supplémentaire.

## 📝 Ce qui se passe quand quelqu'un vous contacte :

1. ✅ La personne remplit le formulaire sur votre portfolio
2. ✅ Elle clique sur "Envoyer le message"  
3. ✅ Le message est envoyé directement à `bleaulucas7@gmail.com`
4. ✅ Elle est redirigée vers la page `merci.html`
5. ✅ Après 5 secondes, elle revient automatiquement sur votre portfolio

## 📧 Format des emails que vous recevrez

Les emails auront le format suivant :

```
Sujet: Nouveau message depuis votre portfolio

name: [Nom de la personne]
email: [Email de la personne]
subject: [Sujet du message]
message: [Message complet]
```

## ⚙️ Configuration actuelle

Dans `index.html`, ligne 472 :
```html
<form action="https://formsubmit.co/bleaulucas7@gmail.com" method="POST" class="contact-form">
```

### Paramètres configurés :

- **`_subject`** : Titre de l'email = "Nouveau message depuis votre portfolio"
- **`_captcha`** : Désactivé (pas de captcha)
- **`_template`** : Format tableau pour une meilleure lisibilité
- **`_next`** : Redirection vers `merci.html` après envoi

## 🔧 Personnalisation

### Changer l'email de destination
Modifiez cette ligne dans `index.html` :
```html
<form action="https://formsubmit.co/VOTRE-EMAIL@gmail.com" method="POST">
```

### Activer le CAPTCHA (anti-spam)
Changez cette ligne dans `index.html` :
```html
<input type="hidden" name="_captcha" value="true">
```

### Personnaliser le sujet de l'email
Modifiez cette ligne dans `index.html` :
```html
<input type="hidden" name="_subject" value="Votre nouveau sujet">
```

## 🌐 Pour héberger votre portfolio en ligne

Si vous mettez votre portfolio sur un serveur web, changez la redirection :

```html
<input type="hidden" name="_next" value="https://votre-site.com/merci.html">
```

Actuellement configuré pour le chemin local :
```html
<input type="hidden" name="_next" value="file:///c:/Users/bleau/OneDrive/Bureau/Portfolio/merci.html">
```

## 📊 Avantages de FormSubmit

- ✅ **100% Gratuit**
- ✅ **Pas de backend nécessaire**
- ✅ **Pas d'inscription requise**
- ✅ **Emails illimités**
- ✅ **Protection anti-spam disponible**
- ✅ **Personnalisation facile**

## ⚠️ Limitations

- Le service nécessite une connexion internet
- Vous devez confirmer votre email la première fois
- Les emails sont envoyés via les serveurs de FormSubmit

## 🔗 Ressources

- Site officiel : https://formsubmit.co
- Documentation : https://formsubmit.co/help

---

**Développé pour Lucas Bleau** | Portfolio 2026
