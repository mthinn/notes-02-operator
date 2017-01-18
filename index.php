<!DOCTYPE html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>writing.php</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        
        <?php
        /* PHP's echo() method is similer to javascripts's document.write() method. it displays content inside of it's round braces omto the document */
        echo('some php will display here.');

        /* localhost:8888/notes-02-operators/index.php */

        /* in PHP , variable are declared with a doller sign instead of the 'var' keyword. */
        $myvariable = 34;
        $yourvariable = 21;

        echo($yourvariable);

        /* php can, of course, do math funsction as well. */

        $finalvariable = $myvariable + $yourvariable; echo('<br>' . $finalvaribale);

        /* concatenation is the act of adding one chunk of code to another chunk of code. it is often used in javascript and php to form strings. in php, you concatenate using a dot (.). in javascript, you concatenate using a plus(+) */
        $firststring = 'jason\'s favorite color';
        $secondstring = ' is blue. ';
        echo('<br>' . $firststring . $secondstring ); 






        ?>

        <h1>javascript advancd operators</h1>
        <p>Hello world! This is HTML5 Boilerplate.</p>

        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
