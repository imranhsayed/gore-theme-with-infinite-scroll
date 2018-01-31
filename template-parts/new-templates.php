<?php
/**
 * Page Template file
 *
 * Template Name: Register Forms
 *
 * @package Gore
 */

get_header();
?>

<div class="content" class="site-content">
	<div id="full-width">
		<form id="register-form">
			<p><label for="gore-login-username">Username: <input type="text" id="gore-login-username"></label></p>
			<p><label for="gore-login-email">Email: <input type="email" id="gore-login-emai"></label></p>
			<p class="btn btn-primary">
				<input type="submit" value="Register">
			</p>
		</form>
	</div>
</div>

<?php
get_footer();
?>