import axios from 'axios'

const REST_API_URL = 'http://localhost:8080/api/crops'

class CropService{

    getAllCrops(){
        return axios.get(REST_API_URL)
    }

    createCrop(crop){
        return axios.post(REST_API_URL, crop)
    }

    getCropsById(cropId)
    {
      return axios.get(REST_API_URL + '/' + cropId)  
    }

    updateCrop(cropId, crop)
    {
        return axios.put(REST_API_URL + '/' + cropId, crop);
    }

    deleteCrop(cropId)
    {
        return axios.delete(REST_API_URL + '/' + cropId);
    }
}

export default new CropService();