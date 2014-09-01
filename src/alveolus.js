function alveolus(couchePoints, coucheAlveoles, radius, doCount)
{
	// BBox de la couche de points
	var extent = couche_points.getDataExtent();
	// Point de départ (en bas à gauche)
	var x = extent.left;
	var y = extent.bottom;
	// Longueur des côtés d'une alvéole
	var offset = Math.round(Math.sqrt(Math.pow(radius, 2) - Math.pow(radius / 2, 2)));
	// Nombre de colonnes et de lignes
	var xDistance = Math.round(extent.right - extent.left) + (radius * 2);
	var yDistance = Math.round(extent.top - extent.bottom) + (radius * 2);
	var nb_colonnes = Math.round(xDistance / (radius * 3));
	var nb_lignes = Math.round(yDistance / (offset));
	if(nb_lignes * nb_colonnes <= 4000)
	{
		// Construction des features (entités)
		var alveoles = new Array();
		// Pour chaque ligne
		for(ligne = 1;ligne <= nb_lignes; ligne++)
		{
			// Gestion du décalage des lignes pour respecter la structure alvéolaire
			if(ligne % 2 == 0) // Numéro de ligne pair
			{
				// On se décale un peu sur la droite pour respecter la structure alvéolaire
				x += radius * 1.5;
			}
			// Pour chaque colonne
			for(colonne = 1;colonne <= nb_colonnes; colonne++)
			{
				// Construction de la feature (entité)
				var the_geom = new OpenLayers.Geometry.Polygon.createRegularPolygon(new OpenLayers.Geometry.Point(x, y), radius, 6, 0);
				var the_feature = new OpenLayers.Feature.Vector(the_geom, {});
				alveoles.push(the_feature);
				// On se décale sur la droite pour la colonne suivante
				x += (radius * 3);
			}
			// On revient complètement à gauche et on se décale vers le haut pour débuter la ligne suivante
			x = extent.left;
			y += offset;
		}
		// Si des features (entités) ont été créées
		if(alveoles.length > 0)
		{
			// On vide le layer (couche) de toutes ses features (entités)
			coucheAlveoles.destroyFeatures();
			// On peuple le layer (couche) avec les features (entités) créées
			coucheAlveoles.addFeatures(alveoles);
			coucheAlveoles.redraw();
			cartographie.zoomToExtent(coucheAlveoles.getDataExtent());
			// On retourne le nombre d'alvéoles créées, pour information
			return alveoles.length;
		}
	}
	// En cas d'erreur
		return false;
}