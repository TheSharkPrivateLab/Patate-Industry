# Patches Notes

https://thesharkprivatelab.github.io/Patate-Industry/

## 2.0.0

- Lab Update
	- Les quêtes, la reproduction naturelle et les effets de saisons autre que les impots sont retirés du jeu.
	- Ajout de l'onglet du laboratoire, qui remplacera la reproduction naturelle.
	- Ajout de l'inventaire :
		- Il faut acheter des graines de patate (100 pièces) pour les planter ensuite.
		- Les patates peuvent être inventoriées.
		- Les patates peuvent être vendues.
- Le texte de début de jeu est maintenant en français et modifié.
- Nettoyage du code et du GitHub

### 1.6.2

- Nouvelle UI :
	- Chat renamed en "Evenement"
	- Chat réduit à 5 messages
	- Les messages expirent maintenant au bout de 15 secondes.
	- Pour acheter des patates, il faut désormais passer par les parcelles en cliquant sur elles.
	
### 1.6.1

- Nouvelle UI :
	- Les boutons du shop sont un peu mieux alignés.
	- Le chat donne la qualité plutot que l'id de la qualité.
	- Jusqu'à 8 messages sont affichés.

### 1.6

- Nouvelle UI :
	- Actualisation des informations plus rapide.
	- Onglets :
		- Boutique
		- Quête
		- Parcelles
		- Fenetre de messages de jeu

- Equilibre commerce
	- La vente d'une parcelle est maintenant obligatoire si l'argent pour payer les taxes est insuffisant.

- Correction de bugs :
	- Il est maintenant possible d'acheter une parcelle avec exactement 2000 pieces;

### 1.5.1

- Mise en place du système de saison :
	- Hiver :
		- A chaque seconde, une chance sur 100 de mourir subitement du givre.
		- Le prix de vente des patates divines est multiplié par deux.
		- Les impots passent de 1000 pièces à 300 pièces.
	- Automne :
		- A chaque seconde, une chance sur 100 de perdre 1 de valeur pour les patates mures.
	- Printemps :
		- Les chances de reproduction sont multipliées par 2.
	- Été :
		- A chaque seconde, une chance sur 100 de gagner 1 de valeur pour les patates mures.

- Amélioration de l'UI :
	- Faute de chat, la console du navigateur donne désormais quelques messages utiles :
		- Evenements liés à la saison.
		- Reproduction.

- Code :
	- Restructuration des valeurs de qualité

### 1.5

- Mise en place du système de saison :
	- Le temps avance à un rythme de 3 jours par seconde.
	- Le printemps dure 93 jours minimum, l'été 94, l'automne 90 et l'hiver 89.
	- Hiver :
		- La reproduction est impossible en hiver.
		- L'année se finit avec l'hiver.
		- 1000 pièces d'impots sont prévelées chaque année.

- Amélioration de l'UI
	- La fertilité de la patate est indiquée.

### 1.4.2

- Amélioration de l'UI
  - Bouton "Acheter deux patates" changé en "Acheter 5 patates"

- Mise en place du bouton "Acheter une patate divine"

### 1.4.1

- Amélioration de l'UI
  - Indication des prix d'une patate et d'une parcelle

- Mise en place de la premiere quête  

### 1.4

- Anti game over :
  - Si le joueur se retrouve sans patates et avec moins de 100 pièces, il vend une de ses parcelles et gagne 2000 pieces.
  - Si le joueur n'a plus d'argent, de patates ou de parcelles, 100 pièces lui sont données.

- Balance de l'argent : Qualité
  - "Médiocre" diminue toujours le prix de vente de 50%.
  - "Acceptable" augmente le prix de vente de 25%.
  - "Très bonne" augmente le prix de vente de 100%.
  - "Divine" augmente le prix de vente de 300%.

- Ajout de la limite de parcelles :
	- 10 de base mais améliorable au shop au coût de 2000 pièces.
	
- Ajout de la reproduction
	- Une fois mures, à chaque seconde, les patates ont une chance sur 100 de produire une autre patate.
	- Chaque patate peut se reproduire jusqu'à 5 fois maximum.
	- La patate issue de la reproduction est de la même qualité que la patate parente.

### 1.3

- Balance de l'argent
  - 500 de départ au lieu de 100.
  - 100 de vente de base au lieu de 200.

### 1.2

- Ajout de la qualité des patates :
  - "Médiocre" diminue le prix de vente de 50%.
  - "Acceptable" ne change pas le prix de vente.
  - "Très bonne" augmente le prix de vente de 50%.
  - "Divine" augmente le prix de vente de 100%.

### 1.1

- Meilleur CSS

### 1.0

- Achat et vente de patates

## Fonctionalités à venir
- Interface améliorée
  - Droite : Shop
  - Milieu : Champs
  - Gauche : Quêtes et Achievements

- Sauvegarde

- Nouveaux types de patates :
  - Patate d'or, + temps/+ argent.

- Boutique
  - Améliorations pour augmenter le prix de certaines valeurs de patates.

- Agriculture :
  - Fatigue de la terre
  - Engrais :
	- Plus vite
	- Plus d'argent
	- Insensible aux aléas
  - Insecticide
  - Antibiotiques
  - Arrosage
  - Aléas naturels :
	  - Orage/Inondation
	- Insectes
	- Maladie
	- Aliens
	- Voleurs

- Quêtes :
  - Elever x patates.
