require(["Vector2"], function(Vector2) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});
function Square ( pos, size, colour )
{
    this.Velocity = new Vector2 (0, 0);
     
    this.Position = pos;
    this.Size = size;
    this.Colour = colour;
       			
    this.Ammo = new Array ( );

    this.Update = function ( )
	{
		this.Position.X += this.Velocity.X;
		this.Position.Y += this.Velocity.Y;
		        
		if ( this.Position.X > c.width )
		{
			this.Position.X = -50;
		}
					
	}
}
