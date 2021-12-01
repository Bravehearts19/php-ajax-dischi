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
            <div class="row_container">
                <component-1 @on-selected-genre="onSelectedGenre" @on-selected-author="onSelectedAuthor" :genres-list="genresList" :authors-list="authorsList"></component-1>
                <div class="row row-cols-1 row-cols-md-5 g-5 my-5">
                    <div class="col" v-for="(album, i) in filteredAlbumsList" :key="i">
                        <div class="card">
                            <img class="card-img-top" :src="album.poster" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{{ album.title }}</h5>
                                <div class="card-text">
                                    <ul>
                                        <li>
                                            <span class="author_span">{{ album.author }}</span>
                                        </li>
                                        <li>
                                            <span class="year_span">{{ album.year }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        </main>
        <footer>

        </footer>
        <script src="mainVue.js"></script>
    </body>
</html>