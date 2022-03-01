import axios from 'axios'

const REST_API_URL = 'http://localhost:8080/api/equipments'

class EquipmentService{

    getAllEquipments(){
        return axios.get(REST_API_URL)
    }

    createEquipments(equipment){
        return axios.post(REST_API_URL, equipment)
    }

    getEquipmentsById(equipmentId)
    {
      return axios.get(REST_API_URL + '/' + equipmentId)  
    }

    updateEquipment(equipmentId, equipment)
    {
        return axios.put(REST_API_URL + '/' + equipmentId, equipment);
    }

    deleteEquipment(equipmentId)
    {
        return axios.delete(REST_API_URL + '/' + equipmentId);
    }
}

export default new EquipmentService();