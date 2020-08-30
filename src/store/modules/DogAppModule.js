import dogClient from "../../services/dogClient";

export const namespaced = true;

export const state = {
    results: [
        {
          "location": "/img/dogs/84.png",
          "name": 'Irish Red And White Setter',
          "probability": "width: 43.0%;",
          "prob": 43.0
        },
        {
          "location": "/img/dogs/129.png",
          "name": 'Welsh Springer Spaniel',
          "probability": "width: 42.2%;",
          "prob": 42.2
        },
        {
          "location": "/img/dogs/62.png",
          "name": 'English Springer Spaniel',
          "probability":  "width: 7.6%;",
          "prob": 7.6
        },
    ]
}

export const mutations = {
    SET_DOG_APP_RESULTS(state, results) {
        state.results = results;
    }
}


// export actions
export const actions = {

    // search food in USDA database
    queryFoodsFromUSDA({commit}, payload) {

        // post search keyword to USDA database
        const query = payload;
        dogClient.predictDogClasses(query)
            .then(response => {
                commit('SET_DOG_APP_RESULTS', response)

            })
            .catch(error => {

                console.log(error)
                //
                // // in case of error add to notifications
                // const notification = {
                //     type: 'error',
                //     message: 'There was an error while querying USDA database: ' + error.message
                // };
                // dispatch('notification/add', notification, {root: true})
                // throw error
            })
        return true
    }
}