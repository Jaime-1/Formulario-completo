<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Formulario De Registro</title>
        <link rel="stylesheet" type="text/css" href="estil.css">
    </head>
    <body>
	<div class="contenedor">
		<form action="datos.php" class="formulario" id="formulario" name="formulario" method="POST">

      <div class="contenedor-inputs">
				<input type="text" name="nombre" onkeypress="return sololetras(event)" onpaste="return false"/ placeholder="Nombre" maxlength="15" minlength="3">
        <input type="text" name="apellido" onkeypress="return sololetras(event)" onpaste="return false"/ placeholder="Apellidos" maxlength="35" minlength="8">
				<input type="email" name="correo" placeholder="Correo"  maxlength="35">
        <input type="number" name="edad" min="10" max="120" placeholder="Edad">
        <input type="date" name="fecha" placeholder="Fecha de Nacimiento">

				<div class="sexo">
					<input type="radio" name="sexo" id="hombre" value="hombre">
					<label class="label-radio hombre" for="hombre">Hombre</label>

					<input type="radio" name="sexo" id="mujer" value="mujer">
					<label class="label-radio mujer" for="mujer">Mujer</label>
				</div>

				<div class="terminos">
					<input type="checkbox" name="terminos" id="terminos">
					<label for="terminos">Acepto Terminos y Condiciones</label>
				</div>

				<ul class="error" id="error"></ul>
			</div>

			<input type="submit" class="btn" name="registrarse" value="Registrate">
		</form>
	<script src="form.js"></script>
</body>
</html>
