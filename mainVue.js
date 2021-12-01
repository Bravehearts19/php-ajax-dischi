new Vue({
    el: "#app",
    data() {
        return {
            albumsList: [],
            activeGenreFilter: "Rock",
            activeAuthorFilter: "",
        };
    },
    computed: {
        filteredAlbumsList() {
            let filteredAlbumsList = this.albumsList;
            if (this.activeGenreFilter !== "") {
                filteredAlbumsList = this.albumsList.filter((album)=> {
                    return album.genre === this.activeGenreFilter;
                })
            }
            if (this.activeAuthorFilter !== "") {
                filteredAlbumsList = this.albumsList.filter((album)=> {
                    return album.author === this.activeAuthorFilter;
                })
            }
            return filteredAlbumsList
        },
        genresList() {
            let genresList = []
            this.albumsList.forEach((album) => {
                if(!genresList.includes(album.genre)) {
                    genresList.push(album.genre)
                }
            });
            return genresList
        },
        authorsList() {
            let authorsList = []
            this.albumsList.forEach((album) => {
                if(!authorsList.includes(album.author)) {
                    authorsList.push(album.author)
                }
            });
            return authorsList
        },
    },
    methods: {
        fetchData(url) {
            axios.get(url).then((resp) => {
                this.albumsList = resp.data.response;
            });
        },
        onSelectedGenre(selectedGenre) {
            this.activeGenreFilter = selectedGenre;
        },
        onSelectedAuthor(selectedAuthor) {
            this.activeAuthorFilter = selectedAuthor;
        },
    },
    mounted() {
        this.fetchData("https://flynn.boolean.careers/exercises/api/array/music");
    },
  });