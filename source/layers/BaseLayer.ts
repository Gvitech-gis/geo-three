import {Object3D} from 'three';
import {LayerParams, Layer} from '../interface/Layer';

export class BaseLayer extends Object3D implements Layer
{

	public constructor(params: LayerParams) 
	{
		super();
		this.layerId = params.layerId;
		this.minZoom = params.minZoom;
		this.maxZoom = params.maxZoom;
		this.tilesExtend = params.tilesExtend;
	}

    
    /**
     * 图层ID
     */
    public layerId: string;

    /**
     * 最小显示层级
     */
    public minZoom: number;

    /**
     * 最大显示层级
     */
    public maxZoom: number;

    public tilesExtend: number;

    /**
     * 显示
     *
     */
    public show(): void
    {
        
    }

    /**
     * 隐藏
     *
     */
    public hide(): void
    {
        
    }

    /**
     * 更新操作
     *
     */
    public update(): void
    {
        
    }
	
}
