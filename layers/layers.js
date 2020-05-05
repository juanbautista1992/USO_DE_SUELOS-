var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
})
]
});
var format_ZONA_0 = new ol.format.GeoJSON();
var features_ZONA_0 = format_ZONA_0.readFeatures(json_ZONA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ZONA_0.addFeatures(features_ZONA_0);var lyr_ZONA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA_0, 
                style: style_ZONA_0,
                title: '<img src="styles/legend/ZONA_0.png" /> ZONA'
            });var format_PREDIOS_1 = new ol.format.GeoJSON();
var features_PREDIOS_1 = format_PREDIOS_1.readFeatures(json_PREDIOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PREDIOS_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PREDIOS_1.addFeatures(features_PREDIOS_1);var lyr_PREDIOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PREDIOS_1, 
                style: style_PREDIOS_1,
    title: 'PREDIOS<br />\
    <img src="styles/legend/PREDIOS_1_0.png" /> AREA VERDE<br />\
    <img src="styles/legend/PREDIOS_1_1.png" /> CALLE<br />\
    <img src="styles/legend/PREDIOS_1_2.png" /> COMERCIO Y SERVICIOS<br />\
    <img src="styles/legend/PREDIOS_1_3.png" /> CULTO<br />\
    <img src="styles/legend/PREDIOS_1_4.png" /> CULTURA<br />\
    <img src="styles/legend/PREDIOS_1_5.png" /> DEPORTIVO<br />\
    <img src="styles/legend/PREDIOS_1_6.png" /> EDUCACION<br />\
    <img src="styles/legend/PREDIOS_1_7.png" /> GESTION PUBLICA<br />\
    <img src="styles/legend/PREDIOS_1_8.png" /> MULTIFUNCIONAL<br />\
    <img src="styles/legend/PREDIOS_1_9.png" /> PASAJE<br />\
    <img src="styles/legend/PREDIOS_1_10.png" /> PLAZA<br />\
    <img src="styles/legend/PREDIOS_1_11.png" /> PROPIEDAD HORIZONTAL<br />\
    <img src="styles/legend/PREDIOS_1_12.png" /> PROPIEDAD UNIFAMILIAR<br />\
    <img src="styles/legend/PREDIOS_1_13.png" /> SALUD<br />\
    <img src="styles/legend/PREDIOS_1_14.png" /> TERRENO SIN CONSTRUCCION<br />'
        });

lyr_ZONA_0.setVisible(true);lyr_PREDIOS_1.setVisible(true);
var layersList = [baseLayer,lyr_ZONA_0,lyr_PREDIOS_1];
lyr_ZONA_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Distrito': 'Distrito', 'OTB': 'OTB', });
lyr_PREDIOS_1.set('fieldAliases', {'objectid': 'objectid', 'USO': 'USO', 'CODIGO': 'CODIGO', 'FOTO_FRENT': 'FOTO_FRENT', });
lyr_ZONA_0.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Distrito': 'TextEdit', 'OTB': 'TextEdit', });
lyr_PREDIOS_1.set('fieldImages', {'objectid': 'TextEdit', 'USO': 'TextEdit', 'CODIGO': 'TextEdit', 'FOTO_FRENT': 'Photo', });
lyr_ZONA_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'Distrito': 'no label', 'OTB': 'no label', });
lyr_PREDIOS_1.set('fieldLabels', {'objectid': 'header label', 'USO': 'header label', 'CODIGO': 'header label', 'FOTO_FRENT': 'header label', });
lyr_PREDIOS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});