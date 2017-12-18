// $( document ).ready(function() {
	var path = window.location.pathname;
	console.log(path);

    $(document).on('DOMNodeInserted', function(e) {

        // console.log(e);

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
                $("#whoweare-adj").addClass('selected');
                break;

            case '/organizing-comittee.html':
            case '/es/comiteorganizador.html':
                $("#whoweare").addClass('active');
                $("#whoweare-org").addClass('selected');
                break;

            case ( '/tab-team.html' ) :
                $("#whoweare").addClass('active');
                $("#whoweare-tab").addClass('selected');
                break;

            case '/wudc.html':
            case '/es/campeonato.html':
                $("#about").addClass('active');
                $("#about-wudc").addClass('selected');
                break;

            case '/hosts.html':
            case '/es/anfitriones.html':
                $("#about").addClass('active');
                $("#about-hosts").addClass('selected');
                break;

            case '/mexicocity.html':
            case '/es/cdmx.html' :
                $("#about").addClass('active');
                $("#about-mexico").addClass('selected');
                break;

            case '/registration.html':
            case '/es/registro.html' :
                $("#tournament").addClass('active');
                $("#tournament-registration").addClass('selected');
                break;

            case ( '/payment.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-payment").addClass('selected');
                break;

            case ( '/horario.html' ):
            case ( '/schedule.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-schedule").addClass('selected');
                break;

            case ( '/independent-adjudicators.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-indepen").addClass('selected');
                break;

            case ( '/masters-public.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-masters").addClass('selected');
                break;

            case ( '/code-conduct.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-conduct").addClass('selected');
                break;

            case ( '/venues.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-venues").addClass('selected');
                break;

            case ( '/visas.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-visas").addClass('selected');
                break;

            case ( '/accomodation.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-accom").addClass('selected');
                break;

            case ( '/volunteers.html' ) :
            case ( '/es/voluntarios.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-volunteers").addClass('selected');
                break;

            case ( '/training-materials.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-training").addClass('selected');
                break;

            case ( '/faqs.html' ) :
                $("#tournament").addClass('active');
                $("#tournament-faqs").addClass('selected');
                break;
                
            case '/streaming.html':
                $("#tournament").addClass('active');
                $("#tournament-streaming").addClass('selected');
                break;

            case '/partners.html':
            case '/es/colaboradores.html' :
                $("#partners").addClass('active');
                break;

            case '/press-releases.html':
            case '/es/comunicados-prensa.html' :
                $("#press").addClass('active');
                $("#press-releases").addClass('selected');
                break;

            case '/articles-interviews.html':
            case '/es/articulos-entrevistas.html' :
                $("#press").addClass('active');
                $("#press-articles").addClass('selected');
                break;

            case '/gallery.html':
            case '/es/galeria.html' :
                $("#press").addClass('active');
                $("#press-gallery").addClass('selected');
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