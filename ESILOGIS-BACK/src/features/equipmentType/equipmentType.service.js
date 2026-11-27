const prisma = require("../../lib/prisma");

//getAllEquipmentTypes
async function getAllEquipmentTypes() {
    return await prisma.equipmentType.findMany();
}

//createEquipmentType
async function createEquipmentType(equipmentType) {
    return await prisma.equipmentType.create({
        data: {
            name: equipmentType.name,
            category: equipmentType.category,
        },
    });
}

//deleteEquipmentType
async function deleteEquipmentType(equipmentTypeId) {
    return await prisma.equipmentType.delete({
        where: {
            id: parseInt(equipmentTypeId),
        },
    });
}

module.exports = {
    getAllEquipmentTypes,
    createEquipmentType,
    deleteEquipmentType,
};
