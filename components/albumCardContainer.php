<div class="row_container">
    <div class="row row-cols-1 row-cols-md-5 g-5 my-5">
        <?php
        require __DIR__ . "/../data/albums.php";
        foreach ($albums as $album) {
            include __DIR__ . "./albumCard.php";
        }
        ?>
    </div>
</div>