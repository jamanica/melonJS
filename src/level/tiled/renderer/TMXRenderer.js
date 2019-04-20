(function () {

    /**
     * The map renderer base class
     * @class
     * @extends me.Object
     * @memberOf me
     * @constructor
     * @param {Number} cols width of the tilemap in tiles
     * @param {Number} rows height of the tilemap in tiles
     * @param {Number} tilewidth width of each tile in pixels
     * @param {Number} tileheight height of each tile in pixels
     */
    me.TMXRenderer = me.Object.extend({
        // constructor
        init: function (cols, rows, tilewidth, tileheight) {
            this.cols = cols;
            this.rows = rows;
            this.tilewidth = tilewidth;
            this.tileheight = tileheight;
        },

        /**
         * return true if the renderer can render the specified layer
         * @name me.TMXRenderer#canRender
         * @public
         * @function
         * @param {me.TMXTileMap|me.TMXLayer} component TMX Map or Layer
         * @return {boolean}
         */
        canRender : function (component) {
            return (
                (this.cols === component.cols) &&
                (this.rows === component.rows) &&
                (this.tilewidth === component.tilewidth) &&
                (this.tileheight === component.tileheight)
            );
        },

        /**
         * return the tile position corresponding to the specified pixel
         * @name me.TMXRenderer#pixelToTileCoords
         * @public
         * @function
         * @param {Number} x X coordinate
         * @param {Number} y Y coordinate
         * @param {me.Vector2d} [vector] an optional vector object where to put the return values
         * @return {me.Vector2d}
         */
        pixelToTileCoords : function (x, y, v) {
            return v;
        },

        /**
         * return the pixel position corresponding of the specified tile
         * @name me.TMXRenderer#tileToPixelCoords
         * @public
         * @function
         * @param {Number} col tile horizontal position
         * @param {Number} row tile vertical position
         * @param {me.Vector2d} [vector] an optional vector object where to put the return values
         * @return {me.Vector2d}
         */
        tileToPixelCoords : function (x, y, v) {
            return v;
        },

        /**
         * draw the given tile at the specified layer
         * @name me.TMXRenderer#drawTile
         * @public
         * @function
         * @param {me.CanvasRenderer|me.WebGLRenderer} renderer a renderer object
         * @param {Number} x X coordinate where to draw the tile
         * @param {Number} y Y coordinate where to draw the tile
         * @param {me.Tile} tile the tile object to draw
         */
        drawTile : function (renderer, x, y, tile) {
        },

        /**
         * draw the given TMX Layer for the given area
         * @name me.TMXRenderer#drawTileLayer
         * @public
         * @function
         * @param {me.CanvasRenderer|me.WebGLRenderer} renderer a renderer object
         * @param {me.TMXLayer} layer a TMX Layer object
         * @param {me.Rect} rect the area of the layer to draw
         */
        drawTileLayer : function (renderer, layer, rect) {

        }
        
    });

})();
