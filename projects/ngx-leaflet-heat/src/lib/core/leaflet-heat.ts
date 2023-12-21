import * as L from 'leaflet';

declare module 'leaflet' {
	namespace HeatLayer {
		interface HeatLayerOptions extends L.LayerOptions {
			minOpacity?: number;
			maxZoom?: number;
			radius?: number;
			blur?: number;
			max?: number;
			gradient?: { [key: number]: string };
		}

		interface HeatLayer extends L.Layer {
			setLatLngs(latlngs: L.LatLng[]): this;
			addLatLng(latlng: L.LatLng): this;
			setOptions(options: HeatLayerOptions): this;
			getBounds(): L.LatLngBounds;
			redraw(): this;
		}
	}

	function heatLayer(latlngs: L.LatLng[], options?: HeatLayer.HeatLayerOptions): HeatLayer.HeatLayer;

	namespace heatLayer {}
}
