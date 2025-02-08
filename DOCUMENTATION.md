# Documentation de thestevenexavier.com

Ce document offre une vue d'ensemble du projet, explique son architecture et fournit des instructions pour l'installation, le développement et le déploiement.

## Vue d'ensemble

**thestevenexavier.com** est un projet web basé sur Next.js. Il suit les meilleures pratiques pour le développement d'applications web modernes. Le projet a été initialisé avec `create-next-app` et utilise des fonctionnalités avancées telles que l'optimisation automatique des polices via `next/font`.

## Structure du projet

- **app/** : Dossier contenant les pages et la logique principale de l'application.
- **public/** : Dossier pour les ressources statiques (images, icônes, etc.).
- **pages/** (si présent) : Dossier pour les anciennes pages Next.js ou pour des configurations spécifiques.
- **node_modules/** : Dépendances du projet.
- **next.config.js / next.config.ts** : Fichier de configuration de Next.js.
- **tsconfig.json** : Configuration TypeScript (si le projet est en TypeScript).

## Installation

1. Cloner le dépôt :

   ```bash
   git clone <url_du_dépôt>
   cd thestevenexavier.com
   ```

2. Installer les dépendances :

   ```bash
   npm install
   # ou
   yarn install
   ```

## Développement

Pour démarrer le serveur de développement, exécutez :

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

### Points clés à noter

- **Hot Reloading** : Toute modification dans les fichiers sources entraînera un rechargement automatique de l'application.
- **Linting & Formatting** : Le projet utilise ESLint et possiblement Prettier pour maintenir une qualité de code cohérente. Consultez le fichier `.eslintrc.json` pour plus de détails.
- **Tests** : Si des tests existent, ils se trouvent généralement dans un dossier dédié comme `__tests__` ou via des commandes dans `package.json`.

## Déploiement

Le projet est prêt pour une mise en production sur Vercel, qui offre une intégration transparente pour les applications Next.js. Pour déployer manuellement, vous pouvez suivre ces étapes :

1. Créer un compte sur [Vercel](https://vercel.com/login).
2. Importer le dépôt via l'interface de Vercel.
3. Configurer les variables d'environnement si nécessaire.
4. Déployer l'application.

Pour plus d'informations, consultez la documentation officielle de [Next.js sur le déploiement](https://nextjs.org/docs/app/building-your-application/deploying).

## Technologies utilisées

- **Next.js** : Framework React pour le rendu côté serveur et la génération de sites statiques.
- **React** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- **Tailwind CSS** : Framework CSS pour le design rapide et réactif (si inclus dans le projet).
- **TypeScript** : Superset JavaScript offrant une vérification statique des types (si utilisé).

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez apporter des modifications, veuillez suivre les étapes suivantes :

1. Forker le dépôt.
2. Créer une branche pour votre fonctionnalité (`feature/ma-fonctionnalite`).
3. Commiter vos modifications.
4. Ouvrir une pull request pour examen.

## Ressources supplémentaires

- [Documentation officielle de Next.js](https://nextjs.org/docs)
- [Guide de Tailwind CSS](https://tailwindcss.com/docs)
- [ESLint](https://eslint.org/)

---

Ce document sera mis à jour au fur et à mesure des évolutions du projet.
