// Dog App View

import dogClient from "@/services/DogAppService";

export const namespaced = true;

export const state = {
    dogPredictions: [],
    isLoading: false,
}

// export mutations
export const mutations = {
    SET_DOG_APP_RESULTS(state, dogPredictions) {
        state.dogPredictions = dogPredictions;
        state.isLoading = false;
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
    },
    START_LOADING(state) {
        state.isLoading = true;
    },
    FINISH_LOADING(state) {
        state.isLoading = false;
    }
}


// export actions
export const actions = {

    // predict dog breeds
    getPredictedDogClasses({commit}, payload) {

        // display loader
        commit('START_LOADING')

        // post picture to backend
        dogClient.predictDogClasses(payload)
            .then(response => {

                // parse response
                const predictedClasses = JSON.parse(response.data)
                commit('SET_DOG_APP_RESULTS', predictedClasses)


            })

            .catch(error => {

                console.log(error)
                commit('FINISH_LOADING')
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
     },
     isLoading: (state) => {
         return state.isLoading
     }
}