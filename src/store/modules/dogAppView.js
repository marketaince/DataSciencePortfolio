// Dog App View

import dogClient from "@/services/DogAppService";

export const namespaced = true;

export const state = {
    dogPredictions: []
}

// export mutations
export const mutations = {
    SET_DOG_APP_RESULTS(state, dogPredictions) {
        state.dogPredictions = dogPredictions;
        console.log('These are predictions in dog app view')
    },
    WIPE_DOG_APP_RESULTS(state) {
        state.dogPredictions = [
            {
              "location": "/img/dogs/10000.png",
              "name": 'Possibility 1',
              "probability": "width: 7.0%;",
              "prob": 0.0
            },
            {
              "location": "/img/dogs/10000.png",
              "name": 'Possibility 2',
              "probability": "width: 7.0%;",
              "prob": 0.0
            },
            {
              "location": "/img/dogs/10000.png",
              "name": 'Possibility 3',
              "probability":  "width: 7.0%;",
              "prob": 0.0
            },
        ]
    }
}


// export actions
export const actions = {

    // predict dog breeds
    getPredictedDogClasses({commit}, payload) {

        // post picture to backend
        dogClient.predictDogClasses(payload)
            .then(response => {

                // parse response
                const predictedClasses = JSON.parse(response.data)
                commit('SET_DOG_APP_RESULTS', predictedClasses)


            })
            .catch(error => {

                console.log(error)
                //
                // // in case of error add to notifications
                // const notification = {
                //     type: 'error',
                //     message: 'There was an error while predicting dog breeds: ' + error.message
                // };
                // dispatch('notification/add', notification, {root: true})
                // throw error
            })
        return true
    },
    wipeDogClasses({commit}) {
        commit('WIPE_DOG_APP_RESULTS')
    }

}

// export getters
export const getters = {
     dogPredictions: (state) => {
         return state.dogPredictions;
     }
}