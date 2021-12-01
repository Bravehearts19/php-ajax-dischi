<div class="card">
    <img class="card-img-top" src="<?php echo $album['poster']; ?>" alt="" />
    <div class="card-body">
        <h5 class="card-title"><?php echo $album["title"]; ?></h5>
        <div class="card-text">
            <ul>
                <li>
                    <span class="author_span"><?php echo $album["author"]; ?></span>
                </li>
                <li>
                    <span class="year_span"><?php echo $album["year"]; ?></span>
                </li>
            </ul>
        </div>
    </div>
</div>