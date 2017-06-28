# Patate-Industry

https://thesharkprivatelab.github.io/Patate-Industry/

## Comment fonctionne le repo ?

### Règles de commits

- Les commits ne se font jamais sur la branche master, qui est réservée à la version précédente, stable et mise en ligne sur GitHub Pages.
- Quand on travaille sur une nouvelle version, il faut créer une branche v[n° de version] (ex : v1.7) et faire les commits dessus.
- Il est obligatoire de créer une branche v[n° de version].[n° secondaire]-[Nom_de_la_tâche] (ex : v1.8.2-Ajout_des_effets_de_saison) à chaque tâche/fonctionnalités et de pull request sur la branche de version pour vérifier qu'il n'y a pas de conflits.

### Les bugs

- Les bugs sont signalés via l'onglet "Issues" avec le tag "Bug".
- Le titre de l'issue : BUG [n° de la version]-[Desc du bug] (ex : BUG 1.6.2 - Parcelles). L'issue doit ensuite contenir une description qui explique AU MAXIMUM le problème.
- La personne qui résout le bug doit fermer le sujet et mentionner la version dans laquelle le bug sera corrigé.
- Si le bug est retrouvé après l'application de la correction, il faut rouvrir l'issue et réexpliquer le bug.

### Tâches
 
 - L'état des tâches de la version sont disponibles dans l'onglet "Projects".
 - Chaque projet vaut une version. Le titre du projet est le numéro de la version et il doit contenir les colonnes "TO DO", "ON DOING", "ON REVIEW" et "DONE".
 - Les tâches sont mises en review quand elles sont terminées afin de tester et de débugger avant de les valider définitivement.
