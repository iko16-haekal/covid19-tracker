const vue = new Vue({
    el: '#app',
    data: {
        country: '',
        countryList: [],
        cases: '',
        death: '',
        recovered: ''
    },
    mounted() {
        this.getCountry();
    },
    methods: {
        getCountry() {
            fetch("https://covid-193.p.rapidapi.com/countries", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key": "f117361379msh12d7883431ee443p12c955jsn407e7c123c7a"
                }
            }).then(response => response.json()).then(data => this.countryList = data.response);
        },
        getData() {
            fetch("https://covid-193.p.rapidapi.com/statistics?country=" + this.country, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key": "f117361379msh12d7883431ee443p12c955jsn407e7c123c7a"
                }
            }).then(response => response.json()).then(data => {
                data = data.response[0];
                this.cases = data.cases.total;
                this.recovered = data.cases.recovered;
                this.death = data.deaths.total;
            });
        }
    }
});