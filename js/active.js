// $( document ).ready(function() {
	var path = window.location.pathname;
	console.log(path);

    $(document).on('DOMNodeInserted', function(e) {

        // console.log(e);
   
		switch( path ) {

			case ( '/' || '/index.html' || '/es/' || '/es/index.html' ) :
				$("#home").addClass('active');
				break;

			case ( '/adjudication-core.html' || '/es/adjudicacion.html'  ) :
				$("#whoweare").addClass('active');
				break;
				
			case ( '/organizing-comittee.html' || '/es/comiteorganizador.html' ) :
				$("#whoweare").addClass('active');
				break;

			case ( '/tab-team.html' ) :
				$("#whoweare").addClass('active');
				break;
			
			case ( '/wudc.html' || '/es/campeonato.html' ) :
				$("#about").addClass('active');
				console.log('entro');
				break;
				
			case ( '/hosts.html' || 'es/anfitriones.html'  ) :
				$("#about").addClass('active');
				break;
				
			case ( '/mexicocity.html' || '/es/cdmx.html' ) :
				$("#about").addClass('active');
				break;
				
			case ( '/registration.html' || '/es/registro.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/payment.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/schedule.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/independent-adjudicators.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/masters-public.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/code-conduct.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/venues.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/visas.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/accomodation.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/volunteers.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/training-materials.html' ) :
				$("#tournament").addClass('active');
				break;
				
			case ( '/faqs.html' ) :
				$("#tournament").addClass('active');
				break;

			case ( '/press-releases.html' || '/es/comunicados-prensa.html' ) :
				$("#partners").addClass('active');
				break;
				
			case ( '/articles-interviews.html' || '/es/articulos-entrevistas.html' ) :
				$("#partners").addClass('active');
				break;
				
			case ( '/gallery.html' || '/es/galeria.html' ) :
				$("#partners").addClass('active');
				break;

			case ( '/contact.html' || '/es/contacto.html' ) :
				$("#contact").addClass('active');	
				break;
				
			default  :
				break;
		}



	});
	
// });