<?php
    $documentTitle = "Php Ajax Dischi";
?>

<!DOCTYPE html>
<html lang="en">
    <?php 
    require_once "./components/pageHead.php"
    ?>
    
    <body>
        <?php 
        require_once "./components/header.php"
        ?>
        
        <main id="app">
            <div class="container">
                <?php require_once "./components/albumCardContainer.php"; ?>  
            </div>
        </main>
        <footer>

        </footer>
    </body>
</html>
