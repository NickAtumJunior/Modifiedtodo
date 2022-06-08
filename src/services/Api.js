import axiosApi from './intercepter';
import HandleError from '../utlis/Error';
import axios from 'axios';

export default {
    methods: {
        getData(PATH) {
            return new Promise((accept,reject) => {
                axiosApi.get(`${PATH}`)
                .then((response) => {
                    accept(response)
                })
                .catch((error) => {
                    reject(HandleError(error));
                })
            })
        },
        postData(PATH,payload){
            return new Promise((accept,reject) => {
                axiosApi.post(`${PATH}`,payload)
                .then((response) => {
                    accept(response)
                })
                .catch((error) => {
                    reject(HandleError(error))
                })
            })
        },
       patchData(PATH,payload) {
           return new Promise((accept,reject) => {
               axiosApi.patch(`${PATH}`, payload)
               .then((response) => {
                   accept(response)
               })
               .catch((error) => {
                   reject(HandleError(error))
               })
           })
       },
       delteData(PATH) {
           return new Promise((accept,reject) =>{
               axiosApi
               .delete(`${PATH}`)
               .then((response) => {
                   accept(response)
               })
               .catch((error) => {
                   reject(HandleError(error))
               })
           })
       }
    }
}