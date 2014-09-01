#alveolus (pour OpenLayers 2)

Est une fonction JS permettant de dessiner une structure alvéolaire, dite en nid d'abeille, à partir d'une couche d'entités ponctuelles.

`var result = alveolus(couchePoints, coucheAlveoles, radius, doCount);`

##couchePoints

`OpenLayers.Layer.Vector`

Cette couche doit être projetée en EPSG:3857 (Web Mercator)

##coucheAlveoles

`OpenLayers.Layer.Vector`

##radius

`integer`

Le radius est, en mètres, le rayon de l'alvéole

##doCount

`boolean`