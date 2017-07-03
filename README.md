# Patate-Industry

https://thesharkprivatelab.github.io/Patate-Industry/

## Comment fonctionne le repo ?

### Règles de commits

- Les commits ne se font jamais sur la branche master, qui est réservée à la version précédente, stable et mise en ligne sur GitHub Pages.
- Quand on travaille sur une nouvelle version, il faut créer une branche v[n° de version] (ex : v1.7) et faire les commits dessus.
- Il est obligatoire de créer une branche v[n° de version].[n° secondaire]-[Nom_de_la_tâche] (ex : v1.8.2-Ajout_des_effets_de_saison) à chaque tâche/fonctionnalités et de pull request sur la branche de version pour vérifier qu'il n'y a pas de conflits.
- Il est conseillé de regarder la propreté de son code sur https://www.codacy.com/app/carra_c/Patate-Industry/dashboard.

### Les bugs

- Les bugs sont signalés via l'onglet "Issues" avec le tag "Bug".
- Le titre de l'issue : BUG [n° de la version]-[Desc du bug] (ex : BUG 1.6.2 - Parcelles). L'issue doit ensuite contenir une description qui explique AU MAXIMUM le problème.
- La personne qui résout le bug doit fermer le sujet et mentionner la version dans laquelle le bug sera corrigé.
- Si le bug est retrouvé après l'application de la correction, il faut rouvrir l'issue et réexpliquer le bug.

### Tâches
 
 - Les tâches sont gérées grace à ZenHub et sont accessibles via les onglets "Issues", "Boards" et "Reports".
 - Hiérarchie des branches et des tâches :
	1) Master : exemple : 1.6
		Il s'agit de la dernière version completement aboutie et testée. Elle est publiée sur https://thesharkprivatelab.github.io/Patate-Industry/.
	
	2) Milestone : exemple : "2.0 - Lab Update"" : Accessible via "Issues" -> "Milestones"
		Il s'agit de la version en cours de développement. Elle correspond à une "Update", c'est à dire un grand ensemble de fonctionnalités qui changent fondamentalement le jeu.
	
	3) Releases : exemple : 2.0.3 - Mise en place de la reproduction en laboratoire : Accessible via "Reports" -> "Releases"
		Il s'agit de plus petits ensembles de changements qui correspondent en général à un des thèmes de la Milestone.
	
	4) Epic : exemples : Reproduction en laboratoire, Amélioration graphique : Accessible via "Issues" -> "Labels" -> "Epic"
		Il s'agit d'importantes tâches qui peuvent être divisées en petites tâches.
	
	5) Tâches : exemples : Mise en place des classes de patates, Génération aléatoire de caractéristiques à la naissance
		Il s'agit des tâches les plus basiques.

### Gestion de projet avec ZenBoard - Boards

Product Development Pipelines
Each ZenHub Board can be customized to fit the needs and requirements of the team using it. We've found a blend between traditional Agile, kanban, and GitHub Flow methodologies to work well for the ZenHub team itself -- providing enough structure and information-sharing to focus activity into impact, but avoiding stifling individual creativity and drive.

## New Issues  :
This Pipeline is the landing point for new Issues. We have a weekly triage meeting to review and prioritize all Issues in this pipeline. Anyone from the team can create an Issue at any time and know that, through this process, it will be visible to everyone. The triage meeting should always end with an empty 'New Issues' pipeline!

## Icebox :
The Icebox represents items that are a low priority in the product backlog. We don't want to delete these and create a cycle of raising duplicate issues, so we keep them in our icebox with just enough information attached that we can pick it up some time in the future -- if and when we choose to do so.

Icebox Issues should not take up a team member’s time or mental bandwidth; we find that putting ideas into the Icebox Pipeline gets them out of our heads and helps us focus on immediate priorities.

## Backlog :
This Pipeline is a prioritized backlog of items ready for development. The Backlog is used heavily during sprint planning meetings: the higher an issue is on this list, the higher the priority. Higher-priority items will typically have more in-depth information attached, and we keep all our use cases and requirements in the Issue comments.

## In Progress :
This one is self-explanatory! Each Issue in this pipeline should have an assigned owner who is responsible for its completion. If a team member decides to take on a task, she or he simply self-assigns the Issue and moves it to the In Progress column, instantly communicating to the rest of the team that the task is underway.

## Review/QA :
We use the Review/QA column for Issues that are open to the team for review and testing. Usually this means the code is deployed into our Staging environment and in-use by the 40+ member Axiom Zen team spread across the world.

## Done :
Issues in this pipeline need no further work and are ready to be closed. Having a good ‘Definition of Done’ agreed upon before work starts on an Issue is very helpful here! If there were any objectives or key metrics associated with the Issue, they can be appended prior to closing.


