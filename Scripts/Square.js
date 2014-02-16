
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
