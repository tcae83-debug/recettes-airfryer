/* Recettes génériques rédigées pour la Valberg VAL-AF11.5LFLEX (temps indicatifs). */
/* Format : R(id, catégorie, sous-catégorie, emoji, titre, portions, prépa min, °C, cuisson min, préchauffage, ingrédients, étapes, secouer/retourner, astuces, erreurs, panier, tags) */
const RECIPES = [];
function R(id,c,s,e,t,srv,prep,temp,time,pre,ing,steps,shake,tips,err,fit,tags){
  RECIPES.push({id,c,s,e,t,srv,prep,temp,time,pre,ing,steps,shake,tips,err,fit,tags:tags||[]});
}
const ZONE1 = "Rentre dans une seule zone (séparateur en place) : l'autre zone reste libre pour un accompagnement.";
const FULL = "Utilise le panier entier, sans séparateur.";
const ZONE2 = "Répartis dans les deux zones (séparateur en place) avec le mode Cuisson double pour garder une seule couche.";

/* ========== ENTRÉES ========== */
R("oeufs-durs","entrees","","🥚","Œufs durs ou mollets sans eau",4,1,150,12,false,
 ["4 œufs (sortis du frigo)","1 pincée de sel"],
 ["Pose les œufs directement sur la grille, sans les serrer.","Lance 150 °C : 9 min pour mollet, 12 à 13 min pour dur.","Plonge-les aussitôt 3 min dans de l'eau glacée, puis écale."],
 "Pas besoin de les retourner.",["L'eau glacée stoppe la cuisson et facilite l'écalage.","Fais un test avec 1 œuf la première fois : la taille change tout."],
 ["Œufs sortant du frigo + température trop haute = coquille qui fêle."],ZONE1,["oeuf","rapide","sans gluten"]);
R("tomates-provencales","entrees","","🍅","Tomates à la provençale",4,10,180,15,false,
 ["4 tomates","3 c. à soupe de chapelure","2 gousses d'ail","1 c. à soupe de persil haché","2 c. à soupe d'huile d'olive","sel, poivre"],
 ["Coupe les tomates en deux, retire un peu de graines, sale et retourne-les 5 min sur un papier.","Mélange chapelure, ail écrasé, persil et huile.","Garnis les demi-tomates et pose-les sur la grille.","Cuis 15 min à 180 °C, jusqu'à ce que le dessus soit doré."],
 "Ne pas retourner.",["Elles accompagnent aussi très bien une viande grillée."],
 ["Tomates trop mûres : elles s'effondrent. Prends-les fermes."],ZONE1,["legume","vegetarien","ete"]);
R("champignons-farcis","entrees","","🍄","Champignons farcis ail et fines herbes",4,10,180,10,false,
 ["12 gros champignons de Paris","100 g de fromage frais ail et fines herbes","2 c. à soupe de chapelure","1 filet d'huile d'olive"],
 ["Retire les pieds des champignons et essuie les chapeaux (sans les laver).","Remplis-les de fromage frais, saupoudre de chapelure.","Huile légèrement et cuis 10 min à 180 °C."],
 "Ne pas retourner.",["Ajoute des dés de lardons sous le fromage pour une version gourmande."],
 ["Champignons lavés à grande eau : ils rendent de l'eau et ramollissent."],ZONE1,["vegetarien","apero","fromage"]);
R("feuillete-chevre","entrees","","🥐","Feuilletés chèvre miel",4,10,180,12,true,
 ["1 pâte feuilletée","1 bûche de chèvre (env. 150 g)","2 c. à soupe de miel","1 jaune d'œuf","thym"],
 ["Découpe la pâte en 8 carrés. Pose une rondelle de chèvre, un peu de miel et de thym au centre.","Replie en triangle, soude les bords à la fourchette, dore au jaune d'œuf.","Pose sur un papier cuisson perforé et cuis 12 min à 180 °C."],
 "Ne pas retourner.",["Sers avec une salade verte et quelques noix."],
 ["Papier cuisson posé seul pendant le préchauffage : il s'envole vers la résistance. Mets-le uniquement sous les aliments."],ZONE1,["fromage","vegetarien"]);
R("salade-chevre-chaud","entrees","","🥗","Salade de chèvre chaud",4,10,190,6,true,
 ["8 tranches de baguette","8 rondelles de chèvre","1 c. à soupe de miel","salade verte","vinaigrette","noix"],
 ["Pose une rondelle de chèvre sur chaque tranche de pain, un filet de miel.","Cuis 5 à 6 min à 190 °C : le chèvre doit fondre sans couler.","Sers sur la salade assaisonnée avec les noix."],
 "Ne pas retourner.",["Surveille par le hublot éclairé : ça va très vite."],
 ["Trop longtemps : le chèvre coule sur la grille."],ZONE1,["fromage","rapide","vegetarien"]);
R("aubergines-roties","entrees","","🍆","Aubergines rôties au yaourt",4,10,190,20,false,
 ["2 aubergines","3 c. à soupe d'huile d'olive","1 yaourt grec","1 gousse d'ail","cumin, sel","menthe ou coriandre"],
 ["Coupe les aubergines en deux, quadrille la chair au couteau.","Badigeonne d'huile, sale, saupoudre de cumin.","Cuis 20 min à 190 °C, chair vers le haut.","Sers avec le yaourt mélangé à l'ail et aux herbes."],
 "Ne pas retourner.",["La chair doit être fondante : pique avec un couteau pour vérifier."],
 ["Pas assez d'huile : l'aubergine reste sèche et fade."],ZONE1,["legume","vegetarien"]);
R("poivrons-grilles","entrees","","🫑","Poivrons grillés marinés",4,10,200,18,false,
 ["3 poivrons (rouges et jaunes)","3 c. à soupe d'huile d'olive","1 gousse d'ail","basilic","sel"],
 ["Coupe les poivrons en quartiers, retire graines et peaux blanches.","Pose-les peau vers le haut et cuis 18 min à 200 °C jusqu'à ce que la peau noircisse.","Mets-les 10 min dans un saladier couvert, pèle-les.","Arrose d'huile, d'ail émincé et de basilic."],
 "Ne pas retourner.",["Se garde 4 jours au frigo dans l'huile."],
 ["Retirer la peau tout de suite : elle colle. Laisse-les étuver couvert."],ZONE1,["legume","vegetarien","sans gluten"]);
R("croque-monsieur","entrees","","🥪","Croque-monsieur",4,5,180,8,false,
 ["8 tranches de pain de mie","4 tranches de jambon","8 tranches d'emmental ou 100 g râpé","beurre"],
 ["Beurre légèrement l'extérieur des tranches.","Monte les croques : pain, fromage, jambon, fromage, pain.","Cuis 8 min à 180 °C, en retournant à mi-cuisson."],
 "Retourne à 4 min.",["Pique un cure-dent au centre pour que la tranche du dessus ne s'envole pas avec la ventilation."],
 ["Pain non fixé : la ventilation soulève la tranche du dessus."],ZONE2,["rapide","fromage","enfants"]);
R("soupe-legumes-rotis","entrees","","🥣","Velouté de légumes rôtis",4,15,190,20,false,
 ["2 carottes","1 courgette","1 oignon","2 tomates","2 gousses d'ail","2 c. à soupe d'huile d'olive","70 cl de bouillon chaud","sel, poivre"],
 ["Coupe les légumes en gros morceaux, mélange-les à l'huile, sel et poivre.","Rôtis 20 min à 190 °C en secouant à mi-cuisson.","Mixe avec le bouillon chaud jusqu'à obtenir un velouté."],
 "Secoue à 10 min.",["Le rôtissage donne un goût bien plus profond qu'une soupe bouillie."],
 ["Morceaux de tailles différentes : certains brûlent, d'autres restent crus."],FULL,["legume","vegetarien","hiver"]);

/* ========== PLATS — VIANDE ========== */
R("steak","plats","viande","🥩","Steak / entrecôte",2,2,200,10,true,
 ["2 steaks ou entrecôtes (2 cm, env. 200 g)","1 c. à café d'huile","sel, poivre","beurre aux herbes (facultatif)"],
 ["Sors la viande 20 min avant. Sèche-la, huile-la légèrement.","Préchauffe 3 min à 200 °C (programme Steak possible).","Cuis 7 à 8 min (saignant) à 10 à 12 min (à point), en retournant à mi-cuisson.","Laisse reposer 3 min, sale et poivre."],
 "Retourne à mi-cuisson.",["Le programme Steak démarre à 200 °C / 10 min : ajuste selon l'épaisseur.","Thermomètre : 52 °C saignant, 57 °C à point, 63 °C bien cuit."],
 ["Viande sortie du frigo à la dernière minute : extérieur cuit, cœur froid.","Saler avant : la viande rend de l'eau."],ZONE1,["boeuf","rapide","sans gluten"]);
R("burgers","plats","viande","🍔","Burgers maison",4,10,180,10,false,
 ["4 steaks hachés (125 g)","4 pains burger","4 tranches de cheddar","1 tomate, 1 oignon rouge, salade","sauce au choix"],
 ["Cuis les steaks 8 à 10 min à 180 °C en retournant à mi-cuisson.","Pose le cheddar 1 min avant la fin.","Toaste les pains 2 min à 180 °C.","Monte les burgers."],
 "Retourne à 5 min.",["Fais un petit creux au centre de chaque steak : il ne gonfle pas en cuisant.","Haché : vise 70 °C à cœur (enfants, personnes fragiles)."],
 ["Steaks empilés : chaque pièce doit être à plat sur la grille."],ZONE2,["boeuf","enfants","fromage"]);
R("cotes-porc","plats","viande","🐖","Côtes de porc marinées",4,10,180,14,true,
 ["4 côtes de porc (1,5 cm)","2 c. à soupe de sauce soja","1 c. à soupe de miel","1 gousse d'ail","1 c. à café de paprika"],
 ["Mélange soja, miel, ail et paprika, enrobe les côtes 30 min (ou plus).","Sèche légèrement au papier absorbant.","Cuis 12 à 14 min à 180 °C en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Porc : 63 °C à cœur puis 3 min de repos."],
 ["Marinade qui goutte : fumée blanche. Tapote la viande avant cuisson."],ZONE2,["porc","marinade"]);
R("filet-mignon","plats","viande","🥓","Filet mignon de porc moutarde",4,10,180,25,true,
 ["1 filet mignon (env. 500 g)","2 c. à soupe de moutarde à l'ancienne","1 c. à soupe de miel","herbes de Provence","sel, poivre"],
 ["Mélange moutarde, miel, herbes, sel et poivre, badigeonne le filet.","Cuis 22 à 25 min à 180 °C en retournant à mi-cuisson.","Vérifie 63 °C à cœur, laisse reposer 5 min sous une feuille d'alu, tranche."],
 "Retourne à mi-cuisson.",["Coupe-le en deux si le filet est trop long pour une zone."],
 ["Trancher tout de suite : le jus s'échappe, la viande sèche."],ZONE1,["porc","sans gluten"]);
R("saucisses","plats","viande","🌭","Saucisses et chipolatas",4,1,180,14,false,
 ["8 chipolatas ou saucisses de Toulouse"],
 ["Pique légèrement les saucisses.","Chipolatas : 12 à 14 min à 180 °C. Toulouse : 16 à 20 min.","Retourne à mi-cuisson."],
 "Retourne à mi-cuisson.",["Cuis des frites dans l'autre zone avec la Fin synchronisée."],
 ["Saucisses collées : elles cuisent mal au contact. Laisse 1 cm."],ZONE1,["porc","enfants","rapide"]);
R("boulettes","plats","viande","🧆","Boulettes de bœuf",4,15,190,12,false,
 ["500 g de bœuf haché","1 œuf","3 c. à soupe de chapelure","1 oignon râpé","persil, cumin","sel, poivre"],
 ["Mélange tout et forme 20 boulettes.","Pose-les sans qu'elles se touchent.","Cuis 10 à 12 min à 190 °C en secouant à mi-cuisson."],
 "Secoue à 6 min.",["Sers avec une sauce tomate ou un yaourt à la menthe.","Haché : 70 °C à cœur."],
 ["Boulettes trop grosses : dehors brûlé, dedans cru."],ZONE2,["boeuf","enfants"]);
R("brochettes-boeuf","plats","viande","🍢","Brochettes de bœuf et poivrons",4,15,200,10,true,
 ["600 g de bœuf à brochette","1 poivron","1 oignon rouge","3 c. à soupe d'huile","paprika, ail, sel"],
 ["Coupe bœuf et légumes en cubes, marine 30 min dans l'huile et les épices.","Pique sur des brochettes coupées à la longueur du panier.","Cuis 8 à 10 min à 200 °C en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Brochettes en bois : fais-les tremper 30 min dans l'eau avant."],
 ["Brochettes trop longues : elles ne rentrent pas ou bloquent le séparateur."],ZONE2,["boeuf","ete"]);
R("rotis-porc","plats","viande","🍖","Rôti de porc",6,10,180,50,true,
 ["1 rôti de porc (1 kg)","2 gousses d'ail","1 c. à soupe d'huile","thym, romarin","sel, poivre"],
 ["Pique le rôti d'éclats d'ail, frotte-le d'huile, d'herbes, sel et poivre.","Cuis 45 à 50 min à 180 °C en le retournant à mi-cuisson.","Vérifie 63 °C à cœur, repos 10 min sous alu."],
 "Retourne à mi-cuisson.",["La minuterie va jusqu'à 60 min : relance si besoin."],
 ["Sans thermomètre on cuit souvent trop : la viande sèche."],FULL,["porc","dimanche"]);
R("agneau","plats","viande","🐑","Côtelettes d'agneau ail et romarin",4,5,200,8,true,
 ["8 côtelettes d'agneau","2 c. à soupe d'huile d'olive","2 gousses d'ail","romarin","sel, poivre"],
 ["Marine 15 min les côtelettes dans l'huile, l'ail et le romarin.","Cuis 7 à 9 min à 200 °C en retournant à mi-cuisson.","Sale et laisse reposer 2 min."],
 "Retourne à mi-cuisson.",["Rosé : 58-60 °C à cœur."],["Côtelettes serrées : elles bouillent au lieu de griller."],ZONE2,["agneau","rapide"]);

/* ========== PLATS — VOLAILLE ========== */
R("poulet-entier","plats","volaille","🍗","Poulet rôti entier",4,10,180,55,false,
 ["1 poulet (1,3 à 1,5 kg)","2 c. à soupe d'huile","1 c. à café de paprika","herbes de Provence","sel, poivre","1 citron"],
 ["Retire le séparateur. Sèche le poulet, frotte-le d'huile et d'épices, glisse le citron à l'intérieur.","Pose-le poitrine en bas : 30 min à 180 °C.","Retourne-le poitrine en haut : 20 à 25 min à 180 °C.","Vérifie 74 °C au cœur de la cuisse, repos 10 min."],
 "Retourne à 30 min.",["Vérifie avant de lancer que le poulet ne touche pas la résistance en haut.","Le programme Poulet démarre à 200 °C / 35 min : pour un poulet entier, le mode manuel à 180 °C est plus sûr."],
 ["Poulet trop gros pour le panier : il brûle sur le dessus. Prends 1,5 kg maximum ou découpe-le."],FULL,["poulet","dimanche","sans gluten"]);
R("cuisses-poulet","plats","volaille","🍗","Cuisses de poulet croustillantes",4,5,190,28,false,
 ["4 cuisses de poulet","1 c. à soupe d'huile","1 c. à café de paprika fumé","ail en poudre, sel, poivre"],
 ["Sèche les cuisses, frotte-les d'huile et d'épices.","Peau vers le bas : 15 min à 190 °C.","Retourne, peau vers le haut : 12 à 15 min.","74 °C à cœur près de l'os."],
 "Retourne à 15 min.",["Peau bien sèche = peau croustillante."],["Ne pas vérifier près de l'os : c'est là que ça cuit le moins vite."],ZONE2,["poulet","sans gluten"]);
R("pilons","plats","volaille","🍗","Pilons de poulet miel-soja",4,10,180,22,false,
 ["8 pilons","3 c. à soupe de sauce soja","2 c. à soupe de miel","1 gousse d'ail","graines de sésame"],
 ["Marine les pilons 30 min dans soja, miel et ail.","Égoutte-les et cuis 18 à 22 min à 180 °C en retournant à mi-cuisson.","Parsème de sésame."],
 "Retourne à mi-cuisson.",["Garde un peu de marinade, fais-la réduire et nappe à la fin."],
 ["Le miel brûle vite à 200 °C : reste à 180 °C."],ZONE2,["poulet","enfants","marinade"]);
R("blanc-poulet","plats","volaille","🐔","Blancs de poulet juteux",4,5,180,15,true,
 ["4 blancs de poulet","1 c. à soupe d'huile d'olive","1 c. à café d'herbes de Provence","paprika, sel, poivre"],
 ["Aplatis les blancs pour qu'ils aient la même épaisseur.","Huile et assaisonne.","Cuis 12 à 15 min à 180 °C en retournant à mi-cuisson.","74 °C à cœur, repos 3 min."],
 "Retourne à mi-cuisson.",["Un blanc d'épaisseur régulière ne sèche pas."],["Cuire au-delà de 75 °C : la viande devient sèche."],ZONE2,["poulet","rapide","sans gluten"]);
R("ailes-poulet","plats","volaille","🍗","Ailes de poulet épicées",4,5,200,22,false,
 ["1 kg d'ailes de poulet","1 c. à soupe d'huile","1 c. à café de paprika","1/2 c. à café de piment","ail en poudre, sel"],
 ["Sèche bien les ailes, mélange-les à l'huile et aux épices.","Cuis 20 à 22 min à 200 °C en secouant 2 fois.","Elles doivent être bien dorées et croustillantes."],
 "Secoue à 8 et 15 min.",["Une c. à café de levure chimique (sans sucre) dans les épices rend la peau encore plus croustillante."],
 ["Trop d'ailes empilées : elles restent molles. Une seule couche."],ZONE2,["poulet","apero"]);
R("escalope-panee","plats","volaille","🍽️","Escalopes panées",4,15,190,12,true,
 ["4 escalopes de poulet ou de dinde","2 œufs","60 g de farine","100 g de chapelure (panko idéale)","huile en spray"],
 ["Aplatis les escalopes. Passe-les dans la farine, l'œuf battu puis la chapelure.","Vaporise d'huile des deux côtés.","Cuis 10 à 12 min à 190 °C en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Le panko donne le croustillant le plus proche de la friture."],
 ["Sans huile en spray, la chapelure reste pâle et sèche."],ZONE2,["poulet","enfants"]);
R("nuggets-maison","plats","volaille","🍗","Nuggets maison",4,15,200,10,true,
 ["500 g de blancs de poulet","2 œufs","80 g de corn flakes écrasés","40 g de farine","paprika, sel","huile en spray"],
 ["Coupe le poulet en morceaux de 3 cm.","Farine, œuf, corn flakes assaisonnés.","Vaporise d'huile, cuis 8 à 10 min à 200 °C en secouant à mi-cuisson."],
 "Secoue à 5 min.",["Les corn flakes rendent les nuggets très croustillants."],["Morceaux trop gros : temps à rallonger, vérifie 74 °C."],ZONE2,["poulet","enfants"]);
R("poulet-tandoori","plats","volaille","🌶️","Poulet tandoori",4,10,190,18,false,
 ["600 g de hauts de cuisse désossés","1 yaourt nature","2 c. à soupe d'épices tandoori","1 citron","1 gousse d'ail","sel"],
 ["Marine le poulet au moins 2 h dans le yaourt, les épices, le jus de citron et l'ail.","Égoutte et cuis 16 à 18 min à 190 °C en retournant à mi-cuisson.","74 °C à cœur."],
 "Retourne à mi-cuisson.",["Sers avec du riz basmati et une raïta concombre."],["Trop de marinade : elle fume. Égoutte bien."],ZONE2,["poulet","epice","marinade"]);
R("cordon-bleu","plats","volaille","🧀","Cordons bleus maison",4,20,180,14,true,
 ["4 escalopes de dinde fines","4 tranches de jambon","4 tranches de comté ou emmental","2 œufs","farine, chapelure","huile en spray"],
 ["Garnis la moitié de chaque escalope de jambon et fromage, replie et presse.","Farine, œuf, chapelure. Vaporise d'huile.","Cuis 12 à 14 min à 180 °C en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Pique avec un cure-dent pour bien fermer."],["Bords mal fermés : le fromage s'échappe."],ZONE2,["dinde","enfants","fromage"]);

/* ========== PLATS — POISSON ========== */
R("saumon","plats","poisson","🐟","Pavé de saumon",4,2,190,10,true,
 ["4 pavés de saumon","1 c. à soupe d'huile d'olive","1 citron","aneth","sel, poivre"],
 ["Huile et assaisonne les pavés.","Pose-les peau vers le bas sur un papier cuisson perforé.","Cuis 8 à 10 min à 190 °C sans retourner."],
 "Ne pas retourner.",["Poisson : 55 °C à cœur pour le saumon nacré, 63 °C bien cuit."],["Le programme Poisson est réglé à 200 °C / 20 min : c'est trop long pour un pavé, ajuste."],ZONE2,["poisson","rapide","sans gluten"]);
R("cabillaud-pane","plats","poisson","🐠","Cabillaud en croûte de parmesan",4,10,190,12,true,
 ["4 dos de cabillaud","40 g de parmesan râpé","40 g de chapelure","1 c. à soupe de persil","2 c. à soupe d'huile d'olive","1 citron"],
 ["Mélange parmesan, chapelure, persil et huile.","Couvre le dessus des dos de cabillaud.","Cuis 10 à 12 min à 190 °C sur papier cuisson perforé."],
 "Ne pas retourner.",["Le poisson se détache en lamelles quand il est cuit."],["Poisson décongelé non essuyé : la croûte ramollit."],ZONE2,["poisson"]);
R("crevettes-ail","plats","poisson","🦐","Crevettes ail et persil",4,10,200,7,true,
 ["400 g de crevettes crues décortiquées","2 c. à soupe d'huile d'olive","3 gousses d'ail","persil","1 pincée de piment","1 citron"],
 ["Mélange les crevettes avec l'huile, l'ail, le persil et le piment.","Cuis 6 à 8 min à 200 °C en secouant à mi-cuisson.","Arrose de citron."],
 "Secoue à mi-cuisson.",["Elles sont cuites quand elles sont roses et opaques."],["Trop cuites : elles deviennent caoutchouteuses."],ZONE1,["poisson","rapide","sans gluten"]);
R("fish-chips","plats","poisson","🐟","Fish and chips",4,20,200,12,true,
 ["600 g de filets de cabillaud ou lieu","2 œufs","50 g de farine","100 g de panko","huile en spray","sel, poivre"],
 ["Coupe le poisson en bandes. Farine, œuf, panko.","Vaporise d'huile.","Cuis 10 à 12 min à 200 °C en retournant délicatement à mi-cuisson.","Fais les frites dans l'autre zone avec la Fin synchronisée."],
 "Retourne à mi-cuisson.",["Sauce tartare express : mayonnaise, cornichons, câpres."],["Retourner trop tôt : la panure se détache."],ZONE1,["poisson","enfants"]);
R("papillote-poisson","plats","poisson","🐟","Papillote de poisson blanc et légumes",4,15,180,15,false,
 ["4 filets de poisson blanc","1 courgette","1 carotte","1 citron","4 c. à café d'huile d'olive","aneth, sel, poivre"],
 ["Taille les légumes en julienne fine.","Sur 4 feuilles de papier cuisson, dispose légumes, poisson, citron, huile et assaisonnement.","Ferme hermétiquement en papillote.","Cuis 15 min à 180 °C."],
 "Ne pas retourner.",["Ferme bien les papillotes : avec la ventilation, elles ne doivent pas s'ouvrir."],["Papier qui dépasse et touche la résistance : danger. Garde des papillotes compactes."],ZONE2,["poisson","leger"]);
R("thon-mi-cuit","plats","poisson","🍣","Thon mi-cuit au sésame",2,5,200,5,true,
 ["2 pavés de thon (3 cm)","2 c. à soupe de sauce soja","graines de sésame","1 c. à café d'huile"],
 ["Badigeonne le thon de soja et d'huile, roule-le dans le sésame.","Préchauffe bien à 200 °C.","Cuis 4 à 6 min selon la cuisson voulue, en retournant à mi-cuisson.","Tranche finement."],
 "Retourne à mi-cuisson.",["Prends du thon très frais, qualité sashimi."],["Trop cuit, le thon devient sec comme une conserve."],ZONE1,["poisson","rapide"]);
R("sardines","plats","poisson","🐟","Sardines grillées",4,5,200,10,true,
 ["12 sardines vidées","2 c. à soupe d'huile d'olive","gros sel","1 citron"],
 ["Rince, sèche et huile les sardines.","Cuis 8 à 10 min à 200 °C en retournant à mi-cuisson.","Sers avec gros sel et citron."],
 "Retourne à mi-cuisson.",["Aucune odeur de grillade dans la maison comparé à la poêle."],["Sardines humides : elles collent à la grille."],ZONE2,["poisson","ete","sans gluten"]);

/* ========== PLATS — VÉGÉTARIEN ========== */
R("falafels","plats","vegetarien","🧆","Falafels",4,20,190,14,true,
 ["400 g de pois chiches cuits égouttés","1 oignon","2 gousses d'ail","persil et coriandre","1 c. à café de cumin","3 c. à soupe de farine","sel","huile en spray"],
 ["Mixe tous les ingrédients en pâte grossière.","Forme 16 boulettes un peu aplaties.","Vaporise d'huile et cuis 12 à 14 min à 190 °C en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Sers en pita avec sauce yaourt et crudités."],["Pâte trop humide : ajoute de la farine, sinon les falafels s'écrasent."],ZONE2,["vegetarien","vegan"]);
R("legumes-rotis","plats","vegetarien","🥕","Légumes rôtis et feta",4,15,190,20,false,
 ["1 courgette","1 poivron","1 oignon rouge","200 g de tomates cerises","200 g de feta","3 c. à soupe d'huile d'olive","herbes de Provence"],
 ["Coupe les légumes en gros morceaux réguliers, mélange-les à l'huile et aux herbes.","Cuis 15 min à 190 °C en secouant à mi-cuisson.","Ajoute la feta émiettée et les tomates cerises, 5 min de plus."],
 "Secoue à 8 min.",["Le programme Légumes démarre à 180 °C / 10 min : tu peux l'allonger."],["Panier trop plein : les légumes cuisent à la vapeur et ne dorent pas."],FULL,["vegetarien","sans gluten"]);
R("tofu-croustillant","plats","vegetarien","🟫","Tofu croustillant sauce soja",4,10,200,15,false,
 ["400 g de tofu ferme","2 c. à soupe de sauce soja","1 c. à soupe de fécule de maïs","1 c. à soupe d'huile","sésame"],
 ["Presse le tofu 15 min entre deux torchons, coupe-le en cubes.","Mélange avec le soja et l'huile, puis la fécule.","Cuis 14 à 16 min à 200 °C en secouant 2 fois."],
 "Secoue à 5 et 10 min.",["Idéal sur un bol de riz avec des légumes sautés."],["Tofu non pressé : il reste mou."],ZONE1,["vegetarien","vegan"]);
R("gratin-courgettes","plats","vegetarien","🥒","Gratin de courgettes",4,15,180,20,false,
 ["3 courgettes","2 œufs","15 cl de crème","80 g de gruyère râpé","sel, poivre, muscade"],
 ["Coupe les courgettes en rondelles fines, répartis-les dans un plat qui rentre dans le panier.","Bats œufs, crème, sel, poivre, muscade, verse sur les courgettes.","Parsème de fromage. Cuis 20 min à 180 °C."],
 "Ne pas retourner.",["Le plat doit être adapté au four et laisser circuler l'air autour."],["Courgettes trop épaisses : elles rendent beaucoup d'eau."],FULL,["vegetarien","fromage"]);
R("pommes-terre-farcies","plats","vegetarien","🥔","Pommes de terre farcies au fromage",4,15,190,40,false,
 ["4 grosses pommes de terre","100 g de fromage râpé","3 c. à soupe de crème fraîche","ciboulette","sel, poivre","1 c. à soupe d'huile"],
 ["Pique et huile les pommes de terre, cuis-les 35 min à 190 °C.","Coupe-les en deux, creuse, mélange la chair avec crème, fromage, ciboulette.","Remplis et remets 5 min à 190 °C."],
 "Retourne à mi-cuisson (première cuisson).",["Version complète : ajoute des lardons ou du jambon."],["Pommes de terre de tailles différentes : cuissons inégales."],FULL,["vegetarien","fromage","hiver"]);
R("quiche","plats","vegetarien","🥧","Quiche aux légumes",6,15,180,25,false,
 ["1 pâte brisée","3 œufs","20 cl de crème","10 cl de lait","1 poireau ou 1 courgette","80 g de fromage râpé","sel, poivre"],
 ["Fonce un moule qui rentre dans le panier (vérifie le diamètre avant).","Répartis les légumes émincés et le fromage.","Verse les œufs battus avec crème et lait.","Cuis 22 à 25 min à 180 °C."],
 "Ne pas retourner.",["Le guide Valberg indique environ 20-22 min à 180 °C pour une quiche de 400 g."],["Moule trop grand : mesure le panier sans séparateur avant d'acheter."],FULL,["vegetarien","oeuf"]);
R("croquettes-lentilles","plats","vegetarien","🫘","Galettes de lentilles",4,15,190,12,true,
 ["400 g de lentilles cuites","1 carotte râpée","1 œuf","4 c. à soupe de chapelure","cumin, curry","sel"],
 ["Écrase les lentilles, mélange avec tous les ingrédients.","Forme 8 galettes.","Vaporise d'huile et cuis 10 à 12 min à 190 °C en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Parfait en burger végétarien."],["Galettes trop épaisses : elles se cassent en les retournant."],ZONE2,["vegetarien"]);

/* ========== ACCOMPAGNEMENTS ========== */
R("frites-maison","accomp","","🍟","Frites maison",4,15,200,20,true,
 ["800 g de pommes de terre (type Bintje)","1/2 c. à soupe d'huile","sel"],
 ["Coupe en bâtonnets de 8 mm. Rince à l'eau froide et sèche très bien.","Mélange avec la demi-cuillère d'huile.","Cuis 16 à 20 min à 200 °C en secouant 2 à 3 fois.","Sale à la sortie."],
 "Secoue toutes les 6 min.",["Ce sont les réglages du guide Valberg : 300-800 g, 16-20 min, 200 °C.","Le programme Frites (200 °C / 22 min) convient."],
 ["Pommes de terre mal séchées : frites molles.","Saler avant : elles rendent de l'eau."],FULL,["pomme de terre","enfants","vegan"]);
R("potatoes","accomp","","🥔","Potatoes épicées",4,10,180,22,false,
 ["800 g de pommes de terre","1/2 c. à soupe d'huile","1 c. à café de paprika","ail en poudre, sel"],
 ["Lave les pommes de terre, coupe-les en quartiers avec la peau.","Mélange avec l'huile et les épices.","Cuis 18 à 22 min à 180 °C en secouant à mi-cuisson.","Monte à 200 °C les 3 dernières min pour plus de croustillant."],
 "Secoue à 10 min.",["Le guide Valberg indique 18-22 min à 180 °C pour 300-800 g."],["Quartiers trop épais : cœur pas cuit."],FULL,["pomme de terre","vegan"]);
R("pdt-grenaille","accomp","","🥔","Pommes de terre grenaille romarin",4,5,190,20,false,
 ["600 g de pommes de terre grenaille","1 c. à soupe d'huile d'olive","romarin","ail, gros sel"],
 ["Coupe les grenailles en deux.","Mélange avec huile, romarin et ail.","Cuis 18 à 20 min à 190 °C en secouant à mi-cuisson."],
 "Secoue à mi-cuisson.",["Pas besoin de les éplucher."],["Grenailles entières de tailles variées : coupe les plus grosses."],ZONE1,["pomme de terre","vegan"]);
R("patate-douce","accomp","","🍠","Frites de patate douce",4,10,190,18,false,
 ["2 patates douces","1 c. à soupe de fécule de maïs","1 c. à soupe d'huile","paprika, sel"],
 ["Coupe en bâtonnets fins (7 mm).","Enrobe de fécule puis d'huile et de paprika.","Cuis 16 à 18 min à 190 °C en secouant 2 fois, sans surcharger."],
 "Secoue toutes les 6 min.",["La fécule aide à les rendre croustillantes."],["Patate douce = plus de sucre : surveille, elle brûle plus vite."],ZONE2,["vegan","enfants"]);
R("brocolis","accomp","","🥦","Brocolis rôtis parmesan",4,5,190,10,false,
 ["1 brocoli","1 c. à soupe d'huile d'olive","30 g de parmesan","sel, poivre","1 citron"],
 ["Taille en petits bouquets, mélange avec huile, sel et poivre.","Cuis 8 à 10 min à 190 °C en secouant à mi-cuisson.","Parsème de parmesan et arrose de citron."],
 "Secoue à mi-cuisson.",["Les pointes grillées sont les meilleures."],["Bouquets trop gros : ils restent durs."],ZONE1,["legume","vegetarien"]);
R("haricots-verts","accomp","","🫛","Haricots verts croquants à l'ail",4,5,190,10,false,
 ["400 g de haricots verts","1 c. à soupe d'huile","1 gousse d'ail","sel"],
 ["Équeute et sèche les haricots.","Mélange avec huile, ail et sel.","Cuis 8 à 10 min à 190 °C en secouant à mi-cuisson."],
 "Secoue à mi-cuisson.",["Ajoute des amandes effilées les 2 dernières minutes."],["Haricots surgelés : compte 3-4 min de plus."],ZONE1,["legume","vegan"]);
R("chou-fleur","accomp","","🥬","Chou-fleur rôti au curry",4,5,190,15,false,
 ["1 chou-fleur","2 c. à soupe d'huile","1 c. à café de curry","sel"],
 ["Taille en bouquets, mélange avec huile, curry et sel.","Cuis 14 à 16 min à 190 °C en secouant à mi-cuisson."],
 "Secoue à mi-cuisson.",["Sers avec un yaourt à la coriandre."],["Trop de bouquets empilés : cuisson inégale."],ZONE1,["legume","vegan"]);
R("carottes-miel","accomp","","🥕","Carottes rôties miel cumin",4,10,180,18,false,
 ["600 g de carottes","1 c. à soupe d'huile","1 c. à soupe de miel","1/2 c. à café de cumin","sel"],
 ["Coupe les carottes en bâtonnets.","Mélange avec huile, cumin et sel. Cuis 15 min à 180 °C.","Ajoute le miel, mélange, 3 min de plus."],
 "Secoue à 8 min.",["Le miel à la fin évite qu'il brûle."],["Miel ajouté au début : il caramélise trop."],ZONE1,["legume","vegetarien"]);
R("courgettes-panees","accomp","","🥒","Bâtonnets de courgette panés",4,15,200,10,true,
 ["2 courgettes","1 œuf","60 g de chapelure","30 g de parmesan","huile en spray"],
 ["Coupe les courgettes en bâtonnets.","Passe dans l'œuf battu puis la chapelure au parmesan.","Vaporise d'huile, cuis 9 à 10 min à 200 °C en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Sers avec une sauce yaourt-ail."],["Courgette pleine d'eau : sale-la 10 min puis sèche-la."],ZONE2,["legume","vegetarien","apero"]);
R("gratin-dauphinois","accomp","","🧈","Gratin dauphinois",4,15,180,40,false,
 ["800 g de pommes de terre","25 cl de crème","15 cl de lait","1 gousse d'ail","muscade, sel, poivre"],
 ["Frotte un plat adapté (qui rentre dans le panier) avec l'ail.","Coupe les pommes de terre en rondelles fines, superpose-les.","Verse crème et lait assaisonnés.","Couvre d'alu 25 min à 180 °C, puis découvre 15 min."],
 "Ne pas retourner.",["Alu bien serré sur le plat pour qu'il ne s'envole pas."],["Rondelles trop épaisses : elles restent fermes."],FULL,["pomme de terre","vegetarien","hiver"]);
R("epis-mais","accomp","","🌽","Épis de maïs beurre et paprika",4,2,200,12,false,
 ["4 épis de maïs précuits","30 g de beurre fondu","paprika, sel"],
 ["Badigeonne les épis de beurre.","Cuis 10 à 12 min à 200 °C en les tournant à mi-cuisson.","Assaisonne de paprika et sel."],
 "Tourne à mi-cuisson.",["Coupe-les en deux pour bien remplir les zones."],["Épis trop longs : coupe-les avant."],ZONE2,["legume","ete","vegetarien"]);

/* ========== DESSERTS ========== */
R("pommes-cuites","desserts","","🍎","Pommes au four cannelle",4,10,180,18,false,
 ["4 pommes","30 g de beurre","2 c. à soupe de sucre roux","1 c. à café de cannelle","1 poignée de raisins secs"],
 ["Évide les pommes sans les percer au fond.","Remplis de beurre, sucre, cannelle et raisins.","Pose-les dans un petit plat et cuis 15 à 18 min à 180 °C."],
 "Ne pas retourner.",["Délicieux avec une boule de glace vanille."],["Pommes trop farineuses : prends des Boskoop ou Golden."],ZONE1,["fruit","hiver","sans gluten"]);
R("moelleux-chocolat","desserts","","🍫","Moelleux au chocolat cœur coulant",4,15,180,9,true,
 ["100 g de chocolat noir","80 g de beurre","2 œufs","60 g de sucre","30 g de farine"],
 ["Fais fondre chocolat et beurre.","Fouette œufs et sucre, ajoute le chocolat puis la farine.","Verse dans 4 ramequins beurrés.","Cuis 8 à 10 min à 180 °C : le centre doit rester tremblotant."],
 "Ne pas retourner.",["Prépare la pâte à l'avance, garde-la au frigo, ajoute 1 min de cuisson."],["Une minute de trop et le cœur n'est plus coulant."],ZONE1,["chocolat"]);
R("gateau-yaourt","desserts","","🍰","Gâteau au yaourt",6,10,160,25,false,
 ["1 pot de yaourt nature","2 pots de sucre","3 pots de farine","1/2 pot d'huile","3 œufs","1 sachet de levure","1 zeste de citron"],
 ["Mélange tous les ingrédients (le pot de yaourt sert de mesure).","Verse dans un moule beurré qui rentre dans le panier.","Cuis 22 à 25 min à 160 °C. Vérifie avec la pointe d'un couteau."],
 "Ne pas retourner.",["Le programme Gâteau démarre à 160 °C / 20 min, c'est une bonne base.","Si le dessus colore trop vite, couvre d'alu bien serré."],["Température trop haute : dessus brûlé, centre cru."],FULL,["enfants","gouter"]);
R("muffins","desserts","","🧁","Muffins aux pépites de chocolat",8,15,160,15,false,
 ["200 g de farine","100 g de sucre","1 sachet de levure","2 œufs","10 cl de lait","80 g de beurre fondu","100 g de pépites de chocolat"],
 ["Mélange les ingrédients secs d'un côté, les liquides de l'autre, puis réunis sans trop travailler.","Ajoute les pépites, remplis des caissettes en silicone aux 2/3.","Cuis 14 à 16 min à 160 °C."],
 "Ne pas retourner.",["Le guide Valberg propose 200 °C pour les muffins ; 160 °C évite un dessus trop coloré sur une grande pâte maison. Teste."],["Caissettes en papier seules : elles s'envolent. Utilise du silicone ou double-les."],ZONE2,["chocolat","enfants","gouter"]);
R("banane-choco","desserts","","🍌","Bananes rôties au chocolat",4,5,180,8,false,
 ["4 bananes","40 g de chocolat noir","1 poignée d'amandes effilées"],
 ["Fends les bananes dans leur peau sur la longueur.","Glisse des carrés de chocolat dans la fente.","Cuis 7 à 8 min à 180 °C. Parsème d'amandes."],
 "Ne pas retourner.",["Se mange à la cuillère directement dans la peau."],["Fente trop profonde : la banane s'ouvre et le chocolat coule."],ZONE1,["fruit","chocolat","rapide"]);
R("crumble","desserts","","🥧","Crumble pommes-poires",6,15,170,22,false,
 ["3 pommes","2 poires","100 g de farine","70 g de sucre roux","70 g de beurre froid","cannelle"],
 ["Coupe les fruits en dés dans un plat qui rentre dans le panier, ajoute cannelle.","Sable farine, sucre et beurre du bout des doigts.","Couvre les fruits de pâte et cuis 20 à 22 min à 170 °C."],
 "Ne pas retourner.",["Ajoute une poignée de flocons d'avoine pour plus de croquant."],["Beurre trop mou : la pâte ne s'émiette pas."],FULL,["fruit","hiver"]);
R("churros","desserts","","🍩","Churros",4,20,190,12,true,
 ["25 cl d'eau","50 g de beurre","1 pincée de sel","125 g de farine","2 œufs","sucre et cannelle"],
 ["Porte l'eau, le beurre et le sel à ébullition, ajoute la farine d'un coup et mélange.","Hors du feu, incorpore les œufs un à un.","Poche des bâtonnets sur un papier cuisson perforé, vaporise d'huile.","Cuis 10 à 12 min à 190 °C, roule dans sucre-cannelle."],
 "Retourne délicatement à mi-cuisson.",["Sers avec une sauce chocolat."],["Pâte trop liquide : les churros s'étalent."],ZONE2,["enfants","gouter"]);
R("cookies","desserts","","🍪","Cookies",12,15,160,9,true,
 ["120 g de beurre mou","100 g de sucre roux","1 œuf","200 g de farine","1/2 sachet de levure","150 g de pépites de chocolat"],
 ["Mélange beurre et sucre, ajoute l'œuf, puis farine et levure, puis pépites.","Forme des boules espacées de 4 cm sur papier cuisson perforé.","Cuis 8 à 10 min à 160 °C. Ils durcissent en refroidissant."],
 "Ne pas retourner.",["Cuis en plusieurs fournées plutôt que de les serrer."],["Les sortir trop cuits : ils deviennent durs."],ZONE2,["chocolat","enfants","gouter"]);
R("brioche-perdue","desserts","","🍞","Brioche perdue",4,10,180,8,false,
 ["8 tranches de brioche rassise","2 œufs","20 cl de lait","2 c. à soupe de sucre","1 sachet de sucre vanillé"],
 ["Bats œufs, lait et sucres.","Trempe rapidement les tranches.","Pose sur un papier cuisson perforé et cuis 7 à 8 min à 180 °C en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Égoutte bien les tranches pour qu'elles ne détrempent pas le papier."],["Trop trempée, la brioche se casse."],ZONE2,["gouter","petit-dej"]);
R("ananas-roti","desserts","","🍍","Ananas rôti caramélisé",4,10,200,12,false,
 ["1 ananas","2 c. à soupe de sucre roux","1 c. à café de cannelle","1 c. à soupe de beurre fondu"],
 ["Coupe l'ananas en tranches ou bâtonnets.","Badigeonne de beurre et saupoudre de sucre et cannelle.","Cuis 10 à 12 min à 200 °C en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Avec une boule de glace coco, c'est parfait."],["Sucre qui tombe sur la grille : il brûle. Saupoudre au-dessus d'une assiette."],ZONE1,["fruit","sans gluten"]);
R("chaussons-pommes","desserts","","🥟","Chaussons aux pommes",4,15,180,14,false,
 ["1 pâte feuilletée","200 g de compote de pommes","1 jaune d'œuf"],
 ["Découpe 4 disques de pâte, garnis la moitié de compote.","Referme, soude les bords et dore au jaune d'œuf.","Cuis 12 à 14 min à 180 °C sur papier cuisson perforé."],
 "Ne pas retourner.",["Fais 2 petites entailles sur le dessus pour la vapeur."],["Trop de compote : ça déborde."],ZONE2,["fruit","gouter"]);

/* ========== APÉRITIFS / SNACKS ========== */
R("pois-chiches","aperos","","🫘","Pois chiches croustillants",4,5,200,16,false,
 ["400 g de pois chiches cuits","1 c. à soupe d'huile","1 c. à café de paprika fumé","sel"],
 ["Égoutte, rince et sèche très bien les pois chiches.","Mélange avec l'huile et les épices.","Cuis 14 à 18 min à 200 °C en secouant 3 fois."],
 "Secoue toutes les 5 min.",["Ils croustillent encore en refroidissant."],["Pois chiches humides : ils restent mous."],ZONE1,["vegan","sans gluten"]);
R("chips-legumes","aperos","","🥔","Chips maison",4,15,180,14,false,
 ["2 pommes de terre","1 c. à café d'huile","sel"],
 ["Tranche très finement (mandoline). Rince et sèche parfaitement.","Mélange avec l'huile.","Cuis 12 à 16 min à 180 °C en secouant toutes les 4 min."],
 "Secoue toutes les 4 min.",["Mets une petite quantité à la fois."],["Tranches trop légères : elles peuvent être aspirées vers le haut. Ne mets pas de tranches isolées."],ZONE1,["vegan","sans gluten"]);
R("mozza-sticks","aperos","","🧀","Bâtonnets de mozzarella",4,15,200,6,true,
 ["250 g de mozzarella en bloc","1 œuf","40 g de farine","80 g de chapelure","origan","huile en spray"],
 ["Coupe la mozzarella en bâtonnets. Farine, œuf, chapelure, puis œuf et chapelure à nouveau.","Congèle 30 min.","Vaporise d'huile, cuis 5 à 7 min à 200 °C."],
 "Ne pas retourner.",["Double panure + congélation = le fromage ne coule pas."],["Ne pas congeler : la mozzarella fond avant de dorer."],ZONE1,["fromage","vegetarien"]);
R("feuilletes-saucisse","aperos","","🌭","Feuilletés saucisse",6,15,200,14,false,
 ["1 pâte feuilletée","12 knacks ou mini-saucisses","1 jaune d'œuf","moutarde"],
 ["Coupe la pâte en bandes, tartine un peu de moutarde.","Enroule chaque saucisse, dore au jaune d'œuf.","Cuis 13 à 15 min à 200 °C sur papier cuisson perforé."],
 "Ne pas retourner.",["Le guide Valberg indique 13-15 min à 200 °C pour les friands à la saucisse."],["Pâte trop chaude en la travaillant : elle feuillette mal."],ZONE2,["enfants","porc"]);
R("nachos","aperos","","🌮","Nachos gratinés",4,5,180,5,false,
 ["150 g de chips tortilla","100 g de cheddar râpé","2 c. à soupe de jalapeños","guacamole, crème","salsa"],
 ["Dispose les chips dans un plat qui rentre dans le panier.","Parsème de cheddar et jalapeños.","Cuis 4 à 5 min à 180 °C. Sers avec les sauces."],
 "Ne pas retourner.",["Surveille par le hublot."],["Chips directement sur la grille : le fromage coule au fond."],ZONE1,["fromage","rapide"]);
R("noix-epicees","aperos","","🥜","Noix et amandes épicées",6,3,160,8,false,
 ["250 g de noix, amandes, noix de cajou","1 c. à soupe d'huile d'olive","1 c. à café de paprika","1/2 c. à café de cumin","sel"],
 ["Mélange les fruits secs avec huile et épices.","Cuis 7 à 9 min à 160 °C en secouant 2 fois."],
 "Secoue à 3 et 6 min.",["Laisse refroidir : elles deviennent croquantes."],["À 200 °C, elles brûlent en une minute."],ZONE1,["vegan","sans gluten"]);
R("rillettes-croutons","aperos","","🥖","Croûtons à l'ail",4,5,180,6,false,
 ["1/2 baguette rassise","2 c. à soupe d'huile d'olive","1 gousse d'ail","herbes de Provence"],
 ["Coupe le pain en cubes, mélange avec huile, ail et herbes.","Cuis 5 à 6 min à 180 °C en secouant à mi-cuisson."],
 "Secoue à mi-cuisson.",["Parfaits sur une soupe ou une salade César."],["Laisser sans surveiller : ils passent de dorés à brûlés vite."],ZONE1,["vegan","rapide"]);
R("samoussas","aperos","","🔺","Samoussas légumes",4,25,190,10,true,
 ["8 feuilles de brick","200 g de légumes cuits (petits pois, carottes, pommes de terre)","1 c. à café de curry","huile en spray"],
 ["Mélange les légumes avec le curry.","Coupe les feuilles en deux, plie en triangles en garnissant.","Vaporise d'huile, cuis 8 à 10 min à 190 °C en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Version viande : bœuf haché cuit, oignon, épices."],["Feuilles de brick non huilées : elles restent blanches et cassantes."],ZONE2,["vegetarien","epice"]);
R("pizza-express","aperos","","🍕","Mini-pizzas",4,10,180,8,false,
 ["1 pâte à pizza","4 c. à soupe de sauce tomate","1 boule de mozzarella","jambon, champignons, olives","origan"],
 ["Découpe des disques de pâte à la taille d'une zone.","Garnis de sauce, mozzarella et garnitures.","Cuis 7 à 9 min à 180 °C sur papier cuisson perforé."],
 "Ne pas retourner.",["Le programme Pizza démarre à 180 °C / 15 min : surveille, une pâte fine cuit plus vite."],["Trop de garniture : pâte molle au centre."],ZONE2,["enfants","fromage"]);

/* ========== PETIT-DÉJEUNER ========== */
R("bacon","petitdej","","🥓","Bacon croustillant",4,1,180,8,false,
 ["8 tranches de bacon ou poitrine fine"],
 ["Pose les tranches à plat sans les superposer.","Cuis 7 à 10 min à 180 °C selon le croustillant voulu."],
 "Retourne à mi-cuisson si les tranches sont épaisses.",["Nettoie le panier juste après : la graisse s'enlève facilement."],["Graisse accumulée = fumée blanche. Vide le fond si besoin."],ZONE1,["porc","rapide"]);
R("oeufs-cocotte","petitdej","","🍳","Œufs cocotte",4,5,160,9,false,
 ["4 œufs","4 c. à soupe de crème fraîche","ciboulette","sel, poivre","beurre"],
 ["Beurre 4 ramequins, mets 1 c. de crème et un œuf dans chacun.","Sale, poivre.","Cuis 8 à 10 min à 160 °C : le blanc pris, le jaune coulant."],
 "Ne pas retourner.",["Ajoute du jambon ou des épinards au fond."],["Ramequins trop pleins : débordement."],ZONE1,["oeuf","sans gluten"]);
R("pain-perdu","petitdej","","🍞","Pain perdu",4,10,180,8,false,
 ["8 tranches de pain rassis","2 œufs","20 cl de lait","2 c. à soupe de sucre","cannelle"],
 ["Bats œufs, lait, sucre et cannelle.","Trempe les tranches rapidement.","Cuis 7 à 8 min à 180 °C sur papier cuisson perforé, en retournant à mi-cuisson."],
 "Retourne à mi-cuisson.",["Sers avec des fruits rouges et du sirop d'érable."],["Pain frais : il se délite."],ZONE2,["gouter","enfants"]);
R("granola","petitdej","","🥣","Granola maison",8,10,150,14,false,
 ["250 g de flocons d'avoine","80 g d'amandes concassées","3 c. à soupe de miel","2 c. à soupe d'huile","1 c. à café de cannelle","50 g de raisins secs"],
 ["Mélange tout sauf les raisins.","Étale dans un plat ou sur papier cuisson bien lesté.","Cuis 12 à 15 min à 150 °C en remuant toutes les 4 min.","Ajoute les raisins en fin de cuisson. Laisse refroidir."],
 "Remue toutes les 4 min.",["Se garde 2 semaines en bocal."],["Flocons légers aspirés vers la résistance : utilise un plat, pas un papier seul."],ZONE1,["vegetarien"]);
R("croissants-crus","petitdej","","🥐","Viennoiseries surgelées crues",4,1,160,14,false,
 ["4 croissants ou pains au chocolat crus surgelés"],
 ["Laisse lever selon le paquet si demandé.","Pose sur papier cuisson perforé, espacés.","Cuis 12 à 16 min à 160 °C."],
 "Ne pas retourner.",["Ils gonflent beaucoup : laisse de la place au-dessus."],["Température trop haute : dessus brûlé, dedans pas cuit."],ZONE2,["surgele","gouter"]);
R("omelette","petitdej","","🍳","Omelette soufflée",2,5,170,10,false,
 ["4 œufs","2 c. à soupe de lait","30 g de fromage râpé","dés de jambon ou légumes","sel, poivre"],
 ["Bats les œufs avec le lait, sel, poivre.","Verse dans un petit plat beurré qui rentre dans une zone, ajoute garniture et fromage.","Cuis 9 à 11 min à 170 °C."],
 "Ne pas retourner.",["Le centre doit être juste pris."],["Plat trop grand : omelette fine et sèche."],ZONE1,["oeuf"]);
R("pommes-sautees-dej","petitdej","","🥔","Pommes de terre du petit-déj (hash)",4,10,190,15,false,
 ["500 g de pommes de terre cuites","1 oignon","1 c. à soupe d'huile","paprika, sel"],
 ["Coupe en dés, mélange avec l'oignon émincé, l'huile et les épices.","Cuis 14 à 16 min à 190 °C en secouant à mi-cuisson."],
 "Secoue à mi-cuisson.",["Fais le bacon dans l'autre zone avec la Fin synchronisée."],["Pommes de terre crues coupées gros : plus long, à vérifier."],ZONE1,["pomme de terre","vegan"]);

/* ========== RÉCHAUFFER (recettes) ========== */
R("rechauffer-pizza","rechauffer","","🍕","Réchauffer une part de pizza",2,1,150,4,false,
 ["2 parts de pizza froide"],
 ["Pose les parts sur la grille.","Chauffe 3 à 5 min à 150 °C."],
 "Ne pas retourner.",["La pâte redevient croustillante, contrairement au micro-ondes."],["Température trop forte : le fromage brûle avant que le cœur chauffe."],ZONE1,["rechauffer","rapide"]);
R("rechauffer-frites","rechauffer","","🍟","Redonner du croustillant aux frites",2,1,180,4,false,
 ["Restes de frites"],
 ["Étale les frites en une couche.","Chauffe 3 à 5 min à 180 °C en secouant à mi-cuisson."],
 "Secoue à mi-cuisson.",["Un tout petit voile d'huile en spray aide."],["Trop de frites à la fois : elles restent molles."],ZONE1,["rechauffer","rapide"]);
R("rechauffer-poulet","rechauffer","","🍗","Réchauffer poulet rôti ou pané",2,1,150,8,false,
 ["Restes de poulet"],
 ["Pose les morceaux sur la grille.","Chauffe 6 à 10 min à 150 °C en retournant à mi-cuisson.","Vérifie que le cœur est bien chaud (74 °C)."],
 "Retourne à mi-cuisson.",["Le guide Valberg conseille 150 °C pendant 10 min maximum pour réchauffer."],["Morceaux épais réchauffés trop vite : cœur froid."],ZONE1,["rechauffer","poulet"]);
R("rechauffer-viennoiseries","rechauffer","","🥐","Rafraîchir croissants et pain",2,1,150,3,false,
 ["Croissants ou baguette de la veille"],
 ["Humidifie très légèrement la croûte du pain.","Chauffe 2 à 4 min à 150 °C."],
 "Ne pas retourner.",["Le pain retrouve une croûte croustillante."],["Laisse trop longtemps : ça dessèche."],ZONE1,["rechauffer","rapide"]);
R("rechauffer-quiche","rechauffer","","🥧","Réchauffer quiche, tarte, lasagnes",2,1,150,8,false,
 ["Parts de quiche, tarte ou lasagnes"],
 ["Quiche/tarte : directement sur la grille, 6 à 8 min à 150 °C.","Lasagnes : dans un petit plat couvert d'alu bien serré, 10 min à 150 °C, puis vérifie et prolonge si besoin."],
 "Ne pas retourner.",["Vérifie que le centre est bien chaud avant de servir."],["Alu mal fixé : il peut s'envoler vers la résistance."],ZONE1,["rechauffer"]);

/* ========== TABLEAUX ========== */
/* Surgelés : temps courants. Les lignes marquées (Valberg) viennent du guide de cuisson de la notice VAL-AF11.5LFLEX. */
const FROZEN = [
 ["🍟","Frites allumettes",200,"9-16","Oui","Valberg : 300-700 g"],
 ["🍟","Frites épaisses",200,"11-20","Oui","Valberg : 300-700 g"],
 ["🍗","Nuggets de poulet",200,"6-10","Oui","Valberg : 100-500 g"],
 ["🐟","Poisson pané (bâtonnets)",200,"6-10","Oui","Valberg : 100-400 g"],
 ["🥟","Rouleaux de printemps",200,"8-10","Oui","Valberg : 100-400 g"],
 ["🧀","Fromage pané",180,"8-10","Oui","Valberg : 100-400 g"],
 ["🥔","Potatoes / quartiers",200,"15-20","Oui","Une couche, secouer 2 fois"],
 ["🥔","Pommes noisettes / croquettes",200,"10-14","Oui","Ne pas entasser"],
 ["🍕","Pizza surgelée (taille d'une zone)",180,"10-14","Non","Couper si trop grande"],
 ["🍔","Steak haché surgelé",180,"10-14","Oui","70 °C à cœur"],
 ["🍗","Cordon bleu / escalope panée",190,"14-18","Oui","74 °C à cœur"],
 ["🍤","Crevettes panées",200,"7-9","Oui","Une couche"],
 ["🧅","Rondelles d'oignon panées",200,"8-10","Oui",""],
 ["🔺","Samoussas / nems",190,"10-12","Oui",""],
 ["🥐","Viennoiseries crues",160,"12-16","Non","Laisser de l'espace"],
 ["🥖","Mini-quiches / feuilletés",180,"10-12","Non",""],
 ["🥦","Légumes surgelés (brocoli, haricots)",190,"12-15","Oui","Un filet d'huile"],
 ["🐟","Filet de poisson nature",190,"12-15","Non","63 °C à cœur"],
];
const REHEAT = [
 ["🍕","Pizza",150,"3-5"],["🍟","Frites, potatoes",180,"3-5"],["🍗","Poulet rôti / pané",150,"6-10"],
 ["🥧","Quiche, tarte salée",150,"6-8"],["🥐","Viennoiseries, pain",150,"2-4"],["🌯","Burrito, panini",160,"5-8"],
 ["🍝","Lasagnes / gratin (plat couvert)",150,"10"],["🥟","Nems, samoussas",160,"4-6"],
];
