const Form = require('./modelForm')

Form.methods(['get', 'post', 'put', 'delete'])

Form.updateOptions({new: true, runValidators: true})

module.exports = Form