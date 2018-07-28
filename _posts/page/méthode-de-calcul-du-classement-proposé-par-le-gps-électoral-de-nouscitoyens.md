---
layout: page
title: Méthode de calcul du classement proposé par le GPS électoral de 'NousCitoyens'
language: fr
---
# Établissement du profil

Le profil découle de la totalité des réponses données au questionnaire du GPS électoral.

Tant les candidats que les électeurs ont cinq options de réponses : « tout à fait d’accord », « plutôt d’accord », « je ne sais pas », « plutôt non », « pas du tout d’accord ». Cette gradation s’avère nécessaire pour que les candidats puissent se démarquer sans enfreindre, le cas échéant, la discipline de parti.

De plus les électeurs peuvent donner leur pondération à la question : « non-négotiable », « très important », « important » (option par défaut) ou « moins important ».

Si les candidats souhaitent être pris en compte lors de la recommandation de vote, ils doivent remplir l’intégralité du questionnaire. En revanche, l’électeur répond à autant de questions qu’il veut. Les questions auxquelles il n’aura pas répondu ne seront pas prise en compte dans le calcul.

# Calcul de la correspondance (‘matching’)

Le ‘matching’ entre le profil d’un électeur et celui d’un candidat est basé sur la distance euclidienne (distance géométrique dans un espace pluridimensionnel). Pour situer les réponses dans cet ‘espace’, on leur attribue une valeur numérique selon le tableau suivant.

Options offertes

| | aux candidats | aux électeurs | Valeurs |
|:---|:---:|:---:|:---:|
| Tout à fait d'accord | x | x | 100 |
| Plutôt d'accord | x | x | 75 |
| Je ne sais pas | x | x | 50 |
| Plutôt pas d'accord | x | x | 25 |
| Pas du tout d'accord | x | x | 0 |
| pas de réponse | | x | |

La distance euclidienne entre un candidat en un électeur est alors :

$$D = \sqrt{\sum_{i=1}^n (v_i - c_i)^2}$$

Où : 

* v<sub>i</sub> = position de l’électeur (v = ‘voter’) à la question i
* c<sub>i</sub> = position du candidat (c) à la question i
* n = le nombre de questions auxquelles l’électeur a répondu.

Cette distance est ensuite rapportée à la distance maximale :
$$D_{max} = \sqrt{\sum_{i=1}^n (w_i*100)^2} = \sqrt{n*100^2}$$

Ce qui donne la distance normée : D / D<sub>max</sub>

En soustrayant cette distance normée de 1, on obtient une valeur mesurant la correspondance. Afin de rendre la lecture plus aisée, on exprime ce résultat en pourcents :

Match = 100 ∙ (1 – D/D<sub>max</sub>)

Il faut garder à l’esprit que ce pourcentage représente une mesure de correspondance géométrique. Il ne s’agit donc pas de la proportion du questionnaire où l’électeur et le candidat ont fourni la même réponse.

Cette méthodologie offre un bon équilibre entre des approches très simples (p.ex. un point par question concordante, …) et très élaborées (p.ex. analyse factorielle, etc.).

# Prise en compte de la pondération

Dans toute décision multicritère, il est recommandé de pondérer les critères d’évaluation. Pour cette raison nous offrons à l’électeur la possibilité de donner un poids (w<sub>i</sub>) différent à chaque question (i) :

* 2,5 = très important ou « non-négotiable »
* 1 = (normalement) important
* 0,4 = moins important

Les formules précédentes sont revisitées comme suit :
*   $$D_w = \sqrt{\sum_{i=1}^n (w_i(v_i - c_i)^2)}$$
*   $$D_{w,max} = \sqrt{\sum_{i=1}^n (w_i*100)^2}$$
* Match<sub>w</sub> = 100 ∙ (1 – Dw/Dw,max)

Où : 

v<sub>i</sub> = position de l’électeur (v = ‘voter’) sur la question i
c<sub>i</sub> = position du candidat (c) sur la question i
w<sub>i</sub> = pondération donnée par l’électeur à la question i
n = le nombre de questions auxquelles l’électeur a répondu.

## Classement

On calcule ainsi le Match<sub>w</sub> pour chacun des candidats, ce qui permet de les classer dans l’ordre décroissant de la valeur obtenue pour son Match<sub>w</sub>.
Lorsque deux ou plusieurs candidats ont le même score, ils sont classés en tenant compte de leur place sur leurs listes électorales respective.
