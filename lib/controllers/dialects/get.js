'use strict'

const baianes = require('../../helpers/baianes.json')

module.exports = (req, res) => {
	const dialect = req.query.dialetus
	const dialetus = { baianes }

	res.send({ dialect, dialetus })
}

