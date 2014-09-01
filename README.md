#alveolus (pour OpenLayers 2)

alveolus est une fonction JS permettant de dessiner une structure alvéolaire, dite en nid d'abeille, à partir d'une couche d'entités ponctuelles.

`var result = alveolus(couchePoints, coucheAlveoles, radius);`

![Screenshot](https://github.com/adrienvh/alveolus/blob/master/doc/screenshot.png "Screenshot")

##couchePoints

`OpenLayers.Layer.Vector`

Cette couche doit contenir, a minima, une entité ponctuelle et être projetée en EPSG:3857 (Web Mercator).

##coucheAlveoles

`OpenLayers.Layer.Vector`

Cette couche vierge (et son style) doit avoir été créée avant l'appel de la fonction. Cela permet de lui donner une portée globale et, donc, de la réutiliser dans vos propres scripts.
Elle doit être projetée en EPSG:3857 (Web Mercator).

##radius

`integer`

Le radius est, en mètres, le rayon des alvéoles, soit la distance entre le centre de l'alvéole et chacun de ses 6 sommets.
Si ce rayon est trop faible, le nombre d'alvéoles sera trop important (< 4000) et la fonction retournera `false`.