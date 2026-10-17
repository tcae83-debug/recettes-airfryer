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

/* ===== Version 2 : nouvelles recettes (régime, protéinées, spécialités) ===== */
R("dinde-citron-herbes","plats","volaille","🦃","Escalopes de dinde citron et herbes",4,5,190,10,true,
 ["4 escalopes de dinde (env. 130 g chacune)", "1 citron (zeste et jus)", "1 c. à café d'huile d'olive", "1 c. à café d'herbes de Provence", "sel, poivre"],
 ["Mélange zeste, jus de citron, huile et herbes.", "Badigeonne les escalopes et laisse mariner 10 min.", "Préchauffe 3 min à 190 °C, pose les escalopes sur la grille.", "Cuis 10 min en retournant à mi-cuisson : 74 °C à cœur."],
 "Retourne à mi-cuisson.",["Choisis des escalopes épaisses (1,5 cm) : les très fines sèchent en 6 min.", "Sale seulement après cuisson : le citron suffit à donner du goût."],
 ["Mariner plus de 2 h dans le citron : la viande devient farineuse."],ZONE1,["leger", "rapide", "sans gluten"]);
R("colin-croute-herbes","plats","poisson","🐟","Dos de colin en croûte d'herbes",4,10,180,10,false,
 ["4 dos de colin (env. 150 g)", "2 c. à soupe de persil et ciboulette hachés", "1 c. à soupe de moutarde", "2 c. à soupe de chapelure", "1 citron", "sel, poivre"],
 ["Éponge le poisson, sale et poivre.", "Tartine le dessus d'une fine couche de moutarde.", "Mélange herbes et chapelure, presse sur la moutarde.", "Pose sur un papier cuisson perforé, cuis 10 min à 180 °C."],
 "Ne pas retourner.",["La moutarde fait tenir la croûte sans beurre.", "Le poisson est cuit quand il se détache en lamelles nacrées."],
 ["Poisson surgelé non décongelé : il rend de l'eau et la croûte détrempe."],ZONE1,["poisson", "leger"]);
R("brochettes-crevettes-citron-vert","plats","poisson","🍤","Brochettes de crevettes citron vert",4,15,200,6,true,
 ["500 g de crevettes crues décortiquées", "1 courgette", "2 citrons verts", "1 c. à café d'huile", "1 gousse d'ail, coriandre", "1 pincée de piment"],
 ["Mélange crevettes, jus et zeste de citron vert, ail, huile et piment : 15 min.", "Enfile crevettes et rondelles de courgette sur des pics.", "Préchauffe 3 min, cuis 6 min à 200 °C en retournant à 3 min."],
 "Retourne à mi-cuisson.",["Pics en bois trempés 30 min, coupés à la longueur d'une zone.", "Les crevettes sont prêtes quand elles forment un C : en O, elles sont trop cuites."],
 ["Mariner les crevettes plus de 30 min dans le citron : elles « cuisent » et deviennent caoutchouteuses."],ZONE1,["poisson", "leger", "rapide", "sans gluten"]);
R("legumes-soleil-sans-huile","accomp","","🫑","Légumes du soleil presque sans huile",4,10,190,18,false,
 ["2 courgettes", "1 aubergine", "1 poivron rouge", "1 oignon rouge", "1 c. à café d'huile d'olive en spray", "herbes de Provence, sel"],
 ["Coupe tous les légumes en cubes de 2 cm.", "Mets-les dans un saladier, vaporise l'huile, ajoute herbes et sel, mélange bien.", "Étale dans les deux zones et cuis 18 min à 190 °C."],
 "Secoue 2 fois.",["Le spray couvre tout avec 5 g d'huile au lieu de 30 g.", "Sale l'aubergine 10 min avant : elle absorbe moins et rôtit mieux."],
 ["Panier trop rempli : les légumes cuisent à la vapeur."],ZONE2,["legume", "leger", "vegan", "sans gluten"]);
R("chips-courgette-parmesan","aperos","","🥒","Chips de courgette au parmesan",4,10,170,14,false,
 ["2 courgettes", "20 g de parmesan râpé", "1 c. à café d'huile en spray", "paprika, sel"],
 ["Tranche les courgettes à 3 mm, sale et éponge 10 min.", "Vaporise d'huile, saupoudre de parmesan et paprika.", "Étale en une couche dans les deux zones, cuis 14 min à 170 °C."],
 "Retourne les tranches à mi-cuisson.",["Plus elles sont fines et sèches, plus elles croustillent.", "Elles durcissent encore en refroidissant 2 min."],
 ["Tranches qui se chevauchent : elles restent molles."],ZONE2,["legume", "leger", "vegetarien", "apero"]);
R("frites-carottes","accomp","","🥕","Frites de carottes au cumin",4,10,190,16,false,
 ["600 g de carottes", "1 c. à café d'huile", "1/2 c. à café de cumin", "sel"],
 ["Épluche et coupe les carottes en bâtonnets de 1 cm.", "Mélange avec l'huile, le cumin et le sel.", "Cuis 16 min à 190 °C dans les deux zones."],
 "Secoue à mi-cuisson.",["Des bâtonnets réguliers dorent en même temps.", "Sers avec une sauce yaourt 0 % citron."],
 ["Bâtonnets trop épais : le centre reste dur."],ZONE2,["legume", "leger", "vegan", "sans gluten"]);
R("steak-chou-fleur","plats","vegetarien","🥦","Steaks de chou-fleur au paprika",2,10,190,18,false,
 ["1 chou-fleur", "1 c. à café d'huile", "1 c. à café de paprika fumé", "1 c. à soupe de parmesan", "sel, poivre"],
 ["Coupe 2 tranches de 2 cm au centre du chou-fleur (garde le reste en fleurettes).", "Badigeonne d'huile au paprika, sale.", "Cuis 18 min à 190 °C, parmesan les 3 dernières minutes."],
 "Retourne délicatement à mi-cuisson.",["Garde le trognon dans la tranche : c'est lui qui la tient.", "Les fleurettes restantes cuisent à côté dans la même zone."],
 ["Tranche trop fine : elle se casse en la retournant."],ZONE1,["legume", "leger", "vegetarien"]);
R("portobellos-legers","entrees","","🍄","Portobellos farcis légers",4,10,180,12,false,
 ["4 gros champignons portobello", "100 g de fromage blanc 0 %", "1 gousse d'ail, ciboulette", "40 g de jambon de dinde en dés", "10 g de parmesan"],
 ["Retire les pieds, essuie les chapeaux.", "Mélange fromage blanc, ail, ciboulette et jambon.", "Garnis, saupoudre de parmesan, cuis 12 min à 180 °C."],
 "Ne pas retourner.",["Fais-les précuire 4 min à vide, chapeau en haut, pour évacuer l'eau.", "Une pointe de muscade relève le fromage blanc."],
 ["Laver les champignons à l'eau : ils se gorgent d'eau."],ZONE1,["leger", "legume"]);
R("boulettes-poulet-legeres","plats","volaille","🍡","Boulettes de poulet aux herbes",4,15,190,12,true,
 ["500 g de blanc de poulet haché", "1 blanc d'œuf", "2 c. à soupe de flocons d'avoine", "1 oignon nouveau, persil, coriandre", "1 c. à café de cumin, sel, poivre"],
 ["Mixe le poulet (ou demande-le haché) et mélange avec le reste.", "Forme 20 boulettes avec les mains mouillées.", "Préchauffe 3 min, cuis 12 min à 190 °C : 74 °C à cœur."],
 "Secoue à mi-cuisson.",["Les flocons d'avoine gardent les boulettes moelleuses sans chapelure.", "Sers avec une sauce yaourt 0 %, citron et menthe."],
 ["Boulettes serrées : elles cuisent mal sur les côtés."],ZONE1,["leger", "sans lactose"]);
R("omelette-blancs-legumes","petitdej","","🍳","Omelette de blancs aux légumes",2,10,160,12,false,
 ["6 blancs d'œufs (ou 200 g en brique)", "2 œufs entiers", "1/2 poivron", "1 poignée d'épinards", "30 g de feta", "sel, poivre"],
 ["Huile légèrement un petit plat allant au four (taille d'une zone).", "Mets les légumes coupés fin dans le plat, cuis-les 3 min à 160 °C.", "Verse les œufs battus et la feta, cuis 9 min : le centre doit être juste pris."],
 "Ne pas retourner.",["Ajoute 2 jaunes : la texture reste moelleuse avec peu de calories.", "Plat en céramique ou métal, jamais en verre non adapté au four."],
 ["Température trop forte : le dessus brûle avant que le centre prenne."],ZONE1,["oeuf", "leger", "sans gluten", "vegetarien"]);
R("muffins-oeufs-legumes","petitdej","","🧁","Muffins aux œufs et légumes",6,10,160,14,false,
 ["6 œufs", "100 g de fromage blanc 0 %", "1 poivron", "1 courgette", "60 g de jambon de dinde", "sel, poivre, ciboulette"],
 ["Coupe les légumes et le jambon en petits dés.", "Bats les œufs avec le fromage blanc, sale, poivre.", "Répartis légumes puis œufs dans 12 moules silicone (une zone = 6 moules).", "Cuis 14 min à 160 °C."],
 "Ne pas retourner.",["Se gardent 4 jours au frigo : réchauffe 3 min à 150 °C.", "Le fromage blanc les rend plus moelleux qu'avec de la crème."],
 ["Moules remplis à ras : ils débordent en gonflant."],ZONE2,["oeuf", "leger", "sans gluten"]);
R("poivrons-farcis-quinoa","plats","vegetarien","🫑","Poivrons farcis au quinoa",4,15,180,20,false,
 ["4 poivrons", "300 g de quinoa cuit", "200 g de haricots rouges égouttés", "200 g de coulis de tomate", "40 g de mozzarella light", "cumin, paprika, sel"],
 ["Coupe le chapeau des poivrons et vide-les.", "Mélange quinoa, haricots, coulis et épices.", "Farcis, pose la mozzarella, remets les chapeaux à côté.", "Cuis 20 min à 180 °C sans séparateur."],
 "Ne pas retourner.",["Coupe une fine tranche sous le poivron pour qu'il tienne debout.", "Des poivrons de même taille cuisent ensemble."],
 ["Poivrons serrés contre la paroi : ils cuisent de travers."],FULL,["vegetarien", "leger", "legume"]);
R("aubergines-yaourt-menthe","entrees","","🍆","Aubergines grillées, yaourt menthe",4,10,190,18,false,
 ["2 aubergines", "1 c. à café d'huile en spray", "150 g de yaourt grec 0 %", "menthe fraîche, 1 gousse d'ail", "1 citron", "sel"],
 ["Coupe les aubergines en rondelles de 1,5 cm, sale 10 min, éponge.", "Vaporise d'huile, cuis 18 min à 190 °C dans les deux zones.", "Sers tiède avec le yaourt à l'ail, menthe et citron."],
 "Retourne à mi-cuisson.",["Le sel avant cuisson évite qu'elles boivent l'huile.", "Ajoute quelques graines de grenade pour la fraîcheur."],
 ["Rondelles trop fines : elles sèchent et brûlent."],ZONE2,["legume", "leger", "vegetarien", "sans gluten"]);
R("courgettes-farcies-thon","plats","poisson","🥒","Courgettes farcies au thon",4,15,180,18,false,
 ["4 courgettes", "2 boîtes de thon au naturel égoutté (280 g)", "100 g de fromage blanc 0 %", "1 échalote, persil", "20 g de parmesan", "sel, poivre"],
 ["Coupe les courgettes en deux, creuse-les (garde la chair).", "Mélange thon, chair hachée, fromage blanc, échalote et persil.", "Farcis, parmesan dessus, cuis 18 min à 180 °C."],
 "Ne pas retourner.",["Sale l'intérieur des barquettes et retourne-les 10 min : moins d'eau à la cuisson.", "Rondes ou longues, elles se calent bien dans les deux zones."],
 ["Farce trop liquide : égoutte bien le thon."],ZONE2,["poisson", "leger", "sans gluten"]);
R("merlu-sauce-vierge","plats","poisson","🐠","Merlu rôti, sauce vierge",4,10,190,9,true,
 ["4 filets de merlu (env. 150 g)", "2 tomates", "1 c. à soupe d'huile d'olive", "1 citron", "basilic, 1 échalote", "sel, poivre"],
 ["Prépare la sauce : tomates en petits dés, échalote, basilic, citron et huile.", "Sale les filets, pose-les sur un papier perforé.", "Cuis 9 min à 190 °C, nappe de sauce vierge froide."],
 "Ne pas retourner.",["La sauce vierge est meilleure préparée 30 min avant.", "Filets épais : 2 min de plus."],
 ["Filets fins en surcuisson : ils se défont."],ZONE1,["poisson", "leger", "sans gluten"]);
R("chips-pommes-cannelle","desserts","","🍎","Chips de pomme à la cannelle",4,10,140,25,false,
 ["3 pommes", "1 c. à café de cannelle"],
 ["Tranche les pommes très finement (2 mm) à la mandoline, sans les éplucher.", "Saupoudre de cannelle.", "Étale en une couche, cuis 25 min à 140 °C."],
 "Retourne toutes les 8 min.",["Elles finissent de croustiller en refroidissant sur une grille.", "Programme Déshydratation : 4 à 6 h à 60 °C pour des chips encore plus fines."],
 ["Tranches épaisses : elles restent souples."],ZONE2,["leger", "vegan", "sans gluten", "fruit"]);
R("poires-roties-vanille","desserts","","🍐","Poires rôties à la vanille",4,5,180,15,false,
 ["4 poires", "1 gousse de vanille", "1 c. à soupe de miel", "100 g de skyr pour servir"],
 ["Coupe les poires en deux, retire le cœur.", "Gratte la vanille, mélange au miel, badigeonne.", "Cuis 15 min à 180 °C, face coupée vers le haut. Sers avec le skyr."],
 "Ne pas retourner.",["Prends des poires fermes (Conférence) : elles se tiennent.", "Un peu de poivre ou de gingembre relève le goût."],
 ["Poires très mûres : elles s'effondrent."],ZONE1,["leger", "fruit", "sans gluten"]);
R("brochettes-poulet-yaourt","plats","volaille","🍢","Brochettes de poulet yaourt-citron",4,15,190,14,true,
 ["600 g de blancs de poulet", "125 g de yaourt grec 0 %", "1 citron", "1 c. à café de cumin, paprika, ail", "1 oignon rouge", "sel"],
 ["Coupe le poulet en cubes de 3 cm, mélange avec yaourt, citron et épices : 30 min au frais.", "Enfile en alternant avec l'oignon.", "Préchauffe 3 min, cuis 14 min à 190 °C : 74 °C à cœur."],
 "Retourne à mi-cuisson.",["Le yaourt attendrit et dore sans huile.", "Coupe les pics à la longueur d'une zone pour utiliser les deux côtés."],
 ["Trop de marinade sur les pics : elle coule et fume. Égoutte légèrement."],ZONE2,["leger", "sans gluten"]);
R("nuggets-chou-fleur","aperos","","🥦","Nuggets de chou-fleur",4,15,190,15,false,
 ["1 chou-fleur en fleurettes", "2 blancs d'œufs", "40 g de chapelure", "20 g de parmesan", "paprika, sel"],
 ["Trempe les fleurettes dans les blancs battus.", "Roule-les dans chapelure, parmesan et paprika.", "Cuis 15 min à 190 °C dans les deux zones."],
 "Secoue doucement à mi-cuisson.",["Précuis 3 min au micro-ondes les grosses fleurettes.", "Sers avec une sauce yaourt-ail."],
 ["Fleurettes mouillées : la panure glisse."],ZONE2,["legume", "leger", "vegetarien", "apero"]);
R("galettes-courgette-feta","entrees","","🥒","Galettes de courgette et feta",4,15,190,14,true,
 ["2 courgettes râpées", "1 œuf", "60 g de feta", "3 c. à soupe de farine", "menthe, ail, sel"],
 ["Râpe les courgettes, sale, laisse 10 min puis essore très fort dans un torchon.", "Mélange avec l'œuf, la feta émiettée, la farine et la menthe.", "Forme 8 galettes sur un papier perforé, préchauffe et cuis 14 min à 190 °C."],
 "Retourne à mi-cuisson.",["L'essorage est la clé : sinon les galettes s'étalent.", "Sers avec une salade et du yaourt."],
 ["Papier cuisson seul pendant le préchauffage : il s'envole vers la résistance."],ZONE2,["vegetarien", "leger", "legume"]);
R("legumes-verts-rotis","accomp","","🥬","Brocoli et choux de Bruxelles rôtis",4,10,190,16,false,
 ["300 g de choux de Bruxelles", "1 brocoli en fleurettes", "1 c. à café d'huile", "1 c. à soupe de sauce soja", "1 gousse d'ail"],
 ["Coupe les choux de Bruxelles en deux.", "Mélange tous les légumes avec l'huile, la sauce soja et l'ail.", "Choux d'un côté (16 min), brocoli de l'autre (10 min) avec la Fin synchronisée, 190 °C."],
 "Secoue à mi-cuisson.",["Face coupée en bas pour caraméliser les choux.", "Les feuilles qui se détachent deviennent des chips."],
 ["Choux entiers : ils restent durs au centre."],ZONE2,["legume", "leger", "vegan"]);
R("tomates-farcies-dinde","plats","volaille","🍅","Tomates farcies légères à la dinde",4,15,180,20,false,
 ["8 tomates", "400 g de dinde hachée", "1 oignon", "1 blanc d'œuf", "persil, ail, herbes de Provence", "sel, poivre"],
 ["Coupe le chapeau des tomates, vide-les, retourne-les sur du papier.", "Mélange dinde, oignon haché, blanc d'œuf, herbes.", "Farcis, remets les chapeaux, cuis 20 min à 180 °C : 74 °C à cœur."],
 "Ne pas retourner.",["Garde la pulpe pour une sauce express.", "Tomates moyennes : elles tiennent mieux que les grosses."],
 ["Tomates gorgées d'eau : elles s'affaissent. Égoutte bien."],FULL,["leger", "sans gluten"]);
R("frittata-epinards","plats","vegetarien","🥚","Frittata épinards et ricotta",4,10,160,18,false,
 ["8 œufs", "150 g d'épinards", "100 g de ricotta", "1 oignon", "sel, poivre, muscade"],
 ["Fais fondre épinards et oignon 4 min à 160 °C dans un plat huilé.", "Verse les œufs battus, ajoute la ricotta en cuillerées.", "Cuis 14 min : le centre doit être juste pris."],
 "Ne pas retourner.",["Un plat de 20 x 15 cm environ rentre en retirant le séparateur.", "Se mange chaude ou froide en lunch box."],
 ["Plat trop grand : il touche les parois et cuit mal au centre."],FULL,["oeuf", "vegetarien", "sans gluten"]);
R("crumble-leger-fruits-rouges","desserts","","🫐","Crumble léger fruits rouges et avoine",4,10,180,15,false,
 ["400 g de fruits rouges (frais ou surgelés)", "50 g de flocons d'avoine", "20 g de poudre d'amande", "15 g de beurre", "1 c. à soupe de miel"],
 ["Mets les fruits dans 4 ramequins.", "Mélange avoine, amande, beurre mou et miel du bout des doigts.", "Parsème, cuis 15 min à 180 °C."],
 "Ne pas retourner.",["Fruits surgelés : pas besoin de décongeler, ajoute 3 min.", "Sers avec une cuillère de skyr."],
 ["Ramequins à ras : le jus déborde sur la grille."],ZONE1,["leger", "fruit", "dessert"]);
R("salade-lentilles-legumes-rotis","entrees","","🥗","Salade tiède lentilles et légumes rôtis",4,15,190,16,false,
 ["400 g de lentilles cuites", "1 butternut (500 g de chair)", "1 oignon rouge", "1 c. à soupe d'huile d'olive", "1 c. à soupe de vinaigre balsamique", "persil, sel"],
 ["Coupe la courge en cubes de 2 cm et l'oignon en quartiers.", "Mélange avec 1 c. à café d'huile, cuis 16 min à 190 °C.", "Mélange avec les lentilles, le reste d'huile, le vinaigre et le persil."],
 "Secoue à mi-cuisson.",["Se garde 3 jours : parfait en lunch box.", "Ajoute de la roquette au dernier moment."],
 ["Cubes de courge trop gros : ils restent fermes."],ZONE2,["vegan", "leger", "legumineuse"]);
R("butternut-cannelle","accomp","","🎃","Butternut rôtie cannelle et thym",4,10,190,18,false,
 ["1 butternut (800 g de chair)", "1 c. à café d'huile", "1/2 c. à café de cannelle", "thym, sel"],
 ["Épluche et coupe la courge en cubes de 2,5 cm.", "Mélange avec huile, cannelle, thym et sel.", "Cuis 18 min à 190 °C dans les deux zones."],
 "Secoue à mi-cuisson.",["Un éplucheur suffit pour la butternut, pas besoin de couteau.", "Les coins caramélisés sont les meilleurs : ne surcharge pas."],
 ["Cubes irréguliers : certains brûlent, d'autres restent crus."],ZONE2,["legume", "leger", "vegan", "sans gluten"]);
R("asperges-roties","accomp","","🌿","Asperges vertes rôties citron",4,5,200,8,false,
 ["500 g d'asperges vertes", "1 c. à café d'huile", "1 citron", "sel, poivre"],
 ["Casse la base dure des asperges.", "Roule-les dans l'huile, sale.", "Cuis 8 min à 200 °C, zeste de citron à la sortie."],
 "Secoue à mi-cuisson.",["Fines asperges : 6 min, grosses : 10 min.", "Coupe-les à la longueur du panier si besoin."],
 ["Asperges blanches : elles demandent d'être épluchées et plus de temps."],ZONE1,["legume", "leger", "vegan", "sans gluten", "printemps"]);
R("poulet-farci-epinards-ricotta","plats","volaille","🍗","Blancs de poulet farcis épinards-ricotta",4,15,190,18,true,
 ["4 blancs de poulet (env. 150 g)", "100 g d'épinards", "100 g de ricotta", "20 g de parmesan", "1 c. à café d'huile", "paprika, sel"],
 ["Ouvre chaque blanc en portefeuille sans le couper entièrement.", "Garnis d'épinards hachés, ricotta et parmesan, ferme avec un pic.", "Badigeonne d'huile au paprika, préchauffe et cuis 18 min à 190 °C : 74 °C à cœur."],
 "Retourne à mi-cuisson.",["Égoutte bien les épinards : la farce reste en place.", "Laisse reposer 3 min avant de trancher."],
 ["Blancs trop fins : ils sèchent avant que la farce chauffe."],ZONE1,["sans gluten"]);
R("poulet-croute-parmesan-avoine","plats","volaille","🐔","Poulet croustillant parmesan-avoine",4,15,190,14,true,
 ["600 g de blancs de poulet", "2 œufs", "50 g de flocons d'avoine mixés", "30 g de parmesan", "paprika, ail, sel", "huile en spray"],
 ["Coupe le poulet en aiguillettes.", "Trempe dans l'œuf battu puis dans avoine, parmesan et épices.", "Vaporise d'huile, préchauffe et cuis 14 min à 190 °C."],
 "Retourne à mi-cuisson.",["Les flocons mixés font une panure plus riche en protéines que la chapelure.", "Sers avec une sauce skyr-moutarde."],
 ["Aiguillettes collées : la panure ne dore pas sur les côtés."],ZONE2,["famille"]);
R("steaks-haches-5","plats","viande","🥩","Steaks hachés 5 % express",4,2,200,9,true,
 ["4 steaks hachés 5 % MG (125 g)", "sel, poivre"],
 ["Préchauffe 3 min à 200 °C.", "Pose les steaks sur la grille, sans les serrer.", "Cuis 7 min (à point) à 9 min (bien cuit), 70 °C à cœur pour un haché."],
 "Retourne à mi-cuisson.",["Sale à la sortie : le sel avant fait rendre de l'eau.", "Steaks surgelés : 12 à 14 min à 180 °C."],
 ["Écraser le steak avec la spatule : il perd son jus."],ZONE1,["rapide", "sans gluten", "famille"]);
R("brochettes-dinde-tikka","plats","volaille","🍢","Brochettes de dinde tikka",4,15,190,14,true,
 ["600 g d'escalopes de dinde", "150 g de yaourt grec 0 %", "2 c. à café de garam masala", "1 c. à café de curcuma, gingembre, ail", "1 citron", "sel"],
 ["Coupe la dinde en cubes, mélange avec tous les ingrédients : 1 h au frais.", "Enfile sur des pics.", "Préchauffe 3 min, cuis 14 min à 190 °C."],
 "Retourne à mi-cuisson.",["Marinade la veille : encore plus tendre.", "Raïta express : yaourt, concombre râpé, menthe."],
 ["Garam masala brûlé : ne dépasse pas 190 °C."],ZONE2,["sans gluten", "epice"]);
R("saumon-croute-sesame","plats","poisson","🐟","Saumon en croûte de sésame",4,5,190,10,true,
 ["4 pavés de saumon (125 g)", "2 c. à soupe de sauce soja", "2 c. à soupe de graines de sésame", "1 c. à café de miel"],
 ["Badigeonne le dessus du saumon de soja et de miel.", "Presse les graines de sésame sur le dessus.", "Préchauffe, cuis 10 min à 190 °C, côté peau en bas."],
 "Ne pas retourner.",["Retire du panier dès 52-55 °C à cœur : il reste fondant.", "Mélange sésame blanc et noir pour la déco."],
 ["Miel en excès : il noircit."],ZONE1,["poisson", "omega 3"]);
R("cabillaud-skyr-herbes","plats","poisson","🐟","Cabillaud gratiné skyr et herbes",4,10,180,12,false,
 ["4 dos de cabillaud (150 g)", "150 g de skyr", "1 c. à soupe de moutarde", "20 g de parmesan", "aneth, ciboulette, citron"],
 ["Mélange skyr, moutarde, herbes et zeste de citron.", "Nappe le poisson, parsème de parmesan.", "Cuis 12 min à 180 °C dans un petit plat ou sur papier perforé."],
 "Ne pas retourner.",["Le skyr remplace la crème et ajoute 5 g de protéines par portion.", "Dos épais : 2 min de plus."],
 ["Poisson trop fin : il sèche sous la sauce."],ZONE1,["poisson", "sans gluten"]);
R("crevettes-coco-proteinees","plats","poisson","🍤","Crevettes panées coco",4,15,200,8,true,
 ["500 g de grosses crevettes crues décortiquées", "2 blancs d'œufs", "30 g de noix de coco râpée", "30 g de chapelure panko", "sel, piment"],
 ["Sèche les crevettes, trempe-les dans les blancs battus.", "Roule-les dans coco, panko, sel et piment.", "Vaporise d'huile, cuis 8 min à 200 °C."],
 "Retourne à mi-cuisson.",["Laisse la queue : plus facile à tremper dans la sauce.", "Sauce : yaourt grec, citron vert et piment doux."],
 ["Coco trop fine : elle brûle. Préfère la râpée moyenne."],ZONE2,["poisson", "apero"]);
R("nuggets-tofu","plats","vegetarien","🟫","Nuggets de tofu croustillants",4,15,200,15,false,
 ["400 g de tofu ferme", "2 c. à soupe de sauce soja", "40 g de chapelure panko", "20 g de levure maltée ou parmesan", "paprika fumé, ail"],
 ["Presse le tofu 15 min, coupe en cubes de 2,5 cm.", "Mélange avec la sauce soja, puis roule dans panko, parmesan et épices.", "Vaporise d'huile, cuis 15 min à 200 °C."],
 "Secoue à mi-cuisson.",["Plus le tofu est pressé, plus il croustille.", "Tofu congelé puis décongelé : texture encore plus « viande »."],
 ["Tofu soyeux : il se défait, prends du ferme."],ZONE2,["vegetarien", "famille"]);
R("tempeh-croustillant","plats","vegetarien","🟤","Tempeh croustillant soja-gingembre",4,10,190,12,false,
 ["400 g de tempeh", "2 c. à soupe de sauce soja", "1 c. à café de miel ou sirop d'érable", "1 c. à café de gingembre râpé", "1 c. à café d'huile de sésame"],
 ["Coupe le tempeh en tranches de 1 cm.", "Marine 15 min dans le reste des ingrédients.", "Cuis 12 min à 190 °C."],
 "Retourne à mi-cuisson.",["Fais-le cuire 5 min à la vapeur avant pour adoucir son amertume.", "Sers en bowl avec riz et légumes."],
 ["Marinade trop sucrée : elle brûle."],ZONE1,["vegan", "vegetarien"]);
R("edamame-roties","aperos","","🫛","Edamame rôtis sel et piment",4,2,190,10,false,
 ["400 g d'edamame en cosse surgelés (250 g de graines)", "1 c. à café d'huile", "fleur de sel, piment d'Espelette"],
 ["Pas besoin de décongeler.", "Mélange avec l'huile.", "Cuis 10 min à 190 °C, sale à la sortie."],
 "Secoue à mi-cuisson.",["On mange les graines, pas la cosse.", "Version graines décortiquées : 8 min."],
 ["Sel avant cuisson : il glisse au fond."],ZONE1,["vegan", "apero", "sans gluten"]);
R("boulettes-lentilles-quinoa","plats","vegetarien","🧆","Boulettes lentilles-quinoa",4,20,190,15,true,
 ["400 g de lentilles cuites", "150 g de quinoa cuit", "1 œuf", "40 g de parmesan", "3 c. à soupe de flocons d'avoine", "cumin, ail, persil"],
 ["Écrase les lentilles à la fourchette, mélange avec le reste.", "Forme 16 boulettes, 15 min au frais.", "Préchauffe, cuis 15 min à 190 °C."],
 "Secoue doucement à mi-cuisson.",["Lentilles bien égouttées : les boulettes se tiennent.", "Sers avec une sauce tomate ou yaourt."],
 ["Pâte trop humide : ajoute des flocons."],ZONE2,["vegetarien", "legumineuse"]);
R("cheesecake-skyr","desserts","","🍰","Cheesecake léger au skyr",6,15,150,30,false,
 ["500 g de skyr", "200 g de fromage frais léger", "2 œufs", "50 g de sucre ou miel", "20 g de maïzena", "1 citron (zeste), vanille", "80 g de biscuits type petit-beurre"],
 ["Écrase les biscuits avec 1 c. à soupe d'eau, tasse au fond d'un moule de 15-16 cm.", "Fouette skyr, fromage, œufs, sucre, maïzena, zeste et vanille.", "Verse, cuis 30 min à 150 °C sans séparateur. Laisse refroidir dans l'appareil 15 min, puis 4 h au frigo."],
 "Ne pas retourner.",["Moule de 16 cm maximum : mesure le panier sans séparateur avant.", "Le centre doit encore trembloter à la sortie."],
 ["Température trop forte : il fend."],FULL,["dessert", "vegetarien"]);
R("muffins-banane-whey","petitdej","","🍌","Muffins banane, avoine et whey",6,10,160,15,false,
 ["2 bananes mûres", "2 œufs", "100 g de flocons d'avoine", "40 g de whey vanille", "100 g de skyr", "1 c. à café de levure"],
 ["Mixe tout jusqu'à une pâte lisse.", "Remplis 12 moules silicone aux 3/4.", "Cuis 15 min à 160 °C."],
 "Ne pas retourner.",["Sans whey : remplace par 40 g de farine (-6 g de protéines/portion).", "Se congèlent très bien."],
 ["Trop de whey : ils deviennent secs."],ZONE2,["vegetarien", "petit-dej"]);
R("baked-oats-skyr","petitdej","","🥣","Baked oats au skyr et fruits rouges",2,5,170,15,false,
 ["80 g de flocons d'avoine", "150 g de skyr", "1 œuf", "100 ml de lait", "100 g de fruits rouges", "1 c. à café de levure, cannelle"],
 ["Mixe avoine, skyr, œuf, lait et levure.", "Verse dans 2 ramequins, ajoute les fruits.", "Cuis 15 min à 170 °C."],
 "Ne pas retourner.",["Prépare la veille au frigo, cuis le matin.", "Un cœur de beurre de cacahuète au centre (+90 kcal)."],
 ["Ramequins trop pleins : ça déborde."],ZONE1,["vegetarien", "petit-dej"]);
R("cookies-proteines","desserts","","🍪","Cookies protéinés avoine-chocolat",10,10,170,9,false,
 ["120 g de flocons d'avoine mixés", "60 g de whey vanille", "60 g de beurre de cacahuète", "1 œuf", "2 c. à soupe de miel", "40 g de pépites de chocolat noir"],
 ["Mélange tout pour obtenir une pâte.", "Forme 10 boules aplaties sur un papier perforé.", "Cuis 9 min à 170 °C, en 2 fournées si besoin."],
 "Ne pas retourner.",["Ils semblent mous à la sortie : ils se raffermissent en 10 min.", "Papier toujours tenu par les cookies, jamais seul."],
 ["Trop cuits : secs comme des biscuits."],ZONE2,["dessert", "vegetarien"]);
R("roti-dinde","plats","volaille","🦃","Rôti de dinde aux herbes",6,5,180,40,false,
 ["1 rôti de dinde (900 g)", "1 c. à soupe d'huile", "1 c. à café de moutarde", "thym, romarin, ail", "sel, poivre"],
 ["Sors le rôti 20 min avant, badigeonne de moutarde et d'huile aux herbes.", "Cuis 40 min à 180 °C sans séparateur.", "Vérifie 74 °C à cœur, laisse reposer 10 min sous alu."],
 "Retourne à mi-cuisson.",["Thermomètre indispensable : la dinde sèche vite après 74 °C.", "Tranches froides : parfaites en sandwich protéiné."],
 ["Trancher tout de suite : le jus s'échappe."],FULL,["sans gluten", "famille"]);
R("maquereau-moutarde","plats","poisson","🐟","Filets de maquereau à la moutarde",4,5,190,8,false,
 ["8 filets de maquereau", "2 c. à soupe de moutarde à l'ancienne", "1 citron", "persil, poivre"],
 ["Badigeonne la chair de moutarde.", "Pose les filets côté peau en bas.", "Cuis 8 min à 190 °C."],
 "Ne pas retourner.",["Riche en oméga 3 : une portion couvre largement les besoins de la semaine.", "Sers avec des pommes de terre vapeur."],
 ["Filets surcuits : ils deviennent secs et forts en goût."],ZONE1,["poisson", "omega 3", "sans gluten"]);
R("boulettes-dinde-feta","plats","volaille","🍡","Boulettes de dinde feta-menthe",4,15,190,12,true,
 ["500 g de dinde hachée", "80 g de feta", "1 œuf", "2 c. à soupe de flocons d'avoine", "menthe, persil, ail", "sel, poivre"],
 ["Mélange tous les ingrédients.", "Forme 20 boulettes.", "Préchauffe, cuis 12 min à 190 °C."],
 "Secoue à mi-cuisson.",["Sale peu : la feta l'est déjà.", "Sers avec du tzatziki."],
 ["Mains sèches : la viande colle, mouille-les."],ZONE1,[]);
R("cuisses-poulet-yaourt","plats","volaille","🍗","Hauts de cuisse sans peau au yaourt",4,10,190,22,true,
 ["8 hauts de cuisse désossés sans peau", "150 g de yaourt grec 0 %", "1 c. à café de paprika, ail, curcuma", "1 citron", "sel"],
 ["Marine le poulet dans le yaourt épicé 1 h.", "Préchauffe, pose sur la grille sans serrer.", "Cuis 22 min à 190 °C : 74 °C à cœur."],
 "Retourne à mi-cuisson.",["Le haut de cuisse reste juteux même un peu trop cuit.", "Parfait en meal prep."],
 ["Morceaux qui se touchent : ils cuisent à la vapeur."],ZONE2,["sans gluten", "famille"]);
R("clafoutis-proteine","desserts","","🍒","Clafoutis protéiné aux cerises",4,10,170,22,false,
 ["300 g de cerises dénoyautées", "3 œufs", "200 g de fromage blanc 0 %", "100 ml de lait", "30 g de whey vanille ou farine", "30 g de sucre"],
 ["Fouette œufs, fromage blanc, lait, whey et sucre.", "Mets les cerises dans un plat ou 4 ramequins.", "Verse l'appareil, cuis 22 min à 170 °C (ramequins : 16 min)."],
 "Ne pas retourner.",["Cerises surgelées : ajoute 4 min.", "Délicieux tiède."],
 ["Plat trop rempli : il gonfle et déborde."],FULL,["dessert", "vegetarien", "sans gluten"]);
R("halloumi-grille","plats","vegetarien","🧀","Halloumi grillé et légumes",4,10,200,10,false,
 ["250 g de halloumi", "2 courgettes", "200 g de tomates cerises", "200 g de pois chiches", "1 c. à café d'huile", "origan, citron"],
 ["Coupe le halloumi en tranches de 1 cm, les courgettes en rondelles.", "Légumes et pois chiches 10 min dans une zone, halloumi 7 min dans l'autre (Fin synchronisée), 200 °C.", "Sers avec origan et citron."],
 "Retourne le halloumi à mi-cuisson.",["Le halloumi ne fond pas : il dore.", "Mange-le chaud, il durcit en refroidissant."],
 ["Halloumi trop cuit : caoutchouteux."],ZONE2,["vegetarien", "sans gluten"]);
R("gratin-courgettes-cottage","plats","vegetarien","🥘","Gratin de courgettes au cottage cheese",4,15,180,22,false,
 ["4 courgettes", "300 g de cottage cheese", "3 œufs", "40 g d'emmental", "sel, poivre, muscade"],
 ["Coupe les courgettes en rondelles, sale 10 min, éponge.", "Mélange cottage, œufs, sel, muscade.", "Alterne courgettes et appareil dans un plat, emmental dessus. Cuis 22 min à 180 °C."],
 "Ne pas retourner.",["Le cottage cheese remplace la crème : -200 kcal et +10 g de protéines par portion.", "Alu bien serré les 10 premières minutes si le dessus colore trop."],
 ["Courgettes non égouttées : gratin aqueux."],FULL,["vegetarien", "sans gluten"]);
R("scotch-eggs","entrees","","🥚","Scotch eggs (œufs en croûte de viande)",4,25,190,14,true,
 ["4 œufs mollets écalés", "400 g de chair à saucisse ou dinde hachée", "1 œuf battu", "50 g de chapelure", "sel, poivre"],
 ["Divise la viande en 4, aplatis et enrobe chaque œuf.", "Passe dans l'œuf battu puis la chapelure.", "Vaporise d'huile, préchauffe et cuis 14 min à 190 °C."],
 "Retourne à mi-cuisson.",["Œufs mollets 9 min à 150 °C dans l'airfryer puis eau glacée.", "Viande de volaille : 74 °C à cœur."],
 ["Viande trop épaisse : l'extérieur brûle avant que le cœur cuise."],ZONE1,["oeuf"]);
R("arancini","aperos","","🍙","Arancini à la mozzarella",4,25,190,14,true,
 ["400 g de risotto froid (ou riz rond cuit + parmesan)", "80 g de mozzarella en dés", "20 g de parmesan", "1 œuf", "70 g de chapelure", "huile en spray"],
 ["Forme 8 boules de riz, glisse un dé de mozzarella au centre.", "Passe dans l'œuf battu puis la chapelure.", "Vaporise d'huile, préchauffe et cuis 14 min à 190 °C."],
 "Retourne délicatement à mi-cuisson.",["Le riz doit être bien froid (de la veille) pour se tenir.", "En Sicile, on les fait aussi au ragù : un peu de bolognaise au centre."],
 ["Riz trop chaud : les boules s'effondrent."],ZONE2,["vegetarien", "apero", "fromage"]);
R("parmigiana","plats","vegetarien","🍆","Parmigiana di melanzane",4,20,180,25,false,
 ["2 aubergines", "400 g de coulis de tomate", "125 g de mozzarella", "40 g de parmesan", "1 c. à soupe d'huile", "basilic, sel"],
 ["Tranche les aubergines (1 cm), vaporise d'huile, cuis 12 min à 190 °C en 2 fournées.", "Alterne dans un plat : sauce, aubergines, mozzarella, parmesan, basilic.", "Cuis 13 min à 180 °C sans séparateur."],
 "Ne pas retourner (le plat).",["Rôtir les aubergines à l'air évite de les frire comme en Italie : 3 fois moins de gras.", "Meilleure tiède, ou réchauffée le lendemain."],
 ["Aubergines crues dans le plat : gratin plein d'eau."],FULL,["vegetarien", "fromage", "sans gluten"]);
R("bruschetta","entrees","","🍞","Bruschetta tomate-basilic",4,10,190,4,false,
 ["8 tranches de pain de campagne", "4 tomates", "1 gousse d'ail", "2 c. à soupe d'huile d'olive", "basilic, sel"],
 ["Coupe les tomates en dés, mélange avec basilic, sel et 1 c. à soupe d'huile.", "Toaste le pain 4 min à 190 °C, frotte d'ail, arrose du reste d'huile.", "Garnis au dernier moment."],
 "Retourne le pain à mi-cuisson.",["Garnis au dernier moment : le pain reste croustillant.", "Des tomates bien mûres de saison font toute la différence."],
 ["Pain trop fin : il devient biscotte."],ZONE2,["vegan", "apero", "ete"]);
R("patatas-bravas","accomp","","🥔","Patatas bravas",4,10,200,22,false,
 ["800 g de pommes de terre", "1 c. à soupe d'huile", "200 g de coulis de tomate", "1 c. à café de paprika fumé, piment", "1 gousse d'ail"],
 ["Coupe les pommes de terre en cubes de 2,5 cm, rince, sèche.", "Mélange avec l'huile et le paprika, cuis 22 min à 200 °C.", "Chauffe le coulis avec ail, paprika et piment : nappe au moment de servir."],
 "Secoue 2 fois.",["Une cuillère d'aïoli léger à côté, comme dans les bars à tapas.", "Dans les deux zones : une seule couche."],
 ["Cubes mouillés : ils ne dorent pas."],ZONE2,["vegan", "apero", "sans gluten", "epice"]);
R("calamars-romana","aperos","","🦑","Calamars à la romaine",4,15,200,8,true,
 ["500 g d'anneaux de calamars", "2 œufs", "50 g de farine", "60 g de chapelure", "huile en spray", "citron, sel"],
 ["Sèche les anneaux, passe-les dans farine, œuf puis chapelure.", "Vaporise d'huile, préchauffe.", "Cuis 8 min à 200 °C."],
 "Secoue à mi-cuisson.",["Cuisson courte : le calamar devient caoutchouteux au-delà.", "Sers avec citron et aïoli."],
 ["Anneaux surgelés humides : sèche-les bien après décongélation."],ZONE2,["poisson", "apero"]);
R("brochettes-kefta","plats","viande","🍢","Brochettes de kefta",4,15,200,10,true,
 ["500 g de bœuf haché 5 %", "1 oignon râpé", "persil, coriandre", "1 c. à café de cumin, paprika, ras el hanout", "sel, poivre"],
 ["Mélange viande, oignon pressé, herbes et épices.", "Forme des boudins autour de pics plats.", "Préchauffe, cuis 10 min à 200 °C."],
 "Retourne à mi-cuisson.",["Presse bien l'oignon râpé pour ôter son jus.", "Sers avec semoule et sauce yaourt-menthe."],
 ["Viande trop maigre et trop cuite : sèche. 70 °C à cœur suffit."],ZONE2,["sans gluten", "epice"]);
R("briouates-fromage","aperos","","🔺","Briouates au fromage",4,20,180,10,false,
 ["8 feuilles de brick", "150 g de fromage frais type Kiri ou chèvre frais", "50 g de feta", "1 œuf", "persil, coriandre", "huile en spray"],
 ["Mélange fromages, œuf et herbes.", "Coupe les feuilles en deux, plie en triangles avec une cuillère de farce.", "Vaporise d'huile, cuis 10 min à 180 °C."],
 "Retourne à mi-cuisson.",["Couvre les feuilles d'un torchon humide pendant le pliage.", "Version sucrée traditionnelle : amandes et miel."],
 ["Feuilles sèches : elles cassent au pliage."],ZONE2,["vegetarien", "apero"]);
R("poulet-citron-olives","plats","volaille","🍋","Poulet citron confit et olives",4,15,190,25,true,
 ["8 hauts de cuisse", "1 citron confit", "60 g d'olives vertes", "1 oignon", "gingembre, curcuma, safran", "coriandre, sel"],
 ["Mélange le poulet avec oignon émincé, épices et un peu de jus de citron : 1 h.", "Préchauffe, cuis 25 min à 190 °C.", "Ajoute citron confit et olives les 5 dernières minutes."],
 "Retourne à mi-cuisson.",["La version tajine mijote ; ici, la peau devient croustillante.", "Sers avec de la semoule."],
 ["Citron confit ajouté trop tôt : il brûle."],ZONE2,["sans gluten"]);
R("chou-fleur-tahini","accomp","","🥦","Chou-fleur rôti au tahini",4,10,190,18,false,
 ["1 chou-fleur", "1 c. à soupe d'huile", "2 c. à soupe de tahini", "1 citron", "grenade, persil", "cumin, sel"],
 ["Fleurettes avec huile et cumin, 18 min à 190 °C.", "Délaye tahini, citron et un peu d'eau.", "Nappe, ajoute grenade et persil."],
 "Secoue à mi-cuisson.",["Le tahini épaissit avec le citron puis se détend avec l'eau : normal.", "Très bon froid en mezzé."],
 ["Fleurettes tassées : elles ne grillent pas."],ZONE2,["vegan", "sans gluten"]);
R("manakish-zaatar","aperos","","🫓","Manakish au zaatar",4,10,190,7,false,
 ["4 petits pains pita", "3 c. à soupe de zaatar", "3 c. à soupe d'huile d'olive", "tomate, menthe, concombre pour servir"],
 ["Mélange zaatar et huile.", "Étale sur les pitas.", "Cuis 7 min à 190 °C, une zone par pita."],
 "Ne pas retourner.",["Le zaatar mélange thym, sumac et sésame.", "Ajoute de la feta pour un petit-déjeuner libanais."],
 ["Trop d'huile : elle coule sur la résistance."],ZONE2,["vegan", "apero"]);
R("pakoras","aperos","","🧅","Pakoras d'oignons",4,15,190,12,false,
 ["2 oignons émincés", "100 g de farine de pois chiche", "8 cl d'eau", "1 c. à café de cumin, curcuma, garam masala", "coriandre, sel", "huile en spray"],
 ["Mélange farine, épices et eau pour une pâte épaisse, ajoute l'oignon.", "Dépose des petits tas sur un papier perforé huilé.", "Vaporise d'huile, cuis 12 min à 190 °C."],
 "Retourne à mi-cuisson.",["Pâte épaisse : elle ne coule pas à travers la grille.", "Sers avec une chutney menthe-yaourt."],
 ["Papier seul dans le panier vide : il s'envole."],ZONE2,["vegan", "apero", "sans gluten", "epice"]);
R("aloo-gobi","accomp","","🥔","Aloo gobi rôti",4,10,190,20,false,
 ["500 g de pommes de terre", "1/2 chou-fleur", "1 c. à soupe d'huile", "1 c. à café de curcuma, cumin, garam masala", "gingembre, coriandre, sel"],
 ["Coupe pommes de terre en cubes et chou-fleur en fleurettes.", "Mélange avec huile et épices.", "Cuis 20 min à 190 °C."],
 "Secoue 2 fois.",["Curcuma : il tache, mélange dans un saladier.", "Avec un dal ou un yaourt, c'est un repas complet."],
 ["Épices brûlées : ne dépasse pas 190 °C."],ZONE2,["vegan", "sans gluten", "epice"]);
R("tonkatsu","plats","viande","🍱","Tonkatsu (porc pané japonais)",4,15,200,12,true,
 ["4 escalopes de porc (filet, 1,5 cm)", "2 œufs", "40 g de farine", "80 g de chapelure panko", "huile en spray", "chou blanc émincé pour servir"],
 ["Entaille le bord des escalopes, sale et poivre.", "Farine, œuf, panko.", "Vaporise d'huile, préchauffe, cuis 12 min à 200 °C : 63 °C à cœur."],
 "Retourne à mi-cuisson.",["Le panko est essentiel pour le croustillant japonais.", "Sauce tonkatsu rapide : ketchup, sauce Worcestershire, soja."],
 ["Escalopes fines : elles sèchent."],ZONE2,[]);
R("yakitori","plats","volaille","🍢","Yakitori de poulet",4,20,200,12,true,
 ["600 g de hauts de cuisse sans peau", "4 c. à soupe de sauce soja", "2 c. à soupe de mirin ou miel", "1 c. à café de gingembre", "2 oignons nouveaux"],
 ["Fais réduire soja, mirin et gingembre 2 min : c'est la sauce tare.", "Enfile poulet et tronçons d'oignon.", "Préchauffe, cuis 12 min à 200 °C, badigeonne de sauce les 3 dernières minutes."],
 "Retourne à mi-cuisson.",["Le haut de cuisse est le morceau traditionnel : plus juteux que le blanc.", "Pics trempés 30 min."],
 ["Sauce au début : elle brûle."],ZONE2,["sans lactose"]);
R("poulet-general-tao","plats","volaille","🥡","Poulet du général Tao",4,15,200,14,true,
 ["600 g de hauts de cuisse sans peau", "40 g de maïzena", "3 c. à soupe de sauce soja", "2 c. à soupe de miel", "1 c. à soupe de vinaigre de riz", "ail, gingembre, piment, sésame"],
 ["Coupe le poulet en morceaux, roule dans la maïzena.", "Vaporise d'huile, cuis 14 min à 200 °C.", "Fais réduire sauce soja, miel, vinaigre, ail, gingembre et piment ; enrobe le poulet."],
 "Secoue à mi-cuisson.",["La maïzena donne le croustillant du restaurant sans friture.", "Sers avec du riz et des brocolis."],
 ["Sauce versée trop tôt : le croustillant disparaît."],ZONE2,["epice"]);
R("porc-char-siu","plats","viande","🐖","Porc laqué char siu",4,10,190,25,false,
 ["600 g d'échine ou filet de porc", "3 c. à soupe de sauce soja", "2 c. à soupe de miel", "1 c. à café de cinq-épices", "1 gousse d'ail", "1 c. à soupe de ketchup"],
 ["Coupe le porc en 2 longues lanières, marine une nuit.", "Cuis 25 min à 190 °C, badigeonne de miel à 15 min.", "Repos 5 min, tranche finement."],
 "Retourne à mi-cuisson.",["La marinade de la veille fait tout.", "Excellent dans un bao ou sur du riz."],
 ["Miel ajouté au début : il noircit."],ZONE1,["sans lactose"]);
R("nems","aperos","","🥢","Nems au porc et vermicelles",4,30,190,14,false,
 ["12 galettes de riz", "250 g de porc haché", "50 g de vermicelles de riz réhydratés", "1 carotte râpée", "champignons noirs, oignon", "1 œuf", "sauce nuoc-mâm, salade, menthe"],
 ["Mélange porc, vermicelles, carotte, champignons, œuf et nuoc-mâm.", "Humidifie les galettes, roule les nems serrés.", "Vaporise d'huile, cuis 14 min à 190 °C."],
 "Retourne à mi-cuisson.",["Laisse un espace : ils collent entre eux.", "Sers enroulés dans salade et menthe."],
 ["Galettes trop mouillées : elles se déchirent."],ZONE2,["apero"]);
R("poulet-citronnelle","plats","volaille","🌿","Poulet à la citronnelle",4,15,190,15,true,
 ["600 g de blancs ou hauts de cuisse", "2 bâtons de citronnelle", "2 c. à soupe de nuoc-mâm", "1 c. à soupe de sucre", "ail, piment"],
 ["Hache finement la citronnelle, mélange avec nuoc-mâm, sucre, ail et piment.", "Marine le poulet coupé 30 min.", "Préchauffe, cuis 15 min à 190 °C."],
 "Secoue à mi-cuisson.",["Utilise seulement le cœur tendre de la citronnelle.", "Sers avec riz et concombre."],
 ["Citronnelle grossièrement coupée : fibreuse."],ZONE2,["sans lactose", "sans gluten"]);
R("satay-poulet","plats","volaille","🥜","Satay de poulet, sauce cacahuète",4,20,200,12,true,
 ["600 g de blancs de poulet", "2 c. à soupe de sauce soja", "1 c. à café de curry, curcuma", "60 g de beurre de cacahuète", "10 cl de lait de coco", "1 citron vert"],
 ["Marine les lanières de poulet dans soja et épices 30 min, enfile sur pics.", "Préchauffe, cuis 12 min à 200 °C.", "Chauffe beurre de cacahuète, lait de coco et citron vert pour la sauce."],
 "Retourne à mi-cuisson.",["Lanières fines sur les pics : cuisson rapide et uniforme.", "La sauce se garde 3 jours."],
 ["Pics trop longs pour la zone : coupe-les."],ZONE2,["sans gluten"]);
R("crevettes-thai-coco","plats","poisson","🦐","Crevettes thaï coco-citron vert",4,15,200,8,true,
 ["500 g de crevettes crues", "1 c. à soupe de pâte de curry rouge", "10 cl de lait de coco", "1 citron vert", "coriandre, basilic thaï"],
 ["Marine les crevettes dans curry et lait de coco 15 min.", "Préchauffe, cuis 8 min à 200 °C.", "Citron vert et herbes à la sortie."],
 "Secoue à mi-cuisson.",["Égoutte bien la marinade avant cuisson.", "Sers avec du riz jasmin."],
 ["Curry trop fort pour les enfants : réduis-le de moitié."],ZONE1,["poisson", "sans gluten", "epice"]);
R("fajitas-poulet","plats","volaille","🌯","Fajitas de poulet",4,15,200,14,true,
 ["500 g de blancs de poulet", "2 poivrons", "1 oignon", "8 tortillas", "1 c. à soupe d'huile", "paprika, cumin, origan, citron vert"],
 ["Coupe poulet, poivrons et oignon en lanières, mélange avec huile et épices.", "Préchauffe, cuis 14 min à 200 °C.", "Garnis les tortillas tièdes."],
 "Secoue à mi-cuisson.",["Réchauffe les tortillas 1 min à 160 °C à la fin.", "Garnitures : guacamole, salsa, yaourt."],
 ["Panier trop chargé : légumes mous."],ZONE2,["famille"]);
R("quesadillas","plats","vegetarien","🫓","Quesadillas haricots-fromage",4,10,190,8,false,
 ["8 tortillas", "250 g de haricots rouges écrasés", "150 g de cheddar râpé", "100 g de maïs", "cumin, piment, coriandre"],
 ["Étale haricots, maïs, fromage et épices sur 4 tortillas, couvre avec les 4 autres.", "Cuis 8 min à 190 °C, pose un pic pour qu'elles ne s'envolent pas.", "Coupe en 4."],
 "Retourne à mi-cuisson.",["Une tortilla de taille d'une zone ; sinon plie-les en demi-lune.", "Sers avec salsa et guacamole."],
 ["Sans pic : la tortilla du dessus s'envole."],ZONE2,["vegetarien", "famille"]);
R("travers-porc-bbq","plats","viande","🍖","Travers de porc barbecue",4,10,180,35,false,
 ["1,2 kg de travers de porc (700 g de viande)", "80 g de sauce barbecue", "paprika fumé, ail, sucre roux", "sel, poivre"],
 ["Frotte les travers avec les épices, coupe en sections.", "Cuis 30 min à 180 °C sans séparateur.", "Badigeonne de sauce barbecue, 5 min de plus à 200 °C."],
 "Retourne à mi-cuisson.",["Précuis à l'eau frémissante 20 min pour des travers très fondants.", "Retire la membrane au dos des côtes."],
 ["Sauce sucrée au début : elle brûle."],FULL,["famille", "sans gluten"]);
R("onion-rings","aperos","","🧅","Onion rings",4,15,200,10,true,
 ["2 gros oignons", "50 g de farine", "2 œufs", "80 g de chapelure panko", "paprika, sel", "huile en spray"],
 ["Coupe des anneaux de 1 cm.", "Farine, œuf, panko au paprika.", "Vaporise d'huile, cuis 10 min à 200 °C en une couche."],
 "Retourne à mi-cuisson.",["Double panure : œuf + panko deux fois pour un croustillant de diner américain.", "Sers avec ketchup ou sauce barbecue."],
 ["Anneaux superposés : ils restent mous."],ZONE2,["vegetarien", "apero", "famille"]);
R("souvlaki","plats","viande","🍢","Souvlaki de porc et tzatziki",4,20,200,12,true,
 ["600 g de filet de porc", "1 citron", "1 c. à soupe d'huile d'olive", "origan, ail", "200 g de yaourt grec 0 %", "1/2 concombre"],
 ["Marine le porc en cubes avec citron, huile, origan et ail : 1 h.", "Enfile sur pics, préchauffe, cuis 12 min à 200 °C.", "Tzatziki : yaourt, concombre râpé pressé, ail, aneth."],
 "Retourne à mi-cuisson.",["Filet de porc : 63 °C à cœur, il reste juteux.", "Sers dans une pita avec tomates et oignon."],
 ["Concombre non pressé : tzatziki liquide."],ZONE2,["sans gluten"]);
R("feta-rotie-miel","entrees","","🧀","Feta rôtie au miel et sésame (bouyiourdi)",4,5,190,10,false,
 ["200 g de feta en bloc", "1 tomate", "1/2 poivron", "1 c. à soupe de miel", "1 c. à café d'huile", "origan, sésame"],
 ["Pose la feta dans un petit plat avec tomate et poivron en rondelles.", "Huile, origan, cuis 10 min à 190 °C.", "Arrose de miel et de sésame à la sortie."],
 "Ne pas retourner.",["À partager avec du pain grillé.", "Plat en céramique adapté au four."],
 ["Feta à découvert sans plat : elle coule entre les grilles."],ZONE1,["vegetarien", "sans gluten", "apero"]);
R("frites-belges","accomp","","🍟","Frites belges double cuisson",4,15,200,30,false,
 ["1 kg de pommes de terre Bintje", "1 c. à soupe d'huile ou de blanc de bœuf fondu", "sel"],
 ["Coupe des frites de 1 cm, rince et sèche à fond.", "1re cuisson : 15 min à 160 °C avec l'huile, laisse reposer 10 min.", "2e cuisson : 15 min à 200 °C jusqu'à ce qu'elles soient dorées."],
 "Secoue 3 fois.",["La double cuisson, c'est le secret belge : fondant dedans, croustillant dehors.", "Sers en cornet avec mayonnaise ou sauce andalouse."],
 ["Frites humides : elles collent."],ZONE2,["vegan", "sans gluten", "famille"]);
R("chicons-gratin","plats","viande","🥬","Chicons au gratin",4,15,180,22,false,
 ["8 endives (chicons)", "8 tranches de jambon", "40 cl de lait", "30 g de farine", "30 g de beurre", "80 g d'emmental"],
 ["Précuis les endives entières 10 min au micro-ondes, presse-les bien.", "Roule chaque endive dans une tranche de jambon, mets dans un plat.", "Fais une béchamel (beurre, farine, lait), nappe, fromage. Cuis 22 min à 180 °C."],
 "Ne pas retourner.",["Presse les endives à fond : sinon le gratin rend de l'eau.", "Une pincée de sucre atténue l'amertume."],
 ["Endives non précuites : elles restent dures et amères."],FULL,["famille"]);
R("poulet-frit-coreen","plats","volaille","🍗","Poulet frit coréen (dakgangjeong)",4,15,200,20,true,
 ["700 g de hauts de cuisse sans peau", "50 g de maïzena", "2 c. à soupe de gochujang", "2 c. à soupe de miel", "1 c. à soupe de sauce soja", "ail, sésame"],
 ["Coupe le poulet, roule dans la maïzena salée.", "Vaporise d'huile, cuis 20 min à 200 °C.", "Fais réduire gochujang, miel, soja et ail ; enrobe et parsème de sésame."],
 "Secoue à mi-cuisson.",["La maïzena seule donne une croûte très fine et craquante.", "Le gochujang se trouve en épicerie asiatique."],
 ["Sauce trop tôt : poulet mou."],ZONE2,["epice"]);
R("tofu-gochujang","plats","vegetarien","🌶️","Tofu croustillant au gochujang",4,15,200,15,false,
 ["400 g de tofu ferme", "2 c. à soupe de maïzena", "1 c. à soupe de gochujang", "1 c. à soupe de sauce soja", "1 c. à café de miel", "sésame, oignon nouveau"],
 ["Presse et coupe le tofu, roule dans la maïzena.", "Vaporise d'huile, cuis 15 min à 200 °C.", "Enrobe de sauce gochujang-soja-miel."],
 "Secoue à mi-cuisson.",["Le tofu croustille même sans friture grâce à la maïzena.", "Bowl : riz, kimchi, concombre."],
 ["Tofu mal pressé : il reste mou."],ZONE2,["vegan", "epice"]);
R("poulet-kebab-maison","plats","volaille","🥙","Kebab de poulet maison",4,15,200,16,true,
 ["700 g de hauts de cuisse sans peau", "150 g de yaourt grec 0 %", "paprika, cumin, ail, origan", "1 citron", "4 pains pita", "salade, tomate, oignon"],
 ["Marine le poulet dans le yaourt épicé 2 h.", "Préchauffe, cuis 16 min à 200 °C puis émince finement.", "Garnis les pitas avec crudités et sauce blanche au yaourt."],
 "Retourne à mi-cuisson.",["Émince très fin pour retrouver la texture du döner.", "Sauce blanche : yaourt, ail, citron, menthe."],
 ["Poulet émincé avant cuisson : il sèche."],ZONE2,["famille"]);
R("tian-provencal","accomp","","🍅","Tian provençal",4,15,180,25,false,
 ["2 courgettes", "1 aubergine", "4 tomates", "1 oignon", "1 c. à soupe d'huile d'olive", "thym, ail, sel"],
 ["Tranche tous les légumes à 5 mm.", "Dispose-les en alternance, debout, sur un lit d'oignon dans un plat.", "Huile, thym, ail, cuis 25 min à 180 °C (alu serré les 10 premières minutes)."],
 "Ne pas retourner.",["Choisis des légumes de même diamètre pour un joli tian.", "Meilleur encore réchauffé le lendemain."],
 ["Alu mal fixé : il s'envole vers la résistance."],FULL,["legume", "vegan", "sans gluten", "ete"]);
R("pissaladiere","entrees","","🧅","Pissaladière",6,20,180,18,false,
 ["1 pâte à pizza ou à pain", "4 oignons", "1 c. à soupe d'huile d'olive", "8 filets d'anchois", "12 olives noires", "thym"],
 ["Fais fondre les oignons émincés avec l'huile : 15 min à 160 °C dans un plat, en remuant.", "Étale la pâte à la taille du panier sur un papier perforé, garnis d'oignons, anchois en croisillons, olives.", "Cuis 18 min à 180 °C sans séparateur."],
 "Ne pas retourner.",["Les oignons doivent être fondants et dorés, pas grillés.", "Découpe la pâte d'après le fond du panier."],
 ["Pâte trop épaisse : dessous pas cuit."],FULL,["apero"]);
R("saint-jacques-beurre-breton","plats","poisson","🐚","Noix de Saint-Jacques au beurre demi-sel",4,10,200,5,true,
 ["16 noix de Saint-Jacques", "20 g de beurre demi-sel", "1 citron", "persil, poivre"],
 ["Sèche bien les noix.", "Préchauffe 3 min à 200 °C, pose les noix espacées.", "Cuis 5 min, nappe de beurre demi-sel fondu citronné."],
 "Retourne à mi-cuisson.",["Elles sont parfaites quand le centre reste nacré.", "Sers sur une fondue de poireaux."],
 ["Noix surgelées non séchées : elles bouillent."],ZONE1,["poisson", "sans gluten"]);
R("far-breton","desserts","","🍮","Far breton aux pruneaux",6,10,160,35,false,
 ["4 œufs", "50 cl de lait", "100 g de farine", "80 g de sucre", "150 g de pruneaux", "20 g de beurre demi-sel"],
 ["Fouette œufs, sucre, farine puis lait.", "Beurre un moule de 16-18 cm adapté au four, ajoute les pruneaux, verse.", "Cuis 35 min à 160 °C sans séparateur."],
 "Ne pas retourner.",["Laisse reposer la pâte 1 h : plus de moelleux.", "Il dégonfle en refroidissant : c'est normal."],
 ["Moule trop grand pour le panier : mesure avant."],FULL,["dessert", "vegetarien"]);
R("camembert-roti","entrees","","🧀","Camembert rôti au calvados",4,5,180,12,false,
 ["1 camembert au lait cru (250 g)", "1 c. à soupe de calvados", "1 c. à soupe de miel", "thym", "pain pour tremper"],
 ["Retire le papier, remets le camembert dans sa boîte en bois, entaille le dessus.", "Arrose de calvados et de miel, thym.", "Cuis 12 min à 180 °C."],
 "Ne pas retourner.",["Une boîte agrafée tient à 180 °C ; retire le film plastique.", "Dips : pain, pommes, pommes de terre grenaille."],
 ["Boîte collée avec agrafes en plastique : vérifie."],ZONE1,["vegetarien", "fromage", "apero"]);
R("bourdelots","desserts","","🍏","Bourdelots (pommes en pâte)",4,20,180,22,false,
 ["4 pommes", "1 pâte feuilletée ou brisée", "30 g de beurre", "2 c. à soupe de sucre", "cannelle", "1 jaune d'œuf"],
 ["Épluche et évide les pommes, remplis de beurre, sucre et cannelle.", "Enveloppe chaque pomme dans un carré de pâte, dore au jaune.", "Cuis 22 min à 180 °C."],
 "Ne pas retourner.",["Pommes de taille moyenne, sinon elles ne rentrent pas debout.", "Sers avec de la crème d'Isigny."],
 ["Pâte non fermée : le jus brûle au fond."],FULL,["dessert", "vegetarien"]);
R("flammekueche","plats","viande","🔥","Flammekueche (tarte flambée)",4,15,200,10,true,
 ["1 pâte à pizza fine ou pâte à pain", "200 g de fromage blanc 20 %", "100 g de crème épaisse", "150 g de lardons", "2 oignons", "muscade, sel"],
 ["Mélange fromage blanc, crème, sel et muscade.", "Étale la pâte très fine en 2 rectangles de la taille d'une zone.", "Étale la crème, oignons émincés et lardons. Préchauffe, cuis 10 min à 200 °C."],
 "Ne pas retourner.",["Pâte très fine : c'est ce qui donne le croustillant.", "Version gratinée : 40 g d'emmental."],
 ["Garniture trop épaisse : la pâte reste molle."],ZONE2,["apero", "famille"]);
R("quenelles-gratinees","plats","poisson","🥖","Quenelles gratinées sauce tomate",4,5,180,18,false,
 ["8 quenelles de brochet (400 g)", "300 g de coulis de tomate", "40 g d'emmental", "herbes"],
 ["Mets la sauce dans un plat, les quenelles par-dessus.", "Parsème de fromage.", "Cuis 18 min à 180 °C : elles doublent de volume."],
 "Ne pas retourner.",["Laisse de la place : elles gonflent beaucoup.", "La sauce Nantua est la version lyonnaise classique ; la tomate est plus légère."],
 ["Plat trop petit : elles débordent."],FULL,["poisson"]);
R("saucisson-brioche","plats","viande","🥐","Saucisson brioché",6,20,170,30,false,
 ["1 saucisson à cuire (400 g) cuit", "400 g de pâte à brioche", "1 jaune d'œuf", "moutarde"],
 ["Retire la peau du saucisson cuit et refroidi, badigeonne de moutarde.", "Enveloppe dans la pâte à brioche, laisse lever 30 min, dore.", "Cuis 30 min à 170 °C sans séparateur."],
 "Ne pas retourner.",["Une fine couche de farine sur le saucisson évite que la pâte se décolle.", "Sers tranché avec une salade verte."],
 ["Saucisson chaud : la pâte fond. Il doit être froid."],FULL,[]);
R("magret-canard","plats","volaille","🦆","Magret de canard",4,5,200,12,true,
 ["2 magrets (env. 400 g chacun)", "sel, poivre", "1 c. à soupe de miel (facultatif)"],
 ["Quadrille la peau sans toucher la chair.", "Préchauffe, cuis côté peau en bas 7 min à 200 °C, retire le gras du fond, puis 5 min côté chair.", "Repos 5 min sous alu, tranche."],
 "Retourne à mi-cuisson.",["54-56 °C à cœur pour un magret rosé.", "Garde la graisse pour les pommes sarladaises."],
 ["Fumée blanche : vide la graisse à mi-cuisson."],ZONE2,["sans gluten"]);
R("pommes-sarladaises","accomp","","🥔","Pommes sarladaises",4,10,200,22,false,
 ["800 g de pommes de terre", "1 c. à soupe de graisse de canard", "2 gousses d'ail", "persil, sel"],
 ["Coupe en rondelles de 5 mm, rince, sèche.", "Mélange avec la graisse fondue.", "Cuis 22 min à 200 °C, ail et persil hachés les 3 dernières minutes."],
 "Secoue 3 fois.",["La graisse de canard donne le goût authentique ; l'huile d'olive pour une version plus légère.", "Avec un magret dans l'autre zone : Fin synchronisée."],
 ["Ail ajouté au début : il brûle et devient amer."],ZONE2,["sans gluten"]);
R("tartiflette","plats","viande","🧀","Tartiflette",4,20,180,25,false,
 ["800 g de pommes de terre cuites", "1 reblochon (450 g)", "200 g de lardons", "1 oignon", "10 cl de crème", "5 cl de vin blanc"],
 ["Fais dorer oignon et lardons 6 min à 190 °C dans le plat.", "Ajoute les pommes de terre en rondelles, la crème et le vin.", "Pose le reblochon coupé en deux dans l'épaisseur, croûte dessus. Cuis 25 min à 180 °C."],
 "Ne pas retourner.",["Plat de 20 x 15 cm environ pour tenir sans séparateur.", "Sers avec une salade verte et de la charcuterie."],
 ["Pommes de terre crues : 25 min ne suffisent pas."],FULL,["famille", "sans gluten", "hiver"]);
R("diots-vin-blanc","plats","viande","🌭","Diots de Savoie au vin blanc",4,5,190,22,false,
 ["8 diots ou saucisses de Savoie", "2 oignons", "10 cl de vin blanc de Savoie", "thym, laurier"],
 ["Pique légèrement les diots et dispose-les dans un plat avec les oignons émincés.", "Cuis 12 min à 190 °C.", "Ajoute le vin et les herbes, 10 min de plus."],
 "Retourne à mi-cuisson.",["Sers avec de la polenta ou des crozets.", "Le vin réduit et fait une sauce."],
 ["Pas de plat : le vin coule sur la grille."],ZONE1,["sans gluten", "hiver"]);
R("welsh","plats","viande","🍺","Welsh au cheddar et à la bière",2,10,200,10,false,
 ["2 tranches de pain de campagne", "2 tranches de jambon", "200 g de cheddar râpé", "10 cl de bière blonde", "1 c. à café de moutarde", "2 œufs (facultatif)"],
 ["Fais fondre cheddar, bière et moutarde au micro-ondes en remuant.", "Mets pain et jambon dans 2 plats individuels, nappe de fromage.", "Cuis 10 min à 200 °C, ajoute un œuf au plat les 4 dernières minutes."],
 "Ne pas retourner.",["Plats individuels obligatoires : le fromage coule partout sinon.", "Sers avec des frites dans l'autre zone."],
 ["Cheddar trop vieux : il tranche."],ZONE2,["fromage", "famille"]);
R("flamiche-maroilles","entrees","","🥧","Tarte au maroilles",6,15,180,22,false,
 ["1 pâte brisée", "1/2 maroilles (380 g)", "2 œufs", "10 cl de crème", "poivre"],
 ["Foncez un moule de 18 cm adapté au panier.", "Bats œufs et crème, verse, pose les tranches de maroilles.", "Cuis 22 min à 180 °C sans séparateur."],
 "Ne pas retourner.",["Laisse la croûte du maroilles : c'est elle qui donne le goût.", "Un fond de poireaux fondus allège la recette."],
 ["Fond détrempé : précuis 5 min."],FULL,["fromage", "vegetarien"]);
R("poulet-basquaise","plats","volaille","🫑","Poulet basquaise version airfryer",4,15,190,25,false,
 ["8 hauts de cuisse sans peau", "2 poivrons", "4 tomates", "1 oignon", "1 c. à café d'huile", "piment d'Espelette, ail, thym"],
 ["Fais dorer le poulet assaisonné 12 min à 190 °C.", "Ajoute poivrons, tomates, oignon et ail dans un plat avec le poulet.", "Cuis 13 min de plus, Espelette à la fin."],
 "Remue à mi-cuisson.",["Le piment d'Espelette s'ajoute à la fin pour garder son parfum.", "Sers avec du riz."],
 ["Légumes trop gros : pas assez cuits en 13 min."],FULL,["sans gluten"]);
R("gateau-basque","desserts","","🥧","Gâteau basque à la cerise noire",8,25,160,35,false,
 ["250 g de farine", "125 g de beurre mou", "125 g de sucre", "1 œuf + 1 jaune", "50 g de poudre d'amande", "200 g de confiture de cerises noires"],
 ["Mélange beurre, sucre, œuf, amande et farine : pâte souple. 1 h au frigo.", "Étale 2 disques, mets le premier dans un moule de 18 cm, confiture, referme.", "Dore au jaune, raye à la fourchette, cuis 35 min à 160 °C sans séparateur."],
 "Ne pas retourner.",["Alu bien serré les 15 dernières minutes si le dessus fonce.", "Meilleur le lendemain."],
 ["Confiture jusqu'au bord : elle fuit."],FULL,["dessert", "vegetarien"]);
R("gougeres","aperos","","🧀","Gougères au comté",6,20,180,18,false,
 ["25 cl d'eau", "80 g de beurre", "150 g de farine", "4 œufs", "120 g de comté râpé", "sel, poivre, muscade"],
 ["Porte eau, beurre et sel à ébullition, ajoute la farine d'un coup, dessèche 1 min.", "Hors du feu, ajoute les œufs un à un, puis 100 g de comté.", "Dépose des noix de pâte sur papier perforé, parsème du reste. Cuis 18 min à 180 °C sans ouvrir les 12 premières minutes."],
 "Ne pas retourner.",["N'ouvre pas le panier trop tôt : elles retomberaient.", "Se congèlent crues : 3 min de plus."],
 ["Pâte trop liquide : ajoute moins d'œuf."],ZONE2,["vegetarien", "apero", "fromage"]);
R("poulet-moutarde-dijon","plats","volaille","🟡","Poulet à la moutarde de Dijon",4,10,190,22,true,
 ["8 hauts de cuisse sans peau", "3 c. à soupe de moutarde de Dijon", "10 cl de crème légère", "estragon, sel, poivre"],
 ["Badigeonne le poulet de moutarde, sale, poivre.", "Préchauffe, cuis 18 min à 190 °C.", "Ajoute la crème et l'estragon dans un petit plat, 4 min de plus."],
 "Retourne à mi-cuisson.",["Moutarde forte de Dijon : elle s'adoucit à la cuisson.", "Sers avec des tagliatelles ou des haricots verts."],
 ["Crème ajoutée trop tôt : elle tranche."],ZONE2,["sans gluten"]);
R("fiadone","desserts","","🍋","Fiadone (gâteau corse au brocciu)",6,10,160,30,false,
 ["500 g de brocciu (ou ricotta égouttée)", "4 œufs", "100 g de sucre", "1 citron (zeste)", "1 c. à soupe d'eau-de-vie (facultatif)"],
 ["Fouette œufs et sucre, ajoute le brocciu écrasé et le zeste.", "Verse dans un moule de 18 cm huilé.", "Cuis 30 min à 160 °C sans séparateur : le dessus doit être doré."],
 "Ne pas retourner.",["Égoutte bien la ricotta si tu n'as pas de brocciu.", "Se sert froid."],
 ["Cuisson trop forte : il gonfle puis se fend."],FULL,["dessert", "vegetarien", "sans gluten"]);
R("aubergines-bonifacienne","plats","vegetarien","🍆","Aubergines farcies à la bonifacienne",4,20,180,22,false,
 ["2 aubergines", "100 g de mie de pain trempée", "80 g de fromage de brebis ou parmesan", "2 œufs", "200 g de coulis de tomate", "ail, basilic"],
 ["Coupe les aubergines en deux, précuis 10 min à 190 °C, creuse.", "Mélange la chair avec pain, fromage, œufs, ail et basilic, farcis.", "Mets dans un plat avec le coulis, cuis 22 min à 180 °C."],
 "Ne pas retourner.",["La précuisson rend la chair facile à creuser.", "Plat traditionnel corse, normalement frit puis mijoté."],
 ["Farce trop humide : essore le pain."],FULL,["vegetarien"]);
R("accras-morue","aperos","","🐟","Accras de morue",6,25,190,12,false,
 ["250 g de morue dessalée", "150 g de farine", "1 œuf", "15 cl de lait", "1 c. à café de levure, ail, cive, piment", "huile en spray"],
 ["Effiloche la morue pochée, mélange avec farine, œuf, lait, levure et assaisonnement : pâte épaisse.", "Dépose des petites boules sur un papier perforé bien huilé.", "Vaporise d'huile, cuis 12 min à 190 °C."],
 "Retourne à mi-cuisson.",["Pâte épaisse qui tient à la cuillère : sinon elle s'étale.", "Le piment végétarien (doux) ou bonda man Jacques pour les audacieux."],
 ["Pâte liquide : elle passe à travers la grille."],ZONE2,["poisson", "apero"]);
R("poulet-boucane","plats","volaille","🌶️","Poulet boucané version airfryer",4,15,190,25,true,
 ["8 hauts de cuisse", "2 citrons verts", "ail, cive, thym, piment", "1 c. à café de paprika fumé", "sel, poivre"],
 ["Marine le poulet une nuit avec citron vert, ail, cive, thym et piment.", "Ajoute le paprika fumé pour le goût de boucan.", "Préchauffe, cuis 25 min à 190 °C."],
 "Retourne à mi-cuisson.",["Le paprika fumé imite la fumée de canne à sucre.", "Sers avec riz, haricots rouges et sauce chien."],
 ["Pas assez mariné : manque de goût."],ZONE2,["sans gluten", "epice"]);
R("bananes-plantain","accomp","","🍌","Bananes plantain rôties",4,5,190,14,false,
 ["2 bananes plantain mûres (peau noire)", "1 c. à café d'huile", "sel, piment doux"],
 ["Épluche et coupe en biseau (1 cm).", "Mélange avec l'huile.", "Cuis 14 min à 190 °C."],
 "Retourne à mi-cuisson.",["Plus la peau est noire, plus elles sont sucrées et fondantes.", "Accompagne le poulet boucané ou un colombo."],
 ["Plantain vert : dur et farineux, prévois 5 min de plus."],ZONE1,["vegan", "sans gluten"]);
R("brownies","desserts","","🍫","Brownies fondants",8,15,160,22,false,
 ["150 g de chocolat noir", "100 g de beurre", "3 œufs", "120 g de sucre", "60 g de farine", "50 g de noix"],
 ["Fais fondre chocolat et beurre.", "Fouette œufs et sucre, ajoute le chocolat, la farine puis les noix.", "Verse dans un moule de 18 x 12 cm environ, cuis 22 min à 160 °C sans séparateur."],
 "Ne pas retourner.",["Le centre doit rester légèrement humide : la lame ressort avec quelques miettes.", "Coupe-le froid pour des carrés nets."],
 ["Trop cuit : il devient un gâteau sec."],FULL,["dessert", "vegetarien", "chocolat"]);
R("peches-roties-romarin","desserts","","🍑","Pêches rôties miel et romarin",4,5,180,12,false,
 ["4 pêches", "1 c. à soupe de miel", "1 brin de romarin", "120 g de fromage blanc 0 %"],
 ["Coupe les pêches en deux, dénoyaute.", "Arrose de miel, ajoute le romarin.", "Cuis 12 min à 180 °C, sers avec le fromage blanc."],
 "Ne pas retourner.",["Fruits mûrs mais fermes : ils gardent leur forme.", "Le romarin parfume sans sucre."],
 ["Pêches trop mûres : elles s'écrasent."],ZONE1,["leger", "fruit", "sans gluten", "ete"]);
R("tarte-fine-pommes","desserts","","🥧","Tarte fine aux pommes",6,15,180,18,false,
 ["1 pâte feuilletée", "3 pommes", "20 g de beurre", "2 c. à soupe de sucre", "cannelle"],
 ["Découpe la pâte au format du panier (ou 2 rectangles pour les 2 zones), pique-la.", "Dispose les pommes en fines lamelles, beurre en noisettes, sucre.", "Cuis 18 min à 180 °C sur papier perforé."],
 "Ne pas retourner.",["Des lamelles fines (2 mm) cuisent en même temps que la pâte.", "Nappe de confiture d'abricot tiède pour la brillance."],
 ["Pâte non piquée : elle gonfle trop."],ZONE2,["dessert", "vegetarien", "fruit"]);
R("toasts-avocat-oeuf","petitdej","","🥑","Toasts avocat et œuf",2,5,170,9,false,
 ["2 tranches de pain complet", "1 avocat", "2 œufs", "1 citron", "piment, sel, graines"],
 ["Écrase l'avocat avec citron et sel, tartine le pain.", "Fais un petit creux, casse un œuf dessus (ou dans un ramequin à côté).", "Cuis 9 min à 170 °C : blanc pris, jaune coulant."],
 "Ne pas retourner.",["Œuf dans un ramequin à côté si le pain est petit.", "Ajoute du saumon fumé pour plus de protéines."],
 ["Température trop forte : le pain brûle avant l'œuf."],ZONE1,["vegetarien", "oeuf", "petit-dej"]);
R("poireaux-rotis-vinaigrette","entrees","","🥬","Poireaux rôtis, vinaigrette moutarde",4,10,190,15,false,
 ["4 poireaux", "1 c. à café d'huile", "1 c. à soupe de moutarde", "1 c. à soupe de vinaigre", "1 œuf dur", "ciboulette"],
 ["Coupe les poireaux en tronçons de 10 cm, fends-les en deux, rince.", "Vaporise d'huile, cuis 15 min à 190 °C.", "Nappe de vinaigrette moutarde allongée d'eau, œuf dur râpé et ciboulette."],
 "Retourne à mi-cuisson.",["Le rôtissage remplace la cuisson à l'eau : plus de goût, pas d'eau.", "Choisis des poireaux fins, plus tendres."],
 ["Poireaux mal rincés : du sable dans l'assiette."],ZONE2,["legume", "leger", "vegetarien", "sans gluten"]);
R("champignons-ail-persil","accomp","","🍄","Champignons rôtis ail et persil",4,10,190,12,false,
 ["500 g de champignons de Paris", "1 c. à café d'huile", "2 gousses d'ail", "persil, sel"],
 ["Essuie et coupe les champignons en deux.", "Mélange avec l'huile.", "Cuis 12 min à 190 °C, ail et persil hachés les 2 dernières minutes."],
 "Secoue à mi-cuisson.",["Sale en fin de cuisson : ils rendent moins d'eau.", "Champignons tassés = champignons bouillis."],
 ["Ail en début de cuisson : il brûle."],ZONE2,["legume", "leger", "vegan", "sans gluten"]);
R("borek-fromage","aperos","","🥟","Börek feta et persil",4,20,180,12,false,
 ["6 feuilles de filo ou de brick", "200 g de feta", "1 œuf", "persil, menthe", "1 c. à soupe d'huile", "graines de nigelle ou sésame"],
 ["Mélange feta émiettée, œuf et herbes.", "Badigeonne chaque feuille d'huile, garnis d'un boudin de farce, roule en cigare.", "Dore à l'œuf, parsème de graines, cuis 12 min à 180 °C."],
 "Retourne à mi-cuisson.",["En Turquie, on les roule aussi en spirale : coupe-la à la taille d'une zone.", "Garde les feuilles sous un torchon humide."],
 ["Feuilles sèches : elles cassent."],ZONE2,["vegetarien", "apero", "fromage"]);
R("pommes-pont-neuf","accomp","","🍟","Pommes Pont-Neuf",4,15,200,24,false,
 ["1 kg de grosses pommes de terre", "1 c. à soupe d'huile", "fleur de sel, thym"],
 ["Coupe des gros bâtonnets réguliers de 1,5 cm, rince et sèche.", "Mélange avec l'huile.", "Cuis 24 min à 200 °C en deux zones, fleur de sel et thym à la sortie."],
 "Secoue 3 fois.",["Ces grosses frites de bistrot parisien sont empilées en carré à la sortie.", "Taille au carré pour une cuisson régulière."],
 ["Bâtonnets serrés : ils cuisent à la vapeur."],ZONE2,["vegan", "sans gluten", "famille"]);
/* Compléments : n = [kcal, protéines g, glucides g, lipides g] estimés par portion (valeurs moyennes Ciqual/USDA x grammages) ; x = catégories en plus ; v = variantes ; p = protéine principale (planning) ; o = [pays, région]. */
const EXT = {"oeufs-durs":{"n":[77,7,0,5],"v":["Œufs mimosa légers : jaunes écrasés avec du fromage blanc 0 % et de la moutarde au lieu de la mayonnaise.","Œufs marinés soja : écale-les et laisse-les une nuit dans sauce soja + eau + gingembre.","Œufs mollets pour une salade : 9 min à 150 °C, même méthode."],"x":["regime"]},
"tomates-provencales":{"n":[90,2,8,5],"tips":["Elles accompagnent aussi très bien une viande grillée.","Sale-les et laisse-les dégorger tête en bas : la chapelure reste croustillante au lieu de détremper."],"v":["Version farcie : ajoute 200 g de chair à saucisse sous la chapelure, 20 min à 180 °C.","Version légère : remplace l'huile par un voile de spray et la chapelure par du parmesan."],"o":["France","Provence"]},
"champignons-farcis":{"n":[114,4,4,9],"tips":["Ajoute des dés de lardons sous le fromage pour une version gourmande.","Pose-les côté chapeau sur la grille, sans les serrer, pour que l'air sèche bien le dessus."],"v":["Version légère : farce au fromage blanc, ail et ciboulette.","Version gourmande : chèvre frais + noix concassées.","Portobellos : 2 gros champignons par personne, 12 min à 180 °C."]},
"feuillete-chevre":{"n":[390,11,29,25],"tips":["Sers avec une salade verte et quelques noix.","Garde la pâte bien froide jusqu'au dernier moment : elle gonfle mieux.","Un tour de poivre et un peu de thym frais sur le miel juste avant de servir."],"v":["Version salée-sucrée : remplace le miel par de la confiture de figue.","Version roquefort-poire : bleu et lamelles de poire, même cuisson."]},
"salade-chevre-chaud":{"n":[333,13,22,21],"tips":["Surveille par le hublot éclairé : ça va très vite.","Prends une bûche bien froide pour couper des rondelles nettes qui ne s'étalent pas.","Verse la vinaigrette sur la salade, jamais sur les toasts chauds."],"v":["Version légère : chèvre frais sur pain complet, sans miel.","Version Périgord : ajoute magret fumé et cerneaux de noix."],"p":"fromage"},
"aubergines-roties":{"n":[142,3,6,12],"tips":["La chair doit être fondante : pique avec un couteau pour vérifier.","Quadrille la chair au couteau sans percer la peau : l'huile pénètre et la cuisson est régulière.","Ajoute le yaourt à l'ail seulement au moment de servir, sur les aubergines tièdes."],"v":["Version protéinée : sers avec des pois chiches rôtis et du yaourt grec 0 %.","Version libanaise : tahini + citron à la place du yaourt.","Version gratinée : mozzarella et coulis de tomate, 5 min de plus."],"o":["Grèce",""]},
"poivrons-grilles":{"n":[102,1,6,8],"tips":["Se garde 4 jours au frigo dans l'huile.","Enferme-les 10 min dans un saladier couvert à la sortie : la peau s'enlève toute seule."],"v":["Version antipasti : mélange avec des anchois et des câpres.","Version farcie : riz, thon et tomates dans des demi-poivrons, 18 min à 180 °C."]},
"croque-monsieur":{"n":[309,19,26,14],"tips":["Pique un cure-dent au centre pour que la tranche du dessus ne s'envole pas avec la ventilation.","Beurre l'extérieur très finement (ou un voile de spray) : il dore sans graisser."],"v":["Croque-madame : un œuf au plat posé dessus à la sortie.","Version légère : pain complet, jambon de dinde, fromage allégé.","Version végé : tomate, mozzarella et pesto."],"p":"viande","o":["France","Paris / Île-de-France"],"fam":1},
"soupe-legumes-rotis":{"n":[95,2,9,5],"tips":["Le rôtissage donne un goût bien plus profond qu'une soupe bouillie.","Coupe les légumes à la même taille pour qu'ils rôtissent en même temps.","Mixe avec le bouillon bien chaud pour une texture veloutée sans crème."],"v":["Version butternut-châtaigne : butternut et oignon rôtis 20 min, puis mixe avec des marrons.","Version protéinée : ajoute 200 g de lentilles corail cuites au mixage.","Version épicée : curry et une touche de lait de coco."],"x":["regime"]},
"steak":{"n":[400,40,0,27],"v":["Version marinée : soja, ail et poivre 30 min avant.","Version tagliata : tranche finement sur de la roquette et du parmesan.","Version maigre : rumsteck ou bavette, même temps."],"p":"viande","x":["proteines"]},
"burgers":{"n":[532,33,33,28],"v":["Version poulet : escalope panée à la place du steak, 12 min à 190 °C.","Version légère : steak 5 %, pain complet, fromage allégé, beaucoup de crudités.","Version végé : galette de lentilles maison."],"p":"viande","o":["USA",""],"fam":1},
"cotes-porc":{"n":[327,35,4,19],"tips":["Porc : 63 °C à cœur puis 3 min de repos.","Entaille le gras sur le bord tous les 2 cm : la côte ne se recroqueville pas."],"v":["Version moutarde-miel : remplace le soja par de la moutarde à l'ancienne.","Version échine : même marinade, 2 min de plus par face.","Version légère : filet de porc maigre, sans miel."],"p":"viande"},
"filet-mignon":{"n":[178,28,4,5],"tips":["Coupe-le en deux si le filet est trop long pour une zone.","Laisse reposer 5 min sous alu avant de trancher : le jus reste dans la viande."],"v":["Version pruneaux : quelques pruneaux autour, 2 min de plus.","Version herbes : croûte de persil, ail et chapelure.","Version filet de dinde : même recette, 74 °C à cœur."],"p":"viande","x":["proteines","regime"]},
"saucisses":{"n":[338,17,1,29],"tips":["Cuis des frites dans l'autre zone avec la Fin synchronisée.","Ne les pique pas : elles restent juteuses, la ventilation suffit à évacuer le gras."],"v":["Version légère : saucisses de volaille, 12 min à 180 °C.","Version brochettes : rondelles de saucisse, poivron et oignon en brochettes."],"p":"viande","fam":1},
"boulettes":{"n":[314,25,5,20],"v":["Version poulet : haché de poulet, 12 min à 190 °C, 74 °C à cœur.","Version orientale : cumin, coriandre et menthe, sauce yaourt.","Version légère : bœuf 5 %, flocons d'avoine à la place de la chapelure."],"p":"viande","fam":1},
"brochettes-boeuf":{"n":[274,34,4,14],"tips":["Brochettes en bois : fais-les tremper 30 min dans l'eau avant.","Coupe le bœuf en cubes de 3 cm réguliers pour qu'ils cuisent tous pareil."],"v":["Version poulet : cubes de poulet marinés citron, 14 min à 190 °C.","Version teriyaki : sauce soja, miel et gingembre.","Version agneau : cubes de gigot, cumin et menthe."],"p":"viande","x":["proteines"]},
"rotis-porc":{"n":[265,35,0,13],"tips":["La minuterie va jusqu'à 60 min : relance si besoin.","Sors-le du frigo 30 min avant : la cuisson à cœur est plus régulière.","Arrose avec le jus du fond de panier à mi-cuisson."],"v":["Version moutarde : badigeonne de moutarde à l'ancienne avant cuisson.","Version rôti de dinde : même cuisson à 180 °C, 74 °C à cœur."],"p":"viande","x":["proteines"],"fam":1},
"agneau":{"n":[295,17,0,25],"tips":["Rosé : 58-60 °C à cœur.","Sors les côtelettes du frigo 20 min avant pour une cuisson rosée homogène."],"v":["Version marocaine : cumin, paprika et coriandre.","Version épaule désossée en morceaux : 15 min à 190 °C."],"p":"viande"},
"poulet-entier":{"n":[472,42,0,34],"v":["Version citron-thym : un citron coupé et du thym dans la carcasse.","Version paprika fumé : badigeonne d'huile au paprika fumé et à l'ail."],"p":"volaille","x":["proteines"],"fam":1},
"cuisses-poulet":{"n":[374,32,0,27],"tips":["Peau bien sèche = peau croustillante.","Glisse un peu d'épices sous la peau, directement sur la chair, pour plus de goût."],"v":["Version moutarde : badigeonne de moutarde à l'ancienne et de miel.","Version légère : retire la peau et mets une marinade au yaourt, 25 min.","Version épicée : piment d'Espelette et ail."],"p":"volaille","fam":1},
"pilons":{"n":[359,30,9,22],"tips":["Garde un peu de marinade, fais-la réduire et nappe à la fin.","Badigeonne le miel en fin de cuisson seulement : il brûle vite à 200 °C."],"v":["Version barbecue : sauce barbecue à la place du soja-miel.","Version citron-herbes : citron, ail et thym, sans miel."],"p":"volaille","x":["proteines"],"fam":1},
"blanc-poulet":{"n":[195,35,0,6],"tips":["Un blanc d'épaisseur régulière ne sèche pas.","Une saumure de 30 min (eau + 1 c. à soupe de sel par litre) garde le blanc très moelleux."],"v":["Version croûte de parmesan : parmesan et chapelure sur le dessus, 2 min de plus.","Version curry : marinade yaourt et curry.","Version dinde : escalopes épaisses, même temps."],"p":"volaille","x":["regime","proteines"]},
"ailes-poulet":{"n":[338,27,0,25],"tips":["Une c. à café de levure chimique (sans sucre) dans les épices rend la peau encore plus croustillante.","Sépare les ailes en deux (manchon et pilon) pour qu'elles cuisent plus vite et uniformément."],"v":["Version buffalo : sauce piquante et beurre fondu à la sortie.","Version miel-soja : marinade soja, miel et ail, badigeonnée en fin de cuisson."],"p":"volaille"},
"escalope-panee":{"n":[297,38,20,7],"tips":["Le panko donne le croustillant le plus proche de la friture.","Aplatis les escalopes à 1 cm : elles cuisent avant que la panure ne brûle."],"v":["Version milanaise : parmesan dans la chapelure, servie avec un quartier de citron.","Version légère : panure aux flocons d'avoine et blanc d'œuf seulement.","Version veau : escalopes de veau fines, 8 min."],"p":"volaille","x":["proteines"],"fam":1},
"nuggets-maison":{"n":[304,35,24,7],"tips":["Les corn flakes rendent les nuggets très croustillants.","Coupe des morceaux de même taille, environ 3 cm, pour une cuisson égale."],"v":["Version protéinée : panure de flocons d'avoine et parmesan.","Version poisson : cubes de cabillaud, 8 min.","Version épicée : piment et paprika fumé dans la panure."],"p":"volaille","x":["proteines"],"fam":1},
"poulet-tandoori":{"n":[207,31,2,8],"tips":["Sers avec du riz basmati et une raïta concombre.","Marine au moins 2 h, idéalement une nuit : le yaourt attendrit la viande."],"v":["Version brochettes : cubes de blanc de poulet marinés, 14 min.","Version tofu : tofu ferme pressé, même marinade, 18 min."],"p":"volaille","x":["regime","proteines"],"o":["Inde",""]},
"cordon-bleu":{"n":[379,45,15,15],"tips":["Pique avec un cure-dent pour bien fermer.","Mets les cordons bleus 15 min au frigo après panure : le fromage coule moins."],"v":["Version légère : jambon de dinde, fromage allégé, panure aux corn flakes.","Version chèvre-épinards à la place du jambon-fromage."],"p":"volaille","x":["proteines"],"fam":1},
"saumon":{"n":[272,25,0,19],"tips":["Poisson : 55 °C à cœur pour le saumon nacré, 63 °C bien cuit.","Pose-le côté peau vers le bas : la peau protège la chair et se détache facilement après cuisson."],"v":["Version teriyaki : soja, miel et gingembre.","Version croûte d'herbes : moutarde et persil-chapelure.","Version truite : filet de truite, 8 min."],"p":"poisson","x":["proteines"]},
"cabillaud-pane":{"n":[243,31,7,9],"tips":["Le poisson se détache en lamelles quand il est cuit.","Éponge bien le poisson avant de mettre la croûte, sinon elle glisse."],"v":["Version chorizo : croûte de chorizo haché et chapelure.","Version légère : croûte d'herbes et de citron, sans parmesan."],"p":"poisson","x":["proteines"],"fam":1},
"crevettes-ail":{"n":[128,18,1,6],"tips":["Elles sont cuites quand elles sont roses et opaques.","Sèche les crevettes dans du papier absorbant : elles grillent au lieu de bouillir."],"v":["Version thaï : citronnelle, gingembre et citron vert.","Version brochettes : alternées avec ananas et poivron.","Version épicée : piment d'Espelette et paprika fumé."],"p":"poisson","x":["regime"]},
"fish-chips":{"n":[283,34,20,7],"tips":["Sauce tartare express : mayonnaise, cornichons, câpres.","Lance les frites d'abord dans l'autre zone avec la Fin synchronisée."],"v":["Version légère : panure aux corn flakes avec seulement du blanc d'œuf.","Version saumon : filet de saumon pané, 10 min."],"p":"poisson","x":["proteines"],"o":["Royaume-Uni",""],"fam":1},
"papillote-poisson":{"n":[167,27,3,5],"tips":["Ferme bien les papillotes : avec la ventilation, elles ne doivent pas s'ouvrir.","Taille les légumes en fins bâtonnets pour qu'ils cuisent aussi vite que le poisson."],"v":["Version saumon : pavé de saumon et poireaux.","Version méditerranéenne : tomates cerises, olives et basilic."],"p":"poisson","x":["regime","proteines"]},
"thon-mi-cuit":{"n":[219,38,1,6],"tips":["Prends du thon très frais, qualité sashimi.","Tranche-le avec un couteau très aiguisé, en tranches de 1 cm."],"v":["Version croûte de poivre : poivre concassé à la place du sésame.","Version saumon : pavé de saumon, 6 min."],"p":"poisson","x":["regime","proteines"],"o":["Japon",""]},
"sardines":{"n":[215,20,0,15],"tips":["Aucune odeur de grillade dans la maison comparé à la poêle.","Huile la grille au pinceau : la peau n'accroche pas.","Ne les retourne qu'une fois, délicatement, avec une spatule large."],"v":["Version chermoula : coriandre, cumin, ail et citron.","Version maquereau : filets de maquereau, 8 min."],"p":"poisson"},
"falafels":{"n":[191,9,26,4],"tips":["Sers en pita avec sauce yaourt et crudités.","Utilise des pois chiches secs trempés une nuit plutôt qu'en conserve si tu peux : ils tiennent mieux."],"v":["Version protéinée : 2 c. à soupe de farine de pois chiche à la place de la farine de blé.","Version petits pois-menthe : remplace la moitié des pois chiches.","Version épicée : piment et harissa."],"p":"legumineuse","o":["Liban",""]},
"legumes-rotis":{"n":[241,9,7,19],"tips":["Le programme Légumes démarre à 180 °C / 10 min : tu peux l'allonger.","Ajoute la feta seulement les 5 dernières minutes pour qu'elle reste moelleuse."],"v":["Version halloumi : tranches de halloumi à la place de la feta.","Version hiver : butternut, carotte et oignon rouge, 20 min.","Version protéinée : ajoute des pois chiches rôtis."],"p":"fromage"},
"tofu-croustillant":{"n":[163,13,4,10],"tips":["Idéal sur un bol de riz avec des légumes sautés.","Presse le tofu 15 min entre deux torchons sous un poids : il croustille bien mieux."],"v":["Version sésame-miel : nappe de miel et de sésame à la sortie.","Version tofu fumé : tranches fines, 10 min."],"p":"soja","o":["Chine",""]},
"gratin-courgettes":{"n":[259,12,5,20],"tips":["Le plat doit être adapté au four et laisser circuler l'air autour.","Fais dégorger les courgettes salées 15 min et essore-les : le gratin ne rend pas d'eau."],"v":["Version légère : lait demi-écrémé et fromage blanc à la place de la crème.","Version chèvre : rondelles de chèvre sur le dessus.","Version poulet : ajoute des dés de blanc de poulet cuit."],"p":"oeuf","fam":1},
"pommes-terre-farcies":{"n":[351,12,43,14],"tips":["Version complète : ajoute des lardons ou du jambon.","Précuis les pommes de terre au micro-ondes 8 min pour gagner du temps."],"v":["Version légère : fromage blanc à la ciboulette à la place de la crème.","Version raclette : lardons et fromage à raclette."],"p":"fromage","fam":1},
"quiche":{"n":[368,11,21,26],"tips":["Le guide Valberg indique environ 20-22 min à 180 °C pour une quiche de 400 g.","Précuis le fond 5 min à 180 °C avant de verser l'appareil : il reste croustillant."],"v":["Version lorraine : lardons et emmental.","Version saumon-épinards.","Version sans pâte légère : appareil dans des ramequins, 18 min à 170 °C."],"p":"oeuf","o":["France","Lorraine / Alsace"],"fam":1},
"croquettes-lentilles":{"n":[172,12,23,2],"tips":["Parfait en burger végétarien.","Mets les galettes 20 min au frigo avant cuisson : elles se tiennent mieux."],"v":["Version pois chiches : remplace les lentilles.","Version épicée : curry et coriandre fraîche."],"p":"legumineuse","fam":1},
"frites-maison":{"n":[176,4,34,2],"v":["Version patate douce : voir la recette dédiée.","Version épices cajun : paprika, ail et thym.","Version très légère : sans huile, mais un peu moins croustillantes."]},
"potatoes":{"n":[176,4,34,2],"tips":["Le guide Valberg indique 18-22 min à 180 °C pour 300-800 g.","Rince et sèche bien les quartiers pour enlever l'amidon : ils croustillent davantage."],"v":["Version herbes : romarin et ail.","Version cheddar : cheddar fondu à la sortie."]},
"pdt-grenaille":{"n":[142,3,26,3],"tips":["Pas besoin de les éplucher.","Coupe les plus grosses en deux pour une cuisson égale."],"v":["Version écrasées : écrase-les à mi-cuisson, huile et parmesan, 8 min de plus.","Version paprika fumé."]},
"patate-douce":{"n":[160,2,32,3],"tips":["La fécule aide à les rendre croustillantes.","Coupe des bâtonnets fins (1 cm) : la patate douce brûle vite si elle est trop épaisse."],"v":["Version cannelle-paprika, légèrement sucrée-salée.","Version quartiers épais : 4 min de plus."]},
"brocolis":{"n":[82,5,2,5],"tips":["Les pointes grillées sont les meilleures.","Sèche bien les fleurettes après lavage, sinon elles cuisent à la vapeur."],"v":["Version asiatique : soja et sésame.","Version citron-ail sans parmesan."],"x":["regime"]},
"haricots-verts":{"n":[50,2,4,3],"tips":["Ajoute des amandes effilées les 2 dernières minutes.","Équeute-les et sèche-les bien : l'huile accroche mieux."],"v":["Version lardons : quelques lardons dans le panier.","Version asiatique : sauce soja et sésame."],"x":["regime"]},
"chou-fleur":{"n":[89,3,5,6],"tips":["Sers avec un yaourt à la coriandre.","Coupe des fleurettes de même taille, avec un côté plat pour bien griller."],"v":["Version entier : chou-fleur entier badigeonné, 30 min à 180 °C sans séparateur.","Version buffalo : sauce piquante à la sortie."]},
"carottes-miel":{"n":[94,1,15,3],"tips":["Le miel à la fin évite qu'il brûle.","Coupe les carottes en biseau, épaisseur 1 cm, pour qu'elles caramélisent."],"v":["Version orange : zeste et jus d'orange à la place du miel.","Version sans sucre : cumin et persil seulement."]},
"courgettes-panees":{"n":[139,7,13,6],"tips":["Sers avec une sauce yaourt-ail.","Sale et éponge les bâtonnets 10 min avant la panure : moins d'eau, plus de croustillant."],"v":["Version aubergine : bâtonnets d'aubergine, même cuisson.","Version légère : parmesan seul sans chapelure."]},
"gratin-dauphinois":{"n":[365,7,38,20],"tips":["Alu bien serré sur le plat pour qu'il ne s'envole pas.","Ne rince pas les pommes de terre après les avoir tranchées : l'amidon lie la crème."],"v":["Version légère : lait à la place de la moitié de la crème.","Version savoyarde : reblochon sur le dessus."],"o":["France","Savoie / Dauphiné"]},
"epis-mais":{"n":[198,5,29,8],"tips":["Coupe-les en deux pour bien remplir les zones.","Badigeonne le beurre au paprika à mi-cuisson puis encore à la sortie."],"v":["Version mexicaine (elote) : mayonnaise légère, citron vert et fromage.","Version herbes et ail."]},
"pommes-cuites":{"n":[199,1,32,7],"tips":["Délicieux avec une boule de glace vanille.","Choisis des pommes qui tiennent à la cuisson (Reine des reinettes, Boskoop)."],"v":["Version poire : demi-poires, 12 min.","Version légère : sans beurre, juste cannelle et un filet de miel."]},
"moelleux-chocolat":{"n":[416,6,29,30],"tips":["Prépare la pâte à l'avance, garde-la au frigo, ajoute 1 min de cuisson.","Beurre et farine bien les ramequins pour démouler sans casse."],"v":["Version cœur praliné : un carré de praliné au centre.","Version allégée : la moitié du beurre remplacée par de la compote."]},
"gateau-yaourt":{"n":[387,8,60,13],"v":["Version marbré : la moitié de la pâte au cacao.","Version légère : 1 pot de sucre seulement et compote à la place de l'huile."]},
"muffins":{"n":[307,6,35,15],"tips":["Le guide Valberg propose 200 °C pour les muffins ; 160 °C évite un dessus trop coloré sur une grande pâte maison. Teste.","Ne mélange pas trop la pâte : quelques grumeaux donnent des muffins plus moelleux."],"v":["Version myrtilles : fruits à la place des pépites.","Version protéinée : la moitié de la farine remplacée par de la whey nature et du skyr."],"o":["USA",""]},
"banane-choco":{"n":[196,3,28,7],"tips":["Se mange à la cuillère directement dans la peau.","Prends des bananes bien mûres, la peau tachetée : elles sont plus sucrées."],"v":["Version coco : noix de coco râpée et sirop d'érable.","Version beurre de cacahuète."]},
"crumble":{"n":[258,2,38,10],"tips":["Ajoute une poignée de flocons d'avoine pour plus de croquant.","Garde le beurre bien froid et sable du bout des doigts pour un crumble croustillant."],"v":["Version fruits rouges : 15 min.","Version légère : flocons d'avoine et moins de beurre."],"o":["Royaume-Uni",""]},
"churros":{"n":[271,7,28,15],"tips":["Sers avec une sauce chocolat.","Pâte bien froide et douille cannelée : les stries croustillent le mieux."],"v":["Version cannelle-sucre roux.","Version chocolat : servis avec une sauce chocolat chaude."],"o":["Espagne",""]},
"cookies":{"n":[243,3,25,14],"tips":["Cuis en plusieurs fournées plutôt que de les serrer.","Sors-les encore mous au centre : ils durcissent en refroidissant."],"v":["Version double chocolat : cacao dans la pâte.","Version flocons d'avoine et raisins."],"o":["USA",""]},
"brioche-perdue":{"n":[346,11,47,13],"tips":["Égoutte bien les tranches pour qu'elles ne détrempent pas le papier.","Utilise une brioche de la veille, plus ferme, qui absorbe sans se défaire."],"v":["Version caramel au beurre salé.","Version fruits rouges et fromage blanc."]},
"ananas-roti":{"n":[131,1,24,3],"tips":["Avec une boule de glace coco, c'est parfait.","Coupe des tranches de 1,5 cm : assez épaisses pour caraméliser sans sécher."],"v":["Version rhum-vanille.","Version épicée : cannelle, badiane et poivre."]},
"chaussons-pommes":{"n":[270,4,26,16],"tips":["Fais 2 petites entailles sur le dessus pour la vapeur.","Soude bien les bords à la fourchette pour que la compote ne s'échappe pas."],"v":["Version poire-chocolat.","Version abricot."]},
"pois-chiches":{"n":[168,8,19,5],"tips":["Ils croustillent encore en refroidissant.","Sèche-les à fond et retire les peaux qui se détachent : ils croustillent bien mieux."],"v":["Version curry.","Version sucrée : cannelle et miel."]},
"chips-legumes":{"n":[71,2,13,1],"tips":["Mets une petite quantité à la fois.","Tranche à la mandoline (1-2 mm) et rince l'amidon, puis sèche bien."],"v":["Version betterave ou panais, mêmes réglages en surveillant.","Version chips de chou kale : 5 min à 160 °C."]},
"mozza-sticks":{"n":[255,15,15,15],"tips":["Double panure + congélation = le fromage ne coule pas.","Prends de la mozzarella en bloc (pour pizza), plus ferme que la boule."],"v":["Version cheddar.","Version épicée : piment dans la chapelure."]},
"feuilletes-saucisse":{"n":[278,8,15,21],"tips":["Le guide Valberg indique 13-15 min à 200 °C pour les friands à la saucisse.","Badigeonne de jaune d'œuf pour une belle couleur dorée."],"v":["Version légère : saucisses de volaille.","Version fromage : un morceau d'emmental avec la saucisse."]},
"nachos":{"n":[312,9,24,20],"tips":["Surveille par le hublot.","Étale les chips en une seule couche pour que le fromage fonde partout."],"v":["Version chili : haricots rouges et viande hachée cuite.","Version végé : maïs, haricots noirs, poivrons."],"o":["Mexique",""]},
"noix-epicees":{"n":[269,9,2,24],"tips":["Laisse refroidir : elles deviennent croquantes.","Secoue toutes les 3 min : les fruits secs brûlent très vite."],"v":["Version sucrée : miel et cannelle.","Version romarin et sel."]},
"rillettes-croutons":{"n":[129,3,17,5],"tips":["Parfaits sur une soupe ou une salade César.","Coupe des cubes réguliers de 2 cm pour une cuisson égale."],"v":["Version parmesan.","Version herbes et paprika."]},
"samoussas":{"n":[127,4,22,2],"tips":["Version viande : bœuf haché cuit, oignon, épices.","Huile chaque samoussa au pinceau ou au spray pour une feuille de brick dorée."],"v":["Version bœuf épicé.","Version fromage-épinards."],"o":["Inde",""]},
"pizza-express":{"n":[275,14,34,9],"tips":["Le programme Pizza démarre à 180 °C / 15 min : surveille, une pâte fine cuit plus vite.","Garnis légèrement : trop de sauce détrempe la pâte."],"v":["Version blanche : crème légère, lardons et oignons.","Version végé : légumes grillés et mozzarella."],"o":["Italie",""]},
"bacon":{"n":[90,5,0,8],"tips":["Nettoie le panier juste après : la graisse s'enlève facilement.","Ajoute un peu d'eau sous la grille : moins de fumée avec la graisse qui coule."],"v":["Version épicée : poivre et paprika.","Version érable : badigeonne de sirop d'érable à la fin."]},
"oeufs-cocotte":{"n":[131,7,1,11],"tips":["Ajoute du jambon ou des épinards au fond.","Retire-les un peu avant la cuisson voulue : ils continuent de cuire dans le ramequin."],"v":["Version saumon fumé et aneth.","Version légère : fromage blanc à la place de la crème."]},
"pain-perdu":{"n":[248,10,42,4],"tips":["Sers avec des fruits rouges et du sirop d'érable.","Trempe le pain rapidement : il doit être imbibé mais pas détrempé."],"v":["Version salée : jambon et fromage.","Version légère : lait demi-écrémé et pain complet."]},
"granola":{"n":[243,6,29,10],"tips":["Se garde 2 semaines en bocal.","Laisse-le refroidir sans y toucher : il forme de bons morceaux croquants."],"v":["Version chocolat : pépites ajoutées après refroidissement.","Version protéinée : graines de courge et un peu de whey."]},
"croissants-crus":{"n":[280,4,25,18],"tips":["Ils gonflent beaucoup : laisse de la place au-dessus.","Laisse-les 10 min à température ambiante avant cuisson pour qu'ils développent mieux."],"v":["Pains au chocolat : 2 min de plus.","Mini-viennoiseries : 2 min de moins."]},
"omelette":{"n":[247,24,2,16],"tips":["Le centre doit être juste pris.","Bats les blancs à part et incorpore-les à la fin pour une omelette très soufflée."],"v":["Version légère : 2 œufs + 2 blancs.","Version épinards-feta."],"p":"oeuf"},
"pommes-sautees-dej":{"n":[138,3,24,3],"tips":["Fais le bacon dans l'autre zone avec la Fin synchronisée.","Utilise des pommes de terre cuites la veille et bien froides : elles se tiennent mieux."],"v":["Version poivrons-oignons.","Version chorizo."]},
"rechauffer-pizza":{"tips":["La pâte redevient croustillante, contrairement au micro-ondes.","Pose les parts directement sur la grille, sans papier, pour un dessous croustillant."],"v":["Pour une pizza très garnie : 160 °C, 5 min.","Pour une pâte épaisse : 1 min de plus à 150 °C."]},
"rechauffer-frites":{"tips":["Un tout petit voile d'huile en spray aide.","Étale-les en une seule couche et secoue à mi-temps."],"v":["Potatoes : 2 min de plus.","Frites de patate douce : 160 °C, 4 min."]},
"rechauffer-poulet":{"tips":["Le guide Valberg conseille 150 °C pendant 10 min maximum pour réchauffer.","Sors le poulet du frigo 10 min avant pour qu'il chauffe jusqu'au cœur sans sécher."],"v":["Nuggets, escalopes panées : 180 °C, 5 min.","Poulet rôti en morceaux : 160 °C, 8 min."]},
"rechauffer-viennoiseries":{"tips":["Le pain retrouve une croûte croustillante.","Passe un peu d'eau sur la croûte du pain rassis avant : il redevient croustillant."],"v":["Baguette entière : 160 °C, 4 min.","Pain de mie : 150 °C, 2 min."]},
"rechauffer-quiche":{"tips":["Vérifie que le centre est bien chaud avant de servir.","Couvre d'un petit carré d'alu bien serré si le dessus colore trop vite."],"v":["Lasagnes : plat couvert d'alu bien serré, 150 °C, 10 min.","Pizza feuilletée : 150 °C, 5 min."]},
"dinde-citron-herbes":{"n":[153,31,1,3],"v":["Version épicée : paprika fumé et cumin à la place des herbes.","Version poulet : blancs de poulet, 12 à 14 min.","Version pané léger : roule-les dans 2 c. à soupe de flocons d'avoine mixés, 1 min de plus."],"x":["regime","proteines"],"p":"volaille"},
"colin-croute-herbes":{"n":[142,27,3,2],"v":["Version cabillaud ou lieu : même temps.","Version citron-gingembre : gingembre râpé dans la croûte.","Version sans gluten : amandes en poudre à la place de la chapelure (+40 kcal/portion)."],"x":["regime","proteines"],"p":"poisson"},
"brochettes-crevettes-citron-vert":{"n":[124,23,2,3],"v":["Version ananas : morceaux d'ananas entre les crevettes.","Version Saint-Jacques : noix de Saint-Jacques, 5 min.","Version poulet : cubes de blanc, 12 min à 190 °C."],"x":["regime","proteines"],"p":"poisson"},
"legumes-soleil-sans-huile":{"n":[65,3,8,2],"v":["Version hiver : butternut, carotte, oignon, 20 min.","Version protéinée : ajoute 200 g de pois chiches égouttés.","Version feta light : 60 g de feta émiettée à la sortie."],"x":["regime"]},
"chips-courgette-parmesan":{"n":[46,3,2,3],"v":["Version carotte ou betterave : 160 °C, 16 min.","Version herbes : thym et ail à la place du parmesan (vegan)."],"x":["regime"]},
"frites-carottes":{"n":[67,1,11,2],"v":["Version panais : 14 min.","Version sucrée-salée : 1 c. à café de miel à la sortie.","Version épicée : paprika fumé et piment."],"x":["regime"]},
"steak-chou-fleur":{"n":[130,8,10,5],"v":["Version tahini-citron (vegan).","Version gratinée : 20 g d'emmental.","Version curry-coco : curry et 2 c. à soupe de lait de coco light."],"x":["regime"],"p":"legume"},
"portobellos-legers":{"n":[55,8,2,1],"v":["Version végé : épinards à la place du jambon.","Version chèvre frais (+60 kcal).","Version œuf : un œuf cassé dans chaque chapeau, 10 min à 170 °C."],"x":["regime"]},
"boulettes-poulet-legeres":{"n":[169,31,3,3],"v":["Version dinde : même temps.","Version asiatique : gingembre, soja et sésame.","Version feta : 40 g de feta dans la farce."],"x":["regime","proteines"],"p":"volaille"},
"omelette-blancs-legumes":{"n":[180,21,3,9],"v":["Version jambon-champignons.","Version tomates-basilic.","Version 100 % blancs : -70 kcal par portion."],"x":["regime","proteines"],"p":"oeuf"},
"muffins-oeufs-legumes":{"n":[108,11,3,6],"v":["Version végé : épinards et feta.","Version saumon fumé et aneth.","Version fromage : 40 g d'emmental (+30 kcal/portion)."],"x":["regime","proteines"],"p":"oeuf"},
"poivrons-farcis-quinoa":{"n":[221,11,32,3],"v":["Version bœuf 5 % : 250 g de haché cuit à la place des haricots.","Version boulgour-feta.","Version tomates farcies : 15 min."],"x":["regime"],"p":"legumineuse"},
"aubergines-yaourt-menthe":{"n":[63,5,6,2],"v":["Version tahini (vegan).","Version gratinée tomate-mozzarella light, 5 min de plus.","Version épicée : zaatar sur les rondelles."],"x":["regime"]},
"courgettes-farcies-thon":{"n":[148,24,5,3],"v":["Version poulet : blanc de poulet cuit haché.","Version végé : ricotta et épinards.","Version tomate-mozzarella light."],"x":["regime","proteines"],"p":"poisson"},
"merlu-sauce-vierge":{"n":[156,27,2,4],"v":["Version saumon (plus gras, +150 kcal).","Version olives-câpres dans la sauce.","Version agrumes : orange et pamplemousse."],"x":["regime","proteines"],"p":"poisson"},
"chips-pommes-cannelle":{"n":[66,0,14,0],"v":["Version poire.","Version banane : rondelles de 3 mm, 120 °C, 30 min.","Version vanille : graines de vanille à la place de la cannelle."],"x":["regime"]},
"poires-roties-vanille":{"n":[120,3,24,0],"v":["Version pommes : 18 min.","Version chocolat : 5 g de chocolat noir râpé par portion.","Version épicée : badiane et cannelle."],"x":["regime"]},
"brochettes-poulet-yaourt":{"n":[200,39,3,3],"v":["Version dinde : même temps.","Version tikka : garam masala dans la marinade.","Version légumes : courgette et poivron entre les cubes."],"x":["regime","proteines"],"p":"volaille"},
"nuggets-chou-fleur":{"n":[103,7,12,2],"v":["Version buffalo : sauce piquante à la sortie.","Version brocoli.","Version sans gluten : flocons de maïs nature mixés."],"x":["regime"]},
"galettes-courgette-feta":{"n":[102,6,8,5],"v":["Version carotte-cumin.","Version protéinée : 2 c. à soupe de farine de pois chiche.","Version chèvre frais."],"x":["regime"],"p":"fromage"},
"legumes-verts-rotis":{"n":[68,5,6,2],"v":["Version lardons : 40 g de lardons avec les choux.","Version parmesan-citron.","Version miel-moutarde."],"x":["regime"]},
"tomates-farcies-dinde":{"n":[165,27,9,2],"v":["Version bœuf 5 %.","Version végé : quinoa et feta.","Version courgettes rondes : 22 min."],"x":["regime","proteines"],"p":"volaille"},
"frittata-epinards":{"n":[207,17,3,14],"v":["Version chorizo-poivron.","Version légère : la moitié en blancs.","Version courgette-menthe-feta."],"x":["regime","proteines"],"p":"oeuf"},
"crumble-leger-fruits-rouges":{"n":[166,4,21,7],"v":["Version pommes-cannelle : 18 min.","Version protéinée : 1 c. à soupe de whey vanille dans la pâte.","Version sans gluten : avoine certifiée."],"x":["regime"]},
"salade-lentilles-legumes-rotis":{"n":[197,11,28,3],"v":["Version feta : 60 g émiettée.","Version patate douce.","Version poulet : 200 g de blanc grillé."],"x":["regime","proteines"],"p":"legumineuse"},
"butternut-cannelle":{"n":[91,2,16,1],"v":["Version potimarron avec la peau.","Version épicée : piment et cumin.","Version salée : parmesan et sauge."],"x":["regime"]},
"asperges-roties":{"n":[40,3,3,2],"v":["Version parmesan.","Version jambon cru enroulé (+50 kcal).","Version œuf mollet."],"x":["regime"]},
"poulet-farci-epinards-ricotta":{"n":[247,40,1,9],"v":["Version jambon-mozzarella.","Version tomates séchées-feta.","Version dinde : même temps."],"x":["proteines"],"p":"volaille"},
"poulet-croute-parmesan-avoine":{"n":[298,43,7,10],"v":["Version dinde.","Version épicée : piment de Cayenne.","Version poisson : cubes de cabillaud, 9 min."],"x":["proteines"],"p":"volaille","fam":1},
"steaks-haches-5":{"n":[156,26,0,6],"v":["Version burger maison léger (pain complet, crudités).","Version moutarde-oignons.","Version boulettes : 10 min."],"x":["proteines","regime"],"p":"viande","fam":1},
"brochettes-dinde-tikka":{"n":[183,40,2,2],"v":["Version poulet.","Version tofu : 18 min.","Version crevettes : 7 min."],"x":["proteines","regime"],"p":"volaille"},
"saumon-croute-sesame":{"n":[290,27,2,19],"v":["Version truite : 8 min.","Version croûte de pistaches.","Version légère : sans miel, avec du gingembre."],"x":["proteines"],"p":"poisson"},
"cabillaud-skyr-herbes":{"n":[169,33,2,3],"v":["Version saumon.","Version curry léger.","Version épinards en dessous."],"x":["proteines","regime"],"p":"poisson"},
"crevettes-coco-proteinees":{"n":[185,26,6,6],"v":["Version sésame.","Version poulet (aiguillettes, 12 min).","Version sans coco : panko et paprika."],"x":["proteines"],"p":"poisson"},
"nuggets-tofu":{"n":[182,16,9,9],"v":["Version vegan : levure maltée à la place du parmesan.","Version tofu fumé : 12 min.","Version buffalo."],"x":["proteines"],"p":"soja","fam":1},
"tempeh-croustillant":{"n":[212,20,11,12],"v":["Version barbecue.","Version curry.","Version tofu fumé."],"x":["proteines"],"p":"soja"},
"edamame-roties":{"n":[89,7,6,5],"v":["Version ail-soja.","Version sésame-citron.","Version pois chiches rôtis."],"x":["proteines"]},
"boulettes-lentilles-quinoa":{"n":[247,17,28,6],"v":["Version vegan : graines de lin à la place de l'œuf.","Version pois chiches.","Version épicée : harissa."],"x":["proteines"],"p":"legumineuse"},
"cheesecake-skyr":{"n":[231,15,26,8],"v":["Version fruits rouges sur le dessus.","Version sans base (sans gluten).","Version protéinée : 30 g de whey vanille à la place du sucre et de la maïzena."],"x":["proteines","regime"]},
"muffins-banane-whey":{"n":[159,12,19,3],"v":["Version chocolat : 1 c. à soupe de cacao.","Version myrtilles.","Version sans whey."],"x":["proteines"]},
"baked-oats-skyr":{"n":[277,19,33,7],"v":["Version banane-chocolat.","Version pomme-cannelle.","Version + whey : 15 g par ramequin."],"x":["proteines"]},
"cookies-proteines":{"n":[146,9,13,6],"v":["Version sans whey : 60 g de farine d'amande.","Version cacao.","Version purée d'amande."],"x":["proteines"]},
"roti-dinde":{"n":[177,36,0,4],"v":["Version moutarde-miel.","Version orloff léger (jambon de dinde + fromage allégé).","Version rôti de veau : 63 °C à cœur."],"x":["proteines","regime"],"p":"volaille","fam":1},
"maquereau-moutarde":{"n":[262,24,1,18],"v":["Version sardines.","Version citron-ail.","Version harissa."],"x":["proteines"],"p":"poisson"},
"boulettes-dinde-feta":{"n":[224,35,3,8],"v":["Version poulet.","Version bœuf 5 %.","Version épicée : piment d'Alep."],"x":["proteines"],"p":"volaille"},
"cuisses-poulet-yaourt":{"n":[272,43,2,10],"v":["Version citron-ail.","Version barbecue.","Version tandoori."],"x":["proteines"],"p":"volaille","fam":1},
"clafoutis-proteine":{"n":[196,16,21,5],"v":["Version abricots.","Version poires-chocolat.","Version sans whey : 30 g de farine."],"x":["proteines"]},
"halloumi-grille":{"n":[312,19,14,19],"v":["Version feta en papillote.","Version tofu.","Version brochettes."],"x":["proteines"],"p":"fromage"},
"gratin-courgettes-cottage":{"n":[205,19,7,11],"v":["Version jambon.","Version épinards.","Version poulet."],"x":["proteines","regime"],"p":"fromage"},
"scotch-eggs":{"n":[359,25,11,23],"v":["Version légère : dinde hachée assaisonnée.","Version chorizo.","Version végé : purée de pois chiches épicée."],"x":["proteines"],"p":"viande","o":["Royaume-Uni",""]},
"arancini":{"n":[295,12,41,9],"v":["Version ragù : 1 c. à café de bolognaise au cœur.","Version petits pois-jambon.","Version légère : riz complet, mozzarella light."],"o":["Italie",""]},
"parmigiana":{"n":[198,12,10,12],"v":["Version courgettes.","Version légère : mozzarella light.","Version protéinée : couche de lentilles."],"p":"fromage","o":["Italie",""]},
"bruschetta":{"n":[226,6,36,6],"v":["Version mozzarella-jambon cru.","Version champignons à l'ail.","Version légère : pain complet, 1 c. à soupe d'huile."],"o":["Italie",""]},
"patatas-bravas":{"n":[198,5,36,3],"v":["Version patate douce.","Version douce sans piment pour les enfants.","Version chorizo."],"o":["Espagne",""]},
"calamars-romana":{"n":[250,27,21,6],"v":["Version sel-poivre (maïzena seule).","Version crevettes.","Version légère : panko seul et blanc d'œuf."],"p":"poisson","o":["Espagne",""]},
"brochettes-kefta":{"n":[163,26,1,6],"v":["Version agneau (traditionnelle, plus grasse).","Version poulet.","Version boulettes sans pics : 9 min."],"x":["proteines"],"p":"viande","o":["Maroc",""]},
"briouates-fromage":{"n":[216,10,17,12],"v":["Version viande hachée épicée.","Version thon-œuf.","Version sucrée amandes-miel-fleur d'oranger."],"o":["Maroc",""]},
"poulet-citron-olives":{"n":[480,41,3,33],"v":["Version légère : sans la peau, 22 min.","Version pilons.","Version poisson (dorade en filets, 10 min)."],"p":"volaille","o":["Maroc",""]},
"chou-fleur-tahini":{"n":[115,5,7,7],"v":["Version chou-fleur entier : 30 min sans séparateur.","Version yaourt-ail.","Version pois chiches."],"o":["Liban",""]},
"manakish-zaatar":{"n":[234,6,34,8],"v":["Version fromage (akkawi ou mozzarella).","Version légère : 1 c. à soupe d'huile.","Version viande hachée épicée (lahm bi ajeen)."],"o":["Liban",""]},
"pakoras":{"n":[127,6,17,4],"v":["Version épinards.","Version chou-fleur.","Version pomme de terre râpée."],"o":["Inde",""]},
"aloo-gobi":{"n":[148,4,24,3],"v":["Version patate douce.","Version pois chiches.","Version douce."],"o":["Inde",""]},
"tonkatsu":{"n":[328,36,22,10],"v":["Version poulet (chicken katsu).","Version katsu curry.","Version légère : blanc d'œuf seul."],"p":"viande","o":["Japon",""]},
"yakitori":{"n":[218,31,6,8],"v":["Version blanc de poulet : 10 min.","Version boulettes (tsukune).","Version saumon."],"x":["regime","proteines"],"p":"volaille","o":["Japon",""]},
"poulet-general-tao":{"n":[270,30,18,8],"v":["Version légère : moitié moins de miel.","Version tofu.","Version orange."],"p":"volaille","o":["Chine",""]},
"porc-char-siu":{"n":[374,26,10,26],"v":["Version filet mignon (plus maigre, 20 min).","Version poulet.","Version tofu."],"p":"viande","o":["Chine",""]},
"nems":{"n":[287,15,30,11],"v":["Version crevettes.","Version poulet.","Version végé tofu-légumes."],"o":["Vietnam",""]},
"poulet-citronnelle":{"n":[189,36,3,3],"v":["Version porc.","Version tofu.","Version brochettes."],"x":["regime","proteines"],"p":"volaille","o":["Vietnam",""]},
"satay-poulet":{"n":[314,40,3,15],"v":["Version légère : moitié moins de sauce.","Version tofu.","Version crevettes."],"x":["proteines"],"p":"volaille","o":["Thaïlande",""]},
"crevettes-thai-coco":{"n":[149,23,1,6],"v":["Version poulet.","Version légère : lait de coco allégé.","Version curry vert."],"p":"poisson","o":["Thaïlande",""]},
"fajitas-poulet":{"n":[438,37,46,11],"v":["Version bœuf.","Version crevettes.","Version végé : haricots noirs et maïs."],"p":"volaille","o":["Mexique",""],"fam":1},
"quesadillas":{"n":[484,22,54,19],"v":["Version poulet.","Version légère : fromage allégé.","Version jambon-fromage pour les enfants."],"p":"legumineuse","o":["Mexique",""],"fam":1},
"travers-porc-bbq":{"n":[419,30,8,30],"v":["Version miel-soja.","Version poulet.","Version épices cajun sans sauce."],"p":"viande","o":["USA",""],"fam":1},
"onion-rings":{"n":[195,8,29,5],"v":["Version bière : pâte farine-bière.","Version épicée.","Version légère : blanc d'œuf seulement."],"o":["USA",""],"fam":1},
"souvlaki":{"n":[237,38,3,8],"v":["Version poulet (souvlaki kotopoulo).","Version agneau.","Version halloumi."],"x":["proteines"],"p":"viande","o":["Grèce",""]},
"feta-rotie-miel":{"n":[170,8,6,12],"v":["Version piquante : piment d'Alep.","Version sans miel.","Version olives-câpres."],"o":["Grèce",""]},
"frites-belges":{"n":[222,5,42,3],"v":["Version légère : 1 c. à café d'huile.","Version patate douce.","Version cajun."],"o":["Belgique",""],"fam":1},
"chicons-gratin":{"n":[330,28,16,17],"v":["Version légère : béchamel au lait écrémé, fromage allégé.","Version végé : sans jambon, avec des noix.","Version poulet."],"p":"viande","o":["Belgique",""],"fam":1},
"poulet-frit-coreen":{"n":[325,35,23,10],"v":["Version ailes.","Version douce soja-ail.","Version chou-fleur."],"p":"volaille","o":["Corée",""]},
"tofu-gochujang":{"n":[156,13,9,7],"v":["Version poulet.","Version douce.","Version tempeh."],"x":["proteines"],"p":"soja","o":["Corée",""]},
"poulet-kebab-maison":{"n":[413,44,36,10],"v":["Version légère : en assiette, sans pita.","Version bœuf.","Version falafels."],"x":["proteines"],"p":"volaille","o":["Turquie",""],"fam":1},
"tian-provencal":{"n":[82,3,9,3],"v":["Version chèvre : rondelles de chèvre les 5 dernières minutes.","Version pommes de terre fines.","Version parmesan."],"x":["regime"],"o":["France","Provence"]},
"pissaladiere":{"n":[189,6,29,5],"v":["Version sans anchois.","Version pâte feuilletée : 15 min.","Version tomate-oignon."],"o":["France","Provence"]},
"saint-jacques-beurre-breton":{"n":[140,19,4,5],"v":["Version chorizo.","Version légère : sans beurre, juste citron et huile.","Version brochettes."],"p":"poisson","o":["France","Bretagne"]},
"far-breton":{"n":[285,10,44,8],"v":["Version raisins secs au rhum.","Version légère : lait écrémé et 50 g de sucre.","Version nature."],"o":["France","Bretagne"]},
"camembert-roti":{"n":[338,17,32,15],"v":["Version sans alcool : cidre doux.","Version noix-miel.","Version ail-romarin."],"o":["France","Normandie"]},
"bourdelots":{"n":[422,5,51,21],"v":["Version poires (douillons).","Version calvados dans le cœur.","Version légère : pâte filo."],"o":["France","Normandie"]},
"flammekueche":{"n":[449,16,40,24],"v":["Version légère : fromage blanc 0 % et allumettes de bacon dégraissées.","Version munster.","Version végé : champignons."],"p":"viande","o":["France","Lorraine / Alsace"],"fam":1},
"quenelles-gratinees":{"n":[240,10,19,13],"v":["Version béchamel.","Version quenelles nature (volaille).","Version champignons."],"p":"poisson","o":["France","Lyon"]},
"saucisson-brioche":{"n":[430,16,33,26],"v":["Version pistaché (traditionnel lyonnais).","Version feuilletée : 25 min à 180 °C.","Version saucisse de volaille."],"p":"viande","o":["France","Lyon"]},
"magret-canard":{"n":[616,30,4,54],"v":["Version miel-épices.","Version légère : retire la peau (-150 kcal).","Version orange."],"p":"volaille","o":["France","Sud-Ouest"]},
"pommes-sarladaises":{"n":[187,4,34,3],"v":["Version cèpes.","Version huile d'olive.","Version patate douce."],"o":["France","Sud-Ouest"]},
"tartiflette":{"n":[770,35,40,50],"v":["Version légère : demi-reblochon et crème légère.","Version végé : champignons à la place des lardons.","Version croziflette (crozets cuits)."],"p":"viande","o":["France","Savoie / Dauphiné"],"fam":1},
"diots-vin-blanc":{"n":[459,22,6,37],"v":["Version légère : saucisses de volaille.","Version sans alcool : bouillon.","Version oignons-pommes."],"p":"viande","o":["France","Savoie / Dauphiné"]},
"welsh":{"n":[709,46,36,41],"v":["Version légère : demi-portion de cheddar.","Version sans alcool : lait.","Version végé : sans jambon."],"p":"fromage","o":["France","Nord"],"fam":1},
"flamiche-maroilles":{"n":[446,18,18,33],"v":["Version poireaux (flamiche picarde).","Version légère : moitié de fromage.","Version pommes de terre."],"o":["France","Nord"]},
"poulet-basquaise":{"n":[312,41,9,12],"v":["Version jambon de Bayonne.","Version légumes seuls (piperade).","Version blancs de poulet : 18 min."],"x":["regime","proteines"],"p":"volaille","o":["France","Pays basque"]},
"gateau-basque":{"n":[404,6,54,18],"v":["Version crème pâtissière.","Version rhum-vanille.","Version mini-gâteaux en ramequins : 20 min."],"o":["France","Pays basque"]},
"gougeres":{"n":[321,13,19,22],"v":["Version emmental.","Version jambon.","Version mini-choux sucrés."],"o":["France","Bourgogne"]},
"poulet-moutarde-dijon":{"n":[308,40,1,15],"v":["Version légère : skyr à la place de la crème.","Version moutarde à l'ancienne et miel.","Version lapin : 25 min."],"x":["proteines"],"p":"volaille","o":["France","Bourgogne"]},
"fiadone":{"n":[243,11,20,13],"v":["Version légère : 60 g de sucre.","Version fleur d'oranger.","Version myrtilles."],"o":["France","Corse"]},
"aubergines-bonifacienne":{"n":[231,14,21,9],"v":["Version viande hachée.","Version légère : moins de fromage.","Version courgettes."],"p":"fromage","o":["France","Corse"]},
"accras-morue":{"n":[156,12,19,3],"v":["Version crevettes.","Version légumes (giraumon).","Version légère : farine de pois chiche."],"o":["France","Antilles / Réunion"]},
"poulet-boucane":{"n":[442,41,1,30],"v":["Version sans peau, plus légère.","Version porc.","Version brochettes."],"x":["proteines"],"p":"volaille","o":["France","Antilles / Réunion"]},
"bananes-plantain":{"n":[161,2,39,2],"v":["Version tostones (vertes écrasées, 2 cuissons).","Version sucrée cannelle.","Version épicée."],"o":["France","Antilles / Réunion"]},
"brownies":{"n":[358,6,27,24],"v":["Version légère : 50 g de beurre + 80 g de compote.","Version protéinée : 30 g de whey chocolat à la place de la farine.","Version noisettes ou pépites blanches."]},
"peches-roties-romarin":{"n":[91,4,18,0],"v":["Version abricots : 9 min.","Version nectarines-thym.","Version amandes effilées (+40 kcal)."],"x":["regime"]},
"tarte-fine-pommes":{"n":[235,2,27,13],"v":["Version poires-amandes.","Version légère : pâte filo beurrée au pinceau.","Version caramel au beurre salé."]},
"toasts-avocat-oeuf":{"n":[310,13,23,17],"v":["Version saumon fumé.","Version feta-tomates.","Version légère : demi-avocat."],"x":["proteines"]},
"poireaux-rotis-vinaigrette":{"n":[82,4,8,3],"v":["Version noisettes.","Version parmesan.","Version vinaigrette classique (+60 kcal)."],"x":["regime"]},
"champignons-ail-persil":{"n":[39,4,1,2],"v":["Version crème légère.","Version soja-sésame.","Version persillade avec chapelure."],"x":["regime"]},
"borek-fromage":{"n":[267,12,19,16],"v":["Version épinards-feta (ıspanaklı).","Version viande hachée épicée.","Version légère : moitié feta, moitié fromage blanc."],"o":["Turquie",""]},
"pommes-pont-neuf":{"n":[222,5,42,3],"v":["Version parmesan-truffe.","Version légère : 1 c. à café d'huile.","Version patate douce : 18 min."],"o":["France","Paris / Île-de-France"],"fam":1}};
RECIPES.forEach(r=>{const e=EXT[r.id]||{};if(e.n)r.n=e.n;if(e.tips)r.tips=e.tips;r.v=e.v||[];r.x=e.x||[];r.p=e.p||"";r.o=e.o||null;r.fam=!!e.fam;});
