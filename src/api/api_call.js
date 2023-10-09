import { BASE_URL } from "./custom";
import axios from "axios";

export const saveExcelFile = async (data) => {
    var config = {
        method: 'post',
        url: `${BASE_URL}/uploadExcelFile`,
        headers: {
            "Content-Type": "multipart/form-data",
            "x-rapidapi-host": "file-upload8.p.rapidapi.com",
            "x-rapidapi-key": "your-rapidapi-key-here",
        },
        data: data
    };
    axios(config)
        .then(
            function (response) {
                alert("Excell data save successfully.");
                return true;
            },
            function (error) {
                alert("Excell data not save !!!")
                console.log(error);
                return false;
            }
        )
        .catch(function (error) {
            console.log(error);
            return false;
        });
        return true;
}

export const getDataDetails = async () => {
    var result = axios.get(`${BASE_URL}/getData`).then(
        (res) => {
            return res.data
        },
        (err) => {
            console.log(err)
            alert(err.response.data.message)
            return err.response.data

        }
    ).catch((error) => {
        return result = null;
    })
    return result;
}