import {Object3D} from 'three';

export interface Layer{
    layerId: string;
    minZoom: number;
    maxZoom: number;
    tilesExtend: number;
    /**
     * 显示
     *
     */
     show()
    /**
     * 隐藏
     *
     */
     hide()
    /**
     * 更新操作
     *
     */
     update()
}

export interface LayerParams{
    layerId: string;
    minZoom: number;
    maxZoom: number;
    tilesExtend: number;
    visible: Boolean;
}
