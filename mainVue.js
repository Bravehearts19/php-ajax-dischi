Vue.component('component-1', {
    template:   `<div class="d-flex mt-4 gx-3 px-5">
                    <select class="form-select" aria-label="Default select example" @click="selectGenreOption" v-model="selectGenre">
                        <option selected value=""></option>
                        <option :value="genre" v-for="(genre, i) in genresList" :key="i">{{ genre }}</option>
                    </select>

                    <select class="form-select" aria-label="Default select example" @click="selectAuthorOption" v-model="selectAuthor">
                        <option selected value=""></option>
                        <option :value="author" v-for="(author, i) in authorsList" :key="i">{{ author }}</option>
                    </select>
                </div>`,
    props: {
        genresList: Array,
        authorsList: Array,
    },
    data() {
        return {
            selectGenre: "",
            selectAuthor: "",
        }
    },
    methods: {
        selectGenreOption() {
            this.$emit("on-selected-genre", this.selectGenre)
        },
        selectAuthorOption() {
            this.$emit("on-selected-author", this.selectAuthor)
        }
    }
})

new Vue({
    el: "#app",
    data() {
        return {
            albumsList: [],
            activeGenreFilter: "",
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