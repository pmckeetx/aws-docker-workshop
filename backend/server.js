const ronin 		= require( 'ronin-server' )
const mocks 		= require( 'ronin-mocks' )

async function main() {

	try {

    const server = ronin.server({
			port: process.env.PORT || 8080
		})

		server.use( '/services/', mocks.server( server.Router(), false, true ) )

    const result = await server.start()
    console.info( result )

	} catch( error ) {
		console.error( error )
	}

}

main()
