var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_layer_1 = new ol.format.GeoJSON();
var features_layer_1 = format_layer_1.readFeatures(json_layer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_1.addFeatures(features_layer_1);
var lyr_layer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_1, 
                style: style_layer_1,
                popuplayertitle: 'layer',
                interactive: true,
                title: '<img src="styles/legend/layer_1.png" /> layer'
            });
var format_rumah_2 = new ol.format.GeoJSON();
var features_rumah_2 = format_rumah_2.readFeatures(json_rumah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_2.addFeatures(features_rumah_2);
var lyr_rumah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_2, 
                style: style_rumah_2,
                popuplayertitle: 'rumah',
                interactive: true,
                title: '<img src="styles/legend/rumah_2.png" /> rumah'
            });
var format_fasilitas_3 = new ol.format.GeoJSON();
var features_fasilitas_3 = format_fasilitas_3.readFeatures(json_fasilitas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_3.addFeatures(features_fasilitas_3);
var lyr_fasilitas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_3, 
                style: style_fasilitas_3,
                popuplayertitle: 'fasilitas',
                interactive: true,
                title: '<img src="styles/legend/fasilitas_3.png" /> fasilitas'
            });
var format_jalan_4 = new ol.format.GeoJSON();
var features_jalan_4 = format_jalan_4.readFeatures(json_jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_4.addFeatures(features_jalan_4);
var lyr_jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_4, 
                style: style_jalan_4,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_4.png" /> jalan'
            });
var format_gerbang_5 = new ol.format.GeoJSON();
var features_gerbang_5 = format_gerbang_5.readFeatures(json_gerbang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gerbang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gerbang_5.addFeatures(features_gerbang_5);
var lyr_gerbang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gerbang_5, 
                style: style_gerbang_5,
                popuplayertitle: 'gerbang',
                interactive: true,
                title: '<img src="styles/legend/gerbang_5.png" /> gerbang'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_layer_1.setVisible(true);lyr_rumah_2.setVisible(true);lyr_fasilitas_3.setVisible(true);lyr_jalan_4.setVisible(true);lyr_gerbang_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_layer_1,lyr_rumah_2,lyr_fasilitas_3,lyr_jalan_4,lyr_gerbang_5];
lyr_layer_1.set('fieldAliases', {'id': 'id', });
lyr_rumah_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'tipe rumah': 'tipe rumah', 'luasRumah': 'luasRumah', 'status': 'status', });
lyr_fasilitas_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'fungsi': 'fungsi', });
lyr_jalan_4.set('fieldAliases', {'id': 'id', 'namaJalan': 'namaJalan', 'panjang': 'panjang', });
lyr_gerbang_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_layer_1.set('fieldImages', {'id': 'TextEdit', });
lyr_rumah_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'tipe rumah': 'TextEdit', 'luasRumah': 'TextEdit', 'status': 'TextEdit', });
lyr_fasilitas_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'fungsi': '', });
lyr_jalan_4.set('fieldImages', {'id': 'TextEdit', 'namaJalan': '', 'panjang': '', });
lyr_gerbang_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_layer_1.set('fieldLabels', {'id': 'no label', });
lyr_rumah_2.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'tipe rumah': 'no label', 'luasRumah': 'inline label - always visible', 'status': 'inline label - always visible', });
lyr_fasilitas_3.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'fungsi': 'no label', });
lyr_jalan_4.set('fieldLabels', {'id': 'hidden field', 'namaJalan': 'inline label - always visible', 'panjang': 'no label', });
lyr_gerbang_5.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_gerbang_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});