package org.jboss.gwt.elemento;

import org.jboss.gwt.elemento.core.Elements;

/**
 * Created by gte619n on 12/12/15.
 */
public class MyBuilder extends Elements.CoreBuilder<MyBuilder>
{
	/*--------------------------------------------
	|             C O N S T A N T S             |
	============================================*/

	/*--------------------------------------------
	|    I N S T A N C E   V A R I A B L E S    |
	============================================*/

	/*--------------------------------------------
	|         C O N S T R U C T O R S           |
	============================================*/

	/*--------------------------------------------
	|   P U B L I C    A P I    M E T H O D S   |
	============================================*/

	public MyBuilder nav()
	{
		return start("nav");
	}

	public MyBuilder img( String src )
	{
		return start( "img" ).attr( "src", src );
	}

	public MyBuilder ahref( String url )
	{
		return a().attr( "href", "url" );
	}

	/*--------------------------------------------
	|    N O N - P U B L I C    M E T H O D S   |
	============================================*/

	/*--------------------------------------------
	|  A C C E S S O R S / M O D I F I E R S    |
	============================================*/

	/*--------------------------------------------
	|       I N L I N E    C L A S S E S        |
	============================================*/
}
