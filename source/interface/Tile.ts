import {BufferGeometry, Object3D, Vector3} from 'three';
import {MapView} from '../MapView';

export interface Tile{
    /**
    * The map view object where the node is placed.
    */
    mapView: MapView;

	/**
* Index of the map node in the quad-tree parent node.
*
* Position in the tree parent, can be topLeft, topRight, bottomLeft or bottomRight.
*/
    location: number;

	/**
* Tile level of this node.
*/
    level: number;

	/**
* Tile x position.
*/
x: number;

	/**
* Tile y position.
*/
y: number;

	/**
* Indicates how many children nodes where loaded.
*/
nodesLoaded: number = 0;

	/**
* Variable to check if the node is subdivided.
*
* To avoid bad visibility changes on node load.
*/
subdivided: boolean;

	/**
* Cache with the children objects created from subdivision.
*
* Used to avoid recreate object after simplification and subdivision.
*
* The default value is null. Only used if "cacheChild" is set to true.
*/
childrenCache: Object3D[];

	/**
* Indicate if the node should cache its children when it is simplified.
* 
* Should only be used if the child generation process is time consuming.
*/
cacheChild: boolean;

	/**
* Variable to check if the node is a mesh.
*
* Used to draw or not draw the node
*/
	// @ts-ignore
isMesh: boolean = true;

	/**
* Base geometry is attached to the map viewer object.
*
* It should have the full size of the world so that operations over the MapView bounding box/sphere work correctly.
*/
baseGeometry: BufferGeometry ;

	/**
* Base scale applied to the map viewer object.
*/
baseScale: Vector3;
 
	/**
* How many children each branch of the tree has.
*
* For a quad-tree this value is 4.
*/
childrens: number;
 
	/**
* Root node has no location.
*/
root: number;
 
	/**
* Index of top left quad-tree branch node.
*
* Can be used to navigate the children array looking for neighbors.
*/
topLeft: number;
 
	/**
* Index of top left quad-tree branch node.
*
* Can be used to navigate the children array looking for neighbors.
*/
topRight: number;
 
	/**
* Index of top left quad-tree branch node.
*
* Can be used to navigate the children array looking for neighbors.
*/
bottomLeft: number;
 
	/**
* Index of top left quad-tree branch node.
*
* Can be used to navigate the children array looking for neighbors.
*/
bottomRight: number;
subdivide(): void;
simplify(): void;
loadTexture(): void;
nodeReady(): void;
 initialize(): void;
// etNeighborsDirection(direction: number): MapNode[];
}
export interface TileParams{
    
    mapView: MapView;

    location: number;

    level: number;

    x: number;

    y: number;
}
