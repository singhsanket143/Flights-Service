const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');


class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;