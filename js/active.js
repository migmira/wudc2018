// $( document ).ready(function() {
	var path = window.location.pathname;
	console.log(path);

    $(document).on('DOMNodeInserted', function(e) {

        console.log(e);


        switch( path ) {

            case '/':
            case '/index.html':
            case '/es/':
            case '/es/index.html':
                $("#home").addClass('active');
                break;

            case '/adjudication-core.html' :
            case '/es/adjudicacion.html':
                $("#whoweare").addClass('active');
                break;

            case  '/organizing-comittee.html':
            case '/es/comiteorganizador.html':
                $("#whoweare").addClass('active');
                break;

            case ( '/tab-team.html' ) :
                $("#whoweare").addClass('active');
                break;

            case '/wudc.html':
            case '/wudc2018/es/campeonato.html':
                $("#about").addClass('active');
                break;

            case '/hosts.html':
            case 'es/anfitriones.html':
                $("#about").addClass('active');
                break;

            case '/mexicocity.html':
            case '/es/cdmx.html' :
                $("#about").addClass('active');
                break;

            case '/registration.html':
            case '/es/registro.html' :
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

            case '/press-releases.html':
            case '/es/comunicados-prensa.html' :
                $("#press").addClass('active');
                break;

            case '/articles-interviews.html':
            case '/es/articulos-entrevistas.html' :
                $("#press").addClass('active');
                break;

            case '/gallery.html':
            case '/es/galeria.html' :
                $("#press").addClass('active');
                break;

            case '/contact.html':
            case '/es/contacto.html' :
                $("#contact").addClass('active');
                break;

            default  :
                break;
        }


	});
	
// });