<?php
    $field_name = $_POST['name'];
	$field_email = $_POST['email'];
	$field_message = $_POST['message'];
	$field_subject = $_POST['subject'];

	$body = 'Nuevo Mensaje de Contacto<br><br>'
	.'<strong> Nombre: '. $field_name . '</strong>' 
	.'<br> Email:            '. $field_email  
	.'<br> Asunto:          '. $field_subject
	.'<br> Mensaje:          '. $field_message;


	require_once '../swift/lib/swift_required.php';

	// Create the mail transport configuration
	$transport = Swift_MailTransport::newInstance();

	// Create the message
	$message = Swift_Message::newInstance();
	$message->setTo(array(
	  "contact@wudc2018.mx" => "Contact WUDC",
	  "migmira@hotmail.com" => "Miguel Miramontes"
	));
	$message->setSubject("Mensaje enviado por WUDC2018.mx");
	$message->setBody($body,'text/html');
	$message->setFrom("contact@wudc2018.mx", "WUDC2018 WebSite");

	// Send the email
	$mailer = Swift_Mailer::newInstance($transport);
	//$mailer->send($message);

	 if ($mailer->send($message) ) { ?>
		<script language="javascript" type="text/javascript">
			alert("Thank you, we will back to you soon");
			window.location = '../index.html';
		</script>
	<?php
	}
	else { ?>
		<script language="javascript" type="text/javascript">
			alert('Something went wrong, please write email us to contact@wudc2018.mx');
			window.location = '../index.html';
		</script>
	<?php
	}
	
?>