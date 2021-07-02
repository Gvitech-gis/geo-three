import {BufferGeometry, Object3D, Vector3} from 'three';
import {Tile, TileParams} from '../interface/Tile';
import {MapView} from '../MapView';

export class BaseTile extends Object3D implements Tile 
{
	public constructor(params: TileParams) 
	{
		super();
		this.mapView = params.mapView;
		this.location = params.location;
		this.level = params.level;
		this.x = params.x;
		this.y = params.y;
		this.initialize();
	}

    public mapView: MapView;

    public location: number;

    public level: number;

    public x: number;

    public y: number;

    public nodesLoaded: number;

    public subdivided: boolean;

    public childrenCache: Object3D[];

    public cacheChild: boolean;

    public isMesh: boolean;

   public baseGeometry: BufferGeometry;

    public baseScale: Vector3;

   public childrens: number;

   public root: number;

   public topLeft: number;

   public topRight: number;

   public bottomLeft: number;

  public bottomRight: number;

  public subdivide(): void 
  {
  }

  public simplify(): void 
  {
  }

  public loadTexture(): void 
  {
  }

  public nodeReady(): void 
  {
  }

  public initialize(): void 
  {
  }

    
}
